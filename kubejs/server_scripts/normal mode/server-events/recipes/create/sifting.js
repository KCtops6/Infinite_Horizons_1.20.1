const mesh_mapping = [
    { mesh: 'createsifter:string_mesh', multiplier: 1 },
    { mesh: 'kubejs:copper_mesh', multiplier: 1.25 },
    { mesh: 'kubejs:iron_mesh', multiplier: 1.5 },
    { mesh: 'createsifter:brass_mesh', multiplier: 1.75 },
    { mesh: 'kubejs:netherite_mesh', multiplier: 2 }
];
ServerEvents.recipes(event => {
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_coal').withChance(0.125)
    ], ['minecraft:gravel','kubejs:bronze_mesh']).id('kubejs/recipes/createsiftersifting/bronze/gravel');
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_coal').withChance(0.25)
    ], ['minecraft:gravel','kubejs:steel_mesh']).id('kubejs/recipes/createsiftersifting/steel/gravel');
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_coal').withChance(0.125),

        Item.of('gtceu:raw_cassiterite_sand').withChance(0.25),
        Item.of('gtceu:raw_garnet_sand').withChance(0.125),
        Item.of('gtceu:raw_asbestos').withChance(0.125),
        Item.of('gtceu:raw_diatomite').withChance(0.0625),

        Item.of('gtceu:raw_rock_salt').withChance(0.25),
        Item.of('gtceu:raw_salt').withChance(0.125),
        Item.of('gtceu:raw_lepidolite').withChance(0.0625),
        Item.of('gtceu:raw_spodumene').withChance(0.0625)
    ], ['minecraft:gravel','kubejs:aluminum_mesh']).id('kubejs/recipes/createsiftersifting/aluminum/gravel');
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_graphite').withChance(0.25),
        Item.of('gtceu:raw_diamond').withChance(0.125),
        Item.of('gtceu:raw_coal').withChance(0.03125),
        Item.of('gtceu:raw_garnierite').withChance(0.25),
        Item.of('gtceu:raw_nickel').withChance(0.125),
        Item.of('gtceu:raw_cobaltite').withChance(0.125),
        Item.of('gtceu:raw_pentlandite').withChance(0.0625)
    ], ['kubejs:deepslate_gravel','kubejs:bronze_mesh']).id('kubejs/recipes/createsiftersifting/bronze/soul_sand');
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_galena').withChance(0.25),
        Item.of('gtceu:raw_silver').withChance(0.125),
        Item.of('gtceu:raw_lead').withChance(0.0625)
    ], ['kubejs:limestone_gravel','kubejs:bronze_mesh']).id('kubejs/recipes/createsiftersifting/bronze/limestone');
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_calcite'),
        Item.of('gtceu:raw_lazurite').withChance(0.25),
        Item.of('gtceu:raw_sodalite').withChance(0.125),
        Item.of('gtceu:raw_lapis').withChance(0.0625)
    ], ['kubejs:calcite_gravel','kubejs:bronze_mesh']).id('kubejs/recipes/createsiftersifting/bronze/calcite');
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_beryllium').withChance(0.25),
        Item.of('gtceu:raw_emerald').withChance(0.125),
        Item.of('gtceu:raw_thorium').withChance(0.0625),

        Item.of('gtceu:raw_wulfenite').withChance(0.25),
        Item.of('gtceu:raw_molybdenite').withChance(0.125),
        Item.of('gtceu:raw_molybdenum').withChance(0.0625),
        Item.of('gtceu:raw_powellite').withChance(0.0625),

        Item.of('gtceu:raw_bastnasite').withChance(0.25),
        Item.of('gtceu:raw_monazite').withChance(0.0625),
        Item.of('gtceu:raw_neodymium').withChance(0.0625),

        Item.of('gtceu:raw_sulfur').withChance(0.25),
        Item.of('gtceu:raw_pyrite').withChance(0.125),
        Item.of('gtceu:raw_sphalerite').withChance(0.0625)
    ], ['kubejs:netherrack_gravel','kubejs:steel_mesh']).id('kubejs/recipes/createsiftersifting/steel/netherrack');
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_bauxite').withChance(0.125),
        Item.of('gtceu:raw_ilmenite').withChance(0.0625),
        Item.of('gtceu:raw_aluminium').withChance(0.0625),
        Item.of('gtceu:raw_scheelite').withChance(0.125),
        Item.of('gtceu:raw_tungstate').withChance(0.0625),
        Item.of('gtceu:raw_lithium').withChance(0.0625),
        Item.of('gtceu:raw_bornite').withChance(0.25),
        Item.of('gtceu:raw_cooperite').withChance(0.125),
        Item.of('gtceu:raw_platinum').withChance(0.125),
        Item.of('gtceu:raw_palladium').withChance(0.0625),
        Item.of('gtceu:raw_naquadah').withChance(0.25),
        Item.of('gtceu:raw_plutonium').withChance(0.0625),
        Item.of('gtceu:raw_pitchblende').withChance(0.25),
        Item.of('gtceu:raw_uraninite').withChance(0.0625)
    ], ['kubejs:end_stone_gravel','kubejs:steel_mesh']).id('kubejs/recipes/createsiftersifting/steel/end_stone');
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_almandine').withChance(0.25),
        Item.of('gtceu:raw_pyrope').withChance(0.125),
        Item.of('gtceu:raw_sapphire').withChance(0.0625),
        Item.of('gtceu:raw_green_sapphire').withChance(0.0625),

        Item.of('gtceu:raw_bentonite').withChance(0.25),
        Item.of('gtceu:raw_magnesite').withChance(0.125),
        Item.of('gtceu:raw_olivine').withChance(0.125),
        Item.of('gtceu:raw_glauconite_sand').withChance(0.0625),

        Item.of('gtceu:raw_magnetite').withChance(0.25),
        Item.of('gtceu:raw_vanadium_magnetite').withChance(0.125),
        Item.of('gtceu:raw_chromite').withChance(0.125)
    ], ['kubejs:basalt_gravel','kubejs:steel_mesh']).id('kubejs/recipes/createsiftersifting/steel/basalt');
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_goethite').withChance(0.25),
        Item.of('gtceu:raw_yellow_limonite').withChance(0.1),
        Item.of('gtceu:raw_hematite').withChance(0.1),
        Item.of('gtceu:raw_malachite').withChance(0.05),

        Item.of('gtceu:raw_apatite').withChance(0.25),
        Item.of('gtceu:raw_tricalcium_phosphate').withChance(0.125),
        Item.of('gtceu:raw_pyrochlore').withChance(0.0625),

        Item.of('gtceu:raw_red_garnet').withChance(0.25),
        Item.of('gtceu:raw_yellow_garnet').withChance(0.125),
        Item.of('gtceu:raw_amethyst').withChance(0.125),
        Item.of('gtceu:raw_opal').withChance(0.0625),

        Item.of('gtceu:raw_blue_topaz').withChance(0.25),
        Item.of('gtceu:raw_topaz').withChance(0.125),
        Item.of('gtceu:raw_chalcocite').withChance(0.125),
        Item.of('gtceu:raw_bornite').withChance(0.0625)
    ], ['infinite_horizons_tweaks:granite_gravel','kubejs:steel_mesh']).id('kubejs/recipes/createsiftersifting/steel/granite');
    if (Platform.isLoaded('tconstruct')) {
        mesh_mapping.forEach(m => {
            event.recipes.createsifterSifting([
                Item.of('tconstruct:earth_slime_grass_seeds').withChance(0.25 * m.multiplier),
                Item.of('tconstruct:earth_slime_sapling').withChance(0.05 * m.multiplier)
            ], ['tconstruct:earth_slime_dirt', m.mesh]);
            event.recipes.createsifterSifting([
                Item.of('tconstruct:sky_slime_grass_seeds').withChance(0.25 * m.multiplier),
                Item.of('tconstruct:sky_slime_sapling').withChance(0.05 * m.multiplier)
            ], ['tconstruct:sky_slime_dirt', m.mesh]);
            event.recipes.createsifterSifting([
                Item.of('tconstruct:blood_slime_grass_seeds').withChance(0.25 * m.multiplier),
                Item.of('tconstruct:blood_slime_sapling').withChance(0.05 * m.multiplier)
            ], ['tconstruct:ichor_slime_dirt', m.mesh]);
            event.recipes.createsifterSifting([
                Item.of('tconstruct:ender_slime_grass_seeds').withChance(0.25 * m.multiplier),
                Item.of('tconstruct:ender_slime_sapling').withChance(0.05 * m.multiplier)
            ], ['tconstruct:ender_slime_dirt', m.mesh]);
        });
    }
});