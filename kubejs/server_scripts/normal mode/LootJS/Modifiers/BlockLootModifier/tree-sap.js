LootJS.modifiers(event => {
    ['#minecraft:spruce_logs', '#minecraft:jungle_logs'].forEach(l => {
        event.addBlockLootModifier(l)
            .matchEquip('mainhand', '#minecraft:axes')
            .randomChance(0.25)
            .addLoot("kubejs:tree_sap");
    });
});