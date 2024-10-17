// https://kubejs.com/wiki/addons/create#milling
ServerEvents.recipes(event => {
    event.recipes.createMilling(['createsifter:dust'], 'minecraft:sand')
});