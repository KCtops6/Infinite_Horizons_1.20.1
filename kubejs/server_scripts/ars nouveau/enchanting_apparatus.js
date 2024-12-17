ServerEvents.recipes(event => {
    // ancient glyph
    event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        pedestalItems: [
            {
                item: 'mysticalagriculture:soulium_dust'
            },
            {
                item: 'irons_spellbooks:cinder_essence'
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
        output: {
            count: 1,
            item: "kubejs:ancient_glyph"
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
                item: 'pamhc2foodcore:choruspieitem'
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
        output: {
            count: 1,
            item: "kubejs:void_glyph"
        },
        sourceCost: 20000
    });
});
