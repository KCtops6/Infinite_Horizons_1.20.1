ServerEvents.recipes((event) => {
    // ['naturesaura:tainted_gold_block', 'minecraft:gold_block']
    event.remove({input: 'minecraft:gold_block', output: 'naturesaura:tainted_gold_block' })
    event.recipes.naturesaura.altar('naturesaura:tainted_gold_block', 'minecraft:gold_block')
})