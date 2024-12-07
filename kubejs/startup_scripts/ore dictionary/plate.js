StartupEvents.registry('item', e => {
    const plates = [
        'brass', 'bronze', 'constantan', 'copper', 'electrum', 'gold', 'invar', 'iron', 'lead', 'nickel', 'silver', 'tin', 'zinc'
    ];

    plates.forEach(plate => {
        e.create(`${plate}_plate`).displayName(`${capitalize(plate)} Plate`);
    });
});

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
