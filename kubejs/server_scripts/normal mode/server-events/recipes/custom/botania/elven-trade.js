ServerEvents.recipes(event => {
    event.custom({
        type: "botania:elven_trade",
        ingredients: [
            {
                item: "botania:ender_air_bottle"
            }
        ],
        output: [
            {
                item: "minecraft:dragon_breath"
            }
        ]
    }).id('kubejs:botania/elven_trade/minecraft/dragon_breath');
});