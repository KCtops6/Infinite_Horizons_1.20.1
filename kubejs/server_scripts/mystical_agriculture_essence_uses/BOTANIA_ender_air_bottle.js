/**
 * ENDER AIR BOTTLE
 * 
 * 'botania:ender_air_bottle'
 * 'minecraft:glass_bottle'
 * 'mysticalagriculture:end_essence'
 */
ServerEvents.recipes(event => {
    event.shapeless('botania:ender_air_bottle', [
        'minecraft:glass_bottle',
        'mysticalagriculture:end_essence'
    ])
})