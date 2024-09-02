// ['minecraft:redstone', 'minecraft:glowstone_dust', 'ae2:ender_dust', 'projecte:low_covalence_dust']
ServerEvents.recipes(event => {
    event.recipes.createMixing('projecte:low_covalence_dust',
        [
            'minecraft:redstone',
            'minecraft:glowstone_dust',
            'ae2:ender_dust'
        ]
    )
})
