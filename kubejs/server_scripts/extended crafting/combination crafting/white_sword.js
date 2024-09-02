ServerEvents.recipes(event => {
    event.recipes.extendedcrafting.combination('kubejs:white_sword', 'kubejs:sword', [
        Item.of('minecraft:diamond_sword', '{Damage:0}'), 
        Item.of('minecraft:netherite_sword', '{Damage:0}'), 
        Item.of('mysticalagriculture:inferium_sword', '{Damage:0}'), 
        Item.of('mysticalagriculture:prudentium_sword', '{Damage:0}'), 
        Item.of('mysticalagriculture:tertium_sword', '{Damage:0}'), 
        Item.of('create_sa:brass_sword', '{Damage:0}'), 
        Item.of('ars_nouveau:enchanters_sword', '{Damage:0}'), 
        'redstone_arsenal:flux_sword', 
        Item.of('mekanismtools:osmium_sword', '{Damage:0}'), 
        Item.of('mekanismtools:refined_obsidian_sword', '{Damage:0}'), 
        Item.of('mekanismtools:steel_sword', '{Damage:0}'),
        Item.of('botania:terra_sword', '{Damage:0}'),
        Item.of('botania:star_sword', '{Damage:0,lastTriggerTime:467533L}'),
        Item.of('botania:thunder_sword', '{Damage:0}')
    ], 10000000);
})