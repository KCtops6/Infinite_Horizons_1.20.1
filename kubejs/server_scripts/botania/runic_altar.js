ServerEvents.recipes(event => {
    // rune of the nether
    event.custom({
        type: "botania:runic_altar",
        ingredients: [
            {
                item: "minecraft:nether_star"
            },
            {
                item: "botania:life_essence"
            },
            {
                item: 'extendedcrafting:enhanced_redstone_catalyst'
            },
            {
                item: "botania:rune_fire"
            },
            {
                item: "botania:rune_wrath"
            }
        ],
        mana: 25000,
        output: {
            item: 'kubejs:rune_of_the_nether'
        }
    });
    // rune of the end
    event.custom({
        type: "botania:runic_altar",
        ingredients: [
            {
                item: "minecraft:dragon_egg"
            },
            {
                item: "minecraft:dragon_breath"
            },
            {
                item: 'extendedcrafting:enhanced_ender_catalyst'
            },
            {
                item: "botania:rune_mana"
            },
            {
                item: "botania:rune_wrath"
            }
        ],
        mana: 50000,
        output: {
            item: 'kubejs:rune_of_the_end'
        }
    });
});