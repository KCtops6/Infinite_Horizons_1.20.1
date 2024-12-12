ServerEvents.recipes(event => {
    


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

    // Nether Painting Crafting Components

    // Infernal Reactor Core

    // Nether Painting
    event.recipes.extendedcrafting.combination(
        'dimpaintings:nether_painting',
        'minecraft:painting',
        [
            'kubejs:red_candle',
            'kubejs:lava_infuser',
            'kubejs:nether_gemstone',
            'kubejs:magma_core',
            'kubejs:ancient_glyph',
            'kubejs:soul_prism',
            'kubejs:ashen_vessel',
            'create:blaze_cake'
        ], 
        10000
    );

    // End Painting Crafting Components

    // Void Cake Base
    event.recipes.createCompacting('kubejs:void_cake_base', ['minecraft:egg', 'minecraft:sugar', 'kubejs:void_flour']);

    // Liquid Ender Pearl
    event.recipes.createMixing(Fluid.of('kubejs:liquid_ender_pearl', 250), 'minecraft:ender_pearl');

    // Void Cake
    event.recipes.createFilling('create:void_cake', ['create:void_cake_base', Fluid.of('minecraft:liquid_ender_pearl', 250)]);

    // Dimensional Phase Shifter

    // Astral Chorus Gem

    // End Painting
    event.recipes.extendedcrafting.combination(
        'dimpaintings:end_painting',
        'minecraft:painting',
        [
            'kubejs:purpur_lantern',
            'kubejs:dragon_eye_gem',
            'kubejs:voidshade_moss',
            'kubejs:dragonfire_relic',
            'kubejs:end_gateway_key',
            'kubejs:stargazer_lens',
            'kubejs:infinite_void_rune',
            'kubejs:void_cake'
        ], 
        10000
    );
})