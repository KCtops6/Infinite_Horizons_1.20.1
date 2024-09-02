ServerEvents.tags('item', event => {
    // Get the #forge:cobblestone tag collection and add Diamond Ore to it
    event.add('forge:ingots/zinc', 'kubejs:zinc_ingot')
})