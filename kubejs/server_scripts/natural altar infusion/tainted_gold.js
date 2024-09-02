ServerEvents.recipes((event) => {
    // 'naturesaura:tainted_gold' 'minecraft:gold_ingot'
    event.remove({input: 'minecraft:gold_ingot', output: 'naturesaura:tainted_gold' })
    event.recipes.naturesaura.altar('naturesaura:tainted_gold', 'minecraft:gold_ingot')
})