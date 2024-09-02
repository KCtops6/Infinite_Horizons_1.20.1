ServerEvents.recipes(event => {
    // ['mysticalagriculture:prosperity_ingot', 'mysticalagriculture:imperium_essence', 'mysticalagriculture:imperium_ingot']
    event.recipes.thermal.smelter('mysticalagriculture:imperium_ingot', ['mysticalagriculture:prosperity_ingot', 'mysticalagriculture:imperium_essence'])
})