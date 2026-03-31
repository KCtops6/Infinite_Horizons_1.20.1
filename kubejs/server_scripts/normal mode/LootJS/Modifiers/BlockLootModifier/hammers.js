const materials = ['stone', 'iron'];
const recipes = [
    { input: 'minecraft:cobblestone', output: 'minecraft:gravel'},
    { input: 'minecraft:gravel', output: 'minecraft:sand'},
    { input: 'minecraft:andesite', output: 'kubejs:andesite_gravel'},
    { input: 'minecraft:diorite', output: 'kubejs:diorite_gravel'},
    { input: 'minecraft:granite', output: 'kubejs:granite_gravel'},
    { input: 'minecraft:sand', output: 'createsifter:dust'}
]
LootJS.modifiers((event) => {
    materials.forEach(m => {
        recipes.forEach(r => {
            event
                .addBlockLootModifier(r.input)
                .matchEquip('mainhand', Item.of(`kubejs:${m}_hammer`))
                .replaceLoot(Ingredient.all, r.output); 
        })
    })
})