ServerEvents.recipes(event => {
    // ancient glyph
    event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        pedestalItems: [
            {
                item: Item.of('mysticalagriculture:soul_jar', '{Souls:8.0d,Type:"mysticalagriculture:wither_skeleton"}')
            },
            {
                item: Item.of('mysticalagriculture:soul_jar', '{Souls:10.0d,Type:"mysticalagriculture:blaze"}')
            },
            {
                item: 'extendedcrafting:enhanced_redstone_catalyst'
            },
            {
                item: 'forbidden_arcanus:dark_nether_star'
            }
        ],
        reagent: {
            item: "arsnouveau:glyph_wither"
        },
        result: {
            count: 1,
            id: "kubejs:ancient_glyph"
        },
        sourceCost: 10000
    });

    // void glyph
    event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        pedestalItems: [
            {
                item: 'apotheosis:infused_breath'
            },
            {
                item: Item.of('mysticalagriculture:soul_jar', '{Souls:8.0d,Type:"mysticalagriculture:enderman"}')
            },
            {
                item: "extendedcrafting:enhanced_ender_catalyst"
            },
            {
                item: "minecraft:dragon_egg"
            }
        ],
        reagent: {
            item: "arsnouveau:glyph_linger"
        },
        result: {
            count: 1,
            id: "kubejs:void_glyph"
        },
        sourceCost: 20000
    });
});