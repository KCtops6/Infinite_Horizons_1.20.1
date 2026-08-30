//requires: gtceu
ServerEvents.recipes(event => {
    if (Platform.isLoaded('gtceu')) {
        event.recipes.createsifterSifting([
            Item.of('gtceu:raw_coal').withChance(0.0186),
            Item.of('gtceu:raw_goethite').withChance(0.0140),
            Item.of('gtceu:raw_oilsands').withChance(0.0093),
            Item.of('gtceu:raw_yellow_limonite').withChance(0.0056),
            Item.of('gtceu:raw_hematite').withChance(0.0056),
            Item.of('gtceu:raw_rock_salt').withChance(0.0050),
            Item.of('gtceu:raw_apatite').withChance(0.0047),
            Item.of('gtceu:raw_fullers_earth').withChance(0.0047),
            Item.of('gtceu:raw_salt').withChance(0.0033),
            Item.of('gtceu:raw_tricalcium_phosphate').withChance(0.0031),
            Item.of('gtceu:raw_amethyst').withChance(0.0023),
            Item.of('gtceu:raw_gypsum').withChance(0.0023),
            Item.of('gtceu:raw_diatomite').withChance(0.0023),
            Item.of('gtceu:raw_realgar').withChance(0.0012),
            Item.of('gtceu:raw_opal').withChance(0.0012)
        ], ['minecraft:gravel', 'kubejs:bronze_mesh']).id('kubejs/recipes/createsiftersifting/bronze/gravel');
        event.recipes.createsifterSifting([
            Item.of('gtceu:raw_magnetite').withChance(0.0093),
            Item.of('gtceu:raw_basaltic_mineral_sand').withChance(0.0070),
            Item.of('gtceu:raw_vanadium_magnetite').withChance(0.0062),
            Item.of('gtceu:raw_asbestos').withChance(0.0047),
            Item.of('gtceu:raw_garnet_sand').withChance(0.0047),
            Item.of('gtceu:raw_soapstone').withChance(0.0035),
            Item.of('gtceu:raw_garnierite').withChance(0.0035),
            Item.of('gtceu:raw_red_garnet').withChance(0.0035),
            Item.of('gtceu:raw_yellow_garnet').withChance(0.0023),
            Item.of('gtceu:raw_talc').withChance(0.0023),
            Item.of('gtceu:raw_zeolite').withChance(0.0023),
            Item.of('gtceu:raw_pentlandite').withChance(0.0023),
            Item.of('gtceu:raw_nickel').withChance(0.0023)
        ], ['infinite_horizons_tweaks:andesite_gravel', 'kubejs:bronze_mesh']).id('kubejs/recipes/createsiftersifting/bronze/andesite_gravel');
        event.recipes.createsifterSifting([
            Item.of('gtceu:raw_tin').withChance(0.0124),
            Item.of('gtceu:raw_chalcopyrite').withChance(0.0058),
            Item.of('gtceu:raw_galena').withChance(0.0047),
            Item.of('gtceu:raw_silver').withChance(0.0031),
            Item.of('gtceu:raw_malachite').withChance(0.0028),
            Item.of('gtceu:raw_glauconite_sand').withChance(0.0023),
            Item.of('gtceu:raw_cobaltite').withChance(0.0023),
            Item.of('gtceu:raw_spodumene').withChance(0.0017),
            Item.of('gtceu:raw_lepidolite').withChance(0.0017),
            Item.of('gtceu:raw_pyrochlore').withChance(0.0016),
            Item.of('gtceu:raw_lead').withChance(0.0016)
        ], ['infinite_horizons_tweaks:diorite_gravel', 'kubejs:bronze_mesh']).id('kubejs/recipes/createsiftersifting/bronze/diorite_gravel');
        event.recipes.createsifterSifting([
            Item.of('gtceu:raw_cassiterite').withChance(0.0085),
            Item.of('gtceu:raw_cassiterite_sand').withChance(0.0070),
            Item.of('gtceu:raw_granitic_mineral_sand').withChance(0.0047)
        ], ['infinite_horizons_tweaks:granite_gravel', 'kubejs:bronze_mesh']).id('kubejs/recipes/createsiftersifting/bronze/granite_gravel');
        event.recipes.createsifterSifting([
            Item.of('gtceu:raw_almandine').withChance(0.0151),
            Item.of('gtceu:raw_ruby').withChance(0.0118),
            Item.of('gtceu:raw_graphite').withChance(0.0118),
            Item.of('gtceu:raw_pyrope').withChance(0.0101),
            Item.of('gtceu:raw_lazurite').withChance(0.0088),
            Item.of('gtceu:raw_sapphire').withChance(0.0076),
            Item.of('gtceu:raw_green_sapphire').withChance(0.0076),
            Item.of('gtceu:raw_grossular').withChance(0.0076),
            Item.of('gtceu:raw_spessartine').withChance(0.0076),
            Item.of('gtceu:raw_diamond').withChance(0.0071),
            Item.of('gtceu:raw_sodalite').withChance(0.0059),
            Item.of('gtceu:raw_lapis').withChance(0.0059),
            Item.of('gtceu:raw_pollucite').withChance(0.0030),
            Item.of('gtceu:raw_bentonite').withChance(0.0030),
            Item.of('gtceu:raw_kyanite').withChance(0.0030),
            Item.of('gtceu:raw_mica').withChance(0.0030)
        ], ['infinite_horizons_tweaks:deepslate_gravel', 'kubejs:bronze_mesh']).id('kubejs/recipes/createsiftersifting/bronze/deepslate');
        event.recipes.createsifterSifting([
            Item.of('gtceu:raw_chalcopyrite').withChance(0.0213),
            Item.of('gtceu:raw_redstone').withChance(0.0177),
            Item.of('gtceu:raw_pyrite').withChance(0.0086),
            Item.of('gtceu:raw_iron').withChance(0.0086),
            Item.of('gtceu:raw_copper').withChance(0.0086),
            Item.of('gtceu:raw_molybdenum').withChance(0.0059),
            Item.of('gtceu:raw_wulfenite').withChance(0.0059),
            Item.of('gtceu:raw_powellite').withChance(0.0059),
            Item.of('gtceu:raw_molybdenite').withChance(0.0059),
            Item.of('gtceu:raw_bornite').withChance(0.0053),
            Item.of('gtceu:raw_chalcocite').withChance(0.0053),
            Item.of('gtceu:raw_bauxite').withChance(0.0039),
            Item.of('gtceu:raw_ilmenite').withChance(0.0039),
            Item.of('gtceu:raw_calcite').withChance(0.0030),
            Item.of('gtceu:raw_olivine').withChance(0.0030),
            Item.of('gtceu:raw_magnesite').withChance(0.0030)
        ], ['infinite_horizons_tweaks:tuff_gravel', 'kubejs:bronze_mesh']).id('kubejs/recipes/createsiftersifting/bronze/tuff_gravel');
        event.recipes.createsifterSifting([
            Item.of('gtceu:raw_nether_quartz').withChance(0.0209),
            Item.of('gtceu:raw_quartzite').withChance(0.0139),
            Item.of('gtceu:raw_blue_topaz').withChance(0.0091),
            Item.of('gtceu:raw_bastnasite').withChance(0.0063),
            Item.of('gtceu:raw_certus_quartz').withChance(0.0043),
            Item.of('gtceu:raw_monazite').withChance(0.0042),
            Item.of('gtceu:raw_neodymium').withChance(0.0042),
            Item.of('gtceu:raw_topaz').withChance(0.0037),
            Item.of('gtceu:raw_alunite').withChance(0.0035),
            Item.of('gtceu:raw_cinnabar').withChance(0.0024),
            Item.of('gtceu:raw_emerald').withChance(0.0017),
            Item.of('gtceu:raw_barite').withChance(0.0014)
        ], ['infinite_horizons_tweaks:netherrack_gravel', 'kubejs:bronze_mesh']).id('kubejs/recipes/createsiftersifting/bronze/netherrack');
        event.recipes.createsifterSifting([
            Item.of('gtceu:raw_sulfur').withChance(0.0174),
            Item.of('gtceu:raw_tetrahedrite').withChance(0.0139),
            Item.of('gtceu:raw_stibnite').withChance(0.0060),
            Item.of('gtceu:raw_sphalerite').withChance(0.0052),
            Item.of('gtceu:raw_saltpeter').withChance(0.0035),
            Item.of('gtceu:raw_electrotine').withChance(0.0035),
            Item.of('gtceu:raw_beryllium').withChance(0.0026),
            Item.of('gtceu:raw_pyrolusite').withChance(0.0026),
            Item.of('gtceu:raw_tantalite').withChance(0.0026),
            Item.of('gtceu:raw_thorium').withChance(0.0009)
        ], ['kubejs:basalt_gravel', 'kubejs:bronze_mesh']).id('kubejs/recipes/createsiftersifting/bronze/basalt_gravel');
        event.recipes.createsifterSifting([
            Item.of('gtceu:raw_naquadah').withChance(0.0281),
            Item.of('gtceu:raw_pitchblende').withChance(0.0281),
            Item.of('gtceu:raw_aluminium').withChance(0.0125),
            Item.of('gtceu:raw_scheelite').withChance(0.0125),
            Item.of('gtceu:raw_chromite').withChance(0.0094),
            Item.of('gtceu:raw_plutonium').withChance(0.0094),
            Item.of('gtceu:raw_uraninite').withChance(0.0094),
            Item.of('gtceu:raw_tungstate').withChance(0.0083),
            Item.of('gtceu:raw_lithium').withChance(0.0083),
            Item.of('gtceu:raw_cooperite').withChance(0.0031),
            Item.of('gtceu:raw_platinum').withChance(0.0031),
            Item.of('gtceu:raw_palladium').withChance(0.0016)
        ], ['infinite_horizons_tweaks:end_stone_gravel', 'kubejs:bronze_mesh']).id('kubejs/recipes/createsiftersifting/bronze/end_stone');
    } else {
        Console.log('Gregtech not loaded...skipping sifting recipes.');
    }
});