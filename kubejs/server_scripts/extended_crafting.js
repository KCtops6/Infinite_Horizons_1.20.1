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
            ingredient1: 'kubejs:lava_infuser',
            ingredient2: 'kubejs:nether_gemstone',
            ingredient3: 'kubejs:magma_core',
            ingredient4: 'kubejs:ancient_glyph',
            ingredient5: 'kubejs:soul_prism',
            ingredient6: 'kubejs:ashen_vessel',
            ingredient7: 'kubejs:red_candle',
            ingredient8: 'create:blaze_cake',
            result: 'dimpaintings:nether_painting'
        },
        {
            powerCost: 10000000,
            ingredient1: 'kubejs:purpur_lantern',
            ingredient2: 'kubejs:dragon_eye_gem',
            ingredient3: 'kubejs:voidshade_moss',
            ingredient4: 'kubejs:void_glyph',
            ingredient5: 'kubejs:end_gateway_key',
            ingredient6: 'kubejs:stargazer_lens',
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

    // ender crafter
    event.custom({
        type: "extendedcrafting:shaped_table",
        pattern: [
            "IIIII",
            "ECCCE",
            "ECCCE",
            "ECCCE",
            "EEEEE"
        ],
        key: {
            C: {
                item: "create:mechanical_crafter"
            },
            E: {
                item: "extendedcrafting:ender_ingot"
            },
            I: {
                item: "kubejs:infinitium_plate"
            }
        },
        result: {
            item: "extendedcrafting:ender_crafter"
        }
    });

    // ender alternator
    event.custom({
        type: "extendedcrafting:shaped_table",
        pattern: [
            "IPI",
            "IEI",
            "EEE"
        ],
        key: {
            P: {
                item: "minecraft:ender_eye"
            },
            E: {
                item: "extendedcrafting:ender_ingot"
            },
            I: {
                item: "kubejs:infinitium_plate"
            }
        },
        result: {
            item: "extendedcrafting:ender_alternator"
        }
    });

    // flux crafter
    event.custom({
        type: "extendedcrafting:shaped_table",
        pattern: [
            "IIIII",
            "RCCCR",
            "RCCCR",
            "RCCCR",
            "RRRRR"
        ],
        key: {
            C: {
                item: "create:mechanical_crafter"
            },
            R: {
                item: "extendedcrafting:redstone_ingot"
            },
            I: {
                item: "kubejs:infinitium_plate"
            }
        },
        result: {
            item: "extendedcrafting:flux_crafter"
        }
    });

    // flux alternator
    event.custom({
        type: "extendedcrafting:shaped_table",
        pattern: [
            "INI",
            "IEI",
            "EEE"
        ],
        key: {
            N: {
                item: "minecraft:nether_star"
            },
            E: {
                item: "extendedcrafting:redstone_ingot"
            },
            I: {
                item: "kubejs:infinitium_plate"
            }
        },
        result: {
            item: "extendedcrafting:flux_alternator"
        }
    });
});