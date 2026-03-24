ServerEvents.recipes(event => {
    event.recipes.createsifterSifting([
        Item.of('minecraft:chorus_fruit').withChance(0.15),
        Item.of('minecraft:chorus_flower').withChance(0.1),
        Item.of('quark:chorus_weeds').withChance(0.25),
        Item.of('quark:chorus_twist').withChance(0.25)
    ], ['kubejs:end_stone_gravel','kubejs:string_mesh']).id('kubejs/recipes/createsifterSifting/string/end_stone');
});