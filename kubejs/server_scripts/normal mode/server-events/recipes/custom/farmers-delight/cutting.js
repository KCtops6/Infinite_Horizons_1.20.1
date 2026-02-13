ServerEvents.recipes(event => {
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            {
                item: 'botania:dreamwood'
            }
        ],
        tool: { tag: 'forge:tools/knives' },
        result : [
            {
                item: 'botania:dreamwood'
            },
            {
                item: 'botania:dreamwood_twig',
                chance: 0.75
            }
        ]
    });

    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            {
                item: 'botania:dreamwood_log'
            }
        ],
        tool: { tag: 'forge:tools/knives' },
        result : [
            {
                item: 'botania:dreamwood_log'
            },
            {
                item: 'botania:dreamwood_twig',
                chance: 0.75
            }
        ]
    });

    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            {
                item: 'botania:livingwood'
            }
        ],
        tool: { tag: 'forge:tools/knives' },
        result : [
            {
                item: 'botania:livingwood'
            },
            {
                item: 'botania:livingwood_twig',
                chance: 0.75
            }
        ]
    });

    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            {
                item: 'botania:livingwood_log'
            }
        ],
        tool: { tag: 'forge:tools/knives' },
        result : [
            {
                item: 'botania:livingwood_log'
            },
            {
                item: 'botania:livingwood_twig',
                chance: 0.75
            }
        ]
    });

    let dirtBlocks = ["minecraft:dirt", "minecraft:grass_block", "minecraft:dirt_path"];
    let gravelBlocks = [
        "minecraft:gravel", "kubejs:andesite_gravel", "kubejs:diorite_gravel", "kubejs:granite_gravel"
    ];
    dirtBlocks.forEach(b => {
        event.custom({
            type: "farmersdelight:cutting",
            ingredients: [
                {
                    item: b
                }
            ],
            result: [
                {
                    chance: 0.75,
                    item: "minecraft:dirt"
                },
                {
                    chance: 0.25,
                    item: "kubejs:stone_pebble"
                }
            ],
            tool: {
                item: "kubejs:wooden_trowel"
            }
        }).id(`wooden_trowel_on_${b.replace('minecraft:', '')}`);

        event.custom({
            type: "farmersdelight:cutting",
            ingredients: [
                {
                    item: b
                }
            ],
            result: [
                {
                    chance: 0.5,
                    item: "minecraft:dirt"
                },
                {
                    chance: 0.5,
                    item: "kubejs:stone_pebble"
                },
                {
                    chance: 0.25,
                    item: "kubejs:andesite_pebble"
                },
                {
                    chance: 0.25,
                    item: "kubejs:diorite_pebble"
                },
                {
                    chance: 0.25,
                    item: "kubejs:granite_pebble"
                }
            ],
            tool: {
                item: "kubejs:stone_trowel"
            }
        }).id(`stone_trowel_on_${b.replace('minecraft:', '')}`);

        event.custom({
            type: "farmersdelight:cutting",
            ingredients: [
                {
                    item: b
                }
            ],
            result: [
                {
                    chance: 0.25,
                    item: "minecraft:dirt"
                },
                {
                    chance: 0.75,
                    item: "kubejs:stone_pebble"
                },
                {
                    chance: 0.25,
                    item: "kubejs:deepslate_pebble"
                }
            ],
            tool: {
                item: "kubejs:iron_trowel"
            }
        }).id(`iron_trowel_on_${b.replace('minecraft:', '')}`);
    });

    gravelBlocks.forEach(b => {
        event.custom({
            type: "farmersdelight:cutting",
            ingredients: [
                {
                    item: b
                }
            ],
            result: [
                {
                    chance: 0.75,
                    item: b
                },
                {
                    chance: 0.5,
                    item: "kubejs:stone_pebble"
                },
                {
                    chance: 0.25,
                    item: "minecraft:iron_nugget"
                }
            ],
            tool: {
                item: "kubejs:stone_trowel"
            }
        }).id(`stone_trowel_on_${b.replace('minecraft:', '')}`);

        event.custom({
            type: "farmersdelight:cutting",
            ingredients: [
                {
                    item: b
                }
            ],
            result: [
                {
                    chance: 0.5,
                    item: b
                },
                {
                    chance: 0.75,
                    item: "kubejs:stone_pebble"
                },
                {
                    chance: 0.5,
                    item: "minecraft:iron_nugget"
                }
            ],
            tool: {
                item: "kubejs:iron_trowel"
            }
        }).id(`iron_trowel_on_${b.replace('minecraft:', '')}`);
    });

    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "kubejs:tuff_gravel"
            }
        ],
        result: [
            {
                chance: 0.25,
                item: "kubejs:tuff_gravel"
            },
            {
                chance: 0.75,
                item: "kubejs:tuff_pebble"
            },
            {
                chance: 0.25,
                item: "kubejs:deepslate_pebble"
            }
        ],
        tool: {
            item: "kubejs:iron_trowel"
        }
    });

    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "kubejs:deepslate_gravel"
            }
        ],
        result: [
            {
                chance: 0.25,
                item: "kubejs:deepslate_gravel"
            },
            {
                chance: 0.75,
                item: "kubejs:deepslate_pebble"
            },
            {
                chance: 0.25,
                item: "kubejs:tuff_pebble"
            }
        ],
        tool: {
            item: "kubejs:iron_trowel"
        }
    });
});