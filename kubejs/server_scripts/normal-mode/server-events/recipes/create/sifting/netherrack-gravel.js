ServerEvents.recipes(event => {
    event.recipes.createsifterSifting([
        Item.of('minecraft:netherite_scrap').withChance(0.125),
        Item.of('minecraft:raw_gold').withChance(0.375),
        Item.of('kubejs:raw_uranium').withChance(0.125)
    ], ['kubejs:netherrack_gravel', 'createsifter:brass_mesh']).id('kubejs:recipes/createsiftersifting/brass/netherrack');
    event.recipes.createsifterSifting([
        Item.of('minecraft:netherite_scrap').withChance(0.25),
        Item.of('minecraft:raw_gold').withChance(0.5),
        Item.of('kubejs:raw_uranium').withChance(0.25),
        Item.of('occultism:raw_iesnium').withChance(0.0625)
    ], ['kubejs:netherrack_gravel', 'kubejs:netherite_mesh']).id('kubejs:recipes/createsiftersifting/netherite/netherrack');
    event.recipes.createsifterSifting([
        Item.of('gtceu:raw_nether_quartz').withChance(0.25),
        Item.of('gtceu:raw_quartzite').withChance(0.2083),
        Item.of('gtceu:raw_certus_quartz').withChance(0.083),
        Item.of('gtceu:raw_barite').withChance(0.04167)
    ], ['kubejs:netherrack_gravel', 'kubejs:steel_mesh']).id('kubejs:recipes/createsiftersifting/steel/netherrack');
});