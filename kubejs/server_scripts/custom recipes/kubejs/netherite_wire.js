// https://wiki.latvian.dev/books/kubejs/page/recipes#bkmrk-%C2%A0
ServerEvents.recipes(event => {
    /**
     * 'createaddition:gold_wire'
     * 'minecraft:netherite_scrap'
     * 'kubejs:netherite_wire'
     */
    event.shapeless('kubejs:netherite_wire', ['createaddition:gold_wire', 'minecraft:netherite_scrap'])
})