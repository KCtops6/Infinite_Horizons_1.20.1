function addIngot(event, type) {
    event.add(`forge:ingots/${type}`, `kubejs:${type}_ingot`);
}

ServerEvents.tags('item', event => {
    addIngot(event, 'brass');
    addIngot(event, 'bronze');
    addIngot(event, 'constantan');
    addIngot(event, 'electrum');
    addIngot(event, 'invar');
    addIngot(event, 'lead');
    addIngot(event, 'nickel');
    addIngot(event, 'silver');
    addIngot(event, 'tin');
    addIngot(event, 'zinc');
});
