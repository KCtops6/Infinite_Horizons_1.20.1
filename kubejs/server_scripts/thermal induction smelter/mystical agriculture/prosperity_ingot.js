ServerEvents.recipes(event => {
    // ['minecraft:iron_ingot', '4x mysticalagriculture:prosperity_shard', 'mysticalagriculture:prosperity_ingot']
    event.recipes.thermal.smelter('mysticalagriculture:prosperity_ingot', ['minecraft:iron_ingot', '4x mysticalagriculture:prosperity_shard'])
})