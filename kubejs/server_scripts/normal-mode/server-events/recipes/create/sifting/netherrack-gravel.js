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
});