const materials = ['stone', 'iron', 'diamond', 'netherite'];
const recipes = [
    { input: 'minecraft:cobblestone', output: 'minecraft:gravel'},
    { input: 'minecraft:gravel', output: 'minecraft:sand'},
    { input: 'minecraft:sand', output: 'createsifter:dust'}
]
LootJS.modifiers((event) => {
    materials.forEach(m => {
        recipes.forEach(r => {
            event
                .addBlockLootModifier(r.input)
                .matchEquip('mainhand', Item.of(`kubejs:${m}_hammer`))
                .removeLoot(Ingredient.all)
                .addLoot(r.output);
        })
    })
})