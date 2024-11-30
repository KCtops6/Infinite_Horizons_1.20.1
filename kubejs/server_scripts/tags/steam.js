// ServerEvents.tags('item', event => {
//     event.add('forge:steam', 'advgenerators:steam');    // Adds the steam from Advanced Generators mod into my newly created steam tag.
//     event.add('forge:steam', 'gtceu:steam');    // Adds the steam from Gregtech mod into my newly created steam tag.
//     event.add('forge:steam', 'mekanism:steam'); // Adds the steam from Mekanism mod into my newly created steam tag.
//     event.add('forge:steam', 'kubejs:steam');   // Adding my own steam from KubeJS into my newly created steam tag.
// })

// ServerEvents.recipes(event => {
//     event.replaceInput(
//         { input: '#forge:steam' },  // All recipes that have input of any steam
//         '#forge:steam', // Replacing every steam...
//         'kubejs:steam'  // ...with KubeJS steam.
//     )
//     event.replaceOutput(
//         { output: '#forge:steam' }, // All recipes that have output of any steam
//         '#forge:steam', // Replacing every steam...
//         'kubejs:steam'  // ...with KubeJS steam.
//     )
// })