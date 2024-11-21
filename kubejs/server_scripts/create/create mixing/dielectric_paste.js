// https://kubejs.com/wiki/addons/create#mixing
ServerEvents.recipes(event => {
    event.recipes.createMixing('48x powah:dielectric_paste', [
        '3x #minecraft:coals',
        '2x minecraft:clay_ball',
        Fluid.lava(1000)
    ]).heated()
})