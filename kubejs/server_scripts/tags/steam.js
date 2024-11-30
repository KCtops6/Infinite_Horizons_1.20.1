// ServerEvents.recipes(event => {
//     function replaceSteam(fluid) {
//         event.replaceInput(
//             { input: Fluid.of(fluid) },  // All recipes that have input of any steam
//             Fluid.of(fluid), // Replacing every steam...
//             'kubejs:steam'  // ...with KubeJS steam.
//         )
//         event.replaceOutput(
//             { output: Fluid.of(fluid) }, // All recipes that have output of any steam
//             Fluid.of(fluid), // Replacing every steam...
//             'kubejs:steam'  // ...with KubeJS steam.
//         )
//     }
//     replaceSteam('advgenerators:steam');
//     replaceSteam('gtceu:steam');
//     replaceSteam('mekanism:steam')
// })