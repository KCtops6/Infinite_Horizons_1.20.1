// https://kubejs.com/wiki/addons/create#crushing
ServerEvents.recipes(event => {
    // ['minecraft:diorite', 'kubejs:diorite_gravel']
    event.recipes.createCrushing(['kubejs:diorite_gravel'], 'minecraft:diorite')
});