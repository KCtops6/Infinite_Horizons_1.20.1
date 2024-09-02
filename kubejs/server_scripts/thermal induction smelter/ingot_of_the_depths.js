ServerEvents.recipes(event => {
    // ['2x naturesaura:tainted_gold', '2x naturesaura:sky_ingot', 'minecraft:netherite_scrap', 'naturesaura:depth_ingot']
    event.recipes.thermal.smelter('naturesaura:depth_ingot', ['2x naturesaura:tainted_gold', '2x naturesaura:sky_ingot', 'minecraft:netherite_scrap'])
})