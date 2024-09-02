ServerEvents.recipes(event => {
    event.recipes.createMechanicalExtruderExtruding(
        Item.of('minecraft:diorite'),
        [Fluid.of('minecraft:lava'), Fluid.of('minecraft:water')]
    ).withCatalyst('minecraft:diorite')
})