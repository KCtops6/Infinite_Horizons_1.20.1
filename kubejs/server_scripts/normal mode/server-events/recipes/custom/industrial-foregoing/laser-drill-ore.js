ServerEvents.recipes(event => {
    event.custom({
        type: "industrialforegoing:laser_drill_ore",
        catalyst: {
            item: "industrialforegoing:laser_lens4"
        },
        output: {
            item: "kubejs:sulfur_gem"
        },
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
    }).id('kubejs:industrialforegoing/laser_drill_ore/kubejs/sulfur_gem');
});