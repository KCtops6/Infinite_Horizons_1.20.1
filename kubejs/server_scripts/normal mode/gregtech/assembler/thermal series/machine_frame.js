// https://gregtechceu.github.io/gtceu-modern-docs/Modpacks/Other-Topics/Adding-and-Removing-Recipes/
ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('thermal:machine_frame')
        .itemInputs(
            'thermal:tin_gear',
            '4x gtceu:iron_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:glass', 4000)
        )
        .itemOutputs(
            '2x thermal:machine_frame'
        )
        .duration(100)
        .EUt(30)
})