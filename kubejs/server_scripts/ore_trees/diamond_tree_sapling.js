/**
 * DIAMOND TREE SAPLING
 * 
 * 'mysticalagriculture:wood_essence'
 * 'mysticalagriculture:diamond_essence'
 * 'ore_tree:diamond_tree_sapling'
 */
ServerEvents.recipes(event => {
    event.remove(
        {
            output: 'ore_tree:diamond_tree_sapling'
        }
    )
    event.shaped(
        Item.of('ore_tree:diamond_tree_sapling', 1),
        [
          'SSS',
          'SNS',
          'SSS'
        ],
        {
          S: 'mysticalagriculture:diamond_essence',
          N: 'mysticalagriculture:wood_essence'
        }
    )
})