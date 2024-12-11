ServerEvents.recipes(event => {
    event.recipes.createCompacting('kubejs:void_cake_base', ['minecraft:egg', 'minecraft:sugar', 'kubejs:void_flour']);
    event.recipes.createFilling('kubejs:void_cake', ['kubejs:void_cake_base', Fluid.of('kubejs:liquid_ender_pearl')]);
})