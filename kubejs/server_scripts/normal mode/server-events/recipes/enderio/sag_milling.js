// https://github.com/AlmostReliable/kubejs-enderio/wiki/Recipes060#alloy-smelting
ServerEvents.recipes(event => {
    const recipes = [
        {
            outputs: ["kubejs:apatite_dust"],
            input: "kubejs:apatite_gem",
            energy: 4000,
            bonus: EnderIOBonusType.NONE
        },
        {
            outputs: ["kubejs:brass_dust"],
            input: "kubejs:brass_ingot",
            energy: 2000,
            bonus: EnderIOBonusType.NONE
        },
        {
            outputs: ["kubejs:bronze_dust"],
            input: "kubejs:bronze_ingot",
            energy: 2000,
            bonus: EnderIOBonusType.NONE
        },
        {
            outputs: ["kubejs:cinnabar_dust"],
            input: "kubejs:cinnabar_gem",
            energy: 4000,
            bonus: EnderIOBonusType.NONE
        },
        {
            outputs: ["kubejs:constantan_dust"],
            input: "kubejs:constantan_ingot",
            energy: 2000,
            bonus: EnderIOBonusType.NONE
        },
        {
            outputs: ["kubejs:copper_dust"],
            input: "minecraft:copper_ingot",
            energy: 2000,
            bonus: EnderIOBonusType.NONE
        },
        {
            outputs: ["kubejs:diamond_dust"],
            input: "minecraft:diamond",
            energy: 4000,
            bonus: EnderIOBonusType.NONE
        },
        {
            outputs: ["kubejs:electrum_dust"],
            input: "kubejs:electrum_ingot",
            energy: 2000,
            bonus: EnderIOBonusType.NONE
        },
        {
            outputs: ["kubejs:emerald_dust"],
            input: "minecraft:emerald",
            energy: 4000,
            bonus: EnderIOBonusType.NONE
        },
        {
            outputs: ["kubejs:enderium_dust"],
            input: "kubejs:enderium_ingot",
            energy: 2000,
            bonus: EnderIOBonusType.NONE
        },
        {
            outputs: ["kubejs:invar_dust"],
            input: "kubejs:invar_ingot",
            energy: 2000,
            bonus: EnderIOBonusType.NONE
        },
        {
            outputs: ["kubejs:lead_dust"],
            input: "kubejs:lead_ingot",
            energy: 2000,
            bonus: EnderIOBonusType.NONE
        },
        {
            outputs: ["kubejs:lumium_dust"],
            input: "kubejs:lumium_ingot",
            energy: 2000,
            bonus: EnderIOBonusType.NONE
        },
        {
            outputs: ["kubejs:netherite_dust"],
            input: "minecraft:netherite_ingot",
            energy: 2000,
            bonus: EnderIOBonusType.NONE
        },
        {
            outputs: ["kubejs:nickel_dust"],
            input: "kubejs:nickel_ingot",
            energy: 2000,
            bonus: EnderIOBonusType.NONE
        },
        {
            outputs: ["kubejs:niter_dust"],
            input: "kubejs:niter_gem",
            energy: 4000,
            bonus: EnderIOBonusType.NONE
        },
        {
            outputs: ["kubejs:osmium_dust"],
            input: "kubejs:osmium_ingot",
            energy: 2000,
            bonus: EnderIOBonusType.NONE
        },
        {
            outputs: ["kubejs:signalum_dust"],
            input: "kubejs:signalum_ingot",
            energy: 2000,
            bonus: EnderIOBonusType.NONE
        },
        {
            outputs: ["kubejs:silver_dust"],
            input: "kubejs:silver_ingot",
            energy: 2000,
            bonus: EnderIOBonusType.NONE
        },
        {
            outputs: ["kubejs:tin_dust"],
            input: "kubejs:tin_ingot",
            energy: 2000,
            bonus: EnderIOBonusType.NONE
        },
        {
            outputs: ["kubejs:uranium_dust"],
            input: "kubejs:uranium_ingot",
            energy: 2000,
            bonus: EnderIOBonusType.NONE
        },
        {
            outputs: ["kubejs:zinc_dust"],
            input: "kubejs:zinc_ingot",
            energy: 2000,
            bonus: EnderIOBonusType.NONE
        }
    ]
    recipes.forEach(recipe => {
        event.recipes.enderio.sag_milling(
            recipe.outputs,
            recipe.input,
            recipe.energy,
            recipe.bonus
        )
    })
})