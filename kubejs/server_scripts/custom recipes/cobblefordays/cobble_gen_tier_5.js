ServerEvents.recipes(event => {
    event.remove({output: 'cobblefordays:tier_5' })
    event.shaped(
        Item.of('cobblefordays:tier_5', 1),
        [
          'LLL',
          'SMS',
          'CPC'
        ],
        {
          L: 'minecraft:diamond_block',
          M: 'cobblefordays:tier_4',
          S: 'mekanism:structural_glass',
          C: 'create:cogwheel',
          P: 'create:precision_mechanism'
        }
    )
})