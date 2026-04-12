// kubejs\server_scripts\cloche.js
/**
    Fertilizer Reference:

    Item        | Growth Modifier
    -----------------------------
    Bone Meal   | 1.3
    Fertilizer  | 1.6
    Saltpeter   | 1.2
    Slag        | 1.3
    Sulfur      | 1.1
*/
ServerEvents.recipes(event => {
    event.custom({
        type: "immersiveengineering:fertilizer",
        growthModifier: 2.0,
        input: {
            item: "mysticalagriculture:mystical_fertilizer"
        }
    }).id('kubejs:immersiveengineering/fertilizer/mystical_fertilizer');
});