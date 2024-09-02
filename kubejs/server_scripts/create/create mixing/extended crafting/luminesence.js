/**
 * ['minecraft:gunpowder', '2x minecraft:glowstone_dust', 'minecraft:redstone', '2x extendedcrafting:luminessence'
 */
ServerEvents.recipes(event => {
    event.remove({output: 'extendedcrafting:luminessence' })
    event.recipes.createMixing('2x extendedcrafting:luminessence',
        ['minecraft:gunpowder', '2x minecraft:glowstone_dust', 'minecraft:redstone']
    ).superheated()
})