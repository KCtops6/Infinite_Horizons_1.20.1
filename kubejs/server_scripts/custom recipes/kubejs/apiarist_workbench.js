// https://wiki.latvian.dev/books/kubejs/page/recipes#bkmrk-%C2%A0
ServerEvents.recipes(event => {
    /**
     * 'kubejs:apiarist_workbench'
     * 'minecraft:yellow_wool'
     * 'minecraft:crafting_table'
     * 'minecraft:glass_bottle'
     * Item.of('minecraft:shears', '{Damage:0}')
     * 'minecraft:oak_planks'
     */
    event.shaped('kubejs:apiarist_workbench', [
        'YYY', 
        'GCS',
        'OOO'  
    ], {
        C:  'minecraft:crafting_table',
        G:  'minecraft:glass_bottle',
        O:  'minecraft:oak_planks',
        S:  Item.of('minecraft:shears', '{Damage:0}'),
        Y:  'minecraft:yellow_wool'
    })
})