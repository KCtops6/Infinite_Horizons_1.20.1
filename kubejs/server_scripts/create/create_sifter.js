ServerEvents.recipes(event => {
    // removes all mesh recipes
    event.remove({ input: '#createsifter:meshes' })
    /**
     * ------------------------------------------------------
     * GRAVEL
     * ------------------------------------------------------
     * NON-GREGTECH STUFF
     * 'minecraft:raw_iron'
     * 'minecraft:raw_copper'
     * 'minecraft:raw_gold'
     * 'create:raw_zinc'
     * 'mekanism:raw_osmium'
     * 'mekanism:raw_uranium'
     * 'minecraft:coal'
     * 'minecraft:flint'
     * 'minecraft:emerald'
     * 
     * COAL VEIN
     * 'gtceu:raw_coal' 80  3
     * 
     * REDSTONE VEIN
     * 'gtceu:raw_redstone' 60  3   180
     * 'gtceu:raw_ruby'     60  2   120
     * 'gtceu:raw_cinnabar' 60  1   60
     */
    event.recipes.createsifterSifting([
        Item.of('minecraft:raw_iron').withChance(0.2),
        Item.of('minecraft:raw_copper').withChance(0.3),
        Item.of('minecraft:raw_gold').withChance(0.05),
        Item.of('create:raw_zinc').withChance(0.15),
        Item.of('mekanism:raw_osmium').withChance(0.15),
        Item.of('mekanism:raw_uranium').withChance(0.05),
        Item.of('thermal:raw_tin').withChance(0.2),
        Item.of('thermal:raw_lead').withChance(0.2),
        Item.of('thermal:raw_silver').withChance(0.2),
        Item.of('thermal:raw_nickel').withChance(0.2),
        Item.of('minecraft:coal').withChance(0.1),
        Item.of('minecraft:lapis_lazuli').withChance(0.1),
        Item.of('minecraft:emerald').withChance(0.05),
        Item.of('minecraft:flint').withChance(0.5),

        Item.of('gtceu:raw_coal').withChance(240 / 500 / 50),
        Item.of('gtceu:raw_redstone').withChance(180 / 500 / 50),
        Item.of('gtceu:raw_ruby').withChance(120 / 500 / 50),
        Item.of('gtceu:raw_cinnabar').withChance(60 / 500 / 50)
    ], ['minecraft:gravel','createsifter:string_mesh']);
    event.recipes.createsifterSifting([
        Item.of('minecraft:raw_iron').withChance(0.2 + 0.05),
        Item.of('minecraft:raw_copper').withChance(0.3 + 0.05),
        Item.of('minecraft:raw_gold').withChance(0.05 + 0.05),
        Item.of('create:raw_zinc').withChance(0.15 + 0.05),
        Item.of('mekanism:raw_osmium').withChance(0.15 + 0.05),
        Item.of('mekanism:raw_uranium').withChance(0.05 + 0.05),
        Item.of('thermal:raw_tin').withChance(0.2 + 0.05),
        Item.of('thermal:raw_lead').withChance(0.2 + 0.05),
        Item.of('thermal:raw_silver').withChance(0.2 + 0.05),
        Item.of('thermal:raw_nickel').withChance(0.2 + 0.05),
        Item.of('minecraft:coal').withChance(0.1 + 0.05),
        Item.of('minecraft:lapis_lazuli').withChance(0.1 + 0.05),
        Item.of('minecraft:emerald').withChance(0.05 + 0.05),
        Item.of('minecraft:flint').withChance(0.5 + 0.05),

        Item.of('gtceu:raw_coal').withChance(240 / 500 / 40),
        Item.of('gtceu:raw_redstone').withChance(180 / 500 / 40),
        Item.of('gtceu:raw_ruby').withChance(120 / 500 / 40),
        Item.of('gtceu:raw_cinnabar').withChance(60 / 500 / 40)
    ], ['minecraft:gravel','kubejs:copper_mesh']);
    event.recipes.createsifterSifting([
        Item.of('minecraft:raw_iron').withChance(0.2 + 0.05 + 0.1),
        Item.of('minecraft:raw_copper').withChance(0.3 + 0.05 + 0.1),
        Item.of('minecraft:raw_gold').withChance(0.05 + 0.05 + 0.1),
        Item.of('create:raw_zinc').withChance(0.15 + 0.05 + 0.1),
        Item.of('mekanism:raw_osmium').withChance(0.15 + 0.05 + 0.1),
        Item.of('mekanism:raw_uranium').withChance(0.05 + 0.05 + 0.1),
        Item.of('thermal:raw_tin').withChance(0.2 + 0.05 + 0.1),
        Item.of('thermal:raw_lead').withChance(0.2 + 0.05 + 0.1),
        Item.of('thermal:raw_silver').withChance(0.2 + 0.05 + 0.1),
        Item.of('thermal:raw_nickel').withChance(0.2 + 0.05 + 0.1),
        Item.of('minecraft:coal').withChance(0.1 + 0.05 + 0.1),
        Item.of('minecraft:lapis_lazuli').withChance(0.1 + 0.05 + 0.1),
        Item.of('minecraft:emerald').withChance(0.05 + 0.05 + 0.1),
        Item.of('minecraft:flint').withChance(0.5 + 0.05 + 0.1),

        Item.of('gtceu:raw_coal').withChance(240 / 500 / 30),
        Item.of('gtceu:raw_redstone').withChance(180 / 500 / 30),
        Item.of('gtceu:raw_ruby').withChance(120 / 500 / 30),
        Item.of('gtceu:raw_cinnabar').withChance(60 / 500 / 30)
    ], ['minecraft:gravel','kubejs:iron_mesh']);
    event.recipes.createsifterSifting([
        Item.of('minecraft:raw_iron').withChance(0.2 + 0.05 + 0.1 + 0.15),
        Item.of('minecraft:raw_copper').withChance(0.3 + 0.05 + 0.1 + 0.15),
        Item.of('minecraft:raw_gold').withChance(0.05 + 0.05 + 0.1 + 0.15),
        Item.of('create:raw_zinc').withChance(0.15 + 0.05 + 0.1 + 0.15),
        Item.of('mekanism:raw_osmium').withChance(0.15 + 0.05 + 0.1 + 0.15),
        Item.of('mekanism:raw_uranium').withChance(0.05 + 0.05 + 0.1 + 0.15),
        Item.of('thermal:raw_tin').withChance(0.2 + 0.05 + 0.1 + 0.15),
        Item.of('thermal:raw_lead').withChance(0.2 + 0.05 + 0.1 + 0.15),
        Item.of('thermal:raw_silver').withChance(0.2 + 0.05 + 0.1 + 0.15),
        Item.of('thermal:raw_nickel').withChance(0.2 + 0.05 + 0.1 + 0.15),
        Item.of('minecraft:coal').withChance(0.1 + 0.05 + 0.1 + 0.15),
        Item.of('minecraft:lapis_lazuli').withChance(0.1 + 0.05 + 0.1 + 0.15),
        Item.of('minecraft:emerald').withChance(0.05 + 0.05 + 0.1 + 0.15),
        Item.of('minecraft:flint').withChance(0.5 + 0.05 + 0.1 + 0.15),

        Item.of('gtceu:raw_coal').withChance(240 / 500 / 20),
        Item.of('gtceu:raw_redstone').withChance(180 / 500 / 20),
        Item.of('gtceu:raw_ruby').withChance(120 / 500 / 20),
        Item.of('gtceu:raw_cinnabar').withChance(60 / 500 / 20)
    ], ['minecraft:gravel','createsifter:brass_mesh']);
    event.recipes.createsifterSifting([
        Item.of('minecraft:raw_iron').withChance(0.2 + 0.05 + 0.1 + 0.15 + 0.2),
        Item.of('minecraft:raw_copper').withChance(0.3 + 0.05 + 0.1 + 0.15 + 0.2),
        Item.of('minecraft:raw_gold').withChance(0.05 + 0.05 + 0.1 + 0.15 + 0.2),
        Item.of('create:raw_zinc').withChance(0.15 + 0.05 + 0.1 + 0.15 + 0.2),
        Item.of('mekanism:raw_osmium').withChance(0.15 + 0.05 + 0.1 + 0.15 + 0.2),
        Item.of('mekanism:raw_uranium').withChance(0.05 + 0.05 + 0.1 + 0.15 + 0.2),
        Item.of('thermal:raw_tin').withChance(0.2 + 0.05 + 0.1 + 0.15 + 0.2),
        Item.of('thermal:raw_lead').withChance(0.2 + 0.05 + 0.1 + 0.15 + 0.2),
        Item.of('thermal:raw_silver').withChance(0.2 + 0.05 + 0.1 + 0.15 + 0.2),
        Item.of('thermal:raw_nickel').withChance(0.2 + 0.05 + 0.1 + 0.15 + 0.2),
        Item.of('minecraft:coal').withChance(0.1 + 0.05 + 0.1 + 0.15 + 0.2),
        Item.of('minecraft:lapis_lazuli').withChance(0.1 + 0.05 + 0.1 + 0.15 + 0.2),
        Item.of('minecraft:emerald').withChance(0.05 + 0.05 + 0.1 + 0.15 + 0.2),
        Item.of('minecraft:flint').withChance(0.5 + 0.05 + 0.1 + 0.15 + 0.2),

        Item.of('gtceu:raw_coal').withChance(240 / 500 / 10),
        Item.of('gtceu:raw_redstone').withChance(180 / 500 / 10),
        Item.of('gtceu:raw_ruby').withChance(120 / 500 / 10),
        Item.of('gtceu:raw_cinnabar').withChance(60 / 500 / 10)
    ], ['minecraft:gravel','kubejs:netherite_mesh']);
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
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_tin').withChance(320 / 500 / 50),
        Item.of('gtceu:raw_vanadium_magnetite').withChance(240 / 500 / 50),
        Item.of('gtceu:raw_cassiterite').withChance(160 / 500 / 50),
        Item.of('gtceu:raw_magnetite').withChance(160 / 500 / 50),
        Item.of('gtceu:raw_apatite').withChance(120 / 500 / 50),
        Item.of('gtceu:raw_emerald').withChance(120 / 500 / 50),
        Item.of('gtceu:raw_soapstone').withChance(120 / 500 / 50),
        Item.of('gtceu:raw_beryllium').withChance(90 / 500 / 50),
        Item.of('gtceu:raw_goethite').withChance(90 / 500 / 50),
        Item.of('gtceu:raw_glauconite_sand').withChance(80 / 500 / 50),
        Item.of('gtceu:raw_talc').withChance(80 / 500 / 50),
        Item.of('gtceu:raw_tricalcium_phosphate').withChance(80 / 500 / 50),
        Item.of('gtceu:raw_hematite').withChance(60 / 500 / 50),
        Item.of('gtceu:raw_yellow_limonite').withChance(60 / 500 / 50),
        Item.of('gtceu:raw_pentlandite').withChance(40 / 500 / 50),
        Item.of('gtceu:raw_pyrochlore').withChance(40 / 500 / 50),
    ], ['kubejs:andesite_gravel','createsifter:string_mesh']);
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_tin').withChance(320 / 500 / 40),
        Item.of('gtceu:raw_vanadium_magnetite').withChance(240 / 500 / 40),
        Item.of('gtceu:raw_cassiterite').withChance(160 / 500 / 40),
        Item.of('gtceu:raw_magnetite').withChance(160 / 500 / 40),
        Item.of('gtceu:raw_apatite').withChance(120 / 500 / 40),
        Item.of('gtceu:raw_emerald').withChance(120 / 500 / 40),
        Item.of('gtceu:raw_soapstone').withChance(120 / 500 / 40),
        Item.of('gtceu:raw_beryllium').withChance(90 / 500 / 40),
        Item.of('gtceu:raw_goethite').withChance(90 / 500 / 40),
        Item.of('gtceu:raw_glauconite_sand').withChance(80 / 500 / 40),
        Item.of('gtceu:raw_talc').withChance(80 / 500 / 40),
        Item.of('gtceu:raw_tricalcium_phosphate').withChance(80 / 500 / 40),
        Item.of('gtceu:raw_hematite').withChance(60 / 500 / 40),
        Item.of('gtceu:raw_yellow_limonite').withChance(60 / 500 / 40),
        Item.of('gtceu:raw_pentlandite').withChance(40 / 500 / 40),
        Item.of('gtceu:raw_pyrochlore').withChance(40 / 500 / 40),
    ], ['kubejs:andesite_gravel','kubejs:copper_mesh']);
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_tin').withChance(320 / 500 / 30),
        Item.of('gtceu:raw_vanadium_magnetite').withChance(240 / 500 / 30),
        Item.of('gtceu:raw_cassiterite').withChance(160 / 500 / 30),
        Item.of('gtceu:raw_magnetite').withChance(160 / 500 / 30),
        Item.of('gtceu:raw_apatite').withChance(120 / 500 / 30),
        Item.of('gtceu:raw_emerald').withChance(120 / 500 / 30),
        Item.of('gtceu:raw_soapstone').withChance(120 / 500 / 30),
        Item.of('gtceu:raw_beryllium').withChance(90 / 500 / 30),
        Item.of('gtceu:raw_goethite').withChance(90 / 500 / 30),
        Item.of('gtceu:raw_glauconite_sand').withChance(80 / 500 / 30),
        Item.of('gtceu:raw_talc').withChance(80 / 500 / 30),
        Item.of('gtceu:raw_tricalcium_phosphate').withChance(80 / 500 / 30),
        Item.of('gtceu:raw_hematite').withChance(60 / 500 / 30),
        Item.of('gtceu:raw_yellow_limonite').withChance(60 / 500 / 30),
        Item.of('gtceu:raw_pentlandite').withChance(40 / 500 / 30),
        Item.of('gtceu:raw_pyrochlore').withChance(40 / 500 / 30),
    ], ['kubejs:andesite_gravel','kubejs:iron_mesh']);
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_tin').withChance(320 / 500 / 20),
        Item.of('gtceu:raw_vanadium_magnetite').withChance(240 / 500 / 20),
        Item.of('gtceu:raw_cassiterite').withChance(160 / 500 / 20),
        Item.of('gtceu:raw_magnetite').withChance(160 / 500 / 20),
        Item.of('gtceu:raw_apatite').withChance(120 / 500 / 20),
        Item.of('gtceu:raw_emerald').withChance(120 / 500 / 20),
        Item.of('gtceu:raw_soapstone').withChance(120 / 500 / 20),
        Item.of('gtceu:raw_beryllium').withChance(90 / 500 / 20),
        Item.of('gtceu:raw_goethite').withChance(90 / 500 / 20),
        Item.of('gtceu:raw_glauconite_sand').withChance(80 / 500 / 20),
        Item.of('gtceu:raw_talc').withChance(80 / 500 / 20),
        Item.of('gtceu:raw_tricalcium_phosphate').withChance(80 / 500 / 20),
        Item.of('gtceu:raw_hematite').withChance(60 / 500 / 20),
        Item.of('gtceu:raw_yellow_limonite').withChance(60 / 500 / 20),
        Item.of('gtceu:raw_pentlandite').withChance(40 / 500 / 20),
        Item.of('gtceu:raw_pyrochlore').withChance(40 / 500 / 20),
    ], ['kubejs:andesite_gravel','createsifter:brass_mesh']);
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_tin').withChance(320 / 500 / 10),
        Item.of('gtceu:raw_vanadium_magnetite').withChance(240 / 500 / 10),
        Item.of('gtceu:raw_cassiterite').withChance(160 / 500 / 10),
        Item.of('gtceu:raw_magnetite').withChance(160 / 500 / 10),
        Item.of('gtceu:raw_apatite').withChance(120 / 500 / 10),
        Item.of('gtceu:raw_emerald').withChance(120 / 500 / 10),
        Item.of('gtceu:raw_soapstone').withChance(120 / 500 / 10),
        Item.of('gtceu:raw_beryllium').withChance(90 / 500 / 10),
        Item.of('gtceu:raw_goethite').withChance(90 / 500 / 10),
        Item.of('gtceu:raw_glauconite_sand').withChance(80 / 500 / 10),
        Item.of('gtceu:raw_talc').withChance(80 / 500 / 10),
        Item.of('gtceu:raw_tricalcium_phosphate').withChance(80 / 500 / 10),
        Item.of('gtceu:raw_hematite').withChance(60 / 500 / 10),
        Item.of('gtceu:raw_yellow_limonite').withChance(60 / 500 / 10),
        Item.of('gtceu:raw_pentlandite').withChance(40 / 500 / 10),
        Item.of('gtceu:raw_pyrochlore').withChance(40 / 500 / 10),
    ], ['kubejs:andesite_gravel','kubejs:netherite_mesh']);
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
    event.recipes.createsifterSifting([
        Item.of('kubejs:apatite_gem').withChance(0.1),
        
        Item.of('gtceu:raw_basaltic_mineral_sand').withChance(240 / 500 / 50),
        Item.of('gtceu:raw_oilsands').withChance(240 / 500 / 50),
        Item.of('gtceu:raw_fullers_earth').withChance(160 / 500 / 50),
        Item.of('gtceu:raw_asbestos').withChance(160 / 500 / 50),
        Item.of('gtceu:raw_garnet_sand').withChance(160 / 500 / 50),
        Item.of('gtceu:raw_granitic_mineral_sand').withChance(160 / 500 / 50),
        Item.of('gtceu:raw_rock_salt').withChance(150 / 500 / 50),
        Item.of('gtceu:raw_cassiterite_sand').withChance(120 / 500 / 50),
        Item.of('gtceu:raw_salt').withChance(100 / 500 / 50),
        Item.of('gtceu:raw_diatomite').withChance(80 / 500 / 50),
        Item.of('gtceu:raw_gypsum').withChance(80 / 500 / 50),
        Item.of('gtceu:raw_lepidolite').withChance(50 / 500 / 50),
        Item.of('gtceu:raw_spodumene').withChance(50 / 500 / 50),
    ], ['minecraft:sand','createsifter:string_mesh']);
    event.recipes.createsifterSifting([
        Item.of('kubejs:apatite_gem').withChance(0.1 + 0.05),
        
        Item.of('gtceu:raw_basaltic_mineral_sand').withChance(240 / 500 / 40),
        Item.of('gtceu:raw_oilsands').withChance(240 / 500 / 40),
        Item.of('gtceu:raw_fullers_earth').withChance(160 / 500 / 40),
        Item.of('gtceu:raw_asbestos').withChance(160 / 500 / 40),
        Item.of('gtceu:raw_garnet_sand').withChance(160 / 500 / 40),
        Item.of('gtceu:raw_granitic_mineral_sand').withChance(160 / 500 / 40),
        Item.of('gtceu:raw_rock_salt').withChance(150 / 500 / 40),
        Item.of('gtceu:raw_cassiterite_sand').withChance(120 / 500 / 40),
        Item.of('gtceu:raw_salt').withChance(100 / 500 / 40),
        Item.of('gtceu:raw_diatomite').withChance(80 / 500 / 40),
        Item.of('gtceu:raw_gypsum').withChance(80 / 500 / 40),
        Item.of('gtceu:raw_lepidolite').withChance(50 / 500 / 40),
        Item.of('gtceu:raw_spodumene').withChance(50 / 500 / 40),
    ], ['minecraft:sand','kubejs:copper_mesh']);
    event.recipes.createsifterSifting([
        Item.of('kubejs:apatite_gem').withChance(0.1 + 0.05 + 0.1),
        
        Item.of('gtceu:raw_basaltic_mineral_sand').withChance(240 / 500 / 30),
        Item.of('gtceu:raw_oilsands').withChance(240 / 500 / 30),
        Item.of('gtceu:raw_fullers_earth').withChance(160 / 500 / 30),
        Item.of('gtceu:raw_asbestos').withChance(160 / 500 / 30),
        Item.of('gtceu:raw_garnet_sand').withChance(160 / 500 / 30),
        Item.of('gtceu:raw_granitic_mineral_sand').withChance(160 / 500 / 30),
        Item.of('gtceu:raw_rock_salt').withChance(150 / 500 / 30),
        Item.of('gtceu:raw_cassiterite_sand').withChance(120 / 500 / 30),
        Item.of('gtceu:raw_salt').withChance(100 / 500 / 30),
        Item.of('gtceu:raw_diatomite').withChance(80 / 500 / 30),
        Item.of('gtceu:raw_gypsum').withChance(80 / 500 / 30),
        Item.of('gtceu:raw_lepidolite').withChance(50 / 500 / 30),
        Item.of('gtceu:raw_spodumene').withChance(50 / 500 / 30),
    ], ['minecraft:sand','kubejs:iron_mesh']);
    event.recipes.createsifterSifting([
        Item.of('kubejs:apatite_gem').withChance(0.1 + 0.05 + 0.1 + 0.15),
        
        Item.of('gtceu:raw_basaltic_mineral_sand').withChance(240 / 500 / 20),
        Item.of('gtceu:raw_oilsands').withChance(240 / 500 / 20),
        Item.of('gtceu:raw_fullers_earth').withChance(160 / 500 / 20),
        Item.of('gtceu:raw_asbestos').withChance(160 / 500 / 20),
        Item.of('gtceu:raw_garnet_sand').withChance(160 / 500 / 20),
        Item.of('gtceu:raw_granitic_mineral_sand').withChance(160 / 500 / 20),
        Item.of('gtceu:raw_rock_salt').withChance(150 / 500 / 20),
        Item.of('gtceu:raw_cassiterite_sand').withChance(120 / 500 / 20),
        Item.of('gtceu:raw_salt').withChance(100 / 500 / 20),
        Item.of('gtceu:raw_diatomite').withChance(80 / 500 / 20),
        Item.of('gtceu:raw_gypsum').withChance(80 / 500 / 20),
        Item.of('gtceu:raw_lepidolite').withChance(50 / 500 / 20),
        Item.of('gtceu:raw_spodumene').withChance(50 / 500 / 20),
    ], ['minecraft:sand','createsifter:brass_mesh']);
    event.recipes.createsifterSifting([
        Item.of('kubejs:apatite_gem').withChance(0.1 + 0.05 + 0.1 + 0.15 + 0.2),
        
        Item.of('gtceu:raw_basaltic_mineral_sand').withChance(240 / 500 / 10),
        Item.of('gtceu:raw_oilsands').withChance(240 / 500 / 10),
        Item.of('gtceu:raw_fullers_earth').withChance(160 / 500 / 10),
        Item.of('gtceu:raw_asbestos').withChance(160 / 500 / 10),
        Item.of('gtceu:raw_garnet_sand').withChance(160 / 500 / 10),
        Item.of('gtceu:raw_granitic_mineral_sand').withChance(160 / 500 / 10),
        Item.of('gtceu:raw_rock_salt').withChance(150 / 500 / 10),
        Item.of('gtceu:raw_cassiterite_sand').withChance(120 / 500 / 10),
        Item.of('gtceu:raw_salt').withChance(100 / 500 / 10),
        Item.of('gtceu:raw_diatomite').withChance(80 / 500 / 10),
        Item.of('gtceu:raw_gypsum').withChance(80 / 500 / 10),
        Item.of('gtceu:raw_lepidolite').withChance(50 / 500 / 10),
        Item.of('gtceu:raw_spodumene').withChance(50 / 500 / 10),
    ], ['minecraft:sand','kubejs:netherite_mesh']);
    /**
     * -----------------------
     * DUST
     * -----------------------
     * NON-GREGTECH STUFF
     * 'minecraft:redstone'
     * 'mysticalagriculture:prosperity_shard'
     */
    event.recipes.createsifterSifting([
        Item.of('minecraft:redstone').withChance(0.2),
        Item.of('mysticalagriculture:prosperity_shard').withChance(0.15),
        Item.of('minecraft:bone_meal').withChance(0.15)
    ], ['createsifter:dust','createsifter:string_mesh']);
    event.recipes.createsifterSifting([
        Item.of('minecraft:redstone').withChance(0.2 + 0.05),
        Item.of('mysticalagriculture:prosperity_shard').withChance(0.15 + 0.05),
        Item.of('minecraft:bone_meal').withChance(0.15 + 0.1)
    ], ['createsifter:dust','kubejs:copper_mesh']);
    event.recipes.createsifterSifting([
        Item.of('minecraft:redstone').withChance(0.2 + 0.05 + 0.1),
        Item.of('mysticalagriculture:prosperity_shard').withChance(0.15 + 0.05 + 0.1),
        Item.of('minecraft:bone_meal').withChance(0.15 + 0.1 + 0.15)
    ], ['createsifter:dust','kubejs:iron_mesh']);
    event.recipes.createsifterSifting([
        Item.of('minecraft:redstone').withChance(0.2 + 0.05 + 0.1 + 0.15),
        Item.of('mysticalagriculture:prosperity_shard').withChance(0.15 + 0.05 + 0.1 + 0.15),
        Item.of('minecraft:bone_meal').withChance(0.15 + 0.1 + 0.15 + 0.2)
    ], ['createsifter:dust','createsifter:brass_mesh']);
    event.recipes.createsifterSifting([
        Item.of('minecraft:redstone').withChance(0.2 + 0.05 + 0.1 + 0.15 + 0.2),
        Item.of('mysticalagriculture:prosperity_shard').withChance(0.15 + 0.05 + 0.1 + 0.15 + 0.2),
        Item.of('minecraft:bone_meal').withChance(0.15 + 0.1 + 0.15 + 0.2 + 0.25)
    ], ['createsifter:dust','kubejs:netherite_mesh']);
    /**
     * -----------------------
     * SOUL SAND
     * -----------------------
     * NON-GREGTECH STUFF
     * 'minecraft:glowstone_dust'
     * 'minecraft:blaze_powder'
     * 'minecraft:ghast_tear'
     * 'mysticalagriculture:soulium_dust'
     * 'mysticalagriculture:soul_dust'
     */
    event.recipes.createsifterSifting([
        Item.of('minecraft:glowstone_dust').withChance(0.1),
        Item.of('minecraft:blaze_powder').withChance(0.2),
        Item.of('minecraft:ghast_tear').withChance(0.025),
        Item.of('mysticalagriculture:soulium_dust').withChance(0.125),
        Item.of('mysticalagriculture:soul_dust').withChance(0.25)
    ], ['minecraft:soul_sand','createsifter:string_mesh']);
    event.recipes.createsifterSifting([
        Item.of('minecraft:glowstone_dust').withChance(0.1 + 0.05),
        Item.of('minecraft:blaze_powder').withChance(0.2 + 0.05),
        Item.of('minecraft:ghast_tear').withChance(0.025 + 0.05),
        Item.of('mysticalagriculture:soulium_dust').withChance(0.125 + 0.05),
        Item.of('mysticalagriculture:soul_dust').withChance(0.25 + 0.05)
    ], ['minecraft:soul_sand','kubejs:copper_mesh']);
    event.recipes.createsifterSifting([
        Item.of('minecraft:glowstone_dust').withChance(0.1 + 0.05 + 0.1),
        Item.of('minecraft:blaze_powder').withChance(0.2 + 0.05 + 0.1),
        Item.of('minecraft:ghast_tear').withChance(0.025 + 0.05 + 0.1),
        Item.of('mysticalagriculture:soulium_dust').withChance(0.125 + 0.05 + 0.1),
        Item.of('mysticalagriculture:soul_dust').withChance(0.25 + 0.05 + 0.1)
    ], ['minecraft:soul_sand','kubejs:iron_mesh']);
    event.recipes.createsifterSifting([
        Item.of('minecraft:glowstone_dust').withChance(0.1 + 0.05 + 0.1 + 0.15),
        Item.of('minecraft:blaze_powder').withChance(0.2 + 0.05 + 0.1 + 0.15),
        Item.of('minecraft:ghast_tear').withChance(0.025 + 0.05 + 0.1 + 0.15),
        Item.of('mysticalagriculture:soulium_dust').withChance(0.125 + 0.05 + 0.1 + 0.15),
        Item.of('mysticalagriculture:soul_dust').withChance(0.25 + 0.05 + 0.1 + 0.15)
    ], ['minecraft:soul_sand','createsifter:brass_mesh']);
    event.recipes.createsifterSifting([
        Item.of('minecraft:glowstone_dust').withChance(0.1 + 0.05 + 0.1 + 0.15 + 0.2),
        Item.of('minecraft:blaze_powder').withChance(0.2 + 0.05 + 0.1 + 0.15 + 0.2),
        Item.of('minecraft:ghast_tear').withChance(0.025 + 0.05 + 0.1 + 0.15 + 0.2),
        Item.of('mysticalagriculture:soulium_dust').withChance(0.125 + 0.05 + 0.1 + 0.15 + 0.2),
        Item.of('mysticalagriculture:soul_dust').withChance(0.25 + 0.05 + 0.1 + 0.15 + 0.2)
    ], ['minecraft:soul_sand','kubejs:netherite_mesh']);
    /**
     * DEEPSLATE
     */
    event.recipes.createsifterSifting([
        Item.of('minecraft:diamond').withChance(0.05),
        Item.of('mekanism:fluorite_gem').withChance(0.1),
        Item.of('minecraft:amethyst_shard').withChance(0.1),
        Item.of('irons_spellbooks:arcane_salvage').withChance(0.025),
        Item.of('powah:uraninite_raw').withChance(0.1),
        Item.of('forbidden_arcanus:arcane_crystal').withChance(0.15),
    
        Item.of('gtceu:raw_goethite').withChance(1 / 50),
        Item.of('gtceu:raw_yellow_limonite').withChance(200 / 500 / 50),
        Item.of('gtceu:raw_hematite').withChance(200 / 500 / 50),
        Item.of('gtceu:raw_almandine').withChance(180 / 500 / 50),
        Item.of('gtceu:raw_garnierite').withChance(120 / 500 / 50),
        Item.of('gtceu:raw_graphite').withChance(120 / 500 / 50),
        Item.of('gtceu:raw_pyrope').withChance(120 / 500 / 50),
        Item.of('gtceu:raw_malachite').withChance(100 / 500 / 50),
        Item.of('gtceu:raw_cobaltite').withChance(80 / 500 / 50),
        Item.of('gtceu:raw_diamond').withChance(80 / 500 / 50),
        Item.of('gtceu:raw_nickel').withChance(80 / 500 / 50),
        Item.of('gtceu:raw_sapphire').withChance(60 / 500 / 50),
        Item.of('gtceu:raw_green_sapphire').withChance(60 / 500 / 50),
        Item.of('gtceu:raw_coal').withChance(40 / 500 / 50),
        Item.of('gtceu:raw_pentlandite').withChance(40 / 500 / 50)
    ], ['kubejs:deepslate_gravel','createsifter:string_mesh']);
    event.recipes.createsifterSifting([
        Item.of('minecraft:diamond').withChance(0.05 + 0.05),
        Item.of('mekanism:fluorite_gem').withChance(0.1 + 0.05),
        Item.of('minecraft:amethyst_shard').withChance(0.1 + 0.05),
        Item.of('irons_spellbooks:arcane_salvage').withChance(0.025 + 0.05),
        Item.of('powah:uraninite_raw').withChance(0.1 + 0.05),
        Item.of('forbidden_arcanus:arcane_crystal').withChance(0.15 + 0.05),
        
        Item.of('gtceu:raw_goethite').withChance(1 / 40),
        Item.of('gtceu:raw_yellow_limonite').withChance(200 / 500 / 40),
        Item.of('gtceu:raw_hematite').withChance(200 / 500 / 40),
        Item.of('gtceu:raw_almandine').withChance(180 / 500 / 40),
        Item.of('gtceu:raw_garnierite').withChance(120 / 500 / 40),
        Item.of('gtceu:raw_graphite').withChance(120 / 500 / 40),
        Item.of('gtceu:raw_pyrope').withChance(120 / 500 / 40),
        Item.of('gtceu:raw_malachite').withChance(100 / 500 / 40),
        Item.of('gtceu:raw_cobaltite').withChance(80 / 500 / 40),
        Item.of('gtceu:raw_diamond').withChance(80 / 500 / 40),
        Item.of('gtceu:raw_nickel').withChance(80 / 500 / 40),
        Item.of('gtceu:raw_sapphire').withChance(60 / 500 / 40),
        Item.of('gtceu:raw_green_sapphire').withChance(60 / 500 / 40),
        Item.of('gtceu:raw_coal').withChance(40 / 500 / 40),
        Item.of('gtceu:raw_pentlandite').withChance(40 / 500 / 40)
    ], ['kubejs:deepslate_gravel','kubejs:copper_mesh']);
    event.recipes.createsifterSifting([
        Item.of('minecraft:diamond').withChance(0.05 + 0.05 + 0.1),
        Item.of('mekanism:fluorite_gem').withChance(0.1 + 0.05 + 0.1),
        Item.of('minecraft:amethyst_shard').withChance(0.1 + 0.05 + 0.1),
        Item.of('irons_spellbooks:arcane_salvage').withChance(0.025 + 0.05 + 0.1),
        Item.of('powah:uraninite_raw').withChance(0.1 + 0.05 + 0.1),
        Item.of('forbidden_arcanus:arcane_crystal').withChance(0.15 + 0.05 + 0.1),
        
        Item.of('gtceu:raw_goethite').withChance(1 / 30),
        Item.of('gtceu:raw_yellow_limonite').withChance(200 / 500 / 30),
        Item.of('gtceu:raw_hematite').withChance(200 / 500 / 30),
        Item.of('gtceu:raw_almandine').withChance(180 / 500 / 30),
        Item.of('gtceu:raw_garnierite').withChance(120 / 500 / 30),
        Item.of('gtceu:raw_graphite').withChance(120 / 500 / 30),
        Item.of('gtceu:raw_pyrope').withChance(120 / 500 / 30),
        Item.of('gtceu:raw_malachite').withChance(100 / 500 / 30),
        Item.of('gtceu:raw_cobaltite').withChance(80 / 500 / 30),
        Item.of('gtceu:raw_diamond').withChance(80 / 500 / 30),
        Item.of('gtceu:raw_nickel').withChance(80 / 500 / 30),
        Item.of('gtceu:raw_sapphire').withChance(60 / 500 / 30),
        Item.of('gtceu:raw_green_sapphire').withChance(60 / 500 / 30),
        Item.of('gtceu:raw_coal').withChance(40 / 500 / 30),
        Item.of('gtceu:raw_pentlandite').withChance(40 / 500 / 30)
    ], ['kubejs:deepslate_gravel','kubejs:iron_mesh']);
    event.recipes.createsifterSifting([
        Item.of('minecraft:diamond').withChance(0.05 + 0.05 + 0.1 + 0.15),
        Item.of('mekanism:fluorite_gem').withChance(0.1 + 0.05 + 0.1 + 0.15),
        Item.of('minecraft:amethyst_shard').withChance(0.1 + 0.05 + 0.1 + 0.15),
        Item.of('irons_spellbooks:arcane_salvage').withChance(0.025 + 0.05 + 0.1 + 0.15),
        Item.of('powah:uraninite_raw').withChance(0.1 + 0.05 + 0.1 + 0.15),
        Item.of('forbidden_arcanus:arcane_crystal').withChance(0.15 + 0.05 + 0.1 + 0.15),
         
        Item.of('gtceu:raw_goethite').withChance(1 / 20),
        Item.of('gtceu:raw_yellow_limonite').withChance(200 / 500 / 20),
        Item.of('gtceu:raw_hematite').withChance(200 / 500 / 20),
        Item.of('gtceu:raw_almandine').withChance(180 / 500 / 20),
        Item.of('gtceu:raw_garnierite').withChance(120 / 500 / 20),
        Item.of('gtceu:raw_graphite').withChance(120 / 500 / 20),
        Item.of('gtceu:raw_pyrope').withChance(120 / 500 / 20),
        Item.of('gtceu:raw_malachite').withChance(100 / 500 / 20),
        Item.of('gtceu:raw_cobaltite').withChance(80 / 500 / 20),
        Item.of('gtceu:raw_diamond').withChance(80 / 500 / 20),
        Item.of('gtceu:raw_nickel').withChance(80 / 500 / 20),
        Item.of('gtceu:raw_sapphire').withChance(60 / 500 / 20),
        Item.of('gtceu:raw_green_sapphire').withChance(60 / 500 / 20),
        Item.of('gtceu:raw_coal').withChance(40 / 500 / 20),
        Item.of('gtceu:raw_pentlandite').withChance(40 / 500 / 20)
    ], ['kubejs:deepslate_gravel','createsifter:brass_mesh']);
    event.recipes.createsifterSifting([
        Item.of('minecraft:diamond').withChance(0.05 + 0.05 + 0.1 + 0.15 + 0.2),
        Item.of('mekanism:fluorite_gem').withChance(0.1 + 0.05 + 0.1 + 0.15 + 0.2),
        Item.of('minecraft:amethyst_shard').withChance(0.1 + 0.05 + 0.1 + 0.15 + 0.2),
        Item.of('irons_spellbooks:arcane_salvage').withChance(0.025 + 0.05 + 0.1 + 0.15 + 0.2),
        Item.of('powah:uraninite_raw').withChance(0.1 + 0.05 + 0.1 + 0.15 + 0.2),
        Item.of('forbidden_arcanus:arcane_crystal').withChance(0.15 + 0.05 + 0.1 + 0.15 + 0.2),
        
        Item.of('gtceu:raw_goethite').withChance(1 / 10),
        Item.of('gtceu:raw_yellow_limonite').withChance(200 / 500 / 10),
        Item.of('gtceu:raw_hematite').withChance(200 / 500 / 10),
        Item.of('gtceu:raw_almandine').withChance(180 / 500 / 10),
        Item.of('gtceu:raw_garnierite').withChance(120 / 500 / 10),
        Item.of('gtceu:raw_graphite').withChance(120 / 500 / 10),
        Item.of('gtceu:raw_pyrope').withChance(120 / 500 / 10),
        Item.of('gtceu:raw_malachite').withChance(100 / 500 / 10),
        Item.of('gtceu:raw_cobaltite').withChance(80 / 500 / 10),
        Item.of('gtceu:raw_diamond').withChance(80 / 500 / 10),
        Item.of('gtceu:raw_nickel').withChance(80 / 500 / 10),
        Item.of('gtceu:raw_sapphire').withChance(60 / 500 / 10),
        Item.of('gtceu:raw_green_sapphire').withChance(60 / 500 / 10),
        Item.of('gtceu:raw_coal').withChance(40 / 500 / 10),
        Item.of('gtceu:raw_pentlandite').withChance(40 / 500 / 10)
    ], ['kubejs:deepslate_gravel','kubejs:netherite_mesh']);

    /**
     * --------------------
     * BASALT
     * --------------------
     * 
     * OLIVINE VEIN
     * 'gtceu:raw_bentonite'        20  3
     * 'gtceu:raw_magnetite'        20  2
     * 'gtceu:raw_olivine'          20  2
     * 'gtceu:raw_glauconite_sand'  20  1
     */
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_bentonite').withChance(60 / 500 / 50),
        Item.of('gtceu:raw_magnetite').withChance(40 / 500 / 50),
        Item.of('gtceu:raw_olivine').withChance(40 / 500 / 50),
        Item.of('gtceu:raw_glauconite_sand').withChance(20 / 500 / 50)
    ], ['kubejs:basalt_gravel','createsifter:string_mesh']);
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_bentonite').withChance(60 / 500 / 40),
        Item.of('gtceu:raw_magnetite').withChance(40 / 500 / 40),
        Item.of('gtceu:raw_olivine').withChance(40 / 500 / 40),
        Item.of('gtceu:raw_glauconite_sand').withChance(20 / 500 / 40)
    ], ['kubejs:basalt_gravel','kubejs:copper_mesh']);
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_bentonite').withChance(60 / 500 / 30),
        Item.of('gtceu:raw_magnetite').withChance(40 / 500 / 30),
        Item.of('gtceu:raw_olivine').withChance(40 / 500 / 30),
        Item.of('gtceu:raw_glauconite_sand').withChance(20 / 500 / 30)
    ], ['kubejs:basalt_gravel','kubejs:iron_mesh']);
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_bentonite').withChance(60 / 500 / 20),
        Item.of('gtceu:raw_magnetite').withChance(40 / 500 / 20),
        Item.of('gtceu:raw_olivine').withChance(40 / 500 / 20),
        Item.of('gtceu:raw_glauconite_sand').withChance(20 / 500 / 20)
    ], ['kubejs:basalt_gravel','createsifter:brass_mesh']);
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_bentonite').withChance(60 / 500 / 10),
        Item.of('gtceu:raw_magnetite').withChance(40 / 500 / 10),
        Item.of('gtceu:raw_olivine').withChance(40 / 500 / 10),
        Item.of('gtceu:raw_glauconite_sand').withChance(20 / 500 / 10)
    ], ['kubejs:basalt_gravel','kubejs:netherite_mesh']);

    /**
     * --------------------
     * LIMESTONE
     * --------------------
     * MANGANESE VEIN
     * 'gtceu:raw_grossular'    20  3
     * 'gtceu:raw_spessartine'  20  2
     * 'gtceu:raw_pyrolusite'   20  2
     * 'gtceu:raw_tantalite'    20  1
     * 
     * LAPIS VEIN
     * 'gtceu:raw_lazurite' 40  3   120
     * 'gtceu:raw_sodalite' 40  2   80
     * 'gtceu:raw_lapis'    40  2   80
     * 
     * GALENA VEIN
     * 'gtceu:raw_galena'   40  3   120
     * 'gtceu:raw_silver'   40  2   80
     * 'gtceu:raw_lead'     40  1   40
     */
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_galena').withChance(120 / 500 / 50),
        Item.of('gtceu:raw_lazurite').withChance(120 / 500 / 50),
        Item.of('gtceu:raw_lapis').withChance(80 / 500 / 50),
        Item.of('gtceu:raw_silver').withChance(80 / 500 / 50),
        Item.of('gtceu:raw_sodalite').withChance(80 / 500 / 50),
        Item.of('gtceu:raw_grossular').withChance(60 / 500 / 50),
        Item.of('gtceu:raw_lead').withChance(40 / 500 / 50),
        Item.of('gtceu:raw_pyrolusite').withChance(40 / 500 / 50),
        Item.of('gtceu:raw_spessartine').withChance(40 / 500 / 50),
        Item.of('gtceu:raw_tantalite').withChance(20 / 500 / 50),
    ], ['kubejs:limestone_gravel','createsifter:string_mesh']);
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_galena').withChance(120 / 500 / 40),
        Item.of('gtceu:raw_lazurite').withChance(120 / 500 / 40),
        Item.of('gtceu:raw_lapis').withChance(80 / 500 / 40),
        Item.of('gtceu:raw_silver').withChance(80 / 500 / 40),
        Item.of('gtceu:raw_sodalite').withChance(80 / 500 / 40),
        Item.of('gtceu:raw_grossular').withChance(60 / 500 / 40),
        Item.of('gtceu:raw_lead').withChance(40 / 500 / 40),
        Item.of('gtceu:raw_pyrolusite').withChance(40 / 500 / 40),
        Item.of('gtceu:raw_spessartine').withChance(40 / 500 / 40),
        Item.of('gtceu:raw_tantalite').withChance(20 / 500 / 40),
    ], ['kubejs:limestone_gravel','kubejs:copper_mesh']);
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_galena').withChance(120 / 500 / 30),
        Item.of('gtceu:raw_lazurite').withChance(120 / 500 / 30),
        Item.of('gtceu:raw_lapis').withChance(80 / 500 / 30),
        Item.of('gtceu:raw_silver').withChance(80 / 500 / 30),
        Item.of('gtceu:raw_sodalite').withChance(80 / 500 / 30),
        Item.of('gtceu:raw_grossular').withChance(60 / 500 / 30),
        Item.of('gtceu:raw_lead').withChance(40 / 500 / 30),
        Item.of('gtceu:raw_pyrolusite').withChance(40 / 500 / 30),
        Item.of('gtceu:raw_spessartine').withChance(40 / 500 / 30),
        Item.of('gtceu:raw_tantalite').withChance(20 / 500 / 30),
    ], ['kubejs:limestone_gravel','kubejs:iron_mesh']);
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_galena').withChance(120 / 500 / 20),
        Item.of('gtceu:raw_lazurite').withChance(120 / 500 / 20),
        Item.of('gtceu:raw_lapis').withChance(80 / 500 / 20),
        Item.of('gtceu:raw_silver').withChance(80 / 500 / 20),
        Item.of('gtceu:raw_sodalite').withChance(80 / 500 / 20),
        Item.of('gtceu:raw_grossular').withChance(60 / 500 / 20),
        Item.of('gtceu:raw_lead').withChance(40 / 500 / 20),
        Item.of('gtceu:raw_pyrolusite').withChance(40 / 500 / 20),
        Item.of('gtceu:raw_spessartine').withChance(40 / 500 / 20),
        Item.of('gtceu:raw_tantalite').withChance(20 / 500 / 20),
    ], ['kubejs:limestone_gravel','createsifter:brass_mesh']);
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_galena').withChance(120 / 500 / 10),
        Item.of('gtceu:raw_lazurite').withChance(120 / 500 / 10),
        Item.of('gtceu:raw_lapis').withChance(80 / 500 / 10),
        Item.of('gtceu:raw_silver').withChance(80 / 500 / 10),
        Item.of('gtceu:raw_sodalite').withChance(80 / 500 / 10),
        Item.of('gtceu:raw_grossular').withChance(60 / 500 / 10),
        Item.of('gtceu:raw_lead').withChance(40 / 500 / 10),
        Item.of('gtceu:raw_pyrolusite').withChance(40 / 500 / 10),
        Item.of('gtceu:raw_spessartine').withChance(40 / 500 / 10),
        Item.of('gtceu:raw_tantalite').withChance(20 / 500 / 10),
    ], ['kubejs:limestone_gravel','kubejs:netherite_mesh']);
    /**
     * -----------------
     * TUFF
     * -----------------
     * COPPER TIN VEIN
     * 'gtceu:raw_zeolite'      50  2
     * 'gtceu:raw_cassiterite'  50  2
     * 'gtceu:raw_realgar'      50  1   50
     * 
     * GARNET VEIN
     * 'gtceu:raw_red_garnet'       40  3   120
     * 'gtceu:raw_yellow_garnet'    40  2   80
     * 'gtceu:raw_amethyst'         40  2   80
     * 'gtceu:raw_opal'             40  1   40
     */
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_red_garnet').withChance(120 / 500 / 50),
        Item.of('gtceu:raw_cassiterite').withChance(100 / 500 / 50),
        Item.of('gtceu:raw_zeolite').withChance(100 / 500 / 50),
        Item.of('gtceu:raw_amethyst').withChance(80 / 500 / 50),
        Item.of('gtceu:raw_yellow_garnet').withChance(80 / 500 / 50),
        Item.of('gtceu:raw_realgar').withChance(50 / 500 / 50),
        Item.of('gtceu:raw_opal').withChance(40 / 500 / 50),
    ], ['kubejs:tuff_gravel','createsifter:string_mesh']);
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_red_garnet').withChance(120 / 500 / 40),
        Item.of('gtceu:raw_cassiterite').withChance(100 / 500 / 40),
        Item.of('gtceu:raw_zeolite').withChance(100 / 500 / 40),
        Item.of('gtceu:raw_amethyst').withChance(80 / 500 / 40),
        Item.of('gtceu:raw_yellow_garnet').withChance(80 / 500 / 40),
        Item.of('gtceu:raw_realgar').withChance(50 / 500 / 40),
        Item.of('gtceu:raw_opal').withChance(40 / 500 / 40),
    ], ['kubejs:tuff_gravel','kubejs:copper_mesh']);
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_red_garnet').withChance(120 / 500 / 30),
        Item.of('gtceu:raw_cassiterite').withChance(100 / 500 / 30),
        Item.of('gtceu:raw_zeolite').withChance(100 / 500 / 30),
        Item.of('gtceu:raw_amethyst').withChance(80 / 500 / 30),
        Item.of('gtceu:raw_yellow_garnet').withChance(80 / 500 / 30),
        Item.of('gtceu:raw_realgar').withChance(50 / 500 / 30),
        Item.of('gtceu:raw_opal').withChance(40 / 500 / 30),
    ], ['kubejs:tuff_gravel','kubejs:iron_mesh']);
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_red_garnet').withChance(120 / 500 / 20),
        Item.of('gtceu:raw_cassiterite').withChance(100 / 500 / 20),
        Item.of('gtceu:raw_zeolite').withChance(100 / 500 / 20),
        Item.of('gtceu:raw_amethyst').withChance(80 / 500 / 20),
        Item.of('gtceu:raw_yellow_garnet').withChance(80 / 500 / 20),
        Item.of('gtceu:raw_realgar').withChance(50 / 500 / 20),
        Item.of('gtceu:raw_opal').withChance(40 / 500 / 20),
    ], ['kubejs:tuff_gravel','createsifter:brass_mesh']);
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_red_garnet').withChance(120 / 500 / 10),
        Item.of('gtceu:raw_cassiterite').withChance(100 / 500 / 10),
        Item.of('gtceu:raw_zeolite').withChance(100 / 500 / 10),
        Item.of('gtceu:raw_amethyst').withChance(80 / 500 / 10),
        Item.of('gtceu:raw_yellow_garnet').withChance(80 / 500 / 10),
        Item.of('gtceu:raw_realgar').withChance(50 / 500 / 10),
        Item.of('gtceu:raw_opal').withChance(40 / 500 / 10),
    ], ['kubejs:tuff_gravel','kubejs:netherite_mesh']);
    /**
     * ----------------
     * GRANITE
     * ----------------
     * COPPER VEIN
     * 'gtceu:raw_chalcopyrite' 80  5   400
     * 'gtceu:raw_pyrite'       80  2   180
     * 
     * MICA VEIN
     * 'gtceu:raw_kyanite'      20  3   60
     * 'gtceu:raw_mica'         20  2   40
     * 'gtceu:raw_bauxite'      20  2   40
     * 'gtceu:raw_pollucite'    20  1   20
     * 
     * MONZANITE VEIN
     * 'gtceu:raw_bastnasite'   30  3   90
     * 'gtceu:raw_molybdenum'   30  1   30
     * 'gtceu:raw_neodymium'    30  1   30
     */
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_chalcopyrite').withChance(400 / 500 / 50),
        Item.of('gtceu:raw_pyrite').withChance(180 / 500 / 50),
        Item.of('gtceu:raw_bastnasite').withChance(90 / 500 / 50),
        Item.of('gtceu:raw_kyanite').withChance(60 / 500 / 50),
        Item.of('gtceu:raw_bauxite').withChance(40 / 500 / 50),
        Item.of('gtceu:raw_mica').withChance(40 / 500 / 50),
        Item.of('gtceu:raw_molybdenum').withChance(30 / 500 / 50),
        Item.of('gtceu:raw_neodymium').withChance(30 / 500 / 50),
        Item.of('gtceu:raw_pollucite').withChance(20 / 500 / 50),
    ], ['kubejs:granite_gravel','createsifter:string_mesh']);
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_chalcopyrite').withChance(400 / 500 / 40),
        Item.of('gtceu:raw_pyrite').withChance(180 / 500 / 40),
        Item.of('gtceu:raw_bastnasite').withChance(90 / 500 / 40),
        Item.of('gtceu:raw_kyanite').withChance(60 / 500 / 40),
        Item.of('gtceu:raw_bauxite').withChance(40 / 500 / 40),
        Item.of('gtceu:raw_mica').withChance(40 / 500 / 40),
        Item.of('gtceu:raw_molybdenum').withChance(30 / 500 / 40),
        Item.of('gtceu:raw_neodymium').withChance(30 / 500 / 40),
        Item.of('gtceu:raw_pollucite').withChance(20 / 500 / 40),
    ], ['kubejs:granite_gravel','kubejs:copper_mesh']);
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_chalcopyrite').withChance(400 / 500 / 30),
        Item.of('gtceu:raw_pyrite').withChance(180 / 500 / 30),
        Item.of('gtceu:raw_bastnasite').withChance(90 / 500 / 30),
        Item.of('gtceu:raw_kyanite').withChance(60 / 500 / 30),
        Item.of('gtceu:raw_bauxite').withChance(40 / 500 / 30),
        Item.of('gtceu:raw_mica').withChance(40 / 500 / 30),
        Item.of('gtceu:raw_molybdenum').withChance(30 / 500 / 30),
        Item.of('gtceu:raw_neodymium').withChance(30 / 500 / 30),
        Item.of('gtceu:raw_pollucite').withChance(20 / 500 / 30),
    ], ['kubejs:granite_gravel','kubejs:iron_mesh']);
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_chalcopyrite').withChance(400 / 500 / 20),
        Item.of('gtceu:raw_pyrite').withChance(180 / 500 / 20),
        Item.of('gtceu:raw_bastnasite').withChance(90 / 500 / 20),
        Item.of('gtceu:raw_kyanite').withChance(60 / 500 / 20),
        Item.of('gtceu:raw_bauxite').withChance(40 / 500 / 20),
        Item.of('gtceu:raw_mica').withChance(40 / 500 / 20),
        Item.of('gtceu:raw_molybdenum').withChance(30 / 500 / 20),
        Item.of('gtceu:raw_neodymium').withChance(30 / 500 / 20),
        Item.of('gtceu:raw_pollucite').withChance(20 / 500 / 20),
    ], ['kubejs:granite_gravel','createsifter:brass_mesh']);
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_chalcopyrite').withChance(400 / 500 / 10),
        Item.of('gtceu:raw_pyrite').withChance(180 / 500 / 10),
        Item.of('gtceu:raw_bastnasite').withChance(90 / 500 / 10),
        Item.of('gtceu:raw_kyanite').withChance(60 / 500 / 10),
        Item.of('gtceu:raw_bauxite').withChance(40 / 500 / 10),
        Item.of('gtceu:raw_mica').withChance(40 / 500 / 10),
        Item.of('gtceu:raw_molybdenum').withChance(30 / 500 / 10),
        Item.of('gtceu:raw_neodymium').withChance(30 / 500 / 10),
        Item.of('gtceu:raw_pollucite').withChance(20 / 500 / 10),
    ], ['kubejs:granite_gravel','kubejs:netherite_mesh']);
    /**
     * ----------------
     * NETHERRACK
     * ----------------
     * NON-GREGTECH STUFF
     * 'minecraft:netherite_scrap'
     * 
     * TETRADEDRITE VEIN
     * 'gtceu:raw_tetrahedrite' 70  4   280
     * 'gtceu:raw_stibnite'     70  1   70,
     * 
     * SALTPETER VEIN
     * 'gtceu:raw_saltpeter'    40  3   120
     * 'gtceu:raw_diatomite'    40  2   80
     * 'gtceu:raw_electrotine'  40  2   80
     * 'gtceu:raw_alunite'      40  1   40
     * 
     * SULFUR VEIN
     * 'gtceu:raw_sulfur'       100 3   300
     * 'gtceu:raw_pyrite'       100 2   200
     * 'gtceu:raw_sphalerite'   100 1   100
     * 
     * CERTUS QUARTZ
     * 'gtceu:raw_quartzite'        40  3   120
     * 'gtceu:raw_certus_quartz'    40  2   80
     * 'gtceu:raw_barite'           40  1   40
     * 
     * NETHER QUARTZ VEIN
     * 'gtceu:raw_nether_quartz'    80  3   240
     *
     * 'gtceu:raw_monazite' 30  1   30
     */
    event.recipes.createsifterSifting([
        Item.of('minecraft:netherite_scrap').withChance(0.025),
        
        Item.of('gtceu:raw_sulfur').withChance(300 / 500 / 50),
        Item.of('gtceu:raw_tetrahedrite').withChance(280 / 500 / 50),
        Item.of('gtceu:raw_nether_quartz').withChance(240 / 500 / 50),
        Item.of('gtceu:raw_pyrite').withChance(200 / 500 / 50),
        Item.of('gtceu:raw_quartzite').withChance(120 / 500 / 50),
        Item.of('gtceu:raw_saltpeter').withChance(120 / 500 / 50),
        Item.of('gtceu:raw_sphalerite').withChance(100 / 500 / 50),
        Item.of('gtceu:raw_certus_quartz').withChance(80 / 500 / 50),
        Item.of('gtceu:raw_diatomite').withChance(80 / 500 / 50),
        Item.of('gtceu:raw_electrotine').withChance(80 / 500 / 50),
        Item.of('gtceu:raw_stibnite').withChance(70 / 500 / 50),
        Item.of('gtceu:raw_alunite').withChance(40 / 500 / 50),
        Item.of('gtceu:raw_barite').withChance(40 / 500 / 50),
        Item.of('gtceu:raw_monazite').withChance(30 / 500 / 50)
    ], ['kubejs:netherrack_gravel','createsifter:string_mesh']);
    event.recipes.createsifterSifting([
        Item.of('minecraft:netherite_scrap').withChance(0.025 + 0.05),
        
        Item.of('gtceu:raw_sulfur').withChance(300 / 500 / 40),
        Item.of('gtceu:raw_tetrahedrite').withChance(280 / 500 / 40),
        Item.of('gtceu:raw_nether_quartz').withChance(240 / 500 / 40),
        Item.of('gtceu:raw_pyrite').withChance(200 / 500 / 40),
        Item.of('gtceu:raw_quartzite').withChance(120 / 500 / 40),
        Item.of('gtceu:raw_saltpeter').withChance(120 / 500 / 40),
        Item.of('gtceu:raw_sphalerite').withChance(100 / 500 / 40),
        Item.of('gtceu:raw_certus_quartz').withChance(80 / 500 / 40),
        Item.of('gtceu:raw_diatomite').withChance(80 / 500 / 40),
        Item.of('gtceu:raw_electrotine').withChance(80 / 500 / 40),
        Item.of('gtceu:raw_stibnite').withChance(70 / 500 / 40),
        Item.of('gtceu:raw_alunite').withChance(40 / 500 / 40),
        Item.of('gtceu:raw_barite').withChance(40 / 500 / 40),
        Item.of('gtceu:raw_monazite').withChance(30 / 500 / 40)
    ], ['kubejs:netherrack_gravel','kubejs:copper_mesh']);
    event.recipes.createsifterSifting([
        Item.of('minecraft:netherite_scrap').withChance(0.025 + 0.05 + 0.1),
        
        Item.of('gtceu:raw_sulfur').withChance(300 / 500 / 30),
        Item.of('gtceu:raw_tetrahedrite').withChance(280 / 500 / 30),
        Item.of('gtceu:raw_nether_quartz').withChance(240 / 500 / 30),
        Item.of('gtceu:raw_pyrite').withChance(200 / 500 / 30),
        Item.of('gtceu:raw_quartzite').withChance(120 / 500 / 30),
        Item.of('gtceu:raw_saltpeter').withChance(120 / 500 / 30),
        Item.of('gtceu:raw_sphalerite').withChance(100 / 500 / 30),
        Item.of('gtceu:raw_certus_quartz').withChance(80 / 500 / 30),
        Item.of('gtceu:raw_diatomite').withChance(80 / 500 / 30),
        Item.of('gtceu:raw_electrotine').withChance(80 / 500 / 30),
        Item.of('gtceu:raw_stibnite').withChance(70 / 500 / 30),
        Item.of('gtceu:raw_alunite').withChance(40 / 500 / 30),
        Item.of('gtceu:raw_barite').withChance(40 / 500 / 30),
        Item.of('gtceu:raw_monazite').withChance(30 / 500 / 30)
    ], ['kubejs:netherrack_gravel','kubejs:iron_mesh']);
    event.recipes.createsifterSifting([
        Item.of('minecraft:netherite_scrap').withChance(0.025 + 0.05 + 0.1 + 0.15),
        
        Item.of('gtceu:raw_sulfur').withChance(300 / 500 / 20),
        Item.of('gtceu:raw_tetrahedrite').withChance(280 / 500 / 20),
        Item.of('gtceu:raw_nether_quartz').withChance(240 / 500 / 20),
        Item.of('gtceu:raw_pyrite').withChance(200 / 500 / 20),
        Item.of('gtceu:raw_quartzite').withChance(120 / 500 / 20),
        Item.of('gtceu:raw_saltpeter').withChance(120 / 500 / 20),
        Item.of('gtceu:raw_sphalerite').withChance(100 / 500 / 20),
        Item.of('gtceu:raw_certus_quartz').withChance(80 / 500 / 20),
        Item.of('gtceu:raw_diatomite').withChance(80 / 500 / 20),
        Item.of('gtceu:raw_electrotine').withChance(80 / 500 / 20),
        Item.of('gtceu:raw_stibnite').withChance(70 / 500 / 20),
        Item.of('gtceu:raw_alunite').withChance(40 / 500 / 20),
        Item.of('gtceu:raw_barite').withChance(40 / 500 / 20),
        Item.of('gtceu:raw_monazite').withChance(30 / 500 / 20)
    ], ['kubejs:netherrack_gravel','createsifter:brass_mesh']);
    event.recipes.createsifterSifting([
        Item.of('minecraft:netherite_scrap').withChance(0.025 + 0.05 + 0.1 + 0.15 + 0.2),
        
        Item.of('gtceu:raw_sulfur').withChance(300 / 500 / 10),
        Item.of('gtceu:raw_tetrahedrite').withChance(280 / 500 / 10),
        Item.of('gtceu:raw_nether_quartz').withChance(240 / 500 / 10),
        Item.of('gtceu:raw_pyrite').withChance(200 / 500 / 10),
        Item.of('gtceu:raw_quartzite').withChance(120 / 500 / 10),
        Item.of('gtceu:raw_saltpeter').withChance(120 / 500 / 10),
        Item.of('gtceu:raw_sphalerite').withChance(100 / 500 / 10),
        Item.of('gtceu:raw_certus_quartz').withChance(80 / 500 / 10),
        Item.of('gtceu:raw_diatomite').withChance(80 / 500 / 10),
        Item.of('gtceu:raw_electrotine').withChance(80 / 500 / 10),
        Item.of('gtceu:raw_stibnite').withChance(70 / 500 / 10),
        Item.of('gtceu:raw_alunite').withChance(40 / 500 / 10),
        Item.of('gtceu:raw_barite').withChance(40 / 500 / 10),
        Item.of('gtceu:raw_monazite').withChance(30 / 500 / 10)
    ], ['kubejs:netherrack_gravel','kubejs:netherite_mesh']);
    /**
     * ----------------
     * BLACKSTONE
     * ----------------
     * NON-GREGTECH STUFF
     * 
     * TOPAZ VEIN   
     * 'gtceu:raw_blue_topaz'   70  3   210
     * 'gtceu:raw_topaz'        70  2   140
     * 'gtceu:raw_chalcocite'   70  2   140
     * 'gtceu:raw_bornite'      70  1   70
     * 
     * MOLYBENDIUM VEIN
     * 'gtceu:raw_wulfenite'    5   3   15
     * 'gtceu:raw_molybdenite'  5   2   10
     * 'gtceu:raw_molybdenum'   5   1   5   
     * 'gtceu:raw_powellite'    5   1   5
     */
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_blue_topaz').withChance(210 / 500 / 50),    
        Item.of('gtceu:raw_chalcocite').withChance(140 / 500 / 50),
        Item.of('gtceu:raw_topaz').withChance(140 / 500 / 50),
        Item.of('gtceu:raw_bornite').withChance(70 / 500 / 50),
        Item.of('gtceu:raw_wulfenite').withChance(15 / 500 / 50), 
        Item.of('gtceu:raw_molybdenite').withChance(10 / 500 / 50),
        Item.of('gtceu:raw_molybdenum').withChance(5 / 500 / 50),
        Item.of('gtceu:raw_powellite').withChance(5 / 500 / 50),
    ], ['kubejs:blackstone_gravel','createsifter:string_mesh']);
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_blue_topaz').withChance(210 / 500 / 40),    
        Item.of('gtceu:raw_chalcocite').withChance(140 / 500 / 40),
        Item.of('gtceu:raw_topaz').withChance(140 / 500 / 40),
        Item.of('gtceu:raw_bornite').withChance(70 / 500 / 40),
        Item.of('gtceu:raw_wulfenite').withChance(15 / 500 / 40), 
        Item.of('gtceu:raw_molybdenite').withChance(10 / 500 / 40),
        Item.of('gtceu:raw_molybdenum').withChance(5 / 500 / 40),
        Item.of('gtceu:raw_powellite').withChance(5 / 500 / 40),
    ], ['kubejs:blackstone_gravel','kubejs:copper_mesh']);
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_blue_topaz').withChance(210 / 500 / 30),    
        Item.of('gtceu:raw_chalcocite').withChance(140 / 500 / 30),
        Item.of('gtceu:raw_topaz').withChance(140 / 500 / 30),
        Item.of('gtceu:raw_bornite').withChance(70 / 500 / 30),
        Item.of('gtceu:raw_wulfenite').withChance(15 / 500 / 30), 
        Item.of('gtceu:raw_molybdenite').withChance(10 / 500 / 30),
        Item.of('gtceu:raw_molybdenum').withChance(5 / 500 / 30),
        Item.of('gtceu:raw_powellite').withChance(5 / 500 / 30),
    ], ['kubejs:blackstone_gravel','kubejs:iron_mesh']);
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_blue_topaz').withChance(210 / 500 / 20),    
        Item.of('gtceu:raw_chalcocite').withChance(140 / 500 / 20),
        Item.of('gtceu:raw_topaz').withChance(140 / 500 / 20),
        Item.of('gtceu:raw_bornite').withChance(70 / 500 / 20),
        Item.of('gtceu:raw_wulfenite').withChance(15 / 500 / 20), 
        Item.of('gtceu:raw_molybdenite').withChance(10 / 500 / 20),
        Item.of('gtceu:raw_molybdenum').withChance(5 / 500 / 20),
        Item.of('gtceu:raw_powellite').withChance(5 / 500 / 20),
    ], ['kubejs:blackstone_gravel','createsifter:brass_mesh']);
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_blue_topaz').withChance(210 / 500 / 10),    
        Item.of('gtceu:raw_chalcocite').withChance(140 / 500 / 10),
        Item.of('gtceu:raw_topaz').withChance(140 / 500 / 10),
        Item.of('gtceu:raw_bornite').withChance(70 / 500 / 10),
        Item.of('gtceu:raw_wulfenite').withChance(15 / 500 / 10), 
        Item.of('gtceu:raw_molybdenite').withChance(10 / 500 / 10),
        Item.of('gtceu:raw_molybdenum').withChance(5 / 500 / 10),
        Item.of('gtceu:raw_powellite').withChance(5 / 500 / 10),
    ], ['kubejs:blackstone_gravel','kubejs:netherite_mesh']);
    /**
     * ----------------
     * END STONE
     * ----------------
     * NON-GREGTECH STUFF
     * 
     * NAQUADAH VEIN
     * 'gtceu:raw_naquadah'     30  3   90
     * 'gtceu:raw_plutonium'    30  1   30
     * 
     * MAGNETITE VEIN
     * 'gtceu:raw_magnetite'            30  3   90
     * 'gtceu:raw_vanadium_magnetite'   30  2   60
     * 'gtceu:raw_chromite'             30  2   60
     * 
     * SCHEELITE VEIN
     * 'gtceu:raw_scheelite'    20  3   60
     * 'gtceu:raw_tungstate'    20  2   40
     * 'gtceu:raw_lithium'      20  1   20
     * 
     * BAUXTITE VEIN
     * 'gtceu:raw_bauxite'      40  2   80
     * 'gtceu:raw_ilmenite'     40  1   40
     * 'gtceu:raw_aluminium'    40  1   40
     * 
     * SHELDONITE VEIN
     * 'gtceu:raw_bornite'      10  3   30
     * 'gtceu:raw_cooperite'    10  2   20
     * 'gtceu:raw_platinum'     10  2   20
     * 'gtceu:raw_palladium'    10  1   10
     * 
     * PITCHBLENDE VEIN
     * 'gtceu:raw_pitchblende'  30  3   90
     * 'gtceu:raw_uraninite'    30  2   60
     */
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_magnetite').withChance(90 / 500 / 50),
        Item.of('gtceu:raw_naquadah').withChance(90 / 500 / 50),
        Item.of('gtceu:raw_pitchblende').withChance(90 / 500 / 50),
        Item.of('gtceu:raw_bauxite').withChance(80 / 500 / 50),
        Item.of('gtceu:raw_chromite').withChance(60 / 500 / 50),
        Item.of('gtceu:raw_scheelite').withChance(60 / 500 / 50),
        Item.of('gtceu:raw_uraninite').withChance(60 / 500 / 50),
        Item.of('gtceu:raw_vanadium_magnetite').withChance(60 / 500 / 50),
        Item.of('gtceu:raw_aluminium').withChance(40 / 500 / 50),
        Item.of('gtceu:raw_ilmenite').withChance(40 / 500 / 50),
        Item.of('gtceu:raw_tungstate').withChance(40 / 500 / 50),
        Item.of('gtceu:raw_plutonium').withChance(30 / 500 / 50),
        Item.of('gtceu:raw_bornite').withChance(30 / 500 / 50),
        Item.of('gtceu:raw_cooperite').withChance(20 / 500 / 50),
        Item.of('gtceu:raw_lithium').withChance(20 / 500 / 50),
        Item.of('gtceu:raw_platinum').withChance(20 / 500 / 50),
        Item.of('gtceu:raw_palladium').withChance(10 / 500 / 50),
    ], ['kubejs:end_stone_gravel','createsifter:string_mesh']);
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_magnetite').withChance(90 / 500 / 40),
        Item.of('gtceu:raw_naquadah').withChance(90 / 500 / 40),
        Item.of('gtceu:raw_pitchblende').withChance(90 / 500 / 40),
        Item.of('gtceu:raw_bauxite').withChance(80 / 500 / 40),
        Item.of('gtceu:raw_chromite').withChance(60 / 500 / 40),
        Item.of('gtceu:raw_scheelite').withChance(60 / 500 / 40),
        Item.of('gtceu:raw_uraninite').withChance(60 / 500 / 40),
        Item.of('gtceu:raw_vanadium_magnetite').withChance(60 / 500 / 40),
        Item.of('gtceu:raw_aluminium').withChance(40 / 500 / 40),
        Item.of('gtceu:raw_ilmenite').withChance(40 / 500 / 40),
        Item.of('gtceu:raw_tungstate').withChance(40 / 500 / 40),
        Item.of('gtceu:raw_plutonium').withChance(30 / 500 / 40),
        Item.of('gtceu:raw_bornite').withChance(30 / 500 / 40),
        Item.of('gtceu:raw_cooperite').withChance(20 / 500 / 40),
        Item.of('gtceu:raw_lithium').withChance(20 / 500 / 40),
        Item.of('gtceu:raw_platinum').withChance(20 / 500 / 40),
        Item.of('gtceu:raw_palladium').withChance(10 / 500 / 40),
    ], ['kubejs:end_stone_gravel','kubejs:copper_mesh']);
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_magnetite').withChance(90 / 500 / 30),
        Item.of('gtceu:raw_naquadah').withChance(90 / 500 / 30),
        Item.of('gtceu:raw_pitchblende').withChance(90 / 500 / 30),
        Item.of('gtceu:raw_bauxite').withChance(80 / 500 / 30),
        Item.of('gtceu:raw_chromite').withChance(60 / 500 / 30),
        Item.of('gtceu:raw_scheelite').withChance(60 / 500 / 30),
        Item.of('gtceu:raw_uraninite').withChance(60 / 500 / 30),
        Item.of('gtceu:raw_vanadium_magnetite').withChance(60 / 500 / 30),
        Item.of('gtceu:raw_aluminium').withChance(40 / 500 / 30),
        Item.of('gtceu:raw_ilmenite').withChance(40 / 500 / 30),
        Item.of('gtceu:raw_tungstate').withChance(40 / 500 / 30),
        Item.of('gtceu:raw_plutonium').withChance(30 / 500 / 30),
        Item.of('gtceu:raw_bornite').withChance(30 / 500 / 30),
        Item.of('gtceu:raw_cooperite').withChance(20 / 500 / 30),
        Item.of('gtceu:raw_lithium').withChance(20 / 500 / 30),
        Item.of('gtceu:raw_platinum').withChance(20 / 500 / 30),
        Item.of('gtceu:raw_palladium').withChance(10 / 500 / 30),
    ], ['kubejs:end_stone_gravel','kubejs:iron_mesh']);
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_magnetite').withChance(90 / 500 / 20),
        Item.of('gtceu:raw_naquadah').withChance(90 / 500 / 20),
        Item.of('gtceu:raw_pitchblende').withChance(90 / 500 / 20),
        Item.of('gtceu:raw_bauxite').withChance(80 / 500 / 20),
        Item.of('gtceu:raw_chromite').withChance(60 / 500 / 20),
        Item.of('gtceu:raw_scheelite').withChance(60 / 500 / 20),
        Item.of('gtceu:raw_uraninite').withChance(60 / 500 / 20),
        Item.of('gtceu:raw_vanadium_magnetite').withChance(60 / 500 / 20),
        Item.of('gtceu:raw_aluminium').withChance(40 / 500 / 20),
        Item.of('gtceu:raw_ilmenite').withChance(40 / 500 / 20),
        Item.of('gtceu:raw_tungstate').withChance(40 / 500 / 20),
        Item.of('gtceu:raw_plutonium').withChance(30 / 500 / 20),
        Item.of('gtceu:raw_bornite').withChance(30 / 500 / 20),
        Item.of('gtceu:raw_cooperite').withChance(20 / 500 / 20),
        Item.of('gtceu:raw_lithium').withChance(20 / 500 / 20),
        Item.of('gtceu:raw_platinum').withChance(20 / 500 / 20),
        Item.of('gtceu:raw_palladium').withChance(10 / 500 / 20),
    ], ['kubejs:end_stone_gravel','createsifter:brass_mesh']);
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_magnetite').withChance(90 / 500 / 10),
        Item.of('gtceu:raw_naquadah').withChance(90 / 500 / 10),
        Item.of('gtceu:raw_pitchblende').withChance(90 / 500 / 10),
        Item.of('gtceu:raw_bauxite').withChance(80 / 500 / 10),
        Item.of('gtceu:raw_chromite').withChance(60 / 500 / 10),
        Item.of('gtceu:raw_scheelite').withChance(60 / 500 / 10),
        Item.of('gtceu:raw_uraninite').withChance(60 / 500 / 10),
        Item.of('gtceu:raw_vanadium_magnetite').withChance(60 / 500 / 10),
        Item.of('gtceu:raw_aluminium').withChance(40 / 500 / 10),
        Item.of('gtceu:raw_ilmenite').withChance(40 / 500 / 10),
        Item.of('gtceu:raw_tungstate').withChance(40 / 500 / 10),
        Item.of('gtceu:raw_plutonium').withChance(30 / 500 / 10),
        Item.of('gtceu:raw_bornite').withChance(30 / 500 / 10),
        Item.of('gtceu:raw_cooperite').withChance(20 / 500 / 10),
        Item.of('gtceu:raw_lithium').withChance(20 / 500 / 10),
        Item.of('gtceu:raw_platinum').withChance(20 / 500 / 10),
        Item.of('gtceu:raw_palladium').withChance(10 / 500 / 10),
    ], ['kubejs:end_stone_gravel','kubejs:netherite_mesh']);
})