// https://kubejs.com/wiki/addons/create#crushing
ServerEvents.recipes(event => {
    event.remove({output: 'minecraft:flint', input: 'minecraft:tuff' })
    event.recipes.createCrushing(['kubejs:tuff_gravel'], 'minecraft:tuff')
});