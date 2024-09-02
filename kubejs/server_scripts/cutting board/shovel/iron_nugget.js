ServerEvents.recipes(event => {
    event.remove({
        type:   'farmersdelight:cutting',
        input:  'minecraft:gravel',
        output: 'minecraft:gravel'
    })
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            {
                item: 'minecraft:gravel'
            }
        ],
        tool: { tag: 'forge:tools/shovels' },
        result : [
            {
                item: 'minecraft:gravel'
            },
            {
                item: 'minecraft:flint',
                chance: 0.5
            },
            {
                item: 'minecraft:iron_nugget',
                chance: 0.25
            }
        ]
    })
})