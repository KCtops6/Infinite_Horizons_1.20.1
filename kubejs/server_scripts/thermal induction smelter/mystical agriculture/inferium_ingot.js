ServerEvents.recipes(event => {
    // ['mysticalagriculture:prosperity_ingot', 'mysticalagriculture:inferium_essence', 'mysticalagriculture:inferium_ingot']
    event.recipes.thermal.smelter('mysticalagriculture:inferium_ingot', ['mysticalagriculture:prosperity_ingot', 'mysticalagriculture:inferium_essence'])
})