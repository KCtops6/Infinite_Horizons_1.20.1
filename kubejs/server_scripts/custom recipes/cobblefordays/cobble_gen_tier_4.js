ServerEvents.recipes(event => {
    event.remove({output: 'cobblefordays:tier_4' })
    event.shaped(
        Item.of('cobblefordays:tier_4', 1),
        [
          'LLL',
          'SMS',
          'CPC'
        ],
        {
          L: 'minecraft:gold_block',
          M: 'cobblefordays:tier_3',
          S: 'mekanism:structural_glass',
          C: 'create:cogwheel',
          P: 'create:precision_mechanism'
        }
    )
})