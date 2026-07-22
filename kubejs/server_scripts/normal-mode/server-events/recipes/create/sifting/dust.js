ServerEvents.recipes(event => {
    event.recipes.createsifterSifting([
        Item.of('minecraft:bone_meal').withChance(0.25),
        Item.of('minecraft:redstone').withChance(0.125),
        Item.of('mysticalagriculture:prosperity_shard').withChance(0.125)
    ], ['createsifter:dust','kubejs:copper_mesh']).id('kubejs:recipes/createsiftersifting/copper/dust');
    event.recipes.createsifterSifting([
        Item.of('minecraft:redstone').withChance(0.25),
        Item.of('mysticalagriculture:prosperity_shard').withChance(0.25)
    ], ['createsifter:dust','kubejs:iron_mesh']).id('kubejs:recipes/createsiftersifting/iron/dust');
    event.recipes.createsifterSifting([
        Item.of('minecraft:redstone').withChance(0.5),
        Item.of('mysticalagriculture:prosperity_shard').withChance(0.5),
        Item.of('forbidden_arcanus:arcane_crystal_dust').withChance(0.125)
    ], ['createsifter:dust','createsifter:brass_mesh']).id('kubejs:recipes/createsiftersifting/brass/dust');
});