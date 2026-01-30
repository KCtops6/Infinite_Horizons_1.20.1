ServerEvents.recipes(event => {
    event.remove({ type: 'create_mechanical_extruder:extruding' })
    event.recipes.create_mechanical_extruder.extruding(Item.of('minecraft:cobblestone'),
        [ Fluid.of('minecraft:lava'), Fluid.of('minecraft:water') ]
    ).id('kubejs/create_mechanical_extruder/cobblestone')
    event.recipes.create_mechanical_extruder.extruding(Item.of('minecraft:stone'),
        [ Fluid.of('minecraft:lava'), Fluid.of('minecraft:water') ]
    ).id('kubejs/create_mechanical_extruder/stone')
})