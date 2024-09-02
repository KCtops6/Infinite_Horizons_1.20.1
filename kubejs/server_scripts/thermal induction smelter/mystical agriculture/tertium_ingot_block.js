ServerEvents.recipes(event => {
    // ['mysticalagriculture:prosperity_ingot_block', 'mysticalagriculture:tertium_block', 'mysticalagriculture:tertium_ingot_block']
    event.recipes.thermal.smelter('mysticalagriculture:tertium_ingot_block', ['mysticalagriculture:prosperity_ingot_block', 'mysticalagriculture:tertium_block'])
})