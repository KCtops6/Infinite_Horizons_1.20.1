/**
 * COAL TREE SAPLING
 * 
 * 'mysticalagriculture:wood_essence'
 * 'mysticalagriculture:coal_essence'
 * 'ore_tree:coal_tree_sapling'
 */
ServerEvents.recipes(event => {
    event.remove(
        {
            output: 'ore_tree:coal_tree_sapling'
        }
    )
    event.shaped(
        Item.of('ore_tree:coal_tree_sapling', 1),
        [
          'SSS',
          'SNS',
          'SSS'
        ],
        {
          S: 'mysticalagriculture:coal_essence',
          N: 'mysticalagriculture:wood_essence'
        }
    )
})