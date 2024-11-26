// ServerEvents.recipes(event => {
//     event.recipes.botanypots.crop(
//         'mysticalagriculture:red-alloy-seeds_seeds', // seed item
//         ['mysticalagriculture:imperium_farmland'], // categories that this crop can be planted on
//         { block: 'mysticalagriculture:red-alloy-seeds_essence' }, // display block
//         [
//             Item.of('mysticalagriculture:red-alloy-seeds_essence') // item
//                 .withChance(100) // 100% chance
//                 .withRolls(1), // fixed at 1 roll
//             Item.of('mysticalagriculture:red-alloy-seeds_seeds')
//                 .withChance(1) // very low chance
//                 .withRolls(1),
//             Item.of('mysticalagriculture:fertilized_essence')
//                 .withChance(1) // very low chance
//                 .withRolls(1)
//         ],
//         100, // growthTicks
//         1 // growthModifier (optional)
//     );
// });
