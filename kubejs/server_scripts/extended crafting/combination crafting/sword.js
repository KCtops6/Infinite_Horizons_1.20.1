ServerEvents.recipes(event => {
    event.recipes.extendedcrafting.combination('kubejs:sword', Item.of('minecraft:wooden_sword', '{Damage:0}'), [
        Item.of('minecraft:stone_sword', '{Damage:0}'),
        Item.of('minecraft:iron_sword', '{Damage:0}'),
        Item.of('minecraft:golden_sword', '{Damage:0}'),
        Item.of('create_sa:zinc_sword', '{Damage:0}'),
        Item.of('create_sa:copper_sword', '{Damage:0}'),
        Item.of('create_sa:experience_sword', '{Damage:0}'),
        Item.of('botania:manasteel_sword', '{Damage:0}'),
        Item.of('botania:elementium_sword', '{Damage:0}'),
        Item.of('ae2:fluix_sword', '{Damage:0}'),
        Item.of('ae2:nether_quartz_sword', '{Damage:0}'),
        Item.of('ae2:certus_quartz_sword', '{Damage:0}'),
        Item.of('mekanismtools:bronze_sword', '{Damage:0}'),
        Item.of('mekanismtools:lapis_lazuli_sword', '{Damage:0}'),
        Item.of('mekanismtools:refined_glowstone_sword', '{Damage:0}')
    ], 10000000);
})