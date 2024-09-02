ServerEvents.recipes(event => {
    event.recipes.createMechanicalExtruderExtruding(
        Item.of('minecraft:deepslate'),
        [Fluid.of('minecraft:lava'), Fluid.of('minecraft:water')]
    ).withCatalyst('minecraft:deepslate')
})