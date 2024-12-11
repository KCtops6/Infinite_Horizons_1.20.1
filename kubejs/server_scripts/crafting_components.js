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
    event.recipes.extendedcrafting.shaped_table(
        'kubejs:infernal_reactor_core',
        [
            'abbbbba',
            'b     b',
            'b  d  b',
            'b fcf b',
            'b  e  b',
            'b     b',
            'abbbbba'
        ],
        {a: 'mekanism:ultimate_control_circuit'},
        {b: 'mekanism:alloy_atomic'},
        {c: 'mekanism:fusion_reactor_controller'},
        {d: 'mekanism:industrial_alarm'},
        {e: 'mekanism:geiger_counter'},
        {f: 'mekanism:laser'}
    ).tier(3);

    // Nether Painting
    event.recipes.extendedcrafting.combination(
        'dimpaintings:nether_painting',
        'minecraft:painting',
        [
            'kubejs:red_candle',
            'kubejs:infernal_reactor_core',
        ], 
        10000
    );

    // End Painting Crafting Components

    // Void Cake Base
    event.recipes.createCompacting('kubejs:void_cake_base', ['minecraft:egg', 'minecraft:sugar', 'kubejs:void_flour']);

    // Liquid Ender Pearl
    event.recipes.createMixing(Fluid.of('kubejs:liquid_ender_pearl').amount(250), 'minecraft:ender_pearl');

    // Void Cake
    event.recipes.createFilling('kubejs:void_cake', ['kubejs:void_cake_base', Fluid.of('kubejs:liquid_ender_pearl').amount(250)]);

    // Dimensional Phase Shifter
    event.recipes.extendedcrafting.shaped_table(
        'dimensional_phase_shifter',
        [
            'abbbbba',
            'b     b',
            'b  d  b',
            'b fcf b',
            'b  e  b',
            'b     b',
            'abbbbba'
        ],
        {a: 'mekanism:ultimate_control_circuit'},
        {b: 'mekanism:alloy_atomic'},
        {c: 'mekanism:quantum_entangloporter'},
        {d: 'mekanism:industrial_alarm'},
        {e: 'mekanism:hdpe_elytra'},
        {f: 'mekanism:laser'}
    ).tier(3);

    // Astral Chorus Gem
    event.recipes.extendedcrafting.shaped_table(
        'dimensional_phase_shifter',
        [
            'abbbbba',
            'b     b',
            'b  d  b',
            'b fcf b',
            'b  e  b',
            'b     b',
            'abbbbba'
        ],
        {a: 'mekanism:ultimate_control_circuit'},
        {b: 'mekanism:alloy_atomic'},
        {c: 'mekanism:quantum_entangloporter'},
        {d: 'mekanism:industrial_alarm'},
        {e: 'mekanism:hdpe_elytra'},
        {f: 'mekanism:laser'}
    ).tier(3);

    // End Painting
    event.recipes.extendedcrafting.combination(
        'dimpaintings:end_painting',
        'minecraft:painting',
        [
            'kubejs:void_cake',
            'kubejs:dimensional_phase_shifter',
        ], 
        10000
    );
})