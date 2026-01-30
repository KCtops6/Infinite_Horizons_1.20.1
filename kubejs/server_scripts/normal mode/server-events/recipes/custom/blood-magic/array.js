ServerEvents.recipes(event => {
    const recipes = [
        { addedinput: "bloodmagic:etherealslate", baseinput: 'kubejs:infernal_reagent', output: "kubejs:infernal_sigil" },
        { addedinput: "bloodmagic:etherealslate", baseinput: 'kubejs:voidwalker_reagent', output: "kubejs:voidwalker_sigil" }
    ]
    recipes.forEach(recipe => {
        event.custom({
            type: "bloodmagic:array",
            addedinput: {
                item: recipe.addedinput
            },
            baseinput: {
                item: recipe.baseinput
            },
            output: {
                item: recipe.output
            },
        });
    });
});