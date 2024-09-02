LootJS.modifiers((event) => {
    /**
     * ['ars_nouveau:bastion_pod', 'ars_nouveau:purple_archwood_leaves']
     */
    event.addBlockLootModifier('ars_nouveau:purple_archwood_leaves').randomChance(0.25).addLoot('ars_nouveau:bastion_pod');
});