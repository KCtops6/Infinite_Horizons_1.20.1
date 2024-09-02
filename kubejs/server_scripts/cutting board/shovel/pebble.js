ServerEvents.recipes(event => {
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            {
                item: 'minecraft:dirt'
            }
        ],
        tool: { tag: 'forge:tools/shovels' },
        result : [
            {
                item: 'minecraft:dirt'
            },
            {
                item: 'twigs:pebble',
                chance: 0.75
            }
        ]
    })
})