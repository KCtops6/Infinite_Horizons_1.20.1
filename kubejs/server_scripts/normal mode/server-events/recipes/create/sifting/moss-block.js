ServerEvents.recipes(event => {
    event.recipes.createsifterSifting([
        Item.of('minecraft:big_dripleaf').withChance(0.15),
        Item.of('minecraft:small_dripleaf').withChance(0.2),
        Item.of('minecraft:flowering_azalea').withChance(0.1),
        Item.of('minecraft:azalea').withChance(0.15),
        Item.of('minecraft:spore_blossom').withChance(0.05)
    ], ['createsifter:string_mesh', 'minecraft:moss_block']).id('kubejs:createsifterSifting/string/moss_block');
});