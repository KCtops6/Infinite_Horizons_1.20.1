/**
 * IRON TREE SAPLING
 * 
 * 'mysticalagriculture:wood_essence'
 * 'mysticalagriculture:iron_essence'
 * 'ore_tree:iron_tree_sapling'
 */
ServerEvents.recipes(event => {
    event.remove(
        {
            output: 'ore_tree:iron_tree_sapling'
        }
    )
    event.shaped(
        Item.of('ore_tree:iron_tree_sapling', 1),
        [
          'SSS',
          'SNS',
          'SSS'
        ],
        {
          S: 'mysticalagriculture:iron_essence',
          N: 'mysticalagriculture:wood_essence'
        }
    )
})