ServerEvents.recipes(event => {
    event.remove({output: 'bountiful:bountyboard' })
    event.shaped(
        Item.of('bountiful:bountyboard', 1),
        [
          'ABA',
          'C C',
          'ABA'
        ],
        {
          A: '#minecraft:planks',
          B: '#minecraft:logs',
          C: 'minecraft:paper'
        }
      )
})