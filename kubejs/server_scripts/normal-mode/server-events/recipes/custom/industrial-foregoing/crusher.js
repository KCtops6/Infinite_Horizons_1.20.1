ServerEvents.recipes(event => {
    event.custom({
        type: "industrialforegoing:crusher",
        input: {
            item: "minecraft:netherrack"
        },
        output: {
            item: "infinite_horizons_tweaks:netherrack_gravel"
        }
    }).id('kubejs:industrialforegoing/crusher/infinite_horizons_tweaks/netherrack_gravel');
    event.custom({
        type: "industrialforegoing:crusher",
        input: {
            item: "minecraft:end_stone"
        },
        output: {
            item: "infinite_horizons_tweaks:end_stone_gravel"
        }
    }).id('kubejs:industrialforegoing/crusher/infinite_horizons_tweaks/end_stone_gravel');
    event.custom({
        type: "industrialforegoing:crusher",
        input: {
            item: "minecraft:sand"
        },
        output: {
            item: "createsifter:dust"
        }
    }).id('kubejs:industrialforegoing/createsifter/dust');
    event.custom({
        type: "industrialforegoing:crusher",
        input: {
            item: "minecraft:deepslate"
        },
        output: {
            item: "minecraft:cobbled_deepslate"
        }
    }).id('kubejs:industrialforegoing/minecraft/cobbled_deepslate');
    event.custom({
        type: "industrialforegoing:crusher",
        input: {
            item: "minecraft:cobbled_deepslate"
        },
        output: {
            item: "infinite_horizons_tweaks:deepslate_gravel"
        }
    }).id('kubejs:industrialforegoing/infinite_horizons_tweaks/deepslate_gravel');
});