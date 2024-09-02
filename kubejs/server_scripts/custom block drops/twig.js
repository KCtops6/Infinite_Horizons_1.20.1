LootJS.modifiers((event) => {
    /**
     * ADDING TWIG DROP FROM ANY LOG
     * 
     * '#minecraft:logs'
     * 'twigs:twig'
     * '#minecraft:axes'
     */
    event.addBlockLootModifier('#minecraft:logs').matchMainHand('#forge:tools/axes').randomChance(0.25).addLoot('twigs:twig');
});