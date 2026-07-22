// https://github.com/AlmostReliable/kubejs-enderio/wiki/Recipes060#enchanting
ServerEvents.recipes(event => {
    const recipes = [
        { enchantment: "forbidden_arcanus:permafrost", input: "forbidden_arcanus:mundabitur_dust", cost_multiplier: 1 },
        { enchantment: "create_sa:above_the_clouds", input: "create_sa:steam_engine", cost_multiplier: 2 },
        { enchantment: "create:potato_recovery", input: "minecraft:potato", cost_multiplier: 1 },
        { enchantment: "create:capacity", input: "minecraft:copper_ingot", cost_multiplier: 3},
        { enchantment: "create_sa:gravity_gun", input: "create_sa:hydraulic_engine", cost_multiplier: 1},
        { enchantment: "create_sa:digging", input: "create_sa:brass_drill_head", cost_multiplier: 1},
        { enchantment: "create_sa:hellfire", input: "create_sa:heat_engine", cost_multiplier: 1},
        { enchantment: "create_sa:impact", input: "create:wisk", cost_multiplier: 1},
    ];
    recipes.forEach(recipe => {
        event.recipes.enderio.enchanting(
            recipe.enchantment,
            recipe.input,
            recipe.cost_multiplier
        )
    });
});