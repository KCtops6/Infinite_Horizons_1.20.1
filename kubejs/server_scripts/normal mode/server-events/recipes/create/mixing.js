ServerEvents.recipes(event => {
    // 1. Stone Alloy
    event.custom({
        type: "create:mixing",
        heatRequirement: "lowheated",
        ingredients: [
            { item: 'minecraft:iron_nugget' },
            { item: 'minecraft:cobblestone' }
        ],
        results: [{ item: 'kubejs:stone_alloy' }]
    }).id('kubejs:mixing/stone_alloy');

    // 2. Infinitium Ingot
    event.custom({
        type: "create:mixing",
        heatRequirement: "superheated",
        ingredients: [
            { item: 'minecraft:netherite_ingot' },
            { item: 'mysticalagradditions:insanium_ingot' },
            { amount: 1000, fluid: 'create_enchantment_industry:hyper_experience' }
        ],
        results: [{ item: 'kubejs:infinitium_ingot' }]
    }).id('kubejs:mixing/infinitium_ingot');

    // 3. Dark Matter
    event.custom({
        type: "create:mixing",
        heatRequirement: "superheated",
        ingredients: [
            { item: 'kubejs:void_flour' },
            { item: 'kubejs:ender_pearl_dust' }
        ],
        results: [{ item: 'kubejs:dark_matter' }]
    }).id('kubejs:mixing/dark_matter');

    // 4. Chicken Fried Steak Ingot
    event.custom({
        type: "create:mixing",
        heatRequirement: "superheated",
        ingredients: [
            { item: 'pamhc2foodcore:groundchickenitem' },
            { item: 'pamhc2foodcore:groundbeefitem' },
            { item: 'create:wheat_flour' },
            { item: 'pamhc2foodextended:blackpepperitem' }
        ],
        results: [{ item: 'kubejs:chicken_fried_steak_ingot' }]
    }).id('kubejs:mixing/chicken_fried_steak_ingot');

    // 5. High Covalence Dust
    event.custom({
        type: "create:mixing",
        heatRequirement: "superheated",
        ingredients: [
            { item: 'projecte:medium_covalence_dust' },
            { item: 'kubejs:diamond_dust' },
            { item: 'kubejs:netherite_dust' },
            { item: 'mysticalagriculture:cognizant_dust' }
        ],
        results: [{ item: 'projecte:high_covalence_dust' }]
    }).id('kubejs:mixing/high_covalence_dust');

    // 6. Low Covalence Dust
    event.custom({
        type: "create:mixing",
        heatRequirement: "superheated",
        ingredients: [
            { item: 'minecraft:redstone' },
            { item: 'minecraft:glowstone_dust' },
            { item: 'kubejs:ender_pearl_dust' }
        ],
        results: [{ item: 'projecte:low_covalence_dust' }]
    }).id('kubejs:mixing/low_covalence_dust');

    // 7. Medium Covalence Dust
    event.custom({
        type: "create:mixing",
        heatRequirement: "superheated",
        ingredients: [
            { item: 'projecte:low_covalence_dust' },
            { item: 'waystones:warp_dust' },
            { item: 'mysticalagriculture:soulium_dust' },
            { item: 'kubejs:quartz_dust' }
        ],
        results: [{ item: 'projecte:medium_covalence_dust' }]
    }).id('kubejs:mixing/medium_covalence_dust');

    // 8. Redstone Ingot
    event.custom({
        type: "create:mixing",
        heatRequirement: "superheated",
        ingredients: [
            { item: 'kubejs:infinitium_ingot' },
            { item: 'minecraft:redstone' },
            { item: 'extendedcrafting:luminessence' }
        ],
        results: [{ item: 'extendedcrafting:redstone_ingot' }]
    }).id('kubejs:mixing/redstone_ingot');

    // 9. Ender Ingot
    event.custom({
        type: "create:mixing",
        heatRequirement: "superheated",
        ingredients: [
            { item: 'kubejs:infinitium_ingot' },
            { item: 'kubejs:ender_pearl_dust' },
            { item: 'extendedcrafting:luminessence' }
        ],
        results: [{ item: 'extendedcrafting:ender_ingot' }]
    }).id('kubejs:mixing/ender_ingot');

    // 10. Luminessence
    event.custom({
        type: "create:mixing",
        heatRequirement: "superheated",
        ingredients: [
            { item: 'minecraft:redstone' },
            { item: 'minecraft:glowstone_dust' },
            { item: 'mysticalagriculture:soulium_dust' },
            { item: 'mysticalagriculture:awakened_supremium_essence' }
        ],
        results: [{ item: 'extendedcrafting:luminessence' }]
    }).id('kubejs:mixing/luminessence');

    // 11. Heated Alloys (Loop)
    const heatedAlloys = [
        { input1: 'copper', amount1: 3, input2: 'tin', amount2: 1, output: 'bronze', outputAmount: 4 },
        { input1: 'copper', amount1: 1, input2: 'nickel', amount2: 1, output: 'constantan', outputAmount: 2 },
        { input1: 'gold', amount1: 1, input2: 'silver', amount2: 1, output: 'electrum', outputAmount: 2 },
        { input1: 'iron', amount1: 2, input2: 'nickel', amount2: 1, output: 'invar', outputAmount: 3 },
    ];
    heatedAlloys.forEach(alloy => {
        const getIngredient = (name) => {
            const vanilla = ['iron', 'gold', 'copper'];
            return vanilla.includes(name) ? `minecraft:${name}_ingot` : `kubejs:${name}_ingot`;
        };

        event.custom({
            type: "create:mixing",
            heatRequirement: "heated",
            ingredients: [
                { count: alloy.amount1, item: getIngredient(alloy.input1) },
                { count: alloy.amount2, item: getIngredient(alloy.input2) }
            ],
            results: [{ count: alloy.outputAmount, item: `kubejs:${alloy.output}_ingot` }]
        }).id(`kubejs:mixing/alloy/${alloy.output}`);
    });

    // 12. Superheated Alloys (Loop)
    const superheatedAlloys = [
        { input1: 'iron', amount1: 1, input2: 'tin', amount2: 1, output: 'tin_alloy', outputAmount: 3 }
    ];
    superheatedAlloys.forEach(alloy => {
        event.custom({
            type: "create:mixing",
            heatRequirement: "superheated",
            ingredients: [
                { count: alloy.amount1, item: `kubejs:${alloy.input1}_ingot` },
                { count: alloy.amount2, item: `kubejs:${alloy.input2}_ingot` }
            ],
            results: [{ count: alloy.outputAmount, item: `kubejs:${alloy.output}_ingot` }]
        }).id(`kubejs:mixing/alloy/superheated_${alloy.output}`);
    });

    // 13. Dielectric Paste
    event.custom({
        type: "create:mixing", 
        ingredients: [
            { count: 3, tag: 'minecraft:coals' },
            { count: 2, item: 'minecraft:clay_ball' },
            { amount: 1000, fluid: 'minecraft:lava' }
        ],
        results: [{ count: 48, item: 'powah:dielectric_paste' }]
    }).id('kubejs:mixing/dielectric_paste');

    // 14. Lava from Pebbles
    event.custom({
        type: "create:mixing",
        heatRequirement: "lowheated",
        ingredients: [{ count: 1, item: 'infinite_horizons_tweaks:stone_pebble' }],
        results: [{ amount: 25, fluid: 'minecraft:lava' }]
    }).id('kubejs:mixing/lava_from_stone_pebble');

    // 15. Liquid Ender Pearl
    event.custom({
        type: "create:mixing",
        heatRequirement: "heated",
        ingredients: [{ count: 1, item: 'minecraft:ender_pearl' }],
        results: [{ amount: 250, fluid: 'kubejs:liquid_ender_pearl' }]
    }).id('kubejs:mixing/liquid_ender_pearl');

    // 16. Cinder Essence
    event.custom({
        type: "create:mixing",
        heatRequirement: "heated",
        ingredients: [
            { count: 1, item: 'irons_spellbooks:arcane_essence' },
            { count: 1, item: 'create:cinder_flour' }
        ],
        results: [{ count: 2, item: 'irons_spellbooks:cinder_essence' }]
    }).id('kubejs:mixing/cinder_essence');
});