ServerEvents.recipes(event => {
    // dimensional paintings
    const dimensionalPaintings = [
        {
            powerCost: 100000,
            ingredients: [
                'mysticalagriculture:air_essence',
                'mysticalagriculture:earth_essence',
                'mysticalagriculture:water_essence',
                'mysticalagriculture:fire_essence',
                'mysticalagriculture:dirt_essence',
                'mysticalagriculture:stone_essence',
                'mysticalagriculture:wood_essence',
                'mysticalagriculture:nature_essence'
            ],
            result: 'dimpaintings:overworld_painting'
        },
        {
            powerCost: 1000000,
            ingredients: [
                'kubejs:rune_of_the_nether',
                'thermal:fire_tnt',
                'kubejs:infernal_sigil',
                'kubejs:ancient_glyph',
                'mekanism:teleportation_core',
                'kubejs:wither_controller',
                'kubejs:token_of_the_nether',
                'create:blaze_cake',
                'kubejs:nether_addon',
                'apotheosis:blazing_hellshelf'
            ],
            result: 'dimpaintings:nether_painting'
        },
        {
            powerCost: 10000000,
            ingredients: [
                'kubejs:rune_of_the_end',
                'thermal:ender_tnt',
                'kubejs:voidwalker_sigil',
                'kubejs:void_glyph',
                'mekanism:teleportation_core',
                'kubejs:ender_controller',
                'kubejs:token_of_the_end',
                'kubejs:void_cake',
                'minecraft:dragon_breath',
                'kubejs:ender_addon',
                'apotheosis:draconic_endshelf'
            ],
            result: 'dimpaintings:end_painting'
        }
    ];
    
    dimensionalPaintings.forEach(painting => {
        event.custom({
            type: "extendedcrafting:combination",
            powerCost: painting.powerCost,
            input: {
                item: "minecraft:painting"
            },
            ingredients: painting.ingredients.map(ingredient => ({
                item: ingredient
            })),
            result: {
                item: painting.result
            }
        });
    });
});
