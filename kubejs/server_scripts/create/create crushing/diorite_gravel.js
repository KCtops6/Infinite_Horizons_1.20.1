ServerEvents.recipes(event => {
    // ['minecraft:diorite', 'kubejs:diorite_gravel']
    event.recipes.createCrushing(['kubejs:diorite_gravel'], 'minecraft:diorite')
});