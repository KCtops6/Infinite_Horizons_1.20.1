ServerEvents.recipes(event => {
    // ['mysticalagriculture:prosperity_ingot', 'mysticalagriculture:supremium_essence', 'mysticalagriculture:supremium_ingot']
    event.recipes.thermal.smelter('mysticalagriculture:supremium_ingot', ['mysticalagriculture:prosperity_ingot', 'mysticalagriculture:supremium_essence'])
})