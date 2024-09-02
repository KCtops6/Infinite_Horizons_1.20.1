ServerEvents.recipes(event => {
    // ['mysticalagriculture:prosperity_ingot_block', 'mysticalagriculture:supremium_block', 'mysticalagriculture:supremium_ingot_block']
    event.recipes.thermal.smelter('mysticalagriculture:supremium_ingot_block', ['mysticalagriculture:prosperity_ingot_block', 'mysticalagriculture:supremium_block'])
})