ServerEvents.recipes(event => {
    event.shaped(
        Item.of('mysticalagriculture:soulstone_cobble', 24),
        [
          'SSS',
          'SNS',
          'SSS'
        ],
        {
          S: 'mysticalagriculture:stone_essence',
          N: 'mysticalagriculture:nether_essence'
        }
      )
})
//['mysticalagriculture:soulstone_cobble', 'mysticalagriculture:nether_essence', 'mysticalagriculture:stone_essence']