ServerEvents.recipes(event => {
    // --- Ender IO Alloys ---

    // Copper Alloy Ingot
    event.custom({
        type: "thermal:smelter",
        ingredients: [
            { value: [{ tag: "forge:ingots/copper" }, { tag: "forge:dusts/copper" }], count: 1 },
            { tag: "forge:silicon", count: 1 }
        ],
        result: [{ item: "enderio:copper_alloy_ingot", count: 1 }],
        energy: 3200
    }).id('kubejs:thermal/smelter/copper_alloy_ingot');

    // Energetic Alloy Ingot
    event.custom({
        type: "thermal:smelter",
        ingredients: [
            { tag: "forge:dusts/redstone", count: 1 },
            { value: [{ tag: "forge:ingots/gold" }, { tag: "forge:dusts/gold" }], count: 1 },
            { tag: "forge:dusts/glowstone", count: 1 }
        ],
        result: [{ item: "enderio:energetic_alloy_ingot", count: 1 }],
        energy: 4800
    }).id('kubejs:thermal/smelter/energetic_alloy_ingot');

    // Vibrant Alloy Ingot
    event.custom({
        type: "thermal:smelter",
        ingredients: [
            { item: "enderio:energetic_alloy_ingot", count: 1 },
            { value: [{ tag: "forge:ingots/ender_pearl" }, { tag: "forge:dusts/ender_pearl" }], count: 1 }
        ],
        result: [{ item: "enderio:vibrant_alloy_ingot", count: 1 }],
        energy: 4800
    }).id('kubejs:thermal/smelter/vibrant_alloy_ingot');

    // Redstone Alloy Ingot
    event.custom({
        type: "thermal:smelter",
        ingredients: [
            { tag: "forge:dusts/redstone", count: 1 },
            { tag: "forge:silicon", count: 1 }
        ],
        result: [{ item: "enderio:redstone_alloy_ingot", count: 1 }],
        energy: 3200
    }).id('kubejs:thermal/smelter/redstone_alloy_ingot');

    // Conductive Alloy Ingot
    event.custom({
        type: "thermal:smelter",
        ingredients: [
            { item: "enderio:copper_alloy_ingot", count: 1 },
            { value: [{ tag: "forge:ingots/iron" }, { tag: "forge:dusts/iron" }], count: 1 },
            { tag: "forge:dusts/redstone", count: 1 }
        ],
        result: [{ item: "enderio:conductive_alloy_ingot", count: 1 }],
        energy: 4800
    }).id('kubejs:thermal/smelter/conductive_alloy_ingot');

    // Pulsating Alloy Ingot
    event.custom({
        type: "thermal:smelter",
        ingredients: [
            { value: [{ tag: "forge:ingots/iron" }, { tag: "forge:dusts/iron" }], count: 1 },
            { value: [{ tag: "forge:ingots/ender_pearl" }, { tag: "forge:dusts/ender_pearl" }], count: 1 }
        ],
        result: [{ item: "enderio:pulsating_alloy_ingot", count: 1 }],
        energy: 4800
    }).id('kubejs:thermal/smelter/pulsating_alloy_ingot');

    // Dark Steel Ingot
    event.custom({
        type: "thermal:smelter",
        ingredients: [
            { value: [{ tag: "forge:ingots/iron" }, { tag: "forge:dusts/iron" }], count: 1 },
            { tag: "forge:dusts/coal", count: 1 },
            { item: "minecraft:obsidian", count: 1 }
        ],
        result: [{ item: "enderio:dark_steel_ingot", count: 1 }],
        energy: 6400
    }).id('kubejs:thermal/smelter/dark_steel_ingot');

    // Soularium Ingot
    event.custom({
        type: "thermal:smelter",
        ingredients: [
            { item: "minecraft:soul_sand", count: 1 },
            { value: [{ tag: "forge:ingots/gold" }, { tag: "forge:dusts/gold" }], count: 1 }
        ],
        result: [{ item: "enderio:soularium_ingot", count: 1 }],
        energy: 5600
    }).id('kubejs:thermal/smelter/soularium_ingot');

    // End Steel Ingot
    event.custom({
        type: "thermal:smelter",
        ingredients: [
            { item: "minecraft:end_stone", count: 1 },
            { item: "enderio:dark_steel_ingot", count: 1 },
            { item: "minecraft:obsidian", count: 1 }
        ],
        result: [{ item: "enderio:end_steel_ingot", count: 1 }],
        energy: 5600
    }).id('kubejs:thermal/smelter/end_steel_ingot');


    // --- Mystical Agriculture & Agradditions ---

    const essences = ['inferium', 'prudentium', 'tertium', 'imperium', 'supremium', 'insanium'];
    essences.forEach(essence => {
        // Determine the correct namespace
        let namespace = (essence === 'insanium') ? 'mysticalagradditions' : 'mysticalagriculture';

        // Essence Ingots
        event.custom({
            type: "thermal:smelter",
            ingredients: [
                { item: 'mysticalagriculture:prosperity_ingot', count: 1 },
                { item: `${namespace}:${essence}_essence`, count: 1 }
            ],
            result: [{ item: `${namespace}:${essence}_ingot`, count: 1 }],
            energy: 500
        }).id(`kubejs:thermal/smelter/${essence}_ingot`);

        // Essence Blocks
        event.custom({
            type: "thermal:smelter",
            ingredients: [
                { item: 'mysticalagriculture:prosperity_ingot_block', count: 1 },
                { item: `${namespace}:${essence}_block`, count: 1 }
            ],
            result: [{ item: `${namespace}:${essence}_ingot_block`, count: 1 }],
            energy: 4500
        }).id(`kubejs:thermal/smelter/${essence}_ingot_block`);
    });

    // Prosperity Ingot
    event.custom({
        type: "thermal:smelter",
        ingredients: [
            { value: [{ tag: "forge:ingots/iron" }, { tag: "forge:dusts/iron" }], count: 1 },
            { item: "mysticalagriculture:prosperity_shard", count: 4 }
        ],
        result: [{ item: "mysticalagriculture:prosperity_ingot", count: 1 }],
        energy: 500
    }).id('kubejs:thermal/smelter/prosperity_ingot');


    // --- Nature's Aura ---

    // Depth Ingot
    event.custom({
        type: "thermal:smelter",
        ingredients: [
            { item: "naturesaura:tainted_gold", count: 2 },
            { item: "naturesaura:sky_ingot", count: 2 },
            { item: "minecraft:netherite_scrap", count: 1 }
        ],
        result: [{ item: "naturesaura:depth_ingot", count: 1 }],
        energy: 500
    }).id('kubejs:thermal/smelter/depth_ingot');
})