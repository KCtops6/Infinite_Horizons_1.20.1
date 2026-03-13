ServerEvents.recipes(event => {
    event.remove({ type: 'create_mechanical_extruder:extruding' })
    event.recipes.create_mechanical_extruder.extruding(Item.of('minecraft:cobblestone'),
        [ Fluid.of('minecraft:lava'), Fluid.of('minecraft:water') ]
    ).id('kubejs/create_mechanical_extruder/cobblestone');
    event.recipes.create_mechanical_extruder.extruding(Item.of('minecraft:stone'),
        [ Fluid.of('minecraft:lava'), Fluid.of('minecraft:water') ]
    ).catalyst('minecraft:stone').requiredBonks(2).id('kubejs/create_mechanical_extruder/stone');
    event.recipes.create_mechanical_extruder.extruding(Item.of('minecraft:andesite'),
        [ Fluid.of('minecraft:lava'), Fluid.of('minecraft:water') ]
    ).catalyst('minecraft:andesite').requiredBonks(2).id('kubejs/create_mechanical_extruder/andesite');
    event.recipes.create_mechanical_extruder.extruding(Item.of('minecraft:diorite'),
        [ Fluid.of('minecraft:lava'), Fluid.of('minecraft:water') ]
    ).catalyst('minecraft:diorite').requiredBonks(2).id('kubejs/create_mechanical_extruder/diorite');
    event.recipes.create_mechanical_extruder.extruding(Item.of('minecraft:granite'),
        [ Fluid.of('minecraft:lava'), Fluid.of('minecraft:water') ]
    ).catalyst('minecraft:granite').requiredBonks(2).id('kubejs/create_mechanical_extruder/granite');
});