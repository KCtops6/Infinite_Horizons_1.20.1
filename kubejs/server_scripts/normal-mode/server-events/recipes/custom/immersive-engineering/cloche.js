// kubejs\server_scripts\cloche.js
ServerEvents.recipes(event => {
    event.custom({
        type: "immersiveengineering:cloche",
        input: {
            item: "mysticalagriculture:inferium_seeds"
        },
        render: {
            type: "crop",
            block: "mysticalagriculture:inferium_crop"
        },
        results: [
            {
                count: 2,
                item: "mysticalagriculture:inferium_essence"
            },
            {
                item: "mysticalagriculture:inferium_seeds"
            }
        ],
        soil: {
            item: "mysticalagriculture:inferium_farmland"
        },
        time: 640
    }).id('kubejs:immersiveengineering/cloche/inferium_essence');
});