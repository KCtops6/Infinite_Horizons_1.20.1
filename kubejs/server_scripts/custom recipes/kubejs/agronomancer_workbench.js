// https://wiki.latvian.dev/books/kubejs/page/recipes#bkmrk-%C2%A0
ServerEvents.recipes(event => {
    /**
     * 'minecraft:stone', 'kubejs:agronomancer_workbench', 'minecraft:red_wool', 'minecraft:gold_ingot', 'minecraft:crafting_table'
     */
    event.shaped('kubejs:agronomancer_workbench', [
        'RRR', 
        'GCG',
        'SSS'  
    ], {
        C:  'minecraft:crafting_table',
        G:  'minecraft:gold_ingot',
        R:  'minecraft:red_wool',
        S:  'minecraft:stone'
    })
})