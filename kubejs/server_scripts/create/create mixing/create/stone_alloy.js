/**
 * 'kubejs:chicken_fried_steak_ingot'
 * 'pamhc2foodcore:groundchickenitem'
 * 'pamhc2foodcore:groundbeefitem'
 * 'create:wheat_flour'
 * 'pamhc2foodextended:blackpepperitem'
 */
ServerEvents.recipes(event => {
    event.recipes.createMixing('4x create:andesite_alloy', ['minecraft:iron_nugget', 'minecraft:cobblestone'])
})