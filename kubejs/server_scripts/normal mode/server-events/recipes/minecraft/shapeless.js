ServerEvents.recipes(event => {
    const recipes = [
        {
            inputs: [
                'forbidden_arcanus:arcane_crystal_dust',
                'forbidden_arcanus:mundabitur_dust',
                'forbidden_arcanus:corrupti_dust'
            ],
            output: 'kubejs:forbidden_transmutation_matter',
            count: 1
        },
        {
            inputs: [
                'kubejs:forbidden_transmutation_matter',
                '#forge:sapling'
            ],
            output: 'forbidden_arcanus:growing_edelwood',
            count: 1
        },
        {
            inputs: ['createaddition:gold_wire', 'minecraft:netherite_scrap'],
            output: 'kubejs:netherite_wire',
            count: 1
        },
        {
            inputs: [
                'mysticalagriculture:end_essence',
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}').toJson()
            ],
            output: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'),
            count: 1
        },
        {
            inputs: [
                'mysticalagriculture:nether_essence',
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}').toJson()
            ],
            output: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:nether"}'),
            count: 1
        },
        {
            inputs: ['naturesaura:gold_fiber', 'mysticalagriculture:wood_essence'],
            output: 'naturesaura:gold_leaf',
            count: 16
        },
        {
            inputs: ['minecraft:glass_bottle', 'mysticalagriculture:end_essence'],
            output: 'botania:ender_air_bottle',
            count: 1
        },
        {
            inputs: ['minecraft:blaze_powder', 'ars_nouveau:manipulation_essence'],
            output: 'thermal:basalz_powder',
            count: 1
        },
        {
            inputs: ['thermal:basalz_powder', 'ars_nouveau:manipulation_essence'],
            output: 'thermal:blitz_powder',
            count: 1
        },
        {
            inputs: ['thermal:blitz_powder', 'ars_nouveau:manipulation_essence'],
            output: 'thermal:blizz_powder',
            count: 1
        },
        {
            inputs: ['thermal:blizz_powder', 'ars_nouveau:manipulation_essence'],
            output: 'minecraft:blaze_powder',
            count: 1
        }, /** Stone Alloy to Andesite Alloy */ {
            inputs: ['#kubejs:pebbles'], output: 'kubejs:stone_pebble', count: 1
        }
    ];
    recipes.forEach(recipe => {
        event.shapeless(Item.of(recipe.output, recipe.count), recipe.inputs);
    });

    if (Platform.isLoaded('tconstruct')) event.shapeless(Item.of('tconstruct:sky_slime_ball', 8), [
        'mysticalagriculture:slime_essence',
        'mysticalagriculture:slime_essence',
        'mysticalagriculture:slime_essence',
        'mysticalagriculture:air_essence'
    ]);

    const data = {
        ulv: 'red_alloy',
        lv: 'tin',
        mv: 'copper',
        hv: 'gold',
        ev: 'aluminum',
        iv: 'platinum',
        luv: 'niobium_titanium',
        zpm: 'vanadium_gallium',
        uv: 'yttrium_barium_cuprate',
        uhv: 'europium'
    };

    Object.entries(data).forEach(([tier, material]) => {
        event.shapeless(`gtceu:${tier}_1a_energy_converter`, [
            `gtceu:${material}_single_cable`,
            `gtceu:${tier}_machine_hull`,
            `#gtceu:circuits/${tier}`
        ]);
    });

    Object.entries(data).forEach(([tier, material]) => {
        event.shapeless(`gtceu:${tier}_4a_energy_converter`, [
            `gtceu:${material}_quadruple_cable`,
            `gtceu:${tier}_machine_hull`,
            `#gtceu:circuits/${tier}`
        ]);
    });

    Object.entries(data).forEach(([tier, material]) => {
        event.shapeless(`gtceu:${tier}_8a_energy_converter`, [
            `gtceu:${material}_octal_cable`,
            `gtceu:${tier}_machine_hull`,
            `#gtceu:circuits/${tier}`
        ]);
    });

    Object.entries(data).forEach(([tier, material]) => {
        event.shapeless(`gtceu:${tier}_16a_energy_converter`, [
            `gtceu:${material}_hex_cable`,
            `gtceu:${tier}_machine_hull`,
            `#gtceu:circuits/${tier}`
        ]);
    });
    
    global.ingots.forEach(i => {
        if (!Item.exists(`kubejs:${i}_ingot`)) return;

        if (global.nuggets.includes(i)) {
            let nugget = `kubejs:${i}_nugget`;
            if (Item.exists(nugget)) {
                event.shapeless(`9x ${nugget}`, `kubejs:${i}_ingot`)
                    .id(`kubejs:shapeless/${i}_nuggets_from_ingot`);
            }
        }

        if (global.blocks.includes(i)) {
            let block = `kubejs:${i}_block`;
            if (Item.exists(block)) {
                event.shapeless(`9x kubejs:${i}_ingot`, block)
                    .id(`kubejs:shapeless/${i}_ingots_from_block`);
            }
        }
    });
});