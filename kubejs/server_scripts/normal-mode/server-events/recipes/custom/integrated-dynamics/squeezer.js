ServerEvents.recipes(event => {
    event.custom({
        type: "integrateddynamics:squeezer",
        item: {
            item: "minecraft:end_stone"
        },
        result: {
            items: [
                {
                    item: "infinite_horizons_tweaks:end_stone_gravel"
                }
            ]
        }
    }).id('kubejs:integrateddynamics/squeezer/infinite_horizons_tweaks/end_stone_gravel');

    event.custom({
        type: "integrateddynamics:squeezer",
        item: {
            item: "minecraft:netherrack"
        },
        result: {
            items: [
                {
                    item: "infinite_horizons_tweaks:netherrack_gravel"
                }
            ]
        }
    }).id('kubejs:integrateddynamics/squeezer/infinite_horizons_tweaks/netherrack_gravel');
});