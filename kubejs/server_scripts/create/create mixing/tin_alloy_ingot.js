// https://kubejs.com/wiki/addons/create#mixing
ServerEvents.recipes(event => {
    event.recipes.createMixing('gtceu:tin_alloy_ingot', [
        '#forge:ingots/iron',
        '#forge:ingots/tin'
    ]).superheated()
})