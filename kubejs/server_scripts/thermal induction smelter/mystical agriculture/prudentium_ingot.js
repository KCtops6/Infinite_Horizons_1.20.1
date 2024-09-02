ServerEvents.recipes(event => {
    // ['mysticalagriculture:prosperity_ingot', 'mysticalagriculture:prudentium_essence', 'mysticalagriculture:prudentium_ingot']
    event.recipes.thermal.smelter('mysticalagriculture:prudentium_ingot', ['mysticalagriculture:prosperity_ingot', 'mysticalagriculture:prudentium_essence'])
})