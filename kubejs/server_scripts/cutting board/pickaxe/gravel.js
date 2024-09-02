ServerEvents.recipes(event => {
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            {
                tag: 'forge:cobblestone'
            }
        ],
        tool: { tag: 'forge:tools/pickaxes' },
        result : [
            {
                item: 'minecraft:gravel'
            }
        ]
    })
})