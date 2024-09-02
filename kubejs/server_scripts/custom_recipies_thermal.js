ServerEvents.recipes(event => {
    /**
     * ARS NOUVAEU RECIPIES
     * 'minecraft:blaze_powder'
     * 'thermal:basalz_powder'
     * 'thermal:blitz_powder'
     * 'thermal:blizz_powder'
     * 'ars_nouveau:manipulation_essence'
     */
    event.shapeless('thermal:basalz_powder', ['minecraft:blaze_powder', 'ars_nouveau:manipulation_essence'])
    event.shapeless('thermal:blitz_powder', ['thermal:basalz_powder', 'ars_nouveau:manipulation_essence'])
    event.shapeless('thermal:blizz_powder', ['thermal:blitz_powder', 'ars_nouveau:manipulation_essence'])
    event.shapeless('minecraft:blaze_powder', ['thermal:blizz_powder', 'ars_nouveau:manipulation_essence'])
})