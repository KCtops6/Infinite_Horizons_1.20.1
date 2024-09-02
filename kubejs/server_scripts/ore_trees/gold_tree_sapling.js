/**
 * GOLD TREE SAPLING
 * 
 * 'mysticalagriculture:wood_essence'
 * 'mysticalagriculture:gold_essence'
 * 'ore_tree:gold_tree_sapling'
 */
ServerEvents.recipes(event => {
    event.remove(
        {
            output: 'ore_tree:gold_tree_sapling'
        }
    )
    event.shaped(
        Item.of('ore_tree:gold_tree_sapling', 1),
        [
          'SSS',
          'SNS',
          'SSS'
        ],
        {
          S: 'mysticalagriculture:gold_essence',
          N: 'mysticalagriculture:wood_essence'
        }
    )
})