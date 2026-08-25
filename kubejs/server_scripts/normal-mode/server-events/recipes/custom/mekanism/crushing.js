ServerEvents.recipes(event => {
    event.custom({
        type: "mekanism:crushing",
        input: {
            ingredient: {
                item: "minecraft:end_stone"
            }
        },
        output: {
            item: "infinite_horizons_tweaks:end_stone_gravel"
        }
    }).id('kubejs:mekanism/crushing/infinite_horizons_tweaks/end_stone_gravel');

    event.custom({
        type: "mekanism:crushing",
        input: {
            ingredient: {
                item: "minecraft:netherrack"
            }
        },
        output: {
            item: "infinite_horizons_tweaks:netherrack_gravel"
        }
    }).id('kubejs:mekanism/crushing/infinite_horizons_tweaks/netherrack_gravel');

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