// https://kubejs.com/wiki/addons/create#mixing
ServerEvents.recipes(event => {
    event.recipes.createMixing('projecte:low_covalence_dust',
        [
            'minecraft:redstone',
            'minecraft:glowstone_dust',
            'ae2:ender_dust'
        ]
    )
})
