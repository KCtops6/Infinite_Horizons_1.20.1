// https://kubejs.com/wiki/addons/create#mixing
ServerEvents.recipes(event => {
    event.recipes.createMixing('mysticalagriculture:wither_skeleton_essence',
        ['mysticalagriculture:nether_essence',
        'mysticalagriculture:coal_essence',
        'mysticalagriculture:skeleton_essence',
        Fluid.lava(250)]
    ).heated()
})