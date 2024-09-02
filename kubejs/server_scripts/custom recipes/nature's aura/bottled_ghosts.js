// https://wiki.latvian.dev/books/kubejs/page/recipes#bkmrk-%C2%A0
ServerEvents.recipes(event => {
    /**
     * Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}')
     * 'mysticalagriculture:nether_essence'
     * Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:nether"}')
     */
    event.shapeless(Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:nether"}'), [
        'mysticalagriculture:nether_essence',
        Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}')
    ])
})