// https://wiki.latvian.dev/books/kubejs/page/recipes#bkmrk-%C2%A0
ServerEvents.recipes(event => {
    /**
     * 'mysticalagriculture:stone_essence'
     * 'mysticalagriculture:air_essence'
     * 'mysticalagriculture:water_essence'
     * 'mysticalagriculture:limestone_essence'
     */
    event.shapeless('3x mysticalagriculture:limestone_essence', [
        'mysticalagriculture:stone_essence',
        'mysticalagriculture:air_essence',
        'mysticalagriculture:water_essence'
    ])
})