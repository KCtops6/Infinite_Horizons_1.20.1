ServerEvents.recipes(event => {
    event.recipes.createMixing(Fluid.lava(25), ['twigs:pebble']).heated()
})