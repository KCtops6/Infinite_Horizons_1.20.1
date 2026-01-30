let blastingRecipes = [
    /** Scorchia from Scoria */ {
        output: 'create:scorchia',
        input: 'create:scoria',
        experience: 0,
        cookingTime: 200
    }
]
ServerEvents.recipes(event => {
    blastingRecipes.forEach(r => {
        event.blasting(r.output, r.input).xp(r.experience).cookingTime(r.cookingTime)
    })
})