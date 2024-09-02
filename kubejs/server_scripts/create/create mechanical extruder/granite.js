ServerEvents.recipes(event => {
    event.recipes.createMechanicalExtruderExtruding(
        Item.of('minecraft:granite'),
        [Fluid.of('minecraft:lava'), Fluid.of('minecraft:water')]
    ).withCatalyst('minecraft:granite')
})