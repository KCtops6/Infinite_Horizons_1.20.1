ServerEvents.recipes(event => {
    event.recipes.extendedcrafting.combination('kubejs:red_candle', 'supplementaries:candle_holder_red', [
        'botania:quartz_blaze', 
        'botania:rune_fire', 
        'botania:fire_rod', 
        'botania:exchange_rod', 
        'botania:thermalily', 
        Item.of('bloodmagic:firescribetool', '{Damage:0}'), 
        'bloodmagic:lavasigil', 
        'naturesaura:furnace_heater', 
        'naturesaura:token_rage', 
        'ars_nouveau:fire_essence', 
        'ars_nouveau:glyph_flare', 
        'ars_nouveau:glyph_ignite', 
        'mysticalagriculture:fire_essence', 
        'ars_elemental:fire_focus'
    ], 10000000);
})