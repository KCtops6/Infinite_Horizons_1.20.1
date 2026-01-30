ServerEvents.recipes(event => {
    event.custom({
        type: "industrialforegoing:laser_drill_fluid",
        catalyst: {
            item: "industrialforegoing:laser_lens15"
        },
        entity: "minecraft:warden",
        output: "{Amount:10,FluidName:\"kubejs:liquid_infinitium\"}",
        pointer: 0,
        rarity: [
            {
                blacklist: {},
                depth_max: 256,
                depth_min: -64,
                weight: 8,
                whitelist: {}
            }
        ]
    });
});