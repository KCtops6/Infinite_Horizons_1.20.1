ServerEvents.recipes(event => {
    event.custom({
        type: "integrateddynamics:squeezer",
        item: {
            item: "minecraft:end_stone"
        },
        result: {
            items: [
                {
                    item: "kubejs:end_stone_gravel"
                }
            ]
        }
    }).id('kubejs:integrateddynamics/squeezer/kubejs/end_stone_gravel');

    event.custom({
        type: "integrateddynamics:squeezer",
        item: {
            item: "minecraft:netherrack"
        },
        result: {
            items: [
                {
                    item: "kubejs:netherrack_gravel"
                }
            ]
        }
    }).id('kubejs:integrateddynamics/squeezer/kubejs/netherrack_gravel');
});