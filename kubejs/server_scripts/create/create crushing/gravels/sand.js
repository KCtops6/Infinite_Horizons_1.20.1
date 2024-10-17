// https://kubejs.com/wiki/addons/create#crushing
ServerEvents.recipes(event => {
    event.recipes.createMilling(['minecraft:sand'], 'minecraft:gravel')
});