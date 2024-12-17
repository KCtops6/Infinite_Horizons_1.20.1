ServerEvents.recipes(event => {
    // infernal reagent
    event.custom({
        type: "bloodmagic:alchemytable",
        input: [
            {
                item: "bloodmagic:reagentlava"
            },
            {
                item: 'extendedcrafting:enhanced_redstone_catalyst'
            },
            {
                item: "minecraft:nether_star"
            },
            {
                item: 'mysticalagriculture:soulium_dust'
            }
        ],
        output: {
            item: "kubejs:reagentinfernal"
        },
        syphon: 2000,
        ticks: 200,
        upgradeLevel: 5
    });

    // voidwalker reagent
    event.custom({
        type: "bloodmagic:alchemytable",
        input: [
            {
                item: "bloodmagic:reagentvoid"
            },
            {
                item: 'extendedcrafting:enhanced_ender_catalyst'
            },
            {
                item: 'apotheosis:infused_breath'
            },
            {
                item: "minecraft:dragon_egg"
            }
        ],
        output: {
            item: "kubejs:reagentvoidwalker"
        },
        syphon: 2000,
        ticks: 200,
        upgradeLevel: 5
    });
});