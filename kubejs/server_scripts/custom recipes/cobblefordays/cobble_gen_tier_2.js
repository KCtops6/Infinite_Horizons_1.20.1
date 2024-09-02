ServerEvents.recipes(event => {
    event.remove({output: 'cobblefordays:tier_2' })
    event.shaped(
        Item.of('cobblefordays:tier_2', 1),
        [
          'LLL',
          'SMS',
          'CPC'
        ],
        {
          L: '#forge:cobblestone',
          M: 'cobblefordays:tier_1',
          S: 'mekanism:structural_glass',
          C: 'create:cogwheel',
          P: 'create:precision_mechanism'
        }
    )
})