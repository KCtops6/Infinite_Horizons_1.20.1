// https://kubejs.com/wiki/tutorials/recipes#removing-recipes
ServerEvents.recipes(event => {
    // removing by id
    const ids = [
        'functionalstorage:oak_drawer_alternate_x1', 'functionalstorage:oak_drawer_alternate_x2', 'functionalstorage:oak_drawer_alternate_x4',
        'create:crushing/netherrack', 'projecte:low_covalence_dust', 'projecte:medium_covalence_dust', 'projecte:high_covalence_dust',
        'extendedcrafting:ender_crafter', 'extendedcrafting:ender_alternator', "extendedcrafting:flux_alternator", "extendedcrafting:flux_crafter",
        'extendedcrafting:black_iron_ingot_uncraft', 'extendedcrafting:black_iron_ingot_uncraft', 'extendedcrafting:the_ultimate_catalyst',
        'extendedcrafting:the_ultimate_component', 'extendedcrafting:black_iron_slate'
    ];

    // FUTURE EXPERT MODE IMPLEMENTATION
    // const expertIds = [ ];
    // if (expert) {
    //      ids.push(expertIds);
    // }    

    ids.forEach(id => {
        event.remove({ id: id });
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
});