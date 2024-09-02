ServerEvents.recipes(event => {
    /**
     * 'minecraft:enchanted_golden_apple'
     * 'minecraft:golden_apple'
     * 'minecraft:gold_block'
     */
    event.shaped(
      Item.of('minecraft:enchanted_golden_apple', 1),
      [
        'AAA',
        'ABA',
        'AAA'
      ],
      {
        A: 'minecraft:gold_block',
        B: 'minecraft:golden_apple'
      }
    )
})