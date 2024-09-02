ServerEvents.recipes(event => {
    event.remove({output: 'cobblefordays:tier_1' })
    event.shaped(
        Item.of('cobblefordays:tier_1', 1),
        [
          'LLL',
          'SMS',
          'CPC'
        ],
        {
          L: '#minecraft:logs',
          M: 'create_mechanical_extruder:mechanical_extruder',
          S: 'mekanism:structural_glass',
          C: 'create:cogwheel',
          P: 'create:precision_mechanism'
        }
    )
})