LootJS.modifiers((event) => {
    /**
     * ADDING PEBBLE DROPS FROM DIRT
     * 
     * 'minecraft:grass_block'
     * 'minecraft:dirt'
     * 'twigs:pebble'
     */
    event.addBlockLootModifier('minecraft:grass_block').matchMainHand('#forge:tools/shovels').randomChance(0.25).addLoot('twigs:pebble');
    event.addBlockLootModifier('minecraft:dirt').matchMainHand('#forge:tools/shovels').randomChance(0.25).addLoot('twigs:pebble');
});