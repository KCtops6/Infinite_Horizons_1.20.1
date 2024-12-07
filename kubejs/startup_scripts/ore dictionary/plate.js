// StartupEvents.registry('item', e => {
//     e.create('brass_plate').displayName('Brass Plate');
//     e.create('bronze_plate').displayName('Bronze Plate');
//     e.create('constantan_plate').displayName('Constantan Plate');
//     e.create('copper_plate').displayName('Copper Plate');
//     e.create('electrum_plate').displayName('Electrum Plate');
//     e.create('gold_plate').displayName("Gold Plate");
//     e.create('invar_plate').displayName('Invar Plate');
//     e.create('iron_plate').displayName('Iron Plate');
//     e.create('lead_plate').displayName('Lead Plate');
//     e.create('nickel_plate').displayName('Nickel Plate');
//     e.create('silver_plate').displayName('Silver Plate');
//     e.create('tin_plate').displayName('Tin Plate');
//     e.create('zinc_plate').displayName('Zinc Plate');
// });

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
