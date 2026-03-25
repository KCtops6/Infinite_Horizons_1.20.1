BlockEvents.rightClicked('kubejs:dormant_trial_spawner', event => {
    const { item, level, player, server, block } = event;
    const { x, y, z } = block;
    const TRIAL_CONFIG = {
        'minecraft:chiseled_tuff': { mob: 'breeze' },
        'minecraft:nether_bricks': { mob: 'blaze' },
        'minecraft:moss_block': { mob: 'slime' },
        'minecraft:chiseled_sandstone': { mob: 'husk' },
        'minecraft:stone_bricks': { mob: 'silverfish' },
        'minecraft:chiseled_polished_blackstone': { 
            mob: 'piglin',
            ominousMob: 'piglin_brute'
        },
        'minecraft:soul_soil': { mob: 'ghast' },
        'minecraft:dark_oak_log': {
            mob: 'pillager',
            ominousMob: 'ravager'
        },
        'minecraft:emerald_block': { 
            mob: 'vindicator', 
            ominousMob: 'minecraft:evoker'
        },
        'minecraft:mycelium': { mob: 'bogged' },
        'minecraft:oak_planks': { mob: 'cave_spider' },
        'minecraft:grass_block': { mob: 'creeper' },
        'minecraft:gravel': { mob: 'drowned' },
        'minecraft:dark_prismarine': {
            mob: 'guardian',
            ominousMob: 'elder_guardian'
        },
        'minecraft:end_stone': { mob: 'enderman' },
        'minecraft:crimson_nylium': { mob: 'hoglin' },
        'minecraft:magma_block': { mob: 'magma_cube' },
        'minecraft:lime_wool': { mob: 'phantom' },
        'minecraft:purpur_block': { mob: 'shulker' },
        'minecraft:bone_block': { mob: 'skeleton' },
        'minecraft:white_wool': { mob: 'spider' },
        'minecraft:sculk': { ominousMob: 'warden' },
        'minecraft:spruce_planks': { mob: 'witch' },
        'minecraft:coal_block': { mob: 'wither_skeleton'},
        'minecraft:mossy_cobblestone': { mob: 'zombie' },
        'minecraft:packed_ice': { mob: 'stray' }
    };

    if (Platform.isLoaded('ars_nouveau')) {
        TRIAL_CONFIG['ars_nouveau:blue_archwood_wood'] = { mob: 'ars_nouveau:wilden_guardian'};
        TRIAL_CONFIG['ars_nouveau:purple_archwood_wood'] = { mob: 'ars_nouveau:wilden_hunter'};
        TRIAL_CONFIG['ars_nouveau:red_archwood_wood'] = { mob: 'ars_nouveau:wilden_stalker'};
    }

    if (item.id !== 'kubejs:trial_core') return;
    const TIME = level.getDayTime() % 24000;
    if (TIME < 13000 || TIME > 23000) {
        player.displayClientMessage(Text.red('The core remains cold. It needs moonlight.'), true);
        return;
    }
    const getBlock = (dx, dy, dz) => level.getBlock(x + dx, y + dy, z + dz).id;
    const isBaseValid = getBlock(0, -1, 0) === 'minecraft:copper_block' &&
        [[0, -1, -1], [0, -1, 1], [-1, -1, 0], [1, -1, 0]].every(([dx, dy, dz]) => 
            getBlock(dx, dy, dz) === 'ntrials:chiseled_copper'
        );
    if (!isBaseValid) {
        level.spawnParticles('minecraft:smoke', true, x + 0.5, y, z + 0.5, 0.2, 0.2, 0.2, 5, 0.05);
        player.displayClientMessage(Text.red('The copper foundation is incorrect.'), true);
        return;
    }
    const corners = [[-1, -1, -1], [-1, -1, 1], [1, -1, -1], [1, -1, 1]].map(([dx, dy, dz]) => getBlock(dx, dy, dz));
    const trial = TRIAL_CONFIG[corners[0]];
    if (!corners.every(id => id === corners[0]) || !trial) {
        player.displayClientMessage(Text.red('The corner ritual blocks are mismatched or invalid.'), true);
        return;
    }
    const hasOminous = player.potionEffects.isActive('ntrials:trial_omen');
    let rawMob = (hasOminous && trial.ominousMob) ? trial.ominousMob : (trial.mob || null);
    if (!rawMob) {
        player.displayClientMessage(Text.red('The core shudders... this ritual requires a Trial Omen.'), true);
        return;
    }
    let targetMob = rawMob.includes(':') ? rawMob : `minecraft:${rawMob}`;
    if (hasOminous && trial.ominousMob) {
        targetMob = trial.ominousMob;
    }
    const nbt = {
        base_spawner_state: "active", 
        is_ominous: hasOminous ? 1 : 0,
        target_cooldown_length: 6000,
        normal_config: {
            spawn_potentials: [{
                data: { entity: { id: targetMob } },
                weight: 1
            }],
            loot_tables_to_eject: [{
                data: "ntrials:chests/spawner",
                weight: 1
            }],
            simultaneous_monsters: 2.0,
            total_mobs: 6.0,
            ticks_between_spawn: 20
        },
        ominous_config: {
            spawn_potentials: [{
                data: { entity: { id: targetMob } },
                weight: 1
            }],
            loot_tables_to_eject: [{
                data: "ntrials:chests/spawner_ominous",
                weight: 1
            }],
            simultaneous_monsters: 3.0,
            total_mobs: 8.0,
            ticks_between_spawn: 20
        }
    };
    server.runCommandSilent(`setblock ${x} ${y} ${z} ntrials:trial_spawner${JSON.stringify(nbt)} replace`);
    level.spawnParticles('minecraft:soul_fire_flame', true, x + 0.5, y + 0.5, z + 0.5, 0.5, 0.5, 0.5, 50, 0.1);
    item.count--;
    player.displayClientMessage(Text.gold(`The ritual is complete. Face the ${trial.mob}!`), true);
});