ServerEvents.recipes(event => {
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:andesite'), [Fluid.of('minecraft:lava'), Fluid.of('minecraft:water')]).withCatalyst('minecraft:andesite')
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:deepslate'), [Fluid.of('minecraft:lava'), Fluid.of('minecraft:water')]).withCatalyst('minecraft:deepslate')
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:diorite'), [Fluid.of('minecraft:lava'), Fluid.of('minecraft:water')]).withCatalyst('minecraft:diorite')
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:granite'), [Fluid.of('minecraft:lava'), Fluid.of('minecraft:water')]).withCatalyst('minecraft:granite')
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:netherrack'), [Fluid.of('minecraft:lava'), Fluid.of('minecraft:water')]).withCatalyst('minecraft:netherrack')
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:tuff'), [Fluid.of('minecraft:lava'), Fluid.of('minecraft:water')]).withCatalyst('minecraft:tuff')
})