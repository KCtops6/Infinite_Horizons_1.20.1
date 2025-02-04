// https://gregtechceu.github.io/gtceu-modern-docs/Modpacks/Other-Topics/Adding-and-Removing-Recipes/
ServerEvents.recipes(event => {
    event.recipes.gtceu.autoclave('create:rose_quartz')
        .itemInputs(
            'minecraft:quartz'
        )
        .inputFluids(
            Fluid.of('gtceu:redstone', (144 * 4))
        )
        .itemOutputs(
            'create:rose_quartz'
        )
        .duration(100)
        .EUt(30)
})