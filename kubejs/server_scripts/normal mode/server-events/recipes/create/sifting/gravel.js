ServerEvents.recipes(event => {
    event.recipes.createsifterSifting([
        Item.of('minecraft:flint').withChance(0.5),
        Item.of('kubejs:stone_pebble').withChance(0.75),
        Item.of('kubejs:andesite_pebble').withChance(0.5),
        Item.of('kubejs:diorite_pebble').withChance(0.5),
        Item.of('kubejs:granite_pebble').withChance(0.5)
    ], ['minecraft:gravel','createsifter:string_mesh']).id('kubejs/recipes/createsifterSifting/string/gravel');
    event.recipes.createsifterSifting([
        Item.of('minecraft:flint').withChance(0.25),
        Item.of('minecraft:raw_copper').withChance(0.25),
        Item.of('minecraft:raw_iron').withChance(0.25),
        Item.of('minecraft:coal').withChance(0.25)
    ], ['minecraft:gravel','kubejs:copper_mesh']).id('kubejs/recipes/createsifterSifting/copper/gravel');
    event.recipes.createsifterSifting([
        Item.of('minecraft:raw_copper').withChance(0.5),
        Item.of('minecraft:raw_iron').withChance(0.5),
        Item.of('kubejs:raw_aluminum').withChance(0.125),
        Item.of('create:raw_zinc').withChance(0.25),
        Item.of('kubejs:raw_tin').withChance(0.25),
        Item.of('minecraft:coal').withChance(0.5)
    ], ['minecraft:gravel','kubejs:iron_mesh']).id('kubejs/recipes/createsifterSifting/iron/gravel');
    event.recipes.createsifterSifting([
        Item.of('minecraft:raw_copper').withChance(0.25),
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
});