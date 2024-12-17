RecipeViewerEvents.removeEntries('item', event => {
    const hiddenitems = [
        'ae2:facade', 'createsifter:andesite_mesh', 'createsifter:zinc_mesh',
        'createsifter:custom_mesh', 'createsifter:advanced_brass_mesh', 'createsifter:advanced_custom_mesh', 
        'extendedcrafting:luminessence_block', 'extendedcrafting:redstone_ingot_block', 'extendedcrafting:enhanced_redstone_ingot_block',
        'extendedcrafting:ender_ingot_block', 'extendedcrafting:enhanced_ender_ingot_block', 'extendedcrafting:crystaltine_block',
        'extendedcrafting:the_ultimate_block', 'extendedcrafting:nether_star_block', 'extendedcrafting:flux_star_block',
        'extendedcrafting:ender_star_block', 'extendedcrafting:black_iron_nugget', 'extendedcrafting:redstone_nugget',
        'extendedcrafting:enhanced_redstone_nugget', 'extendedcrafting:ender_nugget', 'extendedcrafting:enhanced_ender_nugget',
        'extendedcrafting:crystaltine_nugget', 'extendedcrafting:the_ultimate_nugget', 'extendedcrafting:black_iron_block',
        'extendedcrafting:black_iron_ingot', 'extendedcrafting:black_iron_slate', '#forge:ores_in_ground/andesite',
        '#forge:ores_in_ground/basalt', '#forge:ores_in_ground/blackstone', '#forge:ores_in_ground/deepslate',
        '#forge:ores_in_ground/diorite', '#forge:ores_in_ground/endstone', '#forge:ores_in_ground/gravel',
        '#forge:ores_in_ground/granite', '#forge:ores_in_ground/marble', '#forge:ores_in_ground/netherrack',
        '#forge:ores_in_ground/red_granite', '#forge:ores_in_ground/red_sand', '#forge:ores_in_ground/sand',
        '#forge:ores_in_ground/stone', '#forge:ores_in_ground/tuff', 'create:andesite_alloy',
        'mekanism:digital_miner', 'extendedcrafting:the_ultimate_block', 'extendedcrafting:the_ultimate_ingot', 
        'extendedcrafting:the_ultimate_nugget', 
    ];
    hiddenitems.forEach(item => {
        event.hide(item)
    })
});