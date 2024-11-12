ServerEvents.recipes(event => {
    /**
     * Basalt Gravel
     */
    event.recipes.createCrushing([
        'kubejs:basalt_gravel',
        Item.of('gtceu:basalt_dust').withChance(0.125),
        Item.of('gtceu:small_basalt_dust').withChance(0.25),
        Item.of('gtceu:tiny_basalt_dust').withChance(0.5)],
        'minecraft:basalt'
    )
    event.recipes.createMilling([
        'kubejs:basalt_gravel'],
        'minecraft:basalt'
    )
    /**
     * Deepslate Gravel
     */
    event.recipes.createCrushing([
        'kubejs:deepslate_gravel'],
        'minecraft:deepslate'
    )
    /**
     * End Stone Gravel
     */
    event.recipes.createCrushing([
        'kubejs:end_stone_gravel'],
        'minecraft:end_stone'
    )
    event.recipes.createMilling([
        'kubejs:end_stone_gravel'],
        'minecraft:end_stone'
    )
    /**
     * Netherrack Gravel
     */
    event.remove({ output: 'create:cinder_flour' })
    event.recipes.createCrushing([
        'kubejs:netherrack_gravel',
        'create:cinder_flour',
        Item.of('create:cinder_flour').withChance(0.5)],
        'minecraft:netherrack'
    )
    event.recipes.createMilling([
        'kubejs:netherrack_gravel'],
        'minecraft:netherrack'
    )
})