// https://wiki.latvian.dev/books/kubejs/page/recipes#bkmrk-%C2%A0
ServerEvents.recipes(event => {
    /**
     * 'pamhc2crops:frostgarden'
     * 'mysticalagriculture:nature_essence'
     */
    event.shaped('pamhc2crops:frostgarden', [
        'NNN', 
        'N  ',
        '   '  
    ], {
        N:  'mysticalagriculture:nature_essence'
    })
})