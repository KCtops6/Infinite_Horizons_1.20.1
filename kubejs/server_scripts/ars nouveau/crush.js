ServerEvents.recipes(event => {
    // simple crushing input to output mappings (no chanced outputs)
    const recipes = [
        { input: 'minecraft:sand', output: 'createsifter:dust'},
        { input: 'minecraft:gravel', output: 'createsifter:sand'},
        { input: 'minecraft:netherrack', output: 'kubejs:netherrack_gravel'},
        { input: 'minecraft:basalt', output: 'kubejs:basalt_gravel'},
        { input: 'minecraft:end_stone', output: 'kubejs:end_stone_gravel'}
    ]
    recipes.forEach(recipe => {
        event.custom({
            type: "ars_nouveau:crush",
            input: {
                item: recipe.input
            },
            output: [
                {
                    chance: 1.0,
                    maxRange: 1,
                    stack: {
                        count: 1,
                        item: recipe.output
                    }
                }
            ]
        });
    });
});