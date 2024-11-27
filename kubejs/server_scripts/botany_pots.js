ServerEvents.recipes(event => {
    event.recipes.botanypots.crop(
        'mysticalagriculture:red_alloy_seeds', // seed item
        ['minecraft:dirt'], // categories that this crop can be planted on
        { block: "minecraft:candle" }, // display block
        [
            Item.of('mysticalagriculture:red_alloy_essence') // item
                .withChance(100) // weight of this entry compared to the others
                .withRolls(1), // the times this loot will be chosen (min, max)
            Item.of('mysticalagriculture:red_alloy_seeds') // item
                .withChance(1) // weight of this entry compared to the others
                .withRolls(1), // the times this loot will be chosen (min, max)
            Item.of('mysticalagriculture:fertilized_essence') // item
                .withChance(1) // weight of this entry compared to the others
                .withRolls(1) // the times this loot will be chosen (min, max)
            // for example, when chosen this will give 1 to 2 candles
        ],
        10, // growthTicks
        1, // optional, growthModifier - this can be set to 1 in most cases
    )
})