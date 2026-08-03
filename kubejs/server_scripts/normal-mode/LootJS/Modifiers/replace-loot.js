// kubejs\server_scripts\replace-loot.js
LootJS.modifiers(event => {
    event.addLootTableModifier('immersiveengineering:chests/engineers_house')
        .replaceLoot('immersiveengineering:ingot_aluminum', 'infinite_resources:aluminum_ingot')
        .replaceLoot('immersiveengineering:nugget_silver', 'infinite_resources:silver_nugget')
        .replaceLoot('immersiveengineering:nugget_lead', 'infinite_resources:lead_nugget')
        .replaceLoot('immersiveengineering:nugget_nickel', 'infinite_resources:nickel_nugget');
    event.addLootTableModifier('minecraft:chests/village/village_weaponsmith')
        .replaceLoot('kubejs:brass_ingot', 'infinite_resources:brass_ingot')
        .replaceLoot('kubejs:steel_ingot', 'infinite_resources:steel_ingot')
        .replaceLoot('kubejs:bronze_ingot', 'infinite_resources:bronze_ingot');
}); 