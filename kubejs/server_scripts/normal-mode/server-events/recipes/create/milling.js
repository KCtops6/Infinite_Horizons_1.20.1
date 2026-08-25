// kubejs/server_scripts/milling-recipes.js
ServerEvents.recipes(event => {

    var isModLoaded = function(itemIdOrModId) {
        if (!itemIdOrModId) return false;
        var namespace = itemIdOrModId.indexOf(':') > -1 ? itemIdOrModId.split(':')[0] : itemIdOrModId;
        if (namespace === 'minecraft' || namespace === 'kubejs') return true;
        return Platform.isLoaded(namespace);
    };

    var recipes = [
        { input: 'minecraft:andesite', output: 'infinite_horizons_tweaks:andesite_gravel' },
        { input: 'minecraft:diorite', output: 'infinite_horizons_tweaks:diorite_gravel' },
        { input: 'minecraft:granite', output: 'infinite_horizons_tweaks:granite_gravel' },
        { input: 'minecraft:gravel', output: 'minecraft:sand' },
        { input: 'minecraft:tuff', output: 'infinite_horizons_tweaks:tuff_gravel' },
        { input: 'minecraft:sand', output: 'createsifter:dust' },
        { input: 'minecraft:cobbled_deepslate', output: 'infinite_horizons_tweaks:deepslate_gravel' },
        { input: 'minecraft:basalt', output: 'kubejs:basalt_gravel' },
        { input: 'create:limestone', output: 'kubejs:limestone_gravel' },
        { input: 'minecraft:ender_pearl', output: 'kubejs:ender_pearl_dust' }
    ];

    recipes.forEach(recipe => {
        try {
            var inputItem = recipe.input;
            var outputItem = recipe.output;

            if (isModLoaded(inputItem) && isModLoaded(outputItem)) {
                var cleanID = outputItem.replace(':', '_');
                event.custom({
                    type: "create:milling",
                    ingredients: [{ item: inputItem }],
                    processingTime: 800,
                    results: [{ item: outputItem }]
                }).id(`kubejs:milling/${cleanID}`);
            }
        } catch (e) {
            console.warn(`[KubeJS] Failed to safely register milling recipe for ${recipe.input}: ${e}`);
        }
    });

    if (isModLoaded('pamhc2foodcore')) {
        var meats = ['rabbit', 'mutton', 'pork', 'beef', 'chicken'];
        meats.forEach(meat => {
            try {
                event.custom({
                    type: "create:milling",
                    ingredients: [{ tag: `forge:raw_${meat}` }],
                    processingTime: 800,
                    results: [{ item: `pamhc2foodcore:ground${meat}item` }]
                }).id(`kubejs:milling/ground_${meat}`);
            } catch (e) {
                console.warn(`[KubeJS] Failed to register Pam's meat recipe for ${meat}: ${e}`);
            }
        });
    }

    if (isModLoaded('pamhc2foodcore')) {
        try {
            event.custom({
                type: "create:milling",
                ingredients: [{ tag: 'forge:fishes' }],
                processingTime: 800,
                results: [{ item: 'pamhc2foodcore:groundfishitem' }]
            }).id('kubejs:milling/ground_fish');
        } catch (e) {
            console.warn(`[KubeJS] Failed to register ground fish milling: ${e}`);
        }
    }

    if (isModLoaded('gtceu')) {
        try {
            event.custom({
                type: "create:milling",
                ingredients: [{ item: 'minecraft:calcite' }],
                processingTime: 800,
                results: [{ item: 'gtceu:raw_calcite' }]
            }).id('kubejs:milling/calcite_to_gt_raw_calcite');
        } catch (e) {
            console.warn(`[KubeJS] Failed to register Calcite to GregTech Calcite recipe: ${e}`);
        }
    }

    try {
        event.custom({
            type: "create:milling",
            ingredients: [{ item: 'infinite_horizons_tweaks:granite_gravel' }],
            processingTime: 800,
            results: [{ item: 'minecraft:red_sand' }]
        }).id('kubejs:milling/granite_gravel_to_red_sand');
    } catch (e) {
        console.warn(`[KubeJS] Failed to register granite gravel to red sand recipe: ${e}`);
    }
});