// https://gregtechceu.github.io/gtceu-modern-docs/Modpacks/Other-Topics/Adding-and-Removing-Recipes/
ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('4x create:electron_tube1')
        .itemInputs(
            'create:polished_rose_quartz',
            'gtceu:iron_plate'
        )
        .itemOutputs(
            '2x create:electron_tube'
        )
        .duration(100)
        .EUt(30)
    event.recipes.gtceu.assembler('4x create:electron_tube2')
        .itemInputs(
            'create:polished_rose_quartz',
            'gtceu:steel_plate'
        )
        .itemOutputs(
            '4x create:electron_tube'
        )
        .duration(100)
        .EUt(30)
})