ServerEvents.recipes(event => {
    // ['mysticalagriculture:prosperity_ingot', 'mysticalagradditions:insanium_essence', 'mysticalagradditions:insanium_ingot']
    event.recipes.thermal.smelter('mysticalagradditions:insanium_ingot', ['mysticalagriculture:prosperity_ingot', 'mysticalagradditions:insanium_essence'])
})