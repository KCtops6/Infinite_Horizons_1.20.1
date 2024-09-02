// https://wiki.latvian.dev/books/kubejs/page/recipes#bkmrk-%C2%A0
ServerEvents.recipes(event => {
    /**
     * 'kubejs:netherite_mesh'
     * 'kubejs:netherite_wire'
     * 'minecraft:stick'
     */
    event.shaped('kubejs:netherite_mesh', [
        'ABA', 
        'BBB',
        'ABA'  
    ], {
        A: 'minecraft:stick', 
        B: 'kubejs:netherite_wire'
    })
})