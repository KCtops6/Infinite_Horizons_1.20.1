/**
 * QUARTZ TREE SAPLING
 * 
 * 'mysticalagriculture:wood_essence'
 * 'mysticalagriculture:nether_quartz_essence'
 * 'ore_tree:quartz_tree_sapling'
 */
ServerEvents.recipes(event => {
    event.remove(
        {
            output: 'ore_tree:quartz_tree_sapling'
        }
    )
    event.shaped(
        Item.of('ore_tree:quartz_tree_sapling', 1),
        [
          'SSS',
          'SNS',
          'SSS'
        ],
        {
          S: 'mysticalagriculture:nether_quartz_essence',
          N: 'mysticalagriculture:wood_essence'
        }
    )
})