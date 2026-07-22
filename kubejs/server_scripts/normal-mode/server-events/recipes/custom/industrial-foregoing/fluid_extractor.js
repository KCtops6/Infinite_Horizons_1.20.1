ServerEvents.recipes(event => {
    event.custom({
        type: "industrialforegoing:fluid_extractor",
        breakChance: 0.01,
        defaultRecipe: false,
        input: {
            item: "integrateddynamics:menril_log"
        },
        output: "{Amount:8,FluidName:\"integrateddynamics:menril_resin\"}",
        result: "integrateddynamics:menril_log_stripped"
    }).id('kubejs:industrialforegoing/fluid_extractor/integrateddynamics/menril_resin');
});