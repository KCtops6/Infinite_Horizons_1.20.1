// https://wiki.latvian.dev/books/kubejs/page/recipes#bkmrk-%C2%A0
ServerEvents.recipes(event => {
    /**
     * 'mysticalagriculture:stone_essence'
     * 'mysticalagriculture:fire_essence'
     * 'mysticalagriculture:deepslate_essence'
     */
    event.shapeless('2x mysticalagriculture:stone_essence', [
        'mysticalagriculture:stone_essence',
        'mysticalagriculture:fire_essence'
    ])
})