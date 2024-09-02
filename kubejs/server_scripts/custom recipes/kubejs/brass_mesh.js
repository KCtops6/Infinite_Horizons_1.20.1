// https://wiki.latvian.dev/books/kubejs/page/recipes#bkmrk-%C2%A0
ServerEvents.recipes(event => {
    /**
     * 'kubejs:iron_mesh'
     * 'minecraft:stick'
     * 'createaddition:iron_wire'
     */
    event.shaped('kubejs:iron_mesh', [
        'ABA', 
        'BBB',
        'ABA'  
    ], {
        A: 'minecraft:stick', 
        B: 'createaddition:iron_wire'
    })
})