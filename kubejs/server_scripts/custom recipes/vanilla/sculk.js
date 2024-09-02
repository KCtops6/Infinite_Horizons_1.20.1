ServerEvents.recipes(event => {
    /**
     * 'minecraft:sculk'
     * 'kubejs:dark_matter'
     */
    event.recipes.createCompacting('minecraft:sculk', ['4x kubejs:dark_matter']).superheated()
})