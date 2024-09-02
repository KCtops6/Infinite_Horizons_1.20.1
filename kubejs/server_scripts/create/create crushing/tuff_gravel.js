ServerEvents.recipes(event => {
    // ['minecraft:tuff', 'kubejs:tuff_gravel']
    event.recipes.createCrushing(['kubejs:tuff_gravel'], 'minecraft:tuff')
});