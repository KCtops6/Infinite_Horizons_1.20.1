ServerEvents.recipes(event => {
    // ['mysticalagriculture:prosperity_ingot', 'mysticalagriculture:tertium_essence', 'mysticalagriculture:tertium_ingot']
    event.recipes.thermal.smelter('mysticalagriculture:tertium_ingot', ['mysticalagriculture:prosperity_ingot', 'mysticalagriculture:tertium_essence'])
})