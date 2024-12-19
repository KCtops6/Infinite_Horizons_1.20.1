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
                item: "minecraft:nether_star"
            },
            {
                item: "botania:life_essence"
            },
            {
                item: "botania:rue_fire"
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