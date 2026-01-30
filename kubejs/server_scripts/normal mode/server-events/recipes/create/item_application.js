const c = ['logs', 'wood']
ServerEvents.recipes(event => {
    c.forEach(c => {
        event.custom({
            type: "create:item_application",
            ingredients: [
                {
                    tag: `forge:stripped_${c}`
                },
                {
                    item: "kubejs:stone_alloy"
                }
            ],
            results: [
                {
                    item: "create:andesite_casing"
                }
            ]
        })
    })
    
})