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
});