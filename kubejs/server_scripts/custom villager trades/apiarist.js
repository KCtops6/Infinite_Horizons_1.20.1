// https://github.com/AlmostReliable/morejs/wiki/Villager-Trades
MoreJSEvents.villagerTrades((event) => {
    /**
     * OAK NEST
     * 'productivebees:oak_wood_nest'
     * 'productivebees:honey_treat'
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:2,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:green_carpenter_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Green Carpenter Bee"}')
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:yellow_black_carpenter_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Yellow Carpenter Bee"}')
     */
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:oak_wood_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage','{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:2,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:green_carpenter_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Green Carpenter Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:oak_wood_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:yellow_black_carpenter_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Yellow Carpenter Bee"}')  // Output item.
    );
    /**
     * SPRUCE NEST
     * 'productivebees:spruce_wood_nest'
     * 'productivebees:honey_treat'
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:resin_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Resin Bee"}')
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:yellow_black_carpenter_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Yellow Carpenter Bee"}')
     */
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:spruce_wood_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:resin_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Resin Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:spruce_wood_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:yellow_black_carpenter_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Yellow Carpenter Bee"}')  // Output item.
    );
    /**
     * DARK OAK NEST
     * 'productivebees:dark_oak_wood_nest'
     * 'productivebees:honey_treat'
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:2,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:green_carpenter_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Green Carpenter Bee"}')
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:yellow_black_carpenter_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Yellow Carpenter Bee"}')
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:0,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:blue_banded_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Blue Banded Bee"}')
     */
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:dark_oak_wood_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:2,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:green_carpenter_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Green Carpenter Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:dark_oak_wood_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:0,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:blue_banded_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Blue Banded Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:dark_oak_wood_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:yellow_black_carpenter_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Yellow Carpenter Bee"}')  // Output item.
    );
    /**
     * BIRCH NEST
     * 'productivebees:birch_wood_nest'
     * 'productivebees:honey_treat'
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:2,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:green_carpenter_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Green Carpenter Bee"}')
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:yellow_black_carpenter_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Yellow Carpenter Bee"}')
     */
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:birch_wood_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:2,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:green_carpenter_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Green Carpenter Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:birch_wood_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:yellow_black_carpenter_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Yellow Carpenter Bee"}')  // Output item.
    );
    /**
     * JUNGLE NEST
     * 'productivebees:jungle_wood_nest'
     * 'productivebees:honey_treat'
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:2,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:green_carpenter_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Green Carpenter Bee"}')
     */
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:jungle_wood_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:2,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:green_carpenter_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Green Carpenter Bee"}')  // Output item.
    );
    /**
     * ACACIA NEST
     * 'productivebees:acacia_wood_nest'
     * 'productivebees:honey_treat'
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:0,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:blue_banded_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Blue Banded Bee"}')
     */
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:acacia_wood_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:0,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:blue_banded_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Blue Banded Bee"}')  // Output item.
    );
    /**
     * CHERRY NEST
     * 'productivebees:cherry_wood_nest'
     * 'productivebees:honey_treat'
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:0,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:blue_banded_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Blue Banded Bee"}')
     */
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:cherry_wood_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:0,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:blue_banded_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Blue Banded Bee"}')  // Output item.
    );
    /**
     * MANGROVE NEST
     * 'productivebees:mangrove_wood_nest'
     * 'productivebees:honey_treat'
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:2,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:green_carpenter_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Green Carpenter Bee"}')
     */
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:mangrove_wood_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:2,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:green_carpenter_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Green Carpenter Bee"}')  // Output item.
    );
    /**
     * STONE NEST
     * 'productivebees:stone_nest'
     * 'productivebees:honey_treat'
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:7.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:mason_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Mason Bee"}')
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:digger_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Digger Bee"}')
     */
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 2,    // Profession and level.
        ['productivebees:stone_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:7.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:mason_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Mason Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 2,    // Profession and level.
        ['productivebees:stone_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:digger_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Digger Bee"}')  // Output item.
    );
    /**
     * DIRT NEST
     * 'productivebees:coarse_dirt_nest'
     * 'productivebees:honey_treat'
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:2,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:chocolate_mining_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Chocolate Mining Bee"}')
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:0,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:leafcutter_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Leafcutter Bee"}')
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:7.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:ashy_mining_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Ashy Mining Bee"}')
     */
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:coarse_dirt_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:2,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:chocolate_mining_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Chocolate Mining Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:coarse_dirt_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:0,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:leafcutter_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Leafcutter Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:coarse_dirt_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:7.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:ashy_mining_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Ashy Mining Bee"}')  // Output item.
    );
    /**
     * SAND NEST
     * 'productivebees:sand_nest'
     * 'productivebees:honey_treat'
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:2,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:chocolate_mining_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Chocolate Mining Bee"}')
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:7.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:ashy_mining_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Ashy Mining Bee"}')
     */
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:sand_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:2,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:chocolate_mining_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Chocolate Mining Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:sand_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:7.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:ashy_mining_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Ashy Mining Bee"}')  // Output item.
    );
    /**
     * SNOW NEST
     * 'productivebees:snow_nest'
     * 'productivebees:honey_treat'
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:2,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:sweat_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Sweat Bee"}')
     */
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 2,    // Profession and level.
        ['productivebees:snow_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:2,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:sweat_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Sweat Bee"}')  // Output item.
    );
    /**
     * GRAVEL NEST
     * 'productivebees:gravel_nest'
     * 'productivebees:honey_treat'
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:2,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:chocolate_mining_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Chocolate Mining Bee"}')
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:7.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:ashy_mining_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Ashy Mining Bee"}')
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:digger_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Digger Bee"}')
     */
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:gravel_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:2,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:chocolate_mining_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Chocolate Mining Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:gravel_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:digger_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Digger Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:gravel_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:7.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:ashy_mining_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Ashy Mining Bee"}')  // Output item.
    );
    /**
     * REED NEST
     * 'productivebees:sugar_cane_nest'
     * 'productivebees:honey_treat'
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:7.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:mason_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Mason Bee"}')
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:7.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:reed_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Reed Bee"}')
     */
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 2,    // Profession and level.
        ['productivebees:sugar_cane_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:7.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:mason_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Mason Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 2,    // Profession and level.
        ['productivebees:sugar_cane_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:7.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:reed_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Reed Bee"}')  // Output item.
    );
    /**
     * SLIMY NEST
     * 'productivebees:slimy_nest'
     * 'productivebees:honey_treat'
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:0,bee_type:"hive",bee_weather_tolerance:0,breathCollectionCooldown:600,entity:"productivebees:configurable_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Slimy Bee",type:"productivebees:slimy"}')
     */
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 2,    // Profession and level.
        ['productivebees:slimy_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:0,bee_type:"hive",bee_weather_tolerance:0,breathCollectionCooldown:600,entity:"productivebees:configurable_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Slimy Bee",type:"productivebees:slimy"}')  // Output item.
    );
    /**
     * GLOWSTONE NEST
     * 'productivebees:glowstone_nest'
     * 'minecraft:glowstone_dust'
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:0,bee_type:"hive",bee_weather_tolerance:0,breathCollectionCooldown:600,entity:"productivebees:configurable_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Glowing Bee",type:"productivebees:glowing"}')
     */
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 3,    // Profession and level.
        ['productivebees:glowstone_nest', TradeItem.of('minecraft:glowstone_dust', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:0,bee_type:"hive",bee_weather_tolerance:0,breathCollectionCooldown:600,entity:"productivebees:configurable_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Glowing Bee",type:"productivebees:glowing"}')  // Output item.
    );
    /**
     * SOUL SAND NEST
     * 'productivebees:soul_sand_nest'
     * 'minecraft:ghast_tear'
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:0,bee_type:"hive",bee_weather_tolerance:0,breathCollectionCooldown:600,entity:"productivebees:configurable_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Ghostly Bee",type:"productivebees:ghostly"}')
     */
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 3,    // Profession and level.
        ['productivebees:soul_sand_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:0,bee_type:"hive",bee_weather_tolerance:0,breathCollectionCooldown:600,entity:"productivebees:configurable_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Ghostly Bee",type:"productivebees:ghostly"}')  // Output item.
    );
    /**
     * NETHER QUARTZ NEST
     * 'productivebees:nether_quartz_nest'
     * 'minecraft:quartz'e
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:0,bee_type:"hive",bee_weather_tolerance:0,breathCollectionCooldown:600,entity:"productivebees:configurable_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Crystalline Bee",type:"productivebees:crystalline"}')
     */
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 4,    // Profession and level.
        ['productivebees:nether_quartz_nest', TradeItem.of('minecraft:quartz', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:0,bee_type:"hive",bee_weather_tolerance:0,breathCollectionCooldown:600,entity:"productivebees:configurable_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Crystalline Bee",type:"productivebees:crystalline"}')  // Output item.
    );
    /**
     * NETHER QUARTZ NEST
     * 'productivebees:nether_gold_nest'
     * 'minecraft:gold_ingot'
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:0,bee_type:"hive",bee_weather_tolerance:0,breathCollectionCooldown:600,entity:"productivebees:configurable_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Gold Bee",type:"productivebees:gold"}')
     */
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 5,    // Profession and level.
        ['productivebees:nether_gold_nest', TradeItem.of('minecraft:gold_ingot', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:0,bee_type:"hive",bee_weather_tolerance:0,breathCollectionCooldown:600,entity:"productivebees:configurable_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Gold Bee",type:"productivebees:gold"}')  // Output item.
    );
    /**
     * NETHER BRICK NEST
     * 'productivebees:nether_brick_nest'
     * 'minecraft:magma_cream'
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:0,bee_type:"hive",bee_weather_tolerance:0,breathCollectionCooldown:600,entity:"productivebees:configurable_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Magmatic Bee",type:"productivebees:magmatic"}')
     */
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 4,    // Profession and level.
        ['productivebees:nether_brick_nest', TradeItem.of('minecraft:magma_cream', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:0,bee_type:"hive",bee_weather_tolerance:0,breathCollectionCooldown:600,entity:"productivebees:configurable_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Magmatic Bee",type:"productivebees:magmatic"}')  // Output item.
    );
    /**
     * END STONE NEST
     * 'productivebees:end_stone_nest'
     * 'minecraft:popped_chorus_fruit'
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:0,bee_type:"hive",bee_weather_tolerance:0,breathCollectionCooldown:600,entity:"productivebees:configurable_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Ender Bee",type:"productivebees:ender"}')
     */
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 4,    // Profession and level.
        ['productivebees:end_stone_nest', TradeItem.of('minecraft:popped_chorus_fruit', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:0,bee_type:"hive",bee_weather_tolerance:0,breathCollectionCooldown:600,entity:"productivebees:configurable_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Ender Bee",type:"productivebees:ender"}')  // Output item.
    );
    /**
     * OBSIDIAN NEST
     * 'productivebees:obsidian_nest'
     * 'minecraft:dragon_breath'
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:0,bee_type:"hive",bee_weather_tolerance:0,breathCollectionCooldown:600,entity:"productivebees:configurable_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Draconic Bee",type:"productivebees:draconic"}')
     */
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 5,    // Profession and level.
        ['productivebees:obsidian_nest', TradeItem.of('minecraft:dragon_breath', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:0,bee_type:"hive",bee_weather_tolerance:0,breathCollectionCooldown:600,entity:"productivebees:configurable_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Draconic Bee",type:"productivebees:draconic"}')  // Output item.
    );
    /**
     * NEON CUCKOO BEE
     * [Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:0,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:blue_banded_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Blue Banded Bee"}'), 'minecraft:emerald', Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:2,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:neon_cuckoo_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Neon Cuckoo Bee"}')]
     */
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 5,    // Profession and level.
        [Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:0,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:blue_banded_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Blue Banded Bee"}'), TradeItem.of('minecraft:emerald', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:2,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:neon_cuckoo_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Neon Cuckoo Bee"}')  // Output item.
    );
    /**
     * NOMAD BEE
     * [Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:7.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:ashy_mining_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Ashy Mining Bee"}'), 'minecraft:emerald', Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:nomad_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Nomad Bee"}')]
     */
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 5,    // Profession and level.
        [Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:7.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:ashy_mining_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Ashy Mining Bee"}'), TradeItem.of('minecraft:emerald', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:nomad_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Nomad Bee"}')  // Output item.
    );
    /**
     * OILY BEE
     * 'productivebees:honey_treat'
     * Item.of('minecraft:fishing_rod', '{Damage:0}')
     * Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:0,bee_type:"hive",bee_weather_tolerance:0,breathCollectionCooldown:600,entity:"productivebees:configurable_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Oily Bee",type:"productivebees:oily"}')
     */
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 5,    // Profession and level.
        [Item.of('minecraft:fishing_rod', '{Damage:0}'), TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:0,bee_type:"hive",bee_weather_tolerance:0,breathCollectionCooldown:600,entity:"productivebees:configurable_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Oily Bee",type:"productivebees:oily"}')  // Output item.
    );
});