ServerEvents.recipes(event => {
    // dimensional paintings
    const dimensionalPaintings = [
        {
            powerCost: 100000,
            ingredient1: 'mysticalagriculture:air_essence',
            ingredient2: 'mysticalagriculture:earth_essence',
            ingredient3: 'mysticalagriculture:water_essence',
            ingredient4: 'mysticalagriculture:fire_essence',
            ingredient5: 'mysticalagriculture:dirt_essence',
            ingredient6: 'mysticalagriculture:stone_essence',
            ingredient7: 'mysticalagriculture:wood_essence',
            ingredient8: 'mysticalagriculture:nature_essence',
            result: 'dimpaintings:overworld_painting'
        }
    ]
    dimensionalPaintings.forEach(painting => {
        event.custom({
            type: "extendedcrafting:combination",
            powerCost: painting.powerCost,
            input: {
                item: "minecraft:painting"
            },
            ingredients: [
                {
                    item: painting.ingredient1
                },
                {
                    item: painting.ingredient2
                },
                {
                    item: painting.ingredient3
                },
                {
                    item: painting.ingredient4
                },
                {
                    item: painting.ingredient5
                },
                {
                    item: painting.ingredient6
                },
                {
                    item: painting.ingredient7
                },
                {
                    item: painting.ingredient8
                }
            ],
            result: {
                item: painting.result
            }
        });
    });
});