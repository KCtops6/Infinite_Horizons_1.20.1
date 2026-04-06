ItemEvents.tooltip(event => {
    const reversePortalSpread = {
        'minecraft:netherrack': 'Stone or Dirt',
        'minecraft:magma_block': 'Stone',
        'minecraft:nether_quartz_ore': 'Stone',
        'minecraft:nether_sprouts': 'Grass or Fern',
        'minecraft:blackstone': 'Cobblestone or Sandstone',
        'minecraft:crimson_nylium': 'Grass Block',
        'minecraft:soul_soil': 'Coarse Dirt, Gravel, Sand, or Red Sand',
        'minecraft:soul_sand': 'Sand, Red Sand, or Farmland',
        'minecraft:polished_blackstone': 'Cut Sandstone',
        'minecraft:chiseled_polished_blackstone': 'Chiseled Sandstone',
        'minecraft:basalt': 'Smooth Sandstone or Smooth Red Sandstone',
        'minecraft:nether_bricks': 'Stone Bricks',
        'minecraft:red_nether_bricks': 'Stone Bricks',
        'minecraft:glowstone': 'Sea Lantern',
        'minecraft:nether_wart': 'Wheat',
        'minecraft:nether_gold_ore': 'Gold Ore',
        'minecraft:nether_wart_block': 'Oak, Spruce, or Acacia Leaves',
        'minecraft:warped_wart_block': 'Birch, Jungle, or Dark Oak Leaves',
        'minecraft:crimson_stem': 'Oak, Spruce, or Acacia Logs',
        'minecraft:warped_stem': 'Birch, Jungle, or Dark Oak Logs'
    };
    Object.keys(reversePortalSpread).forEach(id => {
        event.addAdvanced(id, (item, advanced, text) => {
            if (event.ctrl) {
                text.add(Text.lightPurple('Created from ')
                    .append(Text.darkPurple(reversePortalSpread[id]).bold())
                    .append(Text.lightPurple(' when placed near a lit Nether Portal.')));
            } else {
                text.add(Text.yellow('Hold ')
                    .append(Text.gold('Ctrl').bold())
                    .append(Text.yellow(' for origin info')));
            }
        });
    });
    event.addAdvanced('kubejs:dormant_trial_spawner', (item, advanced, text) => {
        if (event.ctrl) {
            text.add(Text.gold('Ritual Foundation:').bold());
            text.add(Text.gray('- Center (Below): ').append(Text.aqua('Copper Block')));
            text.add(Text.gray('- Sides (Below): ').append(Text.aqua('4x Chiseled Copper')));
            text.add(Text.gray('- Corners (Below): ').append(Text.lightPurple('4x Ritual Blocks (Identical)')));
            text.add(Text.darkGray('Use a Trial Core at night to activate.').italic());
        } else {
            text.add(Text.yellow('Hold ').append(Text.gold('Ctrl').bold()).append(Text.yellow(' for Ritual Layout')));
        }
    });
    event.addAdvanced('kubejs:trial_core', (item, advanced, text) => {
        if (event.ctrl) {
            text.add(Text.blue('Condition: ').append(Text.white('Must be used between Nightfall and Dawn.')));
            text.add(Text.darkRed('Warning: ').append(Text.red('Consumes the core upon successful ritual.')));
        } else {
            text.add(Text.yellow('Hold ').append(Text.gold('Ctrl').bold()).append(Text.yellow(' for Activation Requirements')));
        }
    });
    const TRIAL_RECORDS = {
        'minecraft:chiseled_tuff': 'Breeze',
        'minecraft:nether_bricks': 'Blaze',
        'minecraft:moss_block': 'Slime',
        'minecraft:chiseled_sandstone': 'Husk',
        'minecraft:stone_bricks': 'Silverfish',
        'minecraft:chiseled_polished_blackstone': 'Piglin / Brute (Ominous)',
        'minecraft:soul_soil': 'Ghast',
        'minecraft:dark_oak_log': 'Pillager / Ravager (Ominous)',
        'minecraft:emerald_block': 'Vindicator / Evoker (Ominous)',
        'minecraft:mycelium': 'Bogged',
        'minecraft:oak_planks': 'Cave Spider',
        'minecraft:grass_block': 'Creeper',
        'minecraft:gravel': 'Drowned',
        'minecraft:dark_prismarine': 'Guardian / Elder Guardian (Ominous)',
        'minecraft:end_stone': 'Enderman',
        'minecraft:crimson_nylium': 'Hoglin',
        'minecraft:magma_block': 'Magma Cube',
        'minecraft:lime_wool': 'Phantom',
        'minecraft:purpur_block': 'Shulker',
        'minecraft:bone_block': 'Skeleton',
        'minecraft:white_wool': 'Spider',
        'minecraft:sculk': 'Warden (Ominous Only)',
        'minecraft:spruce_planks': 'Witch',
        'minecraft:coal_block': 'Wither Skeleton',
        'minecraft:mossy_cobblestone': 'Zombie',
        'minecraft:packed_ice': 'Stray'
    };

    if (Platform.isLoaded('ars_nouveau')) {
        TRIAL_RECORDS['ars_nouveau:blue_archwood_wood'] = 'Wilden Guardian';
        TRIAL_RECORDS['ars_nouveau:purple_archwood_wood'] = 'Wilden Hunter';
        TRIAL_RECORDS['ars_nouveau:red_archwood_wood'] = 'Wilden Stalker';
    }

    Object.keys(TRIAL_RECORDS).forEach(id => {
        event.addAdvanced(id, (item, advanced, text) => {
            if (event.ctrl) {
                text.add(Text.darkGreen('Trial Ritual Block:'));
                text.add(Text.gray('Summons: ').append(Text.green(TRIAL_RECORDS[id])));
                text.add(Text.darkGray('Place at the corners of a Dormant Spawner.').italic());
            } else {
                text.add(Text.yellow('Hold ').append(Text.gold('Ctrl').bold()).append(Text.yellow(' for Trial info')));
            }
        });
    });
});