/**
 * REDSTONE TREE SAPLING
 * 
 * 'mysticalagriculture:wood_essence'
 * 'mysticalagriculture:redstone_essence'
 * 'ore_tree:redstone_tree_sapling'
 */
ServerEvents.recipes(event => {
    event.remove(
        {
            output: 'ore_tree:redstone_tree_sapling'
        }
    )
    event.shaped(
        Item.of('ore_tree:redstone_tree_sapling', 1),
        [
          'SSS',
          'SNS',
          'SSS'
        ],
        {
          S: 'mysticalagriculture:redstone_essence',
          N: 'mysticalagriculture:wood_essence'
        }
    )
})