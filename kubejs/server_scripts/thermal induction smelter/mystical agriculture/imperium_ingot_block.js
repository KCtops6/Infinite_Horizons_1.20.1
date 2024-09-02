ServerEvents.recipes(event => {
    // ['mysticalagriculture:prosperity_ingot_block', 'mysticalagriculture:imperium_block', 'mysticalagriculture:imperium_ingot_block']
    event.recipes.thermal.smelter('mysticalagriculture:imperium_ingot_block', ['mysticalagriculture:prosperity_ingot_block', 'mysticalagriculture:imperium_block'])
})