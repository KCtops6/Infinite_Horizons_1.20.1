function add(item) {
    ServerEvents.recipes(event => {
        event.recipes.createMechanicalExtruderExtruding(Item.of(item), [Fluid.of('minecraft:lava'), Fluid.of('minecraft:water')]).withCatalyst(item);
    })
}

const blocks = [
    'minecraft:andesite',
    'minecraft:basalt',
    'minecraft:blackstone',
    'minecraft:deepslate',
    'minecraft:diorite',
    'minecraft:granite',
    'minecraft:netherrack',
    'minecraft:tuff'
]

blocks.forEach(add)

add('minecraft:andesite');
add('minecraft:basalt');
add('minecraft:blackstone');
add('minecraft:deepslate');
add('minecraft:diorite');
add('minecraft:granite');
add('minecraft:netherrack');
add('minecraft:tuff')

// ServerEvents.recipes(event => {
//     event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:andesite'), [Fluid.of('minecraft:lava'), Fluid.of('minecraft:water')]).withCatalyst('minecraft:andesite')
//     event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:deepslate'), [Fluid.of('minecraft:lava'), Fluid.of('minecraft:water')]).withCatalyst('minecraft:deepslate')
//     event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:diorite'), [Fluid.of('minecraft:lava'), Fluid.of('minecraft:water')]).withCatalyst('minecraft:diorite')
//     event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:granite'), [Fluid.of('minecraft:lava'), Fluid.of('minecraft:water')]).withCatalyst('minecraft:granite')
//     event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:netherrack'), [Fluid.of('minecraft:lava'), Fluid.of('minecraft:water')]).withCatalyst('minecraft:netherrack')
//     event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:tuff'), [Fluid.of('minecraft:lava'), Fluid.of('minecraft:water')]).withCatalyst('minecraft:tuff')
// })