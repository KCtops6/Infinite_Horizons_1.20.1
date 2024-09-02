ServerEvents.recipes(event => {
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            {
                item: 'minecraft:sand'
            }
        ],
        tool: { tag: 'forge:tools/pickaxes' },
        result : [
            {
                item: 'createsifter:dust'
            }
        ]
    })
})