ServerEvents.recipes(event => {
    event.recipes.createMechanicalExtruderExtruding(
        Item.of('minecraft:andesite'),
        [Fluid.of('minecraft:lava'), Fluid.of('minecraft:water')]
    ).withCatalyst('minecraft:andesite')
})