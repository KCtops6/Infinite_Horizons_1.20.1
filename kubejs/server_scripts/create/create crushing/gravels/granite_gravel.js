// https://kubejs.com/wiki/addons/create#crushing
ServerEvents.recipes(event => {
    // ['minecraft:granite', 'kubejs:granite_gravel']
    event.recipes.createCrushing(['kubejs:granite_gravel'], 'minecraft:granite')
});