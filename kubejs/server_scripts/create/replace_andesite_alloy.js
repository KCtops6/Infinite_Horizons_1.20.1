// https://wiki.latvian.dev/books/kubejs/page/kubejs-create
// Syntax: create pressing(output[], input)
ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'create:andesite_alloy' }, 'create:andesite_alloy', 'kubejs:stone_alloy'
    )
})