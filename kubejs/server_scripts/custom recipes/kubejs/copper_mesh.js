// https://wiki.latvian.dev/books/kubejs/page/recipes#bkmrk-%C2%A0
ServerEvents.recipes(event => {
    /**
     * 'kubejs:copper_mesh'
     * 'minecraft:stick'
     * 'createaddition:copper_wire'
     */
    event.shaped('kubejs:copper_mesh', [
        'ABA', 
        'BBB',
        'ABA'  
    ], {
        A: 'minecraft:stick', 
        B: 'createaddition:copper_wire'
    })
})