ServerEvents.recipes(event => {
    event.recipes.createsifterSifting([
        Item.of('infinite_horizons_tweaks:deepslate_pebble').withChance(0.75),
        Item.of('infinite_horizons_tweaks:tuff_pebble').withChance(0.5),
        Item.of('minecraft:glow_lichen').withChance(0.125),
        Item.of('quark:glow_lichen_growth').withChance(0.0625),
        Item.of('twigs:petrified_lichen').withChance(0.125)
    ], ['infinite_horizons_tweaks:deepslate_gravel','createsifter:string_mesh']).id('kubejs:recipes/createsiftersifting/string/deepslate');
    event.recipes.createsifterSifting([
        Item.of('minecraft:raw_gold').withChance(0.25),
        Item.of('infinite_resources:raw_aluminum').withChance(0.0625),
        Item.of('infinite_resources:raw_lead').withChance(0.125),
        Item.of('infinite_resources:raw_nickel').withChance(0.125),
        Item.of('infinite_resources:raw_osmium').withChance(0.25),
        Item.of('infinite_resources:raw_silver').withChance(0.125),
        Item.of('minecraft:diamond').withChance(0.0625),
        Item.of('powah:uraninite_raw').withChance(0.0625),
        Item.of('irons_spellbooks:raw_mithril').withChance(0.0625)
    ], ['infinite_horizons_tweaks:deepslate_gravel','kubejs:iron_mesh']).id('kubejs:recipes/createsiftersifting/iron/deepslate');
    event.recipes.createsifterSifting([
        Item.of('minecraft:raw_gold').withChance(0.375),
        Item.of('infinite_resources:raw_aluminum').withChance(0.125),
        Item.of('infinite_resources:raw_lead').withChance(0.25),
        Item.of('infinite_resources:raw_nickel').withChance(0.25),
        Item.of('infinite_resources:raw_osmium').withChance(0.5),
        Item.of('infinite_resources:raw_silver').withChance(0.25),
        Item.of('infinite_resources:raw_uranium').withChance(0.125),
        Item.of('minecraft:diamond').withChance(0.125),
        Item.of('powah:uraninite_raw').withChance(0.125),
        Item.of('irons_spellbooks:raw_mithril').withChance(0.125)
    ], ['infinite_horizons_tweaks:deepslate_gravel','createsifter:brass_mesh']).id('kubejs:recipes/createsiftersifting/brass/deepslate');
    event.recipes.createsifterSifting([
        Item.of('minecraft:raw_gold').withChance(0.5),
        Item.of('infinite_resources:raw_aluminum').withChance(0.25),
        Item.of('infinite_resources:raw_lead').withChance(0.5),
        Item.of('infinite_resources:raw_nickel').withChance(0.5),
        Item.of('infinite_resources:raw_osmium').withChance(0.25),
        Item.of('infinite_resources:raw_silver').withChance(0.5),
        Item.of('infinite_resources:raw_uranium').withChance(0.25),
        Item.of('minecraft:diamond').withChance(0.25),
        Item.of('powah:uraninite_raw').withChance(0.25),
        Item.of('irons_spellbooks:raw_mithril').withChance(0.25)
    ], ['infinite_horizons_tweaks:deepslate_gravel','kubejs:netherite_mesh']).id('kubejs:recipes/createsiftersifting/netherite/deepslate');
});