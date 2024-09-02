ServerEvents.recipes(event => {
    // ['mysticalagriculture:prosperity_ingot_block', 'mysticalagriculture:inferium_block', 'mysticalagriculture:inferium_ingot_block']
    event.recipes.thermal.smelter('mysticalagriculture:inferium_ingot_block', ['mysticalagriculture:prosperity_ingot_block', 'mysticalagriculture:inferium_block'])
})