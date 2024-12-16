// https://kubejs.com/wiki/tutorials/recipes#removing-recipes
ServerEvents.recipes(event => {
    // removing by output
    const ids = [
        'functionalstorage:oak_drawer_alternate_x1', 'functionalstorage:oak_drawer_alternate_x2', 'functionalstorage:oak_drawer_alternate_x4'
    ];
    ids.forEach(id => {
        event.remove({ id: id });
    });
    // removing by output
    const outputs = ['mekanism:digital_miner'];
    outputs.forEach(output => {
        event.remove({ output: output });
    });
    // removing by mod
    const mods = ['dimpaintings'];
    mods.forEach(mod => {
        event.remove({mod: mod});
    });
});