ServerEvents.recipes(event => {
    event.custom({
        type: "mysticalagriculture:awakening",
        essences: [
            {
                item: "mysticalagriculture:air_essence",
                count: 40
            },
            {
                item: "mysticalagriculture:earth_essence",
                count: 40
            },
            {
                item: "mysticalagriculture:water_essence",
                count: 40
            },
            {
                item: "mysticalagriculture:fire_essence",
                count: 40
            },
        ],
        input: {
            item: 'mysticalagriculture:awakened_supremium_gemstone'
        },
        ingredients: [
            {
                item: 'mysticalagriculture:air_agglomeratio'
            },
            {
                item: 'mysticalagriculture:earth_agglomeratio'
            },
            {
                item: 'mysticalagriculture:water_agglomeratio'
            },
            {
                item: 'mysticalagriculture:fire_agglomeratio'
            },
        ],
        result: {
            item: 'projecte:philosophers_stone'
        }
    });
});