ServerEvents.recipes(event => {
    event.custom({
        type: "mekanism:crushing",
        input: {
            ingredient: {
                item: "minecraft:end_stone"
            }
        },
        output: {
            item: "kubejs:end_stone_gravel"
        }
    }).id('kubejs:mekanism/crushing/kubejs/end_stone_gravel');

    event.custom({
        type: "mekanism:crushing",
        input: {
            ingredient: {
                item: "minecraft:netherrack"
            }
        },
        output: {
            item: "kubejs:netherrack_gravel"
        }
    }).id('kubejs:mekanism/crushing/kubejs/netherrack_gravel');

    event.custom({
        type: "mekanism:crushing",
        input: {
            ingredient: {
                item: "minecraft:sand"
            }
        },
        output: {
            item: "createsifter:dust"
        }
    }).id('kubejs:mekanism/crushing/createsifter/dust');
});