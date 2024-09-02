/**
 * 'mysticalagriculture:nether_essence'
 * 'mysticalagriculture:coal_essence'
 * 'mysticalagriculture:skeleton_essence'
 * 'mysticalagriculture:wither_skeleton_essence'
 */
ServerEvents.recipes(event => {
    event.recipes.createMixing('mysticalagriculture:wither_skeleton_essence',
        ['mysticalagriculture:nether_essence',
        'mysticalagriculture:coal_essence',
        'mysticalagriculture:skeleton_essence',
        Fluid.lava(250)]
    ).heated()
})