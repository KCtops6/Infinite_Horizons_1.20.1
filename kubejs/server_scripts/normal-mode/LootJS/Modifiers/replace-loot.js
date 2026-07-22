// kubejs\server_scripts\replace-loot.js
LootJS.modifiers(event => {
    event.addLootTableModifier('immersiveengineering:chests/engineers_house')
        .replaceLoot('immersiveengineering:ingot_aluminum', 'infinite_horizons_tweaks:aluminum_ingot')
        .replaceLoot('immersiveengineering:nugget_silver', 'infinite_horizons_tweaks:silver_nugget')
        .replaceLoot('immersiveengineering:nugget_lead', 'infinite_horizons_tweaks:lead_nugget')
        .replaceLoot('immersiveengineering:nugget_nickel', 'infinite_horizons_tweaks:nickel_nugget');
}); 