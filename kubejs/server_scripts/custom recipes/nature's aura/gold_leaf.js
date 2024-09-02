// https://wiki.latvian.dev/books/kubejs/page/recipes#bkmrk-%C2%A0
ServerEvents.recipes(event => {
    /**
     * 'naturesaura:gold_fiber'
     * 'mysticalagriculture:wood_essence'
     * '16x naturesaura:gold_leaf'
     */
    event.shapeless('16x naturesaura:gold_leaf', [
        'naturesaura:gold_fiber',
        'mysticalagriculture:wood_essence'
    ])
})