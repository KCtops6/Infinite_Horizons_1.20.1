// https://kubejs.com/wiki/tutorials/recipes#removing-recipes
ServerEvents.recipes(event => {
    /**
     * MEKANISM
     */
    event.remove({ output: 'mekanism:digital_miner' })
})