StartupEvents.registry('block', event => {
    const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

    const blocks = [
        'aluminum', 'apatite', 'brass', 'bronze', 'cinnabar', 'constantan', 'copper', 'electrum', 'enderium', 'gold',
        'infinitium', 'invar', 'iron', 'lead', 'lumium', 'nickel', 'niter', 'osmium', 'ruby',
        'sapphire', 'signalum', 'silver', 'sulfur', 'tin', 'uranium', 'zinc'
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
        'aluminum', 'apatite', 'brass', 'bronze', 'charcoal', 'cinnabar', 'constantan', 'coal', 'copper', 'diamond',
        'electrum', 'emerald', 'enderium', 'gold', 'invar', 'iron', 'lapis', 'lead', 'lumium', 'nickel', 'niter', 'obsidian',
        'osmium', 'quartz', 'sapphire', 'signalum', 'silver', 'steel', 'sulfur', 'ruby', 'tin', 'uranium', 'zinc'
    ];

    dusts.forEach(dust => {
        event.create(`${dust}_dust`).displayName(`${capitalize(dust)} Dust`);
    });

    event.create('sawdust').displayName("Sawdust");

    const ingots = [
        'aluminum', 'brass', 'bronze', 'constantan', 'electrum', 'enderium', 'infinitium', 'invar',
        'lead', 'lumium', 'nickel', 'osmium', 'signalum', 'silver', 'steel', 'tin', 'uranium', 'zinc'
    ];

    ingots.forEach(ingot => {
        event.create(`${ingot}_ingot`).displayName(`${capitalize(ingot)} Ingot`);
    });

    const plates = [
        'aluminum', 'brass', 'bronze', 'constantan', 'copper', 'electrum', 'enderium', 'gold',
        'infinitium', 'invar', 'iron', 'lead', 'lumium', 'netherite', 'nickel', 'signalum', 
        'silver', 'tin', 'zinc'
    ];

    plates.forEach(plate => {
        event.create(`${plate}_plate`).displayName(`${capitalize(plate)} Plate`);
    });

    event.create('silicon').displayName('Silicon');

    const gems = [
        { id: 'apatite', displayName: 'Apatite'},
        { id: 'cinnabar', displayName: 'Cinnabar'},
        { id: 'niter', displayName: 'Niter'},
        { id: 'ruby', displayName: 'Ruby'},
        { id: 'sapphire', displayName: 'Sapphire'},
        { id: 'sulfur', displayName: 'Sulfur'}
    ];

    gems.forEach(gem => {
        event.create(`${gem.id}_gem`).displayName(`${gem.displayName}`);
    })

    const gears = [
        'bronze', 'constantan', 'copper', 'diamond', 'electrum', 'emerald', 'enderium', 'gold',
        'invar', 'iron', 'lapis', 'lead', 'lumium', 'netherite', 'nickel', 'quartz', 'ruby', 'sapphire', 'signalum', 'silver', 'tin'
    ];

    gears.forEach(gear => {
        event.create(`${gear}_gear`).displayName(`${capitalize(gear)} Gear`);
    })

    const nuggets = [
        'brass', 'bronze', 'bronze', 'constantan', 'constantan',
        'copper', 'electrum', 'electrum', 'enderium', 'enderium',
        'invar', 'invar', 'lead', 'lead', 'lumium',
        'netherite', 'netherite', 'nickel', 'nickel', 'osmium',
        'signalum', 'signalum', 'silver', 'silver', 'steel',
        'tin', 'tin', 'uranium', 'zinc'
    ];

    nuggets.forEach(nugget => {
        event.create(`${nugget}_nugget`).displayName(`${capitalize(nugget)} Nugget`);
    });
});
