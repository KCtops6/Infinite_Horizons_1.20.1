ServerEvents.recipes(event => {
    // Dimensional Paintings Crafting Components
    event.recipes.createCompacting('kubejs:void_cake_base', ['minecraft:egg', 'minecraft:sugar', 'kubejs:void_flour']);
    event.recipes.createFilling('kubejs:void_cake', ['kubejs:void_cake_base', Fluid.of('kubejs:liquid_ender_pearl')]);

    // Overworld Painting
    event.recipes.extendedcrafting.combination(
        'dimpaintings:overworld_painting',
        'minecraft:painting',
        [
            'mysticalagriculture:air_essence',
            'mysticalagriculture:earth_essence',
            'mysticalagriculture:water_essence',
            'mysticalagriculture:fire_essence',
            'mysticalagriculture:stone_essence',
            'mysticalagriculture:dirt_essence',
            'mysticalagriculture:deepslate_essence',
            'mysticalagriculture:wood_essence'
        ], 
        10000000
    );

    // Nether Painting
    event.recipes.extendedcrafting.combination(
        'dimpaintings:nether_painting',
        'minecraft:painting',
        [
            'kubejs:red_candle'
        ], 
        10000000
    );

    // End Painting
    event.recipes.extendedcrafting.combination(
        'dimpaintings:end_painting',
        'minecraft:painting',
        [
            'kubejs:void_cake'
        ], 
        10000000
    );
})