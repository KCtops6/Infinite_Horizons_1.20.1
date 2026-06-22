BlockEvents.rightClicked(event => {
    const { block, item, player, hand } = event;
    if (hand !== 'MAIN_HAND') return;
    if (item.id !== 'productivebees:honey_treat') return;
    const beeMap = {
        'minecraft:oak_log': [
            'productivebees:spawn_egg_green_carpenter_bee',
            'productivebees:spawn_egg_yellow_black_carpenter_bee'
        ],
        'minecraft:spruce_log': [
            'productivebees:spawn_egg_resin_bee',
            'productivebees:spawn_egg_yellow_black_carpenter_bee'
        ],
        'minecraft:dark_oak_log': [
            'productivebees:spawn_egg_green_carpenter_bee',
            'productivebees:spawn_egg_yellow_black_carpenter_bee',
            'productivebees:spawn_egg_blue_banded_bee'
        ],
        'minecraft:birch_log': [
            'productivebees:spawn_egg_green_carpenter_bee',
            'productivebees:spawn_egg_yellow_black_carpenter_bee'
        ],
        'minecraft:jungle_log': [
            'productivebees:spawn_egg_green_carpenter_bee',
            'productivebees:spawn_egg_configurable_bee[entity_data={id:"productivebees:configurable_bee",type:"productivebees:chocolate"}]'
        ],
        'minecraft:acacia_log': ['productivebees:spawn_egg_blue_banded_bee'],
        'minecraft:cherry_log': [
            'productivebees:spawn_egg_blue_banded_bee',
            'productivebees:spawn_egg_neon_cuckoo_bee'
        ],
        'minecraft:mangrove_log': ['productivebees:spawn_egg_green_carpenter_bee'],
        'minecraft:stone': [
            'productivebees:spawn_egg_mason_bee',
            'productivebees:spawn_egg_digger_bee'
        ],
        'minecraft:coarse_dirt': [
            'productivebees:spawn_egg_leafcutter_bee',
            'productivebees:spawn_egg_chocolate_mining_bee',
            'productivebees:spawn_egg_ashy_mining_bee',
        ],
        'minecraft:sand': [
            'productivebees:spawn_egg_chocolate_mining_bee',
            'productivebees:spawn_egg_ashy_mining_bee',
        ],
        'minecraft:snow_block': ['productivebees:spawn_egg_sweat_bee'],
        'minecraft:gravel': [
            'productivebees:spawn_egg_digger_bee',
            'productivebees:spawn_egg_chocolate_mining_bee',
            'productivebees:spawn_egg_ashy_mining_bee',
        ],
        'minecraft:sugar_cane': [
            'productivebees:spawn_egg_mason_bee',
            'productivebees:spawn_egg_reed_bee',
            'productivebees:spawn_egg_configurable_bee[entity_data={id:"productivebees:configurable_bee",type:"productivebees:sugarbag"}]'
        ],
        'minecraft:slime_block': [
            'productivebees:spawn_egg_configurable_bee[entity_data={id:"productivebees:configurable_bee",type:"productivebees:slimy"}]'
        ],
        'minecraft:glowstone': [
            'productivebees:spawn_egg_configurable_bee[entity_data={id:"productivebees:configurable_bee",type:"productivebees:glowing"}]'
        ],
        'minecraft:soul_sand': [
            'productivebees:spawn_egg_configurable_bee[entity_data={id:"productivebees:configurable_bee",type:"productivebees:ghostly"}]'
        ],
        'minecraft:quartz_block': [
            'productivebees:spawn_egg_configurable_bee[entity_data={id:"productivebees:configurable_bee",type:"productivebees:crystalline"}]'
        ],
        'minecraft:gold_block': [
            'productivebees:spawn_egg_configurable_bee[entity_data={id:"productivebees:configurable_bee",type:"productivebees:gold"}]'
        ],
        'minecraft:nether_bricks': [
            'productivebees:spawn_egg_configurable_bee[entity_data={id:"productivebees:configurable_bee",type:"productivebees:magmatic"}]'
        ],
        'minecraft:end_stone': [
            'productivebees:spawn_egg_configurable_bee[entity_data={id:"productivebees:configurable_bee",type:"productivebees:ender"}]'
        ],
        'minecraft:obsidian': [
            'productivebees:spawn_egg_configurable_bee[entity_data={id:"productivebees:configurable_bee",type:"productivebees:draconic"}]'
        ],
        'minecraft:bone_block': [
            'productivebees:spawn_egg_configurable_bee[entity_data={id:"productivebees:configurable_bee",type:"productivebees:skeletal"}]'
        ]
    };
    if (!(block.id in beeMap)) return;
    if (!player.level.isClientSide()) {
        const bees = beeMap[block.id];
        const randomBee = bees[Math.floor(Math.random() * bees.length)];
        player.give(randomBee);
        if (!player.isCreative()) item.shrink(1);
    }
});