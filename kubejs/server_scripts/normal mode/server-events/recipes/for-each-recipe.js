// kubejs/server_scripts/for-each-recipe.js
ServerEvents.recipes(event => {
    var GRINDER = 'pamhc2foodcore:grinderitem';
    var MIXING_BOWL = 'pamhc2foodcore:mixingbowlitem';
    var SAUCEPAN = 'pamhc2foodcore:saucepanitem';

    var getSafeIngredients = function(recipe, tool) {
        var ingredients = [];
        try {
            var originalIngredients = recipe.getOriginalRecipeIngredients();
            if (!originalIngredients) return ingredients;

            originalIngredients.forEach(ingredient => {
                if (ingredient && !ingredient.isEmpty() && !ingredient.test(tool)) {
                    ingredients.push(ingredient.toJson());
                }
            });
        } catch (err) {
            console.error(`[KubeJS] Error parsing ingredients for recipe: ${recipe ? recipe.getId() : 'unknown'}`, err);
        }
        return ingredients;
    };

    var getSafeResult = function(recipe) {
        if (!recipe || !recipe.originalRecipeResult || recipe.originalRecipeResult.isEmpty()) {
            return null;
        }
        return {
            id: recipe.originalRecipeResult.id ? recipe.originalRecipeResult.id.toString() : null,
            count: recipe.originalRecipeResult.count || 1
        };
    };

    event.forEachRecipe({ input: GRINDER }, recipe => {
        try {
            var ingredients = recipe.getOriginalRecipeIngredients();
            if (!ingredients || ingredients.size() !== 2) return;

            var result = getSafeResult(recipe);
            if (!result || !result.id || result.id === 'pamhc2foodcore:flouritem') return;

            var ingredientsJSON = getSafeIngredients(recipe, GRINDER);
            if (ingredientsJSON.length === 0) return;

            var cleanID = result.id.replace(':', '_');

            event.custom({
                type: 'create:milling',
                ingredients: ingredientsJSON,
                results: [{ count: result.count, item: result.id }],
                heatRequirement: 'heated'
            }).id(`create:milling/kubejs/${cleanID}`);

            event.custom({
                type: 'create:crushing',
                ingredients: ingredientsJSON,
                results: [{ count: result.count * 2, item: result.id }],
                heatRequirement: 'heated'
            }).id(`create:crushing/kubejs/${cleanID}`);

        } catch (e) {
            console.warn(`[KubeJS] Failed to process Grinder recipe safely: ${e}`);
        }
    });

    event.forEachRecipe({ input: MIXING_BOWL }, recipe => {
        try {
            var result = getSafeResult(recipe);
            if (!result || !result.id) return;

            var ingredientsJSON = getSafeIngredients(recipe, MIXING_BOWL);
            if (ingredientsJSON.length === 0) return;

            var cleanID = result.id.replace(':', '_');

            event.custom({
                type: 'create:mixing',
                ingredients: ingredientsJSON,
                results: [{ count: result.count, item: result.id }]
            }).id(`create:mixing/kubejs/${cleanID}`);

        } catch (e) {
            console.warn(`[KubeJS] Failed to process Mixing Bowl recipe safely: ${e}`);
        }
    });

    event.forEachRecipe({ input: SAUCEPAN }, recipe => {
        try {
            var result = getSafeResult(recipe);
            if (!result || !result.id) return;

            var ingredientsJSON = getSafeIngredients(recipe, SAUCEPAN);
            if (ingredientsJSON.length === 0) return;

            var cleanID = result.id.replace(':', '_');

            event.custom({
                type: 'create:mixing',
                ingredients: ingredientsJSON,
                results: [{ count: result.count, item: result.id }],
                heatRequirement: 'heated'
            }).id(`create:mixing/kubejs/${cleanID}`);

        } catch (e) {
            console.warn(`[KubeJS] Failed to process Saucepan recipe safely: ${e}`);
        }
    });
});