ServerEvents.recipes(event => {
    event.remove({output: 'cobblefordays:tier_3' })
    event.shaped(
        Item.of('cobblefordays:tier_3', 1),
        [
          'LLL',
          'SMS',
          'CPC'
        ],
        {
          L: 'minecraft:iron_block',
          M: 'cobblefordays:tier_2',
          S: 'mekanism:structural_glass',
          C: 'create:cogwheel',
          P: 'create:precision_mechanism'
        }
    )
})