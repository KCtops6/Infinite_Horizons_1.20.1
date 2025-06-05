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
// LootJS.modifiers(event => {
//     // Wooden Trowel gives stone pebbles when breaking dirt/grass block.
//     event.addBlockModifier("minecraft:dirt")
//         .matchTool("kubejs:wooden_trowel")
//         .addLoot(LootEntry.of("kubejs:stone_pebble").randomChance(0.25))
//         .randomChance(0.25)
//         .removeLoot("minecraft:dirt");
//     event.addBlockModifier("minecraft:grass_block")
//         .matchTool("kubejs:wooden_trowel")
//         .addLoot(LootEntry.of("kubejs:stone_pebble").randomChance(0.25))
//         .randomChance(0.25)
//         .removeLoot("minecraft:dirt");
    
//     // Stone Trowel gives stone and andesite pebbles when breaking dirt/grass block.
//     event.addBlockModifier("minecraft:dirt")
//         .matchTool("kubejs:stone_trowel")
//         .addLoot(LootEntry.of("kubejs:stone_pebble").randomChance(0.5))
//         .addLoot(LootEntry.of("kubejs:andesite_pebble").randomChance(0.25))
//         .randomChance(0.5)
//         .removeLoot("minecraft:dirt");
//     event.addBlockModifier("minecraft:grass_block")
//         .matchTool("kubejs:stone_trowel")
//         .addLoot(LootEntry.of("kubejs:stone_pebble").randomChance(0.5))
//         .addLoot(LootEntry.of("kubejs:andesite_pebble").randomChance(0.25))
//         .randomChance(0.5)
//         .removeLoot("minecraft:dirt");

//     // Iron Trowel gives stone and andesite pebbles when breaking dirt/grass block.
//     event.addBlockModifier("minecraft:dirt")
//         .matchTool("kubejs:iron_trowel")
//         .addLoot(LootEntry.of("kubejs:stone_pebble").randomChance(0.75))
//         .addLoot(LootEntry.of("kubejs:andesite_pebble").randomChance(0.5))
//         .randomChance(0.75)
//         .removeLoot("minecraft:dirt");
//     event.addBlockModifier("minecraft:grass_block")
//         .matchTool("kubejs:iron_trowel")
//         .addLoot(LootEntry.of("kubejs:stone_pebble").randomChance(0.75))
//         .addLoot(LootEntry.of("kubejs:andesite_pebble").randomChance(0.5))
//         .randomChance(0.75)
//         .removeLoot("minecraft:grass_block");
    
//     // Stone Trowel gives crushed raw iron when breaking gravel.
//     event.addBlockModifier("minecraft:gravel")
//         .matchTool("kubejs:stone_trowel")
//         .addLoot(LootEntry.of('create:crushed_raw_iron').randomChance(0.25))
//         .randomChance(0.5)
//         .removeLoot("minecraft:gravel")

//     // Iron Trowel gives crushed raw iron, copper, gold, and zinc when breaking gravel.
//     event.addTableModifier("minecraft:blocks/gravel")
//         .matchTool("kubejs:iron_trowel")
//         .addLoot(LootEntry.of('create:crushed_raw_iron').randomChance(0.5))
//         .addLoot(LootEntry.of('create:crushed_raw_copper').randomChance(0.25))
//         .addLoot(LootEntry.of('create:crushed_raw_gold').randomChance(0.125))
//         .addLoot(LootEntry.of('create:crushed_raw_zinc').randomChance(0.125))
//         .addLoot(LootEntry.of('mysticalagriculture:prosperity_shard').randomChance(0.125))
//         .randomChance(0.75)
//         .removeLoot("minecraft:gravel")
    
//     // Iron trowel gives deepslate pebbles when breaking tuff gravel.
//     event.addBlockModifier("kubejs:tuff_gravel")
//         .matchTool("kubejs:iron_trowel")
//         .addLoot(LootEntry.of("kubejs:deepslate_pebble").randomChance(0.75))
//         .randomChance(0.75)
//         .removeLoot("kubejs:tuff_gravel");
    
//     // Iron trowel gives diamonds and lapis when breaking deepslate gravel.
//     event.addBlockModifier("kubejs:deepslate_gravel")
//         .matchTool("kubejs:iron_trowel")
//         .addLoot(LootEntry.of("minecraft:diamond").randomChance(0.125))
//         .addLoot(LootEntry.of("minecraft:lapis_lazuli").randomChance(0.25))
//         .addLoot(LootEntry.of("minecraft:redstone").randomChance(0.25))
//         .randomChance(0.75)
//         .removeLoot("kubejs:deepslate_gravel");
// })