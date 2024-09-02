/**
 * LAPIS TREE SAPLING
 * 
 * 'mysticalagriculture:wood_essence'
 * 'mysticalagriculture:lapis_lazuli_essence'
 * 'ore_tree:lapis_tree_sapling'
 */
ServerEvents.recipes(event => {
    event.remove(
        {
            output: 'ore_tree:lapis_tree_sapling'
        }
    )
    event.shaped(
        Item.of('ore_tree:lapis_tree_sapling', 1),
        [
          'SSS',
          'SNS',
          'SSS'
        ],
        {
          S: 'mysticalagriculture:lapis_lazuli_essence',
          N: 'mysticalagriculture:wood_essence'
        }
    )
})