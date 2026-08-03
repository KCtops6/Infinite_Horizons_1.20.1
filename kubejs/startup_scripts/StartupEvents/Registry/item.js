function capitalize(str) {
    return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
const items = [
    'chicken_fried_steak_ingot', 'mycellium_spores',
    'red_mushroom_spores', 'brown_mushroom_spores', 'crimson_nylium_spores',
    'warped_nylium_spores', 'explorer_map',
    'forbidden_transmutation_matter', 
    'netherite_wire', 'stone_alloy', 'void_flour',
    'void_cake_base', 'void_cake', 'ancient_glyph',
    'void_glyph', 'voidwalker_reagent', 'infernal_reagent',
    'infernal_sigil', 'voidwalker_sigil', 'rune_of_the_end',
    'rune_of_the_nether', 'wither_skeletal_contractor', 'e-logic_controller',
    'ender_addon', 'nether_addon', 'limestone_pebble'
];
const formatName = (id) => {
    return id.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
const glowing_items = [
    'wither_controller', 'ender_controller', 'token_of_the_nether', 'token_of_the_end'
];
const dusts = [
    'aluminum', 'apatite', 'brass',
    'bronze', 'charcoal', 'cinnabar',
    'constantan', 'corral', 'copper',
    'diamond', 'electrum', 'emerald',
    'enderium', 'gold', 'invar',
    'iron', 'lapis', 'lead',
    'lumium', 'netherite', 'nickel',
    'niter', 'obsidian', 'osmium',
    'quartz', 'sapphire', 'signalum',
    'silver', 'steel', 'sulfur', 'ruby', 'tin',
    'uranium', 'zinc'
];
const ingots = [
    'aluminum', 'brass', 'bronze',
    'constantan', 'electrum', 'enderium',
    'infinitium', 'invar', 'lead',
    'lumium', 'nickel', 'osmium', 'signalum', 'silver',
    'steel', 'tin', 'uranium', 'zinc'
];
const plates = [
    'aluminum', 'brass', 'bronze',
    'constantan', 'copper', 'electrum', 'gold', 'infinitium',
    'invar', 'iron', 'lead', 'lumium', 'netherite', 'nickel', 'signalum', 'silver', 'steel', 'tin', 'zinc'
];
const gems = [
    { id: 'apatite', displayName: 'Apatite'},
    { id: 'cinnabar', displayName: 'Cinnabar'},
    { id: 'niter', displayName: 'Niter'},
    { id: 'ruby', displayName: 'Ruby'},
    { id: 'sapphire', displayName: 'Sapphire'},
    { id: 'sulfur', displayName: 'Sulfur'}
];
const gears = [
    'bronze', 'constantan', 'copper',
    'diamond', 'electrum', 'emerald', 'gold', 'invar',
    'iron', 'lapis', 'lead',
    'lumium', 'nickel', 'sapphire', 'signalum', 'silver', 'tin'
];
const nuggets = [
    'brass', 'bronze', 'constantan',
    'copper', 'electrum', 'enderium', 
    'invar', 'lead', 'lumium',
    'netherite', 'nickel', 'osmium',
    'signalum', 'silver', 'steel',
    'tin', 'uranium', 'zinc'
];
StartupEvents.registry('item', event => {
    event.create('copper_mesh', 'createsifter:mesh')
        .displayName('Copper Mesh')
        .parentModel("createsifter:block/meshes/mesh")
        .texture("mesh","kubejs:item/copper_mesh")
        .texture("frame","kubejs:block/example_mesh_frame");
    event.create('iron_mesh', 'createsifter:mesh')
        .displayName('Iron Mesh')
        .parentModel("createsifter:block/meshes/mesh")
        .texture("mesh","kubejs:item/iron_mesh")
        .texture("frame","kubejs:block/example_mesh_frame");
    event.create('netherite_mesh', 'createsifter:mesh')
        .displayName('Netherite Mesh')
        .parentModel("createsifter:block/meshes/mesh")
        .texture("mesh","kubejs:item/netherite_mesh")
        .texture("frame","kubejs:block/example_mesh_frame");
    event.create('bronze_mesh', 'createsifter:mesh')
        .displayName('Bronze Mesh')
        .parentModel("createsifter:block/meshes/mesh")
        .texture("mesh", "kubejs:item/bronze_mesh")
        .texture("frame", "kubejs:block/bronze_mesh_frame");
    event.create('steel_mesh', 'createsifter:mesh')
        .displayName('Steel Mesh')
        .parentModel("createsifter:block/meshes/mesh")
        .texture("mesh", "kubejs:item/steel_mesh")
        .texture("frame", "kubejs:block/example_mesh_frame");
    event.create('aluminum_mesh', 'createsifter:mesh')
        .displayName('Aluminum Mesh')
        .parentModel("createsifter:block/meshes/mesh")
        .texture("mesh", "kubejs:item/aluminum_mesh")
        .texture("frame", "kubejs:block/example_mesh_frame");
    items.forEach(id => {
        event.create(id).displayName(formatName(id));
    });
    glowing_items.forEach(id => {
        event.create(id).displayName(formatName(id)).glow(true);
    });
    dusts.forEach(dust => {
        event.create(`${dust}_dust`).displayName(`${capitalize(dust)} Dust`);
    });
    event.create('ender_pearl_dust').displayName('Ender Pearl Dust');
    event.create('end_stone_dust').displayName('End Stone Dust');
    event.create('sawdust').displayName("Sawdust");
    ingots.forEach(ingot => {
        event.create(`${ingot}_ingot`).displayName(`${capitalize(ingot)} Ingot`);
    });
    plates.forEach(plate => {
        event.create(`${plate}_plate`).displayName(`${capitalize(plate)} Plate`);
    });
    event.create('silicon').displayName('Silicon');
    gems.forEach(gem => {
        event.create(`${gem.id}_gem`).displayName(`${gem.displayName}`);
    });
    gears.forEach(gear => {
        event.create(`${gear}_gear`).displayName(`${capitalize(gear)} Gear`);
    });
    nuggets.forEach(nugget => {
        event.create(`${nugget}_nugget`).displayName(`${capitalize(nugget)} Nugget`);
    });
    event.create('stone_hammer', 'pickaxe').tier('stone');
    event.create('iron_hammer', 'pickaxe').tier('iron');
    global.raw_ores.forEach(r => {
        event.create(`raw_${r}`).displayName(`Raw ${capitalize(r)}`);
    });
    event.create('coal_coke').displayName('Coal Coke');
    event.create('trial_core').displayName('Trial Core');
})