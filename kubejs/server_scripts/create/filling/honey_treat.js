// https://wiki.latvian.dev/books/kubejs/page/kubejs-create
// Syntax: create pressing(output[], input)
ServerEvents.recipes(e => {
    e.recipes.createFilling(
        'productivebees:honey_treat',   // output
        ['minecraft:honeycomb', Fluid.of('productivebees:honey', 250)]  // input array
    );
})