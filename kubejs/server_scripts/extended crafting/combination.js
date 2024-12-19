ServerEvents.recipes(event => {
    // dimensional paintings
    const dimensionalPaintings = [
        {
            powerCost: 100000,
            ingredient1: 'mysticalagriculture:air_essence',
            ingredient2: 'mysticalagriculture:earth_essence',
            ingredient3: 'mysticalagriculture:water_essence',
            ingredient4: 'mysticalagriculture:fire_essence',
            ingredient5: 'mysticalagriculture:dirt_essence',
            ingredient6: 'mysticalagriculture:stone_essence',
            ingredient7: 'mysticalagriculture:wood_essence',
            ingredient8: 'mysticalagriculture:nature_essence',
            result: 'dimpaintings:overworld_painting'
        },
        {
            powerCost: 1000000,
            ingredient1: 'kubejs:rune_of_the_nether',
            ingredient2: 'kubejs:nether_gemstone',
            ingredient3: 'kubejs:infernal_sigil',
            ingredient4: 'kubejs:ancient_glyph',
            ingredient5: 'kubejs:soul_prism',
            ingredient6: 'kubejs:wither_controller',
            ingredient7: 'kubejs:red_candle',
            ingredient8: 'create:blaze_cake',
            result: 'dimpaintings:nether_painting'
        },
        {
            powerCost: 10000000,
            ingredient1: 'kubejs:rune_of_the_end',
            ingredient2: 'kubejs:dragon_eye_gem',
            ingredient3: 'kubejs:voidwalker_sigil',
            ingredient4: 'kubejs:void_glyph',
            ingredient5: 'kubejs:end_gateway_key',
            ingredient6: 'kubejs:ender_controller',
            ingredient7: 'kubejs:infinite_void_rune',
            ingredient8: 'kubejs:void_cake',
            result: 'dimpaintings:end_painting'
        }
    ]
    dimensionalPaintings.forEach(painting => {
        event.custom({
            type: "extendedcrafting:combination",
            powerCost: painting.powerCost,
            input: {
                item: "minecraft:painting"
            },
            ingredients: [
                {
                    item: painting.ingredient1
                },
                {
                    item: painting.ingredient2
                },
                {
                    item: painting.ingredient3
                },
                {
                    item: painting.ingredient4
                },
                {
                    item: painting.ingredient5
                },
                {
                    item: painting.ingredient6
                },
                {
                    item: painting.ingredient7
                },
                {
                    item: painting.ingredient8
                }
            ],
            result: {
                item: painting.result
            }
        });
    });
});