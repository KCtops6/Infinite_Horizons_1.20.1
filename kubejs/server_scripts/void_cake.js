ServerEvents.recipes(event => {
    // Void Cake Base
    event.recipes.createCompacting('kubejs:void_cake_base', ['minecraft:egg', 'minecraft:sugar', 'kubejs:void_flour']);

    // Liquid Ender Pearl
    event.recipes.createMixing(Fluid.of('kubejs:liquid_ender_pearl', 250), 'minecraft:ender_pearl');

    // Void Cake
    event.recipes.createFilling('create:void_cake', ['create:void_cake_base', Fluid.of('minecraft:liquid_ender_pearl', 250)]);
});