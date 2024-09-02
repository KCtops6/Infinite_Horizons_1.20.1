ServerEvents.recipes(event => {
    /**
     * 'minecraft:oak_log'
     * 'minecraft:iron_ingot'
     * 'minecraft:hopper'
     */
    event.shaped(
        Item.of('minecraft:hopper', 1),
        [
          'ABA',
          'ABA',
          ' A '
        ],
        {
          B:    '#minecraft:logs',
          A:    'minecraft:iron_ingot'
        }
      )
})