const trowelRecipes = [
    {
        inputs: ['minecraft:dirt', 'minecraft:grass_block', 'minecraft:dirt_path'],
        outputs: [
            { item: 'kubejs:stone_pebble', tier: 1 },
            { item: 'kubejs:andesite_pebble', tier: 2 }
        ]
    },
    {
        inputs: ['minecraft:gravel'],
        outputs: [
            { item: 'create:crushed_raw_iron', tier: 2 },
            { item: 'create:crushed_raw_copper', tier: 3 },
            { item: 'create:crushed_raw_gold', tier: 3 },
            { item: 'create:crushed_raw_zinc', tier: 3 },
            { item: 'mysticalagriculture:prosperity_shard', tier: 3 }
        ]
    },
    {
        inputs: ['kubejs:tuff_gravel'],
        outputs: [
            { item: 'kubejs:deepslate_pebble', tier: 3 }
        ]
    },
    {
        inputs: ['kubejs:deepslate_gravel'],
        outputs: [
            { item: 'minecraft:diamond', tier: 3 },
            { item: 'minecraft:lapis_lazuli', tier: 3 },
            { item: 'minecraft:redstone', tier: 3 }
        ]
    }
]
const map = new Map()
map.set(1, 'wooden')
map.set(2, 'stone')
map.set(3, 'iron')
map.set(4, 'diamond')
map.set(5, 'netherite')
LootJS.modifiers(event => {
    trowelRecipes.forEach(recipe => {
        recipe.inputs.forEach(inputBlock => {
            recipe.outputs.forEach(output => {
                let chance = 0.25
                for (let tier = output.tier; tier <= 5; tier++) {
                    event.addBlockLootModifier(inputBlock)
                        .matchEquip('mainhand', Item.of(`kubejs:${map.get(tier)}_trowel`))
                        .randomChance(chance)
                        .addLoot(output.item)
                        .randomChance(chance)
                        .removeLoot(inputBlock)
                    chance += 0.25
                }
            })
        })
    })
})