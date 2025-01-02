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