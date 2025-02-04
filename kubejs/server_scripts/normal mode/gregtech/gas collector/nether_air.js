ServerEvents.recipes(event => {
    // https://kubejs.com/wiki/tutorials/recipes#removing-recipes
    event.remove({ output: 'gtceu:nether_air' })
    // https://gregtechceu.github.io/gtceu-modern-docs/Modpacks/Other-Topics/Adding-and-Removing-Recipes/
    event.recipes.gtceu.gas_collector('gtceu:nether_air')
        .outputFluids(
            'gtceu:nether_air'
        )
        .duration(20 * 10)
        .EUt(64)
        .circuit(2)
})