// https://kubejs.com/wiki/addons/create#pressing
ServerEvents.recipes(e => {
    // ['kubejs:infinitium_ingot', 'kubejs:infinitium_plate']
    e.recipes.create.pressing('kubejs:infinitium_plate', 'kubejs:infinitium_ingot')
})