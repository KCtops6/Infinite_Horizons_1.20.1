ServerEvents.recipes(event => {
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
});