/**
 * Sifting options:
 * - gravel
 * - andesite (gravel)
 * - diorite (gravel)
 * - granite (gravel)
 * - sand
 * - dust
 * - netherrack (gravel)
 * - end stone (gravel)
 * - basalt (gravel)
 * 
 * Regular mesh tiers:
 * - string (level 1)
 * - copper (level 2)
 * - iron (level 3)
 * - brass (level 4)
 * - netherite (level 5)
 * 
 * Gregtech mesh tiers:
 * - bronze mesh (tier ULV)
 * - steel mesh (tier LV)
 * - aluminum (tier MV)
 * ??? (tier HV)
 * ??? (tier EV)
 * - tungsten steel (tier IV)
 * ??? (tier LuV)
 * - naquadah alloy (tier ZPM)
 * 
 */

const mesh_mapping = [
    { mesh: 'createsifter:string_mesh', multiplier: 1 },
    { mesh: 'kubejs:copper_mesh', multiplier: 1.25 },
    { mesh: 'kubejs:iron_mesh', multiplier: 1.5 },
    { mesh: 'createsifter:brass_mesh', multiplier: 1.75 },
    { mesh: 'kubejs:netherite_mesh', multiplier: 2 }
];
ServerEvents.recipes(event => {
    event.remove({ input: '#createsifter:meshes' });
    /**
     * Gravel
     */
    event.recipes.createsifterSifting([
        Item.of('minecraft:flint').withChance(0.5),
        Item.of('kubejs:stone_pebble').withChance(0.75),
        Item.of('kubejs:andesite_pebble').withChance(0.5),
        Item.of('kubejs:diorite_pebble').withChance(0.5),
        Item.of('kubejs:granite_pebble').withChance(0.5),
        Item.of('minecraft:raw_copper').withChance(0.25)
    ], ['minecraft:gravel','createsifter:string_mesh']).id('kubejs/recipes/createsifterSifting/string/gravel');
    event.recipes.createsifterSifting([
        Item.of('minecraft:flint').withChance(0.25),
        Item.of('minecraft:raw_copper').withChance(0.5),
        Item.of('minecraft:raw_iron').withChance(0.25),
        Item.of('minecraft:coal').withChance(0.25)
    ], ['minecraft:gravel','kubejs:copper_mesh']).id('kubejs/recipes/createsifterSifting/copper/gravel');
    event.recipes.createsifterSifting([
        Item.of('minecraft:raw_copper').withChance(0.25),
        Item.of('minecraft:raw_iron').withChance(0.5),
        Item.of('kubejs:raw_aluminum').withChance(0.125),
        Item.of('create:raw_zinc').withChance(0.25),
        Item.of('kubejs:raw_tin').withChance(0.25),
        Item.of('minecraft:coal').withChance(0.5),
        Item.of('kubejs:raw_aluminum').withChance(0.125)
    ], ['minecraft:gravel','kubejs:iron_mesh']).id('kubejs/recipes/createsifterSifting/iron/gravel');
    event.recipes.createsifterSifting([
        Item.of('minecraft:raw_iron').withChance(0.25),
        Item.of('kubejs:raw_aluminum').withChance(0.25),
        Item.of('kubejs:raw_osmium').withChance(0.25),
        Item.of('kubejs:raw_tin').withChance(0.5),
        Item.of('create:raw_zinc').withChance(0.5),
        Item.of('minecraft:lapis_lazuli').withChance(0.25),
        Item.of('minecraft:coal').withChance(0.75),
        Item.of('irons_spellbooks:raw_mithril').withChance(0.0625)
    ], ['minecraft:gravel','createsifter:brass_mesh']).id('kubejs/recipes/createsifterSifting/brass/gravel');
    event.recipes.createsifterSifting([
        Item.of('create:raw_zinc').withChance(0.25),
        Item.of('kubejs:raw_aluminum').withChance(0.375),
        Item.of('kubejs:raw_tin').withChance(0.25),
        Item.of('kubejs:raw_osmium').withChance(0.5),
        Item.of('minecraft:lapis_lazuli').withChance(0.5),
        Item.of('minecraft:coal').withChance(0.5),
        Item.of('minecraft:emerald').withChance(0.25),
        Item.of('irons_spellbooks:raw_mithril').withChance(0.125)
    ], ['minecraft:gravel','kubejs:netherite_mesh']).id('kubejs/recipes/createsifterSifting/netherite/gravel');
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_coal').withChance(0.125)
    ], ['minecraft:gravel','kubejs:bronze_mesh']).id('kubejs/recipes/createsifterSifting/bronze/gravel');
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_coal').withChance(0.25)
    ], ['minecraft:gravel','kubejs:steel_mesh']).id('kubejs/recipes/createsifterSifting/steel/gravel');
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
    ], ['minecraft:gravel','kubejs:aluminum_mesh']).id('kubejs/recipes/createsifterSifting/aluminum/gravel')

    /**
     * -----------------
     * ANDESITE
     * -----------------
     * LUBRICANT VEIN
     * 'gtceu:raw_soapstone'        40  3   120
     * 'gtceu:raw_talc'             40  2   80
     * 'gtceu:raw_glauconite_sand'  40  2
     * 'gtceu:raw_pentlandite'      40  1
     * 
     * MAGNETITE VEIN
     * 'gtceu:raw_vanadium_magnetite'   80  3
     * 'gtceu:raw_magnetite'            80  2
     * 
     * CASSERITE VEIN
     * 'gtceu:raw_tin'          80  4
     * 'gtceu:raw_cassiterite'  80  2
     * 
     * BANDED IRON VEIN
     * 'gtceu:raw_goethite'         30  3
     * 'gtceu:raw_yellow_limonite'  30  2
     * 'gtceu:raw_hematite'         30  2
     * 
     * APATITE VEIN
     * 'gtceu:raw_apatite'              40  3   120
     * 'gtceu:raw_tricalcium_phosphate' 40  2   80
     * 'gtceu:raw_pyrochlore'           40  1   40
     * 
     * BERYLLIUM VEIN
     * 'gtceu:raw_beryllium'    30  3   90
     * 'gtceu:raw_emerald'      30  4   120
     */
    
    /**
     * -----------------------
     * SAND
     * -----------------------
     * OILSANDS VEIN
     * 'gtceu:raw_oilsands' 40  6
     * 
     * SALTS VEIN
     * 'gtceu:raw_rock_salt'    50  3
     * 'gtceu:raw_salt'         50  2
     * 'gtceu:raw_lepidolite'   50  1
     * 'gtceu:raw_spodumene'    50  1
     * 
     * MINERAL SAND VEIN
     * 'gtceu:raw_basaltic_mineral_sand'    80  3
     * 'gtceu:raw_granitic_mineral_sand'    80  2
     * 'gtceu:raw_fullers_earth'            80  2
     * 'gtceu:raw_gypsum'                   80  1
     * 
     * GARNET TIN VEIN
     * 'gtceu:raw_cassiterite_sand' 80  3
     * 'gtceu:raw_garnet_sand'      80  2
     * 'gtceu:raw_asbestos'         80  2   
     * 'gtceu:raw_diatomite'        80  1
     */
    
    /**
     * Dust
     */
    event.recipes.createsifterSifting([
        Item.of('minecraft:bone_meal').withChance(0.25)
    ], ['createsifter:dust','createsifter:string_mesh']).id('kubejs/recipes/createsifterSifting/string/dust')
    event.recipes.createsifterSifting([
        Item.of('minecraft:bone_meal').withChance(0.5)
    ], ['createsifter:dust','kubejs:copper_mesh']).id('kubejs/recipes/createsifterSifting/copper/dust')
    event.recipes.createsifterSifting([
        Item.of('minecraft:bone_meal').withChance(0.25),
        Item.of('minecraft:redstone').withChance(0.125)
    ], ['createsifter:dust','kubejs:iron_mesh']).id('kubejs/recipes/createsifterSifting/iron/dust')
    event.recipes.createsifterSifting([
        Item.of('minecraft:redstone').withChance(0.25),
        Item.of('mysticalagriculture:prosperity_shard').withChance(0.125)
    ], ['createsifter:dust','createsifter:brass_mesh']).id('kubejs/recipes/createsifterSifting/brass/dust')
    event.recipes.createsifterSifting([
        Item.of('minecraft:redstone').withChance(0.5),
        Item.of('mysticalagriculture:prosperity_shard').withChance(0.25),
        Item.of('forbidden_arcanus:arcane_crystal_dust').withChance(0.125)
    ], ['createsifter:dust','kubejs:netherite_mesh']).id('kubejs/recipes/createsifterSifting/netherite/dust')

    /**
     * Soul Sand
     */
    event.recipes.createsifterSifting([
        Item.of('minecraft:blaze_powder').withChance(0.125),
        Item.of('mysticalagriculture:soul_dust').withChance(0.125)
    ], ['minecraft:soul_sand','createsifter:string_mesh']).id('kubejs/recipes/createsifterSifting/string/soul_sand')
    event.recipes.createsifterSifting([
        Item.of('minecraft:quartz').withChance(0.125),
        Item.of('minecraft:blaze_powder').withChance(0.25),
        Item.of('minecraft:glowstone_dust').withChance(0.125),
        Item.of('mysticalagriculture:soul_dust').withChance(0.25)
    ], ['minecraft:soul_sand','kubejs:copper_mesh']).id('kubejs/recipes/createsifterSifting/copper/soul_sand')
    event.recipes.createsifterSifting([
        Item.of('minecraft:quartz').withChance(0.25),
        Item.of('minecraft:blaze_powder').withChance(0.125),
        Item.of('minecraft:glowstone_dust').withChance(0.25),
        Item.of('mysticalagriculture:soul_dust').withChance(0.5),
        Item.of('mysticalagriculture:soulium_dust').withChance(0.125)
    ], ['minecraft:soul_sand','kubejs:iron_mesh']).id('kubejs/recipes/createsifterSifting/iron/soul_sand')
    event.recipes.createsifterSifting([
        Item.of('minecraft:quartz').withChance(0.5),
        Item.of('minecraft:glowstone_dust').withChance(0.5),
        Item.of('minecraft:ghast_tear').withChance(0.125),
        Item.of('mysticalagriculture:soul_dust').withChance(0.25),
        Item.of('mysticalagriculture:soulium_dust').withChance(0.25)
    ], ['minecraft:soul_sand','createsifter:brass_mesh']).id('kubejs/recipes/createsifterSifting/brass/soul_sand')
    event.recipes.createsifterSifting([
        Item.of('minecraft:quartz').withChance(0.25),
        Item.of('minecraft:glowstone_dust').withChance(0.25),
        Item.of('minecraft:ghast_tear').withChance(0.25),
        Item.of('mysticalagriculture:soul_dust').withChance(0.125),
        Item.of('mysticalagriculture:soulium_dust').withChance(0.5),
        Item.of('quark:soul_bead').withChance(0.125)
    ], ['minecraft:soul_sand','kubejs:netherite_mesh']).id('kubejs/recipes/createsifterSifting/netherite/soul_sand')
    
    /**
     * Deepslate (gravel)
     */
    event.recipes.createsifterSifting([
        Item.of('minecraft:raw_gold').withChance(0.25),
        Item.of('kubejs:raw_aluminum').withChance(0.0625),
        Item.of('kubejs:raw_lead').withChance(0.125),
        Item.of('kubejs:raw_nickel').withChance(0.125),
        Item.of('kubejs:raw_osmium').withChance(0.25),
        Item.of('kubejs:raw_silver').withChance(0.125),
        Item.of('minecraft:diamond').withChance(0.0625),
        Item.of('powah:uraninite_raw').withChance(0.0625),
        Item.of('irons_spellbooks:raw_mithril').withChance(0.0625)
    ], ['kubejs:deepslate_gravel','kubejs:iron_mesh']).id('kubejs/recipes/createsifterSifting/iron/deepslate');
    event.recipes.createsifterSifting([
        Item.of('minecraft:raw_gold').withChance(0.375),
        Item.of('kubejs:raw_aluminum').withChance(0.125),
        Item.of('kubejs:raw_lead').withChance(0.25),
        Item.of('kubejs:raw_nickel').withChance(0.25),
        Item.of('kubejs:raw_osmium').withChance(0.5),
        Item.of('kubejs:raw_silver').withChance(0.25),
        Item.of('kubejs:raw_uranium').withChance(0.125),
        Item.of('minecraft:diamond').withChance(0.125),
        Item.of('powah:uraninite_raw').withChance(0.125),
        Item.of('irons_spellbooks:raw_mithril').withChance(0.125)
    ], ['kubejs:deepslate_gravel','createsifter:brass_mesh']).id('kubejs/recipes/createsifterSifting/brass/deepslate');
    event.recipes.createsifterSifting([
        Item.of('minecraft:raw_gold').withChance(0.5),
        Item.of('kubejs:raw_aluminum').withChance(0.25),
        Item.of('kubejs:raw_lead').withChance(0.5),
        Item.of('kubejs:raw_nickel').withChance(0.5),
        Item.of('kubejs:raw_osmium').withChance(0.25),
        Item.of('kubejs:raw_silver').withChance(0.5),
        Item.of('kubejs:raw_uranium').withChance(0.25),
        Item.of('minecraft:diamond').withChance(0.25),
        Item.of('powah:uraninite_raw').withChance(0.25),
        Item.of('irons_spellbooks:raw_mithril').withChance(0.25)
    ], ['kubejs:deepslate_gravel','kubejs:netherite_mesh']).id('kubejs/recipes/createsifterSifting/netherite/deepslate');



    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_graphite').withChance(0.25),
        Item.of('gtceu:raw_diamond').withChance(0.125),
        Item.of('gtceu:raw_coal').withChance(0.03125),

        Item.of('gtceu:raw_garnierite').withChance(0.25),
        Item.of('gtceu:raw_nickel').withChance(0.125),
        Item.of('gtceu:raw_cobaltite').withChance(0.125),
        Item.of('gtceu:raw_pentlandite').withChance(0.0625)
    ], ['kubejs:deepslate_gravel','kubejs:bronze_mesh']).id('kubejs/recipes/createsifterSifting/bronze/soul_sand');

    /**
     * Limestone (gravel)
     */
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_galena').withChance(0.25),
        Item.of('gtceu:raw_silver').withChance(0.125),
        Item.of('gtceu:raw_lead').withChance(0.0625)
    ], ['kubejs:limestone_gravel','kubejs:bronze_mesh']).id('kubejs/recipes/createsifterSifting/bronze/limestone')

    /**
     * Calcite (gravel)
     */
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_calcite'),
        Item.of('gtceu:raw_lazurite').withChance(0.25),
        Item.of('gtceu:raw_sodalite').withChance(0.125),
        Item.of('gtceu:raw_lapis').withChance(0.0625)
    ], ['kubejs:calcite_gravel','kubejs:bronze_mesh']).id('kubejs/recipes/createsifterSifting/bronze/calcite')

    /**
     * Netherrack
     */
    event.recipes.createsifterSifting([
        Item.of('minecraft:raw_gold').withChance(0.125)
    ], ['kubejs:netherrack_gravel', 'kubejs:copper_mesh']).id('kubejs/recipes/createsifterSifting/copper/netherrack');
    event.recipes.createsifterSifting([
        Item.of('minecraft:raw_gold').withChance(0.25)
    ], ['kubejs:netherrack_gravel', 'kubejs:iron_mesh']).id('kubejs/recipes/createsifterSifting/iron/netherrack');
    event.recipes.createsifterSifting([
        Item.of('minecraft:raw_gold').withChance(0.375),
        Item.of('kubejs:raw_uranium').withChance(0.125)
    ], ['kubejs:netherrack_gravel', 'createsifter:brass_mesh']).id('kubejs/recipes/createsifterSifting/brass/netherrack');
    event.recipes.createsifterSifting([
        Item.of('minecraft:raw_gold').withChance(0.5),
        Item.of('kubejs:raw_uranium').withChance(0.25),
        Item.of('occultism:raw_iesnium').withChance(0.0625)
    ], ['kubejs:netherrack_gravel', 'kubejs:netherite_mesh']).id('kubejs/recipes/createsifterSifting/netherite/netherrack');
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
    ], ['kubejs:netherrack_gravel','kubejs:steel_mesh']).id('kubejs/recipes/createsifterSifting/steel/netherrack')

    /**
     * End Stone
     */
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
    ], ['kubejs:end_stone_gravel','kubejs:steel_mesh']).id('kubejs/recipes/createsifterSifting/steel/end_stone')


    /**
     * Basalt (gravel)
     */
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
    ], ['kubejs:basalt_gravel','kubejs:steel_mesh']).id('kubejs/recipes/createsifterSifting/steel/basalt')

    /**
     * Granite (gravel)
     */
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
    ], ['kubejs:granite_gravel','kubejs:steel_mesh']).id('kubejs/recipes/createsifterSifting/steel/granite')


    mesh_mapping.forEach(m => {
        // Earth Slime Dirt
        event.recipes.createsifterSifting([
            Item.of('tconstruct:earth_slime_grass_seeds').withChance(0.25 * m.multiplier),
            Item.of('tconstruct:earth_slime_sapling').withChance(0.05 * m.multiplier)
        ], ['tconstruct:earth_slime_dirt', m.mesh])
        // Sky Slime Dirt
        event.recipes.createsifterSifting([
            Item.of('tconstruct:sky_slime_grass_seeds').withChance(0.25 * m.multiplier),
            Item.of('tconstruct:sky_slime_sapling').withChance(0.05 * m.multiplier)
        ], ['tconstruct:sky_slime_dirt', m.mesh])
        // Ichor Slime Dirt
        event.recipes.createsifterSifting([
            Item.of('tconstruct:blood_slime_grass_seeds').withChance(0.25 * m.multiplier),
            Item.of('tconstruct:blood_slime_sapling').withChance(0.05 * m.multiplier)
        ], ['tconstruct:ichor_slime_dirt', m.mesh])
        // Ender Slime Dirt
        event.recipes.createsifterSifting([
            Item.of('tconstruct:ender_slime_grass_seeds').withChance(0.25 * m.multiplier),
            Item.of('tconstruct:ender_slime_sapling').withChance(0.05 * m.multiplier)
        ], ['tconstruct:ender_slime_dirt', m.mesh])
    })

    event.recipes.createsifterSifting([
        Item.of('minecraft:wheat_seeds').withChance(0.5),
        Item.of('minecraft:pumpkin_seeds').withChance(0.2),
        Item.of('minecraft:melon_seeds').withChance(0.2),
        Item.of('minecraft:sweet_berry_bush').withChance(0.15),
        Item.of('farmersdelight:cabbage_seeds').withChance(0.1),
        Item.of('farmersdelight:tomato_seeds').withChance(0.1),
        Item.of('supplementaries:flax_seeds').withChance(0.1),
        Item.of('delightful:cantaloupe_seeds').withChance(0.1),
        Item.of('delightful:salmonberry_pips').withChance(0.1),
        Item.of('occultism:datura_seeds').withChance(0.05),
        Item.of('immersiveengineering:seed').withChance(0.15)
    ], ['createsifter:string_mesh', 'minecraft:dirt']).id('kubejs:createsifterSifting/string/dirt');

    event.recipes.createsifterSifting([
        Item.of('minecraft:big_dripleaf').withChance(0.15),
        Item.of('minecraft:small_dripleaf').withChance(0.2),
        Item.of('minecraft:flowering_azalea').withChance(0.1),
        Item.of('minecraft:azalea').withChance(0.15),
        Item.of('minecraft:spore_blossom').withChance(0.05)
    ], ['createsifter:string_mesh', 'minecraft:moss_block']).id('kubejs:createsifterSifting/string/moss_block');

    event.recipes.createsifterSifting([
        Item.of('minecraft:allium').withChance(0.25),
        Item.of('minecraft:azure_bluet').withChance(0.25),
        Item.of('minecraft:blue_orchid').withChance(0.25),
        Item.of('minecraft:cornflower').withChance(0.25),
        Item.of('minecraft:dandelion').withChance(0.3),
        Item.of('minecraft:lily_of_the_valley').withChance(0.25),
        Item.of('minecraft:oxeye_daisy').withChance(0.25),
        Item.of('minecraft:poppy').withChance(0.3),
        Item.of('minecraft:orange_tulip').withChance(0.25),
        Item.of('minecraft:pink_tulip').withChance(0.25),
        Item.of('minecraft:red_tulip').withChance(0.25),
        Item.of('minecraft:white_tulip').withChance(0.25),
        Item.of('minecraft:lilac').withChance(0.2),
        Item.of('minecraft:peony').withChance(0.2),
        Item.of('minecraft:rose_bush').withChance(0.2),
        Item.of('minecraft:sunflower').withChance(0.2),
    ], ['createsifter:string_mesh', 'minecraft:grass_block']).id('kubejs:createsifterSifting/string/grass_block');
})