// kubejs\server_scripts\for-each-recipe.js
ServerEvents.recipes(event => {
    const GRINDER = 'pamhc2foodcore:grinderitem';
    const MIXING_BOWL = 'pamhc2foodcore:mixingbowlitem';
    const SAUCEPAN = 'pamhc2foodcore:saucepanitem';
    event.forEachRecipe({ input: GRINDER }, recipe => {
        if (recipe.getOriginalRecipeIngredients().size() == 2) {
            let ingredientsJSON = [];
            recipe.getOriginalRecipeIngredients().forEach(i => {
                if (!i.test(GRINDER)) {
                    ingredientsJSON.push(i.toJson());
                }
            });
            let resultJson1 = [{
                count: recipe.originalRecipeResult.count,
                item: recipe.originalRecipeResult.id
            }];
            let resultJson2 = [{
                count: recipe.originalRecipeResult.count * 2,
                item: recipe.originalRecipeResult.id
            }];
            let cleanID = recipe.originalRecipeResult.id.replace(':', '_');
            event.custom({
                type: 'create:milling',
                ingredients: ingredientsJSON,
                results: resultJson1,
                heatRequirement: 'heated'
            }).id(`create:milling/kubejs/${cleanID}`);
            event.custom({
                type: 'create:crushing',
                ingredients: ingredientsJSON,
                results: resultJson2,
                heatRequirement: 'heated'
            }).id(`create:crushing/kubejs/${cleanID}`);
        }
    });
    event.forEachRecipe({ input: MIXING_BOWL }, recipe => {
        let ingredientsJSON = [];
        recipe.getOriginalRecipeIngredients().forEach(i => {
            if (!i.test(MIXING_BOWL)) {
                ingredientsJSON.push(i.toJson());
            }
        });
        let resultJson = [{
            count: recipe.originalRecipeResult.count,
            item: recipe.originalRecipeResult.id
        }];
        let cleanID = recipe.originalRecipeResult.id.replace(':', '_');
        event.custom({
            type: 'create:mixing',
            ingredients: ingredientsJSON,
            results: resultJson
        }).id(`create:mixing/kubejs/${cleanID}`);
    });
    event.forEachRecipe({ input: SAUCEPAN }, recipe => {
        let ingredientsJSON = [];
        recipe.getOriginalRecipeIngredients().forEach(i => {
            if (!i.test(SAUCEPAN)) {
                ingredientsJSON.push(i.toJson());
            }
        });
        let resultJson = [{
            count: recipe.originalRecipeResult.count,
            item: recipe.originalRecipeResult.id
        }];
        let cleanID = recipe.originalRecipeResult.id.replace(':', '_');
        event.custom({
            type: 'create:mixing',
            ingredients: ingredientsJSON,
            results: resultJson,
            heatRequirement: 'heated'
        }).id(`create:mixing/kubejs/${cleanID}`);
    });
});