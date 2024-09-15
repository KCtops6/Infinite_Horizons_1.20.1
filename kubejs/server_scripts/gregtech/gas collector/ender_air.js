
ServerEvents.recipes(event => {
    // https://kubejs.com/wiki/tutorials/recipes#removing-recipes
    event.remove({ output: 'gtceu:ender_air' })
    // https://gregtechceu.github.io/gtceu-modern-docs/Modpacks/Other-Topics/Adding-and-Removing-Recipes/
    event.recipes.gtceu.gas_collector('gtceu:ender_air')
        .outputFluids(
            'gtceu:ender_air'
        )
        .duration(20 * 10)
        .EUt(256)
        .circuit(3)
})