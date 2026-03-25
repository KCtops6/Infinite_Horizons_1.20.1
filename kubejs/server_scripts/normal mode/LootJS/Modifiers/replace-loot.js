// kubejs\server_scripts\replace-loot.js
LootJS.modifiers(event => {
    event.addLootTableModifier('immersiveengineering:chests/engineers_house')
        .replaceLoot('immersiveengineering:ingot_aluminum', 'kubejs:aluminum_ingot')
        .replaceLoot('immersiveengineering:nugget_silver', 'kubejs:silver_nugget')
        .replaceLoot('immersiveengineering:nugget_lead', 'kubejs:lead_nugget')
        .replaceLoot('immersiveengineering:nugget_nickel', 'kubejs:nickel_nugget');
}); 