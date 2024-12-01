LootJS.modifiers((event) => {
    // Adds the ability to harvest early game wither skeleton skulls via blazing cleaver sword.
    event.addLootTableModifier("minecraft:entities/skeleton").randomChance(0.1).matchMainHand(Item.of('create_sa:blazing_cleaver')).addLoot('minecraft:wither_skeleton_skull');
});