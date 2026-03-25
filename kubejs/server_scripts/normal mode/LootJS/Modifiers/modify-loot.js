// kubejs\server_scripts\replace-loot.js
LootJS.modifiers(event => {
    event.addLootTableModifier(/^minecraft:chests\/.*/)
        .modifyLoot(Ingredient.of(/gtceu:.*_(ingot|nugget|gem)/), (itemStack) => {
            let originalID = itemStack.id;
            let replacementID = originalID.replace("gtceu:", "kubejs:");
            if (Item.exists(replacementID)) {
                return Item.of(replacementID).withCount(itemStack.count);
            }
            return itemStack;
        });
}); 