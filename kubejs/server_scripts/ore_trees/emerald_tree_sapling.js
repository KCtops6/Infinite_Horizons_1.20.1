/**
 * EMERALD TREE SAPLING
 * 
 * 'mysticalagriculture:wood_essence'
 * 'mysticalagriculture:emerald_essence'
 * 'ore_tree:emerald_tree_sapling'
 */
ServerEvents.recipes(event => {
    event.remove(
        {
            output: 'ore_tree:emerald_tree_sapling'
        }
    )
    event.shaped(
        Item.of('ore_tree:emerald_tree_sapling', 1),
        [
          'SSS',
          'SNS',
          'SSS'
        ],
        {
          S: 'mysticalagriculture:emerald_essence',
          N: 'mysticalagriculture:wood_essence'
        }
    )
})