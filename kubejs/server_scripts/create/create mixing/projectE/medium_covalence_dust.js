// https://kubejs.com/wiki/addons/create#mixing
ServerEvents.recipes(event => {
    event.recipes.createMixing('projecte:medium_covalence_dust',
        [
            'projecte:low_covalence_dust',
            'waystones:warp_dust',
            'mysticalagriculture:soulium_dust',
            'thermal:quartz_dust'
        ]
    )
})
