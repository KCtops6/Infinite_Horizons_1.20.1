/**
 * ============================================================================
 * CONFIGURATION SECTION
 * ============================================================================
 * This section is intentionally isolated from the logic below.
 * 
 * The idea is to make behavioral tuning easy without modifying the algorithm.
 * You can change mob types, radii, probabilities, etc., without touching
 * the transformation engine itself.
 * 
 * This separation follows a data-driven design pattern:
 *  - Logic stays static
 *  - Behavior is controlled via configuration objects
 * ============================================================================
 */

/**
 * CHECK_INTERVAL
 * --------------
 * Minecraft runs at 20 ticks per second.
 * 
 * A LevelEvents.tick fires EVERY tick (20x per second).
 * Running heavy entity scans every tick would be expensive.
 * 
 * So instead:
 *  - We throttle execution
 *  - We only run once every 20 ticks (1 second)
 * 
 * This reduces CPU load by ~95% compared to running every tick.
 */
const CHECK_INTERVAL = 20; // 20 ticks = 1 second

/**
 * TRANSFORMATIONS
 * ---------------
 * An array of transformation "rules".
 * 
 * Each object defines:
 *  - Which entity type we are targeting
 *  - What it should become
 *  - What block must exist nearby
 *  - How far to scan for that block
 *  - The probability of transformation
 * 
 * The engine later dynamically searches this array using:
 *   TRANSFORMATIONS.find(...)
 * 
 * This means:
 *  - You can add unlimited transformation rules
 *  - The logic automatically supports them
 */
const TRANSFORMATIONS = [
    {
        targetMob: 'minecraft:skeleton',      // Entity type to detect
        newMob: 'minecraft:wither_skeleton',  // Entity type to spawn instead
        triggerBlock: 'minecraft:nether_portal', // Required nearby block
        scanRadius: 10,                       // Radius (cube-based) to scan
        transformChance: 0.5                  // 50% probability per check cycle
    },
    {
        targetMob: 'minecraft:slime',
        newMob: 'minecraft:magma_cube',
        triggerBlock: 'minecraft:nether_portal',
        scanRadius: 10,
        transformChance: 0.5
    },
    {
        targetMob: 'minecraft:zombie',
        newMob: 'minecraft:zombified_piglin',
        triggerBlock: 'minecraft:nether_portal',
        scanRadius: 10,
        transformChance: 0.5
    }
];


/**
 * ============================================================================
 * MAIN LOGIC
 * ============================================================================
 * 
 * LevelEvents.tick fires once per world tick.
 * This runs server-side only (we explicitly gate it below).
 * 
 * High-level pipeline:
 *   1. Performance gate
 *   2. Player-centric entity scan
 *   3. Deduplicate entities
 *   4. Validate against config
 *   5. Roll probability
 *   6. Scan nearby blocks
 *   7. Replace entity if conditions met
 * ============================================================================
 */
LevelEvents.tick(event => {

    // Destructure for convenience
    const { level } = event;

    /**
     * ------------------------------------------------------------------------
     * 1. PERFORMANCE GATE
     * ------------------------------------------------------------------------
     * 
     * level.isClientSide():
     *   - Ensures this runs ONLY on the logical server.
     *   - Entity spawning and removal must happen server-side.
     *   - Running this on client would cause duplication or desync.
     * 
     * level.time % CHECK_INTERVAL !== 0:
     *   - level.time increments every tick.
     *   - Using modulus (%) ensures we only run once per interval.
     */
    if (level.isClientSide() || level.time % CHECK_INTERVAL !== 0) return;


    /**
     * ------------------------------------------------------------------------
     * 2. DUPLICATE PROTECTION
     * ------------------------------------------------------------------------
     * 
     * Why is this necessary?
     * 
     * Because we scan around EACH player.
     * If two players are near the same zombie:
     *   - Without protection, we might attempt to transform it twice.
     * 
     * We store entity UUIDs in a Set:
     *   - Set ensures uniqueness (O(1) lookup).
     *   - Prevents duplicate processing in the same tick cycle.
     */
    let checkedThisTick = new Set();


    /**
     * ------------------------------------------------------------------------
     * 3. PLAYER-CENTRIC SCANNING STRATEGY
     * ------------------------------------------------------------------------
     * 
     * Instead of scanning every entity in the entire dimension:
     *   - We only scan areas around players.
     * 
     * Why?
     *   - Most gameplay happens near players.
     *   - Unloaded chunks don’t contain active entities anyway.
     *   - This dramatically reduces entity iteration cost.
     */
    level.getPlayers().forEach(player => {

        /**
         * Create a bounding box centered on the player.
         * inflate(64) expands the box 64 blocks in all directions.
         * 
         * This results in a 128x128x128 cube around the player.
         */
        let box = player.getBoundingBox().inflate(64);

        /**
         * Retrieve all entities inside this bounding volume.
         */
        let entities = level.getEntitiesWithin(box);

        entities.forEach(entity => {

            /**
             * Convert UUID to string for stable Set storage.
             */
            let uuid = entity.uuid.toString();

            // Skip if already processed
            if (checkedThisTick.has(uuid)) return;

            /**
             * ----------------------------------------------------------------
             * 4. CONFIG VALIDATION
             * ----------------------------------------------------------------
             * 
             * We search TRANSFORMATIONS for a rule whose targetMob
             * matches this entity’s type.
             * 
             * If none found → this mob is irrelevant → skip.
             */
            let config = TRANSFORMATIONS.find(t => t.targetMob === entity.type);
            if (!config) return;

            // Mark as processed BEFORE heavy logic begins
            checkedThisTick.add(uuid);


            /**
             * ----------------------------------------------------------------
             * 5. PROBABILITY CHECK (Optimization Strategy)
             * ----------------------------------------------------------------
             * 
             * Math.random() returns [0, 1).
             * 
             * If random number exceeds transformChance:
             *   - We abort early.
             * 
             * IMPORTANT:
             * We do this BEFORE block scanning because:
             *   - Random check is O(1)
             *   - Block scanning is O(n³)
             */
            if (Math.random() > config.transformChance) return;


            /**
             * ----------------------------------------------------------------
             * 6. BLOCK SCANNING (3D CUBE SEARCH)
             * ----------------------------------------------------------------
             * 
             * We scan a cube defined by scanRadius.
             * 
             * If scanRadius = 10:
             *   - We scan (21 × 21 × 21) = 9261 blocks worst-case.
             * 
             * This is why we:
             *   - Throttle execution
             *   - Run probability check first
             */
            let ex = Math.floor(entity.x);
            let ey = Math.floor(entity.y);
            let ez = Math.floor(entity.z);

            let blockFound = false;

            for (let dx = -config.scanRadius; dx <= config.scanRadius; dx++) {
                for (let dy = -config.scanRadius; dy <= config.scanRadius; dy++) {
                    for (let dz = -config.scanRadius; dz <= config.scanRadius; dz++) {

                        // Query block at relative offset
                        if (level.getBlock(ex + dx, ey + dy, ez + dz).id === config.triggerBlock) {
                            blockFound = true;

                            // Break out of innermost loop first
                            break;
                        }
                    }
                    if (blockFound) break;
                }
                if (blockFound) break;
            }


            /**
             * ----------------------------------------------------------------
             * 7. TRANSFORMATION EXECUTION
             * ----------------------------------------------------------------
             * 
             * If required block was found:
             *   - Create replacement entity
             *   - Copy state
             *   - Spawn particles
             *   - Remove original
             */
            if (blockFound) {

                /**
                 * Create entity instance (not yet spawned).
                 */
                let newEntity = level.createEntity(config.newMob);

                /**
                 * Preserve spatial orientation.
                 */
                newEntity.setPosition(entity.x, entity.y, entity.z);
                newEntity.yaw = entity.yaw;
                newEntity.pitch = entity.pitch;

                /**
                 * Preserve custom name if player applied Name Tag.
                 * 
                 * This maintains player-intended metadata.
                 */
                if (entity.hasCustomName()) {
                    newEntity.customName = entity.customName;
                }

                /**
                 * Cosmetic feedback for immersion.
                 * 
                 * 'minecraft:poof' = standard entity transformation particle.
                 */
                level.spawnParticles(
                    'minecraft:poof',
                    false,
                    entity.x,
                    entity.y + 1,
                    entity.z,
                    0, 0.1, 0,
                    10,
                    0.1
                );

                /**
                 * Spawn new entity into world.
                 */
                newEntity.spawn();

                /**
                 * Remove original entity safely.
                 * discard() ensures proper cleanup.
                 */
                entity.discard();
            }
        });
    });
});