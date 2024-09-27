ServerEvents.recipes(event => {
    const mappings = [
        { sapling: 'ore_tree:coal_tree_sapling', essence: 'mysticalagriculture:coal_essence' },
        { sapling: 'ore_tree:copper_tree_sapling', essence: 'mysticalagriculture:copper_essence' },
        { sapling: 'ore_tree:diamond_tree_sapling', essence: 'mysticalagriculture:diamond_essence' },
        { sapling: 'ore_tree:emerald_tree_sapling', essence: 'mysticalagriculture:emerald_essence' },
        { sapling: 'ore_tree:gold_tree_sapling', essence: 'mysticalagriculture:gold_essence' },
        { sapling: 'ore_tree:iron_tree_sapling', essence: 'mysticalagriculture:iron_essence' },
        { sapling: 'ore_tree:lapis_tree_sapling', essence: 'mysticalagriculture:lapis_essence' },
        { sapling: 'ore_tree:quartz_tree_sapling', essence: 'mysticalagriculture:nether_quartz_essence' },
        { sapling: 'ore_tree:redstone_tree_sapling', essence: 'mysticalagriculture:redstone_essence' }
    ];

    mappings.forEach(m => {
        event.remove({ output: m.sapling });
        event.shaped(
            Item.of(m.sapling, 1),
            [
                'SSS',
                'SNS',
                'SSS'
            ],
            {
                S: m.essence,
                N: 'mysticalagriculture:wood_essence'
            }
        );
    });
});
