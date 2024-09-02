// https://wiki.latvian.dev/books/kubejs/page/recipes#bkmrk-%C2%A0
ServerEvents.recipes(event => {
    /**
     * 'pamhc2crops:windygarden'
     * 'mysticalagriculture:nature_essence'
     */
    event.shaped('pamhc2crops:windygarden', [
        'N N', 
        ' N ',
        'N  '  
    ], {
        N:  'mysticalagriculture:nature_essence'
    })
})