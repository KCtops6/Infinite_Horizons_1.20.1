ServerEvents.recipes(event => {
    event.custom({
        type: "enderio:sag_milling",
        energy: 7200,
        input: {
            item: "minecraft:end_stone"
        },
        outputs: [
            {
                chance: 1.0,
                item: "kubejs:end_stone_gravel"
            }
        ]
    }).id('kubejs:enderio/sag_milling/kubejs/end_stone_gravel');

    event.custom({
        type: "enderio:sag_milling",
        energy: 4800,
        input: {
            item: "minecraft:netherrack"
        },
        outputs: [
            {
                chance: 1.0,
                item: "kubejs:netherrack_gravel"
            }
        ]
    }).id('kubejs:enderio/sag_milling/kubejs/netherrack_gravel');
});