JEIEvents.hideItems(event => {
    const modsToHide = {
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