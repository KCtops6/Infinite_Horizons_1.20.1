// https://gregtechceu.github.io/gtceu-modern-docs/Modpacks/Other-Topics/Adding-and-Removing-Recipes/
ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('redstone_arsenal:flux_dust')
        .itemInputs(
            'gtceu:gold_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:redstone', (144 * 5))
        )
        .itemOutputs(
            '2x redstone_arsenal:flux_dust'
        )
        .duration(100)
        .EUt(30)
})