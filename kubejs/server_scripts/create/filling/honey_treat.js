// https://kubejs.com/wiki/addons/create#filling
ServerEvents.recipes(e => {
    e.recipes.createFilling(
        'productivebees:honey_treat',   // output
        ['minecraft:honeycomb', Fluid.of('productivebees:honey', 250)]  // input array
    );
})