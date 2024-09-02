// https://wiki.latvian.dev/books/kubejs/page/kubejs-create
// Syntax: pressing(output[], input)
ServerEvents.recipes(e => {
    // ['kubejs:infinitium_ingot', 'kubejs:infinitium_plate']
    e.recipes.create.pressing('kubejs:infinitium_plate', 'kubejs:infinitium_ingot')
})