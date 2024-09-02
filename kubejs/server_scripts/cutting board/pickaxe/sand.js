ServerEvents.recipes(event => {
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            {
                item: 'minecraft:gravel'
            }
        ],
        tool: { tag: 'forge:tools/pickaxes' },
        result : [
            {
                item: 'minecraft:sand'
            }
        ]
    })
})