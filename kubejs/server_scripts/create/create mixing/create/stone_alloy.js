// https://kubejs.com/wiki/addons/create#mixing
ServerEvents.recipes(event => {
    event.recipes.createMixing('kubejs:stone_alloy', ['minecraft:iron_nugget', 'minecraft:cobblestone']).lowheated()
})