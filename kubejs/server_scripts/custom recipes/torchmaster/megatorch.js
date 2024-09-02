ServerEvents.recipes(event => {
    event.remove({output: 'torchmaster:megatorch' })
    event.shaped(
        Item.of('torchmaster:megatorch', 1),
        [
          'DDD',
          'BCB',
          'ACA'
        ],
        {
          A: 'minecraft:emerald_block',
          B: 'minecraft:emerald',
          C: '#minecraft:logs',
          D: 'minecraft:torch'
        }
      )
})