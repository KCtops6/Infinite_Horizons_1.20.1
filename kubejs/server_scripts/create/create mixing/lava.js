// https://kubejs.com/wiki/addons/create#mixing
ServerEvents.recipes(event => {
    event.recipes.createMixing(Fluid.lava(25), ['twigs:pebble']).heated()
})