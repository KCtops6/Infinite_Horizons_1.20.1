ServerEvents.recipes(event => {
    // stone alloy
    event.custom({
        type: "create:mixing",
        heatRequirement: "lowheated",
        ingredients: [
            {
                item: 'minecraft:iron_nugget'
            },
            {
                item: 'minecraft:cobblestone'
            }
        ],
        results: [
            {
                item: 'kubejs:stone_alloy'
            }
        ]
    });

    // infinitium ingot
    event.custom({
        type: "create:mixing",
        heatRequirement: "superheated",
        ingredients: [
            {
                item: 'minecraft:netherite_ingot'
            },
            {
                item: 'mysticalagradditions:insanium_ingot'
            },
            {
                amount: 1000,
                fluid: 'create_enchantment_industry:hyper_experience'
            }
        ],
        results: [
            {
                item: 'kubejs:infinitium_ingot'
            }
        ]
    });

    // dark matter
    event.custom({
        type: "create:mixing",
        heatRequirement: "superheated",
        ingredients: [
            {
                item: 'kubejs:void_flour'
            },
            {
                item: 'kubejs:ender_pearl_dust'
            }
        ],
        results: [
            {
                item: 'kubejs:dark_matter'
            }
        ]
    });

    // chicken fried steak ingot
    event.custom({
        type: "create:mixing",
        heatRequirement: "superheated",
        ingredients: [
            {
                item: 'pamhc2foodcore:groundchickenitem'
            },
            {
                item: 'pamhc2foodcore:groundbeefitem'
            },
            {
                item: 'create:wheat_flour'
            },
            {
                item: 'pamhc2foodextended:blackpepperitem'
            }
        ],
        results: [
            {
                item: 'kubejs:chicken_fried_steak_ingot'
            }
        ]
    });

    // high covalence dust
    event.custom({
        type: "create:mixing",
        heatRequirement: "superheated",
        ingredients: [
            {
                item: 'projecte:medium_covalence_dust',
            },
            {
                item: 'kubejs:diamond_dust'
            },
            {
                item: 'kubejs:netherite_dust'
            },
            {
                item: 'mysticalagriculture:cognizant_dust'
            }
        ],
        results: [
            {
                item: 'projecte:high_covalence_dust'
            }
        ]
    });

    // low covalence dust
    event.custom({
        type: "create:mixing",
        heatRequirement: "superheated",
        ingredients: [
            {
                item: 'minecraft:redstone',
            },
            {
                item: 'minecraft:glowstone_dust'
            },
            {
                item: 'kubejs:ender_pearl_dust'
            }
        ],
        results: [
            {
                item: 'projecte:low_covalence_dust'
            }
        ]
    });

    // medium covalence dust
    event.custom({
        type: "create:mixing",
        heatRequirement: "superheated",
        ingredients: [
            {
                item: 'projecte:low_covalence_dust',
            },
            {
                item: 'waystones:warp_dust'
            },
            {
                item: 'mysticalagriculture:soulium_dust'
            },
            {
                item: 'kubejs:quartz_dust'
            }
        ],
        results: [
            {
                item: 'projecte:medium_covalence_dust'
            }
        ]
    });

    // heated alloys
    const heatedAlloys = [
        { input1: 'copper', amount1: 3, input2: 'tin', amount2: 1, output: 'bronze', outputAmount: 4 },
        { input1: 'copper', amount1: 1, input2: 'nickel', amount2: 1, output: 'constantan', outputAmount: 2 },
        { input1: 'gold', amount1: 1, input2: 'silver', amount2: 1, output: 'electrum', outputAmount: 2 },
        { input1: 'iron', amount1: 2, input2: 'nickel', amount2: 1, output: 'invar', outputAmount: 3 },
    ];
    heatedAlloys.forEach(alloy => {
        event.custom({
            type: "create:mixing",
            heatRequirement: "heated",
            ingredients: [
                {
                    count: alloy.amount1,
                    item: `kubejs:${alloy.input1}_ingot.`
                },
                {
                    count: alloy.amount2,
                    item: `kubejs:${alloy.input2}_ingot.`
                }
            ],
            results: [
                {
                    count: alloy.outputAmount,
                    item: `kubejs:${alloy.output}_ingot.`
                }
            ]
        });
    });

    // superheated alloys
    const superheatedAlloys = [
        { input1: 'iron', amount1: 1, input2: 'tin', amount2: 1, output: 'tin_alloy', outputAmount: 3 }
    ];
    superheatedAlloys.forEach(alloy => {
        event.custom({
            type: "create:mixing",
            heatRequirement: "superheated",
            ingredients: [
                {
                    count: alloy.amount1,
                    item: `kubejs:${alloy.input1}_ingot.`
                },
                {
                    count: alloy.amount2,
                    item: `kubejs:${alloy.input2}_ingot.`
                }
            ],
            results: [
                {
                    count: alloy.outputAmount,
                    item: `kubejs:${alloy.output}_ingot.`
                }
            ]
        });
    });

    // dielectric paste
    event.custom({
        type: "create:mixing",
        heatRequirement: "heated",
        ingredients: [
            {
                count: 3,
                tag: 'minecraft:coals'
            },
            {
                count: 2,
                item: 'minecraft:clay_ball'
            },
            {
                amount: 1000,
                fluid: 'minecraft:lava'
            }
        ],
        results: [
            {
                count: 48,
                item: 'powah:dielectric_paste'
            }
        ]
    });

    // lava
    event.custom({
        type: "create:mixing",
        heatRequirement: "heated",
        ingredients: [
            {
                count: 1,
                item: 'twigs:pebble'
            }
        ],
        results: [
            {
                amount: 25,
                fluid: 'minecraft:lava'
            }
        ]
    });

    // liquid ender pearl
    event.custom({
        type: "create:mixing",
        heatRequirement: "heated",
        ingredients: [
            {
                count: 1,
                item: 'minecraft:ender_pearl'
            }
        ],
        results: [
            {
                amount: 250,
                fluid: 'kubejs:liquid_ender_pearl'
            }
        ]
    });
});