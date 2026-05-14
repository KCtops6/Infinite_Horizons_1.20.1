ServerEvents.recipes(event => {
    event.recipes.createsifterSifting([
        Item.of('twigs:bronzed_seashell').withChance(0.0625),
        Item.of('twigs:opaline_seashell').withChance(0.125),
        Item.of('twigs:roseate_seashell').withChance(0.125),
        Item.of('twigs:tangerine_seashell').withChance(0.125)
    ], ['minecraft:sand','createsifter:string_mesh']).id('kubejs:recipes/createsiftersifting/string/sand/waterlogged');
});