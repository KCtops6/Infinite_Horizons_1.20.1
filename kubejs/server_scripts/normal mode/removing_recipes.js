// https://kubejs.com/wiki/tutorials/recipes#removing-recipes
ServerEvents.recipes(event => {
    // removing by id
    const identifications = [
        'functionalstorage:oak_drawer_alternate_x1', 'functionalstorage:oak_drawer_alternate_x2', 'functionalstorage:oak_drawer_alternate_x4',
        'create:crushing/netherrack', 'projecte:low_covalence_dust', 'projecte:medium_covalence_dust', 'projecte:high_covalence_dust',
        'extendedcrafting:ender_crafter', 'extendedcrafting:ender_alternator', "extendedcrafting:flux_alternator", "extendedcrafting:flux_crafter",
        'extendedcrafting:black_iron_ingot_uncraft', 'extendedcrafting:black_iron_ingot_uncraft', 'extendedcrafting:the_ultimate_catalyst',
        'extendedcrafting:the_ultimate_component', 'extendedcrafting:black_iron_slate', 'bountiful:crafting/bountyboard', 'cobblefordays:tier_1',
        'cobblefordays:tier_2', 'cobblefordays:tier_3', 'cobblefordays:tier_4', 'cobblefordays:tier_5', 'torchmaster:megatorch', 'projecte:dark_matter',
        'projecte:red_matter', 'ore_tree:coal_tree_sapling', 'ore_tree:copper_tree_sapling', 'ore_tree:diamond_tree_sapling',
        'ore_tree:emerald_tree_sapling', 'ore_tree:gold_tree_sapling', 'ore_tree:iron_tree_sapling', 'ore_tree:lapis_tree_sapling', 'ore_tree:quartz_tree_sapling',
        'ore_tree:redstone_tree_sapling', 'farmersdelight:cutting/gravel', 'create:crushing/scrap_cobblestone_small',
        'extendedcrafting:ender_ingot', 'extendedcrafting:redstone_ingot', 'extendedcrafting:luminessence', 'extendedcrafting:black_iron_block',
        'create:crushing/gravel', 'botania:livingwood_twig', 'botania:dreamwood_twig', 'create:crushing/tuff', 'create:crushing/tuff_recycling'
    ];
    identifications.forEach(identification => {
        event.remove({ id: identification });
    });
    
    // removing by output
    const outputs = [
        'mekanism:digital_miner', 'extendedcrafting:the_ultimate_block', 'extendedcrafting:the_ultimate_ingot', 
        'extendedcrafting:the_ultimate_nugget', 'cookingforblockheads:crafting_book'
    ];
    outputs.forEach(output => {
        event.remove({ output: output });
    });

    // removing by mod
    const mods = ['dimpaintings'];
    mods.forEach(mod => {
        event.remove({mod: mod});
    });
    
    // remove gregtech-powah mismatched uraninite recipes.
    event.remove({ input: 'powah:uraninite_raw', output: 'gtceu:uraninite_dust'})
});