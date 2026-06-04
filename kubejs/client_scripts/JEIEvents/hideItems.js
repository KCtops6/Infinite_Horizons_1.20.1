JEIEvents.hideItems(event => {
    const modsToHide = {
        'extendedcrafting': [
            'luminessence_block', 'redstone_ingot_block', 'enhanced_redstone_ingot_block',
            'ender_ingot_block', 'enhanced_ender_ingot_block', 'crystaltine_block',
            'the_ultimate_block', 'nether_star_block', 'flux_star_block',
            'ender_star_block', 'black_iron_nugget', 'redstone_nugget',
            'enhanced_redstone_nugget', 'ender_nugget', 'enhanced_ender_nugget',
            'crystaltine_nugget', 'the_ultimate_nugget', 'black_iron_block',
            'black_iron_ingot', 'black_iron_slate', 'the_ultimate_ingot',
            'the_ultimate_nugget', 'the_ultimate_catalyst', 'the_ultimate_component'
        ],
        'createsifter': [
            'andesite_mesh', 'zinc_mesh', 'custom_mesh', 'advanced_brass_mesh', 'advanced_custom_mesh'
        ],
        'ae2': ['facade'],
        'enderio': ['filled_soul_vial', 'broken_spawner'],
        'mekanism': ['digital_miner', 'creative_fluid_tank'],
        'thermal': ['ender_pearl_dust'],
        'gtceu': ['ender_pearl_dust'],
        'kubejs': [
            'wooden_trowel', 'stone_trowel', 'iron_trowel', 'stone_hammer', 'iron_hammer', 
            'stone_pebble', 'andesite_pebble', 'diorite_pebble', 'granite_pebble', 
            'deepslate_pebble', 'tuff_pebble'
        ]
    };
    const tagsToHide = [
        '#forge:ores_in_ground/andesite', 
        '#forge:ores_in_ground/basalt', 
        '#forge:ores_in_ground/blackstone', 
        '#forge:ores_in_ground/deepslate', 
        '#forge:ores_in_ground/diorite', 
        '#forge:ores_in_ground/endstone', 
        '#forge:ores_in_ground/gravel',
        '#forge:ores_in_ground/granite', 
        '#forge:ores_in_ground/marble', 
        '#forge:ores_in_ground/netherrack', 
        '#forge:ores_in_ground/red_granite', 
        '#forge:ores_in_ground/red_sand', 
        '#forge:ores_in_ground/sand',
        '#forge:ores_in_ground/stone', 
        '#forge:ores_in_ground/tuff'
    ];
    Object.entries(modsToHide).forEach(([mod, items]) => {
        items.forEach(item => {
            event.hide(`${mod}:${item}`);
        });
    });
    tagsToHide.forEach(tag => {
        event.hide(Ingredient.of(tag));
    });
});