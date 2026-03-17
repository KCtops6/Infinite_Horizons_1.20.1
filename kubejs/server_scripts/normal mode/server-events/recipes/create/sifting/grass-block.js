ServerEvents.recipes(event => {
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
});