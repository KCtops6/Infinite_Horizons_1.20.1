ServerEvents.recipes(event => {
    /**
     * Item.of('minecraft:shield', '{Damage:0}')
     * Item.of('ars_nouveau:enchanters_shield', '{Damage:0}')
     * Item.of('mekanismtools:bronze_shield', '{Damage:0}')
     * Item.of('mekanismtools:lapis_lazuli_shield', '{Damage:0}')
     * Item.of('mekanismtools:osmium_shield', '{Damage:0}')
     * Item.of('mekanismtools:refined_glowstone_shield', '{Damage:0}')
     * Item.of('mekanismtools:refined_obsidian_shield', '{Damage:0}')
     * Item.of('mekanismtools:steel_shield', '{Damage:0}')
     * 'mekanism:module_radiation_shielding_unit'
     * 'kubejs:wooden_shield'
     */
    event.recipes.extendedcrafting.combination(
        'kubejs:wooden_shield',    // Output
        Item.of('minecraft:shield', '{Damage:0}'),    // Catalyst
        // Input items
        [Item.of('ars_nouveau:enchanters_shield', '{Damage:0}'),
        Item.of('mekanismtools:bronze_shield', '{Damage:0}'),
        Item.of('mekanismtools:lapis_lazuli_shield', '{Damage:0}'),
        Item.of('mekanismtools:osmium_shield', '{Damage:0}'),
        Item.of('mekanismtools:refined_glowstone_shield', '{Damage:0}'),
        Item.of('mekanismtools:refined_obsidian_shield', '{Damage:0}'),
        Item.of('mekanismtools:steel_shield', '{Damage:0}'),
        'mekanism:module_radiation_shielding_unit'],
        10000000    // RF cost
    );
})