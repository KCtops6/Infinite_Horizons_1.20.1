ServerEvents.recipes(event => {
    // ['mysticalagriculture:prosperity_ingot_block', 'mysticalagriculture:prudentium_block', 'mysticalagriculture:prudentium_ingot_block']
    event.recipes.thermal.smelter('mysticalagriculture:prudentium_ingot_block', ['mysticalagriculture:prosperity_ingot_block', 'mysticalagriculture:prudentium_block'])
})