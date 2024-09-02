ServerEvents.recipes(event => {
    /**
     * 'mysticalagriculture:end_essence'
     * 'mysticalagriculture:dragon_egg_essence'
     * 'mysticalagriculture:dye_essence'
     * 'naturesaura:end_flower'
     */
    event.shaped(
        Item.of('naturesaura:end_flower', 1),
        [
          'ABA',
          'BCB',
          'ABA'
        ],
        {
          A: 'mysticalagriculture:end_essence',
          B: 'mysticalagriculture:dragon_egg_essence',
          C: 'mysticalagriculture:dye_essence'
        }
    )
})