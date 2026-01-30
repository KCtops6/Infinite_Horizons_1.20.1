// https://gregtechceu.github.io/gtceu-modern-docs/Modpacks/Other-Topics/Adding-and-Removing-Recipes/
ServerEvents.recipes(event => {
    event.recipes.gtceu.autoclave('redstone_arsenal:flux_gem')
        .itemInputs(
            'minecraft:diamond'
        )
        .inputFluids(
            Fluid.of('gtceu:redstone', (144 * 2))
        )
        .itemOutputs(
            'redstone_arsenal:flux_gem'
        )
        .duration(100)
        .EUt(30)
})