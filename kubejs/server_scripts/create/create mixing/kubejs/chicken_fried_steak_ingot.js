// https://kubejs.com/wiki/addons/create#mixing
ServerEvents.recipes(event => {
    event.recipes.createMixing('kubejs:chicken_fried_steak_ingot',
        ['pamhc2foodcore:groundchickenitem',
        'pamhc2foodcore:groundbeefitem', 'create:wheat_flour', 'pamhc2foodextended:blackpepperitem'
    ]).heated()
})