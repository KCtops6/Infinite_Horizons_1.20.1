ServerEvents.recipes(event => {
    event.recipes.createsifterSifting([
        Item.of('minecraft:blaze_powder').withChance(0.125),
        Item.of('mysticalagriculture:soul_dust').withChance(0.125)
    ], ['minecraft:soul_sand','createsifter:string_mesh']).id('kubejs:recipes/createsiftersifting/string/soul_sand');
    event.recipes.createsifterSifting([
        Item.of('minecraft:quartz').withChance(0.125),
        Item.of('minecraft:blaze_powder').withChance(0.25),
        Item.of('minecraft:glowstone_dust').withChance(0.125),
        Item.of('mysticalagriculture:soul_dust').withChance(0.25)
    ], ['minecraft:soul_sand','kubejs:copper_mesh']).id('kubejs:recipes/createsiftersifting/copper/soul_sand');
    event.recipes.createsifterSifting([
        Item.of('minecraft:quartz').withChance(0.25),
        Item.of('minecraft:blaze_powder').withChance(0.125),
        Item.of('minecraft:glowstone_dust').withChance(0.25),
        Item.of('mysticalagriculture:soul_dust').withChance(0.5),
        Item.of('mysticalagriculture:soulium_dust').withChance(0.125)
    ], ['minecraft:soul_sand','kubejs:iron_mesh']).id('kubejs:recipes/createsiftersifting/iron/soul_sand');
    event.recipes.createsifterSifting([
        Item.of('minecraft:quartz').withChance(0.5),
        Item.of('minecraft:glowstone_dust').withChance(0.5),
        Item.of('minecraft:ghast_tear').withChance(0.125),
        Item.of('mysticalagriculture:soul_dust').withChance(0.25),
        Item.of('mysticalagriculture:soulium_dust').withChance(0.25)
    ], ['minecraft:soul_sand','createsifter:brass_mesh']).id('kubejs:recipes/createsiftersifting/brass/soul_sand');
    event.recipes.createsifterSifting([
        Item.of('minecraft:quartz').withChance(0.25),
        Item.of('minecraft:glowstone_dust').withChance(0.25),
        Item.of('minecraft:ghast_tear').withChance(0.25),
        Item.of('mysticalagriculture:soul_dust').withChance(0.125),
        Item.of('mysticalagriculture:soulium_dust').withChance(0.5),
        Item.of('quark:soul_bead').withChance(0.125)
    ], ['minecraft:soul_sand','kubejs:netherite_mesh']).id('kubejs:recipes/createsiftersifting/netherite/soul_sand');
});