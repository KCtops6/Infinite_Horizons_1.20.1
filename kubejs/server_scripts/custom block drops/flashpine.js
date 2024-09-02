LootJS.modifiers((event) => {
    /**
     * ['ars_elemental:yellow_archwood_leaves', 'ars_elemental:flashpine_pod']
     */
    event.addBlockLootModifier('ars_elemental:yellow_archwood_leaves').randomChance(0.25).addLoot('ars_elemental:flashpine_pod');
});