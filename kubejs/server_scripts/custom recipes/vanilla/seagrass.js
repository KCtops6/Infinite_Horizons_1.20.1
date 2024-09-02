ServerEvents.recipes(event => {
    /**
     * 'minecraft:seagrass'
     * 'mysticalagriculture:water_essence'
     * 'mysticalagriculture:nature_essence'
     */
    event.shaped(
        Item.of('minecraft:seagrass', 8),
        [
          ' A ',
          'ABA',
          'BBB'
        ],
        {
          A: 'mysticalagriculture:water_essence',
          B: 'mysticalagriculture:nature_essence'
        }
      )
})