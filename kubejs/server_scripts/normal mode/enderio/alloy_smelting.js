// https://github.com/AlmostReliable/kubejs-enderio/wiki/Recipes060#alloy-smelting
ServerEvents.recipes(event => {
    const recipes = [
        {
            result: Item.of("kubejs:brass_ingot", 2),
            inputs: ["kubejs:zinc_ingot", "minecraft:copper_ingot"],
            energy: 6400,
            experience: 0,
            is_smelting: false
        },
        {
            result: Item.of("kubejs:bronze_ingot", 4),
            inputs: ["kubejs:tin_ingot", Item.of("minecraft:copper_ingot", 3)],
            energy: 6400,
            experience: 0,
            is_smelting: false
        },
        {
            result: Item.of("kubejs:constantan_ingot", 2),
            inputs: ["kubejs:nickel_ingot", "minecraft:copper_ingot"],
            energy: 6400,
            experience: 0,
            is_smelting: false
        },
        {
            result: Item.of("kubejs:electrum_ingot", 2),
            inputs: ["kubejs:silver_ingot", "minecraft:gold_ingot"],
            energy: 3200,
            experience: 0,
            is_smelting: false
        },
        {
            result: Item.of("kubejs:enderium_ingot", 2),
            inputs: ["kubejs:diamond_dust", Item.of("kubejs:lead_ingot", 3), Item.of("minecraft:ender_pearl", 2)],
            energy: 16000,
            experience: 0,
            is_smelting: false
        },
        {
            result: Item.of("kubejs:invar_ingot", 3),
            inputs: ["kubejs:nickel_ingot", Item.of("minecraft:iron_ingot", 2)],
            energy: 4800,
            experience: 0,
            is_smelting: false
        },
        {
            result: Item.of("kubejs:lumium_ingot", 4),
            inputs: ["kubejs:silver_ingot", Item.of("kubejs:tin_ingot", 3), "minecraft:glowstone_dust"],
            energy: 12000,
            experience: 0,
            is_smelting: false
        },
        {
            result: Item.of("kubejs:signalum_ingot", 4),
            inputs: ["kubejs:silver_ingot", Item.of("minecraft:copper_ingot", 3), Item.of("minecraft:redstone_dust", 4)],
            energy: 12000,
            experience: 0,
            is_smelting: false
        }
    ];
    recipes.forEach(recipe => {
        event.recipes.enderio.alloy_smelting(
            recipe.result,
            recipe.inputs,
            recipe.energy,
            recipe.experience,
            recipe.is_smelting
        )
    });
});