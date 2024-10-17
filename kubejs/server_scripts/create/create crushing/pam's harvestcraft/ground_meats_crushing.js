// https://kubejs.com/wiki/addons/create#crushing
ServerEvents.recipes(event => {
    const meats = ['rabbit', 'mutton', 'pork', 'beef', 'chicken'];
    meats.forEach(meat => {
        event.recipes.createCrushing([`pamhc2foodcore:ground${meat}item`], `#forge:raw${meat}`);
    });
    event.recipes.createCrushing([`pamhc2foodcore:groundfishitem`], `#forge:fishes`);
});
