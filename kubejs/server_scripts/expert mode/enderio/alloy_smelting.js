//packmode: expert

// https://github.com/AlmostReliable/kubejs-enderio/wiki/Recipes060#alloy-smelting
ServerEvents.recipes(event => {
    const recipes = [
        {
            result: Item.of("enderio:dark_steel_ingot", 1),
            inputs: ["kubejs:steel_ingot", "kubejs:obsidian_dust"],
            energy: 6400,
            experience: 0,
            is_smelting: false
        },
        {
            result: Item.of("enderio:end_steel_ingot", 1),
            inputs: ["enderio:dark_steel_ingot", "kubejs:obsidian_dust", "kubejs:end_stone_dust"],
            energy: 6400,
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