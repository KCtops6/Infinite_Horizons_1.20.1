LootJS.modifiers((event) => {
    /**
     * ['ars_nouveau:bombegranate_pod', 'ars_nouveau:red_archwood_leaves']
     */
    event.addBlockLootModifier('ars_nouveau:red_archwood_leaves').randomChance(0.25).addLoot('ars_nouveau:bombegranate_pod');
});