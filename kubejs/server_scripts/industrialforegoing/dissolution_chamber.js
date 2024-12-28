ServerEvents.recipes(event => {
    // nether addon
    event.custom({
        type: "industrialforegoing:dissolution_chamber",
        input: [
            {
                item: 'minecraft:wither_skeleton_skull'
            },
            {
                item: 'minecraft:nether_star'
            },
            {
                item: 'minecraft:diamond'
            },
            {
                item: 'minecraft:diamond'
            },
            {
                item: "kubejs:infinitium_ingot"
            },
            {
                item: "kubejs:infinitium_ingot"
            },
            {
                item: 'extendedcrafting:enhanced_redstone_catalyst'
            },
            {
                item: 'extendedcrafting:enhanced_redstone_catalyst'
            }
        ],
        inputFluid: "{Amount:1000,FluidName:\"kubejs:liquid_infinitium\"}",
        output: {
            count: 1,
            item: "kubejs:nether_addon",
        },
        processingTime: 10000
    });
    // end addon
    event.custom({
        type: "industrialforegoing:dissolution_chamber",
        input: [
            {
                item: 'minecraft:dragon_egg'
            },
            {
                item: 'minecraft:dragon_breath'
            },
            {
                item: 'minecraft:diamond'
            },
            {
                item: 'minecraft:diamond'
            },
            {
                item: "kubejs:infinitium_ingot"
            },
            {
                item: "kubejs:infinitium_ingot"
            },
            {
                item: 'extendedcrafting:enhanced_ender_catalyst'
            },
            {
                item: 'extendedcrafting:enhanced_ender_catalyst'
            }
        ],
        inputFluid: "{Amount:1000,FluidName:\"kubejs:liquid_infinitium\"}",
        output: {
            count: 1,
            item: "kubejs:ender_addon",
        },
        processingTime: 20000
    });
});