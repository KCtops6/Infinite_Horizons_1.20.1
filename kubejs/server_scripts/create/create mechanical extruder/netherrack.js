ServerEvents.recipes(event => {
    event.recipes.createMechanicalExtruderExtruding(
        Item.of('minecraft:netherrack'),
        [Fluid.of('minecraft:lava'), Fluid.of('minecraft:water')]
    ).withCatalyst('minecraft:netherrack')
})