BlockEvents.rightClicked('kubejs:dormant_trial_spawner', event => {
    const { item, level, player, server, block } = event;
    const { x, y, z } = block;
    const TRIAL_CONFIG = {
        'minecraft:chiseled_tuff': { mob: 'minecraft:breeze' },
        'minecraft:nether_bricks': { mob: 'minecraft:blaze' },
        'minecraft:moss_block': { mob: 'minecraft:slime' },
        'minecraft:chiseled_sandstone': { mob: 'minecraft:husk' },
        'minecraft:stone_bricks': { mob: 'minecraft:silverfish' },
        'minecraft:chiseled_polished_blackstone': { 
            mob: 'minecraft:piglin',
            ominousMob: 'minecraft:piglin_brute'
        },
        'minecraft:soul_soil': { mob: 'minecraft:ghast' },
        'minecraft:dark_oak_log': {
            mob: 'minecraft:pillager',
            ominousMob: 'minecraft:ravager'
        },
        'minecraft:emerald_block': { 
            mob: 'minecraft:vindicator', 
            ominousMob: 'minecraft:evoker'
        },
        'minecraft:mycelium': { mob: 'minecraft:bogged' },
        'minecraft:oak_planks': { mob: 'minecraft:cave_spider' },
        'minecraft:grass_block': { mob: 'minecraft:creeper' },
        'minecraft:gravel': { mob: 'minecraft:drowned' },
        'minecraft:dark_prismarine': {
            mob: 'minecraft:guardian',
            ominousMob: 'minecraft:elder_guardian'
        },
        'minecraft:end_stone': { mob: 'minecraft:enderman' },
        'minecraft:crimson_nylium': { mob: 'minecraft:hoglin' },
        'minecraft:magma_block': { mob: 'minecraft:magma_cube' },
        'minecraft:lime_wool': { mob: 'minecraft:phantom' },
        'minecraft:purpur_block': { mob: 'minecraft:shulker' },
        'minecraft:bone_block': { mob: 'minecraft:skeleton' },
        'minecraft:white_wool': { mob: 'minecraft:spider' },
        'minecraft:sculk': { ominousMob: 'minecraft:warden' },
        'minecraft:spruce_planks': { mob: 'minecraft:witch' },
        'minecraft:coal_block': { mob: 'minecraft:wither_skeleton'},
        'minecraft:mossy_cobblestone': { mob: 'minecraft:zombie' },
        'minecraft:packed_ice': { mob: 'minecraft:stray' }
    };
    if (Platform.isLoaded('ars_nouveau')) {
        TRIAL_CONFIG['ars_nouveau:blue_archwood_wood'] = { mob: 'ars_nouveau:wilden_guardian'};
        TRIAL_CONFIG['ars_nouveau:purple_archwood_wood'] = { mob: 'ars_nouveau:wilden_hunter'};
        TRIAL_CONFIG['ars_nouveau:red_archwood_wood'] = { mob: 'ars_nouveau:wilden_stalker'};
    }
    if (Platform.isLoaded('thermal')) {
        TRIAL_CONFIG['thermal:slag_block'] = { mob: 'thermal:basalz' };
        TRIAL_CONFIG['kubejs:niter_block'] = { mob: 'thermal:blitz' };
        TRIAL_CONFIG['minecraft:snow_block'] = { mob: 'thermal:blizz'}
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
    let targetMob = (hasOminous && trial.ominousMob) ? trial.ominousMob : (trial.mob || null);

    if (!targetMob) {
        player.displayClientMessage(Text.red('The core shudders... this ritual requires a Trial Omen.'), true);
        return;
    }
    const nbt = {
        SpawnEntity: targetMob,
        NormalLootTable: "ntrials:chests/spawner",
        OminousLootTable: "ntrials:chests/spawner_ominous",
        VaultTag: "level_1",
        MobsPerWave: hasOminous ? 3 : 2,
        TotalMobs: hasOminous ? 8 : 6,
        CooldownTime: 0,
        MaxCooldownTime: 6000 
    };
    server.runCommandSilent(`setblock ${x} ${y} ${z} ntrials:trial_spawner${JSON.stringify(nbt)} replace`);
    level.spawnParticles('minecraft:soul_fire_flame', true, x + 0.5, y + 0.5, z + 0.5, 0.5, 0.5, 0.5, 50, 0.1);
    item.count--;
    player.displayClientMessage(Text.gold(`The ritual is complete. Face the ${targetMob.split(':')[1]}!`), true);
});