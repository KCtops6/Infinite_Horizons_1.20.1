ServerEvents.recipes(event => {
    event.recipes.extendedcrafting.combination('kubejs:magical_sword', 'kubejs:white_sword', [
        Item.of('mysticalagriculture:imperium_sword', '{Damage:0}'),
        'mysticalagriculture:supremium_sword', 
        'mysticalagriculture:awakened_supremium_sword'
    ], 10000000);
})