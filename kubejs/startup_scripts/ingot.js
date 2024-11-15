function createIngot(e, name) {
    e.create(`${name}_ingot`).displayName(`${capitalize(name)} Ingot`);
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

StartupEvents.registry('item', e => {
    createIngot(e, 'brass');
    createIngot(e, 'bronze');
    createIngot(e, 'constantan');
    createIngot(e, 'electrum');
    createIngot(e, 'invar');
    createIngot(e, 'lead');
    createIngot(e, 'nickel');
    createIngot(e, 'silver');
    createIngot(e, 'tin');
    createIngot(e, 'zinc');
});
