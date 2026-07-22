ServerEvents.recipes(event => {
    const recipes = [
        { input: 'minecraft:sand', output: 'createsifter:dust'},
        { input: 'minecraft:gravel', output: 'minecraft:sand'},
        { input: 'minecraft:netherrack', output: 'kubejs:netherrack_gravel'},
        { input: 'minecraft:basalt', output: 'kubejs:basalt_gravel'},
        { input: 'minecraft:end_stone', output: 'kubejs:end_stone_gravel'}
    ]

    recipes.forEach(recipe => {
        let recipeId = `ars_nouveau:crushing/${recipe.input.split(':')[1]}`

        event.custom({
            type: "ars_nouveau:crush",
            input: {
                item: recipe.input
            },
            output: [
                {
                    item: recipe.output,
                    count: 1,
                    chance: 1.0
                }
            ]
        }).id(recipeId);
    });
});