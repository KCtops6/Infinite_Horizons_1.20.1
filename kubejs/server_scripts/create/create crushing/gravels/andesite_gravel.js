// https://kubejs.com/wiki/addons/create#crushing
ServerEvents.recipes(event => {
    // ['minecraft:andesite', 'kubejs:andesite_gravel']
    event.recipes.createCrushing(['kubejs:andesite_gravel'], 'minecraft:andesite')
});