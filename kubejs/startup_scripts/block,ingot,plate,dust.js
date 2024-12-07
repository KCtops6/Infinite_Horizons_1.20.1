StartupEvents.registry('block', event => {
    const blocks = [
        'brass', 'bronze', 'constantan', 'copper', 'electrum', 'gold', 'infinitium', 'invar',
        'iron', 'lead', 'nickel', 'osmium', 'silver', 'tin', 'zinc'
    ];
    
    blocks.forEach(block => {
        event.create(`${block}_block`)
        .displayName(`${capitalize(block)} Block`)
        .soundType('metal')
        .hardness(5.0)
        .resistance(6.0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
    });

    const dusts = [
        'brass', 'bronze', 'charcoal', 'constantan',
        'coal', 'copper', 'electrum', 'gold', 'invar',
        'iron', 'lead', 'nickel', 'obsidian', 'osmium',
        'sapphire', 'silver', 'steel', 'sulfur', 'tin', 'zinc'
    ];

    dusts.forEach(dust => {
        e.create(`${dust}_dust`).displayName(`${capitalize(dust)} Dust`);
    });

    const ingots = [
        'brass', 'bronze', 'constantan',
        'electrum', 'infinitium', 'invar',
        'lead', 'nickel', 'osmium',
        'silver', 'steel', 'tin', 'zinc'
    ];

    ingots.forEach(ingot => {
        e.create(`${ingot}_ingot`).displayName(`${capitalize(ingot)} Ingot`);
    });

    const plates = [
        'brass', 'bronze', 'constantan',
        'copper', 'electrum', 'gold',
        'infinitium', 'invar', 'iron',
        'lead', 'netherite', 'nickel',
        'silver', 'tin', 'zinc'
    ];

    plates.forEach(plate => {
        e.create(`${plate}_plate`).displayName(`${capitalize(plate)} Plate`);
    });

    e.create('silicon').displayName('Silicon');
    
})

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}