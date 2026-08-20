ServerEvents.recipes(event => {
    event.custom({
        type: "industrialforegoing:stonework_generate",
        lavaConsume: 500,
        lavaNeed: 1000,
        output: {
            count: 1,
            item: "minecraft:end_stone"
        },
        waterConsume: 750,
        waterNeed: 1000
    }).id('kubejs:industrialforegoing/stonework_generate/minecraft/end_stone');
    event.custom({
        type: "industrialforegoing:stonework_generate",
        lavaConsume: 0,
        lavaNeed: 1000,
        output: {
            count: 1,
            item: "minecraft:deepslate"
        },
        waterConsume: 500,
        waterNeed: 1000
    }).id('kubejs:industrialforegoing/stonework_generate/minecraft/deepslate');
});