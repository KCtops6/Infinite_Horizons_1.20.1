let casting_table_recipes = [
    /* Ichor Slime Crystal */ {
        cast: "tconstruct:earth_slime_crystal",
        cast_consumed: true,
        cooling_time: 100,
        fluid_amount: 250,
        fluid_tag: "forge:magma",
        result: "tconstruct:ichor_slime_crystal"
    }, /* Ender Slime Crystal */ {
        cast: "tconstruct:earth_slime_crystal",
        cast_consumed: true,
        cooling_time: 100,
        fluid_amount: 250,
        fluid_tag: "forge:ender",
        result: "tconstruct:ender_slime_crystal"
    }
]
ServerEvents.recipes(event => {
    casting_table_recipes.forEach(r => {
        event.custom({
            type: "tconstruct:casting_table",
            cast: {
                item: r.cast
            },
            cast_consumed: r.cast_consumed,
            cooling_time: r.cooling_time,
            fluid: {
                amount: r.fluid_amount,
                tag: r.fluid_tag
            },
            result: r.result
        })
    })
})