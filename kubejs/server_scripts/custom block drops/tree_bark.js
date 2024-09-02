LootJS.modifiers((event) => {
    /**
     * ADDING TREE BARK DROP FROM ANY LOG
     * 
     * '#minecraft:logs'
     * 'farmersdelight:tree_bark'
     * '#minecraft:axes'
     */
    event.addBlockLootModifier('#minecraft:logs').matchMainHand('#forge:tools/axes').randomChance(0.75).addLoot('farmersdelight:tree_bark');
});