ServerEvents.recipes(event => {
    event.recipes.createsifterSifting([
        Item.of('minecraft:wheat_seeds').withChance(0.5),
        Item.of('minecraft:pumpkin_seeds').withChance(0.2),
        Item.of('minecraft:melon_seeds').withChance(0.2),
        Item.of('minecraft:sweet_berries').withChance(0.15),
        Item.of('kubejs:red_mushroom_spores').withChance(0.1),
        Item.of('kubejs:brown_mushroom_spores').withChance(0.1),
        Item.of('kubejs:mycellium_spores').withChance(0.05),
        Item.of('farmersdelight:cabbage_seeds').withChance(0.1),
        Item.of('farmersdelight:tomato_seeds').withChance(0.1),
        Item.of('supplementaries:flax_seeds').withChance(0.1),
        Item.of('delightful:cantaloupe_seeds').withChance(0.1),
        Item.of('delightful:salmonberry_pips').withChance(0.1),
        Item.of('occultism:datura_seeds').withChance(0.05),
        Item.of('immersiveengineering:seed').withChance(0.15)
    ], ['createsifter:string_mesh', 'minecraft:dirt']).id('kubejs:createsiftersifting/string/dirt');
});