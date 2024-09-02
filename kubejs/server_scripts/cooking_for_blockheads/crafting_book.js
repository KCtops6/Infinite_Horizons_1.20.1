ServerEvents.recipes(event => {
    event.remove({
        output: 'cookingforblockheads:crafting_book'
    })
    event.shaped(
        Item.of('cookingforblockheads:crafting_book', 1),
        [
          ' A ',
          'BCB',
          ' A '
        ],
        {
          A: 'minecraft:emerald',
          B: 'minecraft:crafting_table',
          C: 'cookingforblockheads:recipe_book'
        }
    )
})