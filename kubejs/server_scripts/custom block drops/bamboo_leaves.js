LootJS.modifiers((event) => {
    /**
     * ADDING BAMBOO LEAVES DROP FROM ANY BAMBOO
     * 
     * '#minecraft:logs'
     * 'twigs:twig'
     * '#minecraft:axes'
     * 'twigs:bamboo_leaves'
     * 'minecraft:bamboo'
     */
    event.addBlockLootModifier('minecraft:bamboo').matchMainHand('#forge:tools/swords').randomChance(0.25).addLoot('twigs:bamboo_leaves');
});