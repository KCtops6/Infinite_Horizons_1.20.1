/**
 * COPPER TREE SAPLING
 * 
 * 'mysticalagriculture:wood_essence'
 * 'mysticalagriculture:copper_essence'
 * 'ore_tree:copper_tree_sapling'
 */
ServerEvents.recipes(event => {
    event.remove(
        {
            output: 'ore_tree:copper_tree_sapling'
        }
    )
    event.shaped(
        Item.of('ore_tree:copper_tree_sapling', 1),
        [
          'SSS',
          'SNS',
          'SSS'
        ],
        {
          S: 'mysticalagriculture:copper_essence',
          N: 'mysticalagriculture:wood_essence'
        }
    )
})