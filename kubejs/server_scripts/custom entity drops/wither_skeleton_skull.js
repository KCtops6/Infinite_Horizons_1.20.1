LootJS.modifiers((event) => {
    /**
     * Item.of('create_sa:blazing_cleaver', '{Damage:0}'), 'minecraft:wither_skeleton_skull'
     */
    event
        .addLootTableModifier("minecraft:entities/skeleton")
        .randomChance(0.1)
        .matchMainHand(Item.of('create_sa:blazing_cleaver', '{Damage:0}'))
        .addLoot('minecraft:wither_skeleton_skull');
});