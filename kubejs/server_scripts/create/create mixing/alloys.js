// https://kubejs.com/wiki/addons/create#mixing
ServerEvents.recipes(event => {
    event.recipes.createMixing('4x kubejs:bronze_ingot', [
        '3x minecraft:copper_ingot',
        'kubejs:tin_ingot'
    ]).heated()
    event.recipes.createMixing('2x kubejs:constantan_ingot', [
        'minecraft:copper_ingot',
        'kubejs:nickel_ingot'
    ]).heated()
    event.recipes.createMixing('2x kubejs:electrum_ingot', [
        'minecraft:gold_ingot',
        'kubejs:tin_ingot'
    ]).heated()
    event.recipes.createMixing('3x kubejs:invar_ingot', [
        '2x minecraft:iron_ingot',
        'kubejs:nickel_ingot'
    ]).heated()
    event.recipes.createMixing('gtceu:tin_alloy_ingot', [
        'minecraft:iron_ingot',
        'kubejs:tin_ingot'
    ]).superheated()
})