ServerEvents.recipes(event => {
    /**
     * ['kubejs:infinitium_ingot', 'minecraft:netherite_ingot', 'mysticalagradditions:insanium_ingot']
     */
    event.recipes.createMixing(
        'kubejs:infinitium_ingot',
        ['minecraft:netherite_ingot', 'mysticalagradditions:insanium_ingot', Fluid.of("create_enchantment_industry:hyper_experience")]
    ).superheated()
})