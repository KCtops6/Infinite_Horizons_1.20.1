ServerEvents.recipes(event => {
    event.remove({ output: 'create:andesite_alloy', input: 'minecraft:andesite' })  
    event.shaped('kubejs:stone_alloy', [
        'AB ', 
        'BA ',
        '   '  
    ], {
        A: 'minecraft:iron_nugget', 
        B: 'twigs:pebble'
    })
})