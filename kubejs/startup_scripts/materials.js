StartupEvents.registry('block', event => {
    const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

    const blocks = [
        'brass', 'bronze', 'cinnabar', 'constantan', 'copper', 'electrum', 'gold',
        'infinitium', 'invar', 'iron', 'lead', 'nickel', 'osmium', 'ruby',
        'sapphire', 'silver', 'tin', 'uranium', 'zinc'
    ];

    blocks.forEach(block => {
        event.create(`${block}_block`)
            .displayName(`${capitalize(block)} Block`)
            .soundType('metal')
            .hardness(5.0)
            .resistance(6.0)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
            .tagBlock('minecraft:needs_iron_tool');
    });
});

StartupEvents.registry('item', event => {
    const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

    const dusts = [
        'brass', 'bronze', 'charcoal', 'cinnabar', 'constantan', 'coal', 'copper',
        'electrum', 'gold', 'invar', 'iron', 'lead', 'nickel', 'obsidian',
        'osmium', 'sapphire', 'silver', 'steel', 'sulfur', 'ruby', 'tin', 'uranium', 'zinc'
    ];

    dusts.forEach(dust => {
        event.create(`${dust}_dust`).displayName(`${capitalize(dust)} Dust`);
    });

    const ingots = [
        'brass', 'bronze', 'constantan', 'electrum', 'infinitium', 'invar',
        'lead', 'nickel', 'osmium', 'silver', 'steel', 'tin', 'uranium', 'zinc'
    ];

    ingots.forEach(ingot => {
        event.create(`${ingot}_ingot`).displayName(`${capitalize(ingot)} Ingot`);
    });

    const plates = [
        'brass', 'bronze', 'constantan', 'copper', 'electrum', 'gold',
        'infinitium', 'invar', 'iron', 'lead', 'netherite', 'nickel',
        'silver', 'tin', 'zinc'
    ];

    plates.forEach(plate => {
        event.create(`${plate}_plate`).displayName(`${capitalize(plate)} Plate`);
    });

    event.create('silicon').displayName('Silicon');

    const gems = [
        { id: 'certus_quartz', displayName: 'Certus Quartz Crystal'},
        { id: 'sapphire', displayName: 'Sapphire'},
        { id: 'cinnabar', displayName: 'Cinnabar'},
        { id: 'ruby', displayName: 'Ruby'}
    ];

    gems.forEach(gem => {
        event.create(`${gem.id}_gem`).displayName(`${gem.displayName}`);
    })
});
