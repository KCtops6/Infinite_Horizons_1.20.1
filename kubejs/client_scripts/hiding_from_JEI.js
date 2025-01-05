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
        'create': ['andesite_alloy'],
        'enderio': ['filled_soul_vial', 'broken_spawner'],
        'mekanism': ['digital_miner', 'creative_fluid_tank'],
        '#forge:ores_in_ground': [
            'andesite', 'basalt', 'blackstone', 'deepslate', 'diorite', 'endstone', 'gravel',
            'granite', 'marble', 'netherrack', 'red_granite', 'red_sand', 'sand',
            'stone', 'tuff'
        ],
        'thermal': [
            'ender_pearl_dust'
        ],
        'gtceu': [
            'ender_pearl_dust'
        ]
    };
    Object.entries(modsToHide).forEach(([mod, items]) => {
        items.forEach(item => {
            const itemId = item.startsWith('#') ? item : `${mod}:${item}`;
            try {
                event.hide(itemId);
                console.info(`Hiding: ${itemId}`);
            } catch (error) {
                console.error(`Failed to hide: ${itemId}`, error);
            }
        });
    });
});
