// https://kubejs.com/wiki/addons/create#milling
ServerEvents.recipes(event => {
    const meats = ['rabbit', 'mutton', 'pork', 'beef', 'chicken'];
    meats.forEach(meat => {
        event.recipes.createMilling([`pamhc2foodcore:ground${meat}item`], `#forge:raw${meat}`);
    });
    event.recipes.createMilling([`pamhc2foodcore:groundfishitem`], `#forge:fishes`);
});
