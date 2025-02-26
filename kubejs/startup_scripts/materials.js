StartupEvents.registry('block', event => {
    const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

    const blocks = [
        'aluminum', 'apatite', 'brass',
        'bronze', 'cinnabar', 'constantan',
        'copper', 'electrum', 'elementium', 'enderium',
        'gold', 'infinitium', 'invar',
        'iron', 'lead', 'lumium',
        'manasteel', 'nickel', 'niter',
        'osmium', 'ruby', 'sapphire',
        'signalum', 'silver', 'steel',
        'sulfur', 'terrasteel', 'tin',
        'uranium', 'zinc'
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
        'aluminum', 'apatite', 'brass',
        'bronze', 'charcoal', 'cinnabar',
        'constantan', 'coal', 'copper',
        'diamond', 'electrum', 'elementium', 'emerald',
        'enderium', 'gold', 'invar',
        'iron', 'lapis', 'lead',
        'lumium', 'manasteel', 'netherite', 'nickel',
        'niter', 'obsidian', 'osmium',
        'quartz', 'sapphire', 'signalum',
        'silver', 'steel', 'sulfur',
        'terrasteel', 'ruby', 'tin',
        'uranium', 'zinc'
    ];

    dusts.forEach(dust => {
        event.create(`${dust}_dust`).displayName(`${capitalize(dust)} Dust`);
    });
    event.create('ender_pearl_dust').displayName('Ender Pearl Dust');
    event.create('end_stone_dust').displayName('End Stone Dust'); // custom end stone dust.
    event.create('sawdust').displayName("Sawdust");

    const ingots = [
        'aluminum', 'brass', 'bronze',
        'constantan', 'electrum', 'elementium', 'enderium',
        'infinitium', 'invar', 'lead',
        'lumium', 'manasteel', 'nickel',
        'osmium', 'signalum', 'silver',
        'steel', 'terrasteel',
        'tin', 'uranium', 'zinc'
    ];

    ingots.forEach(ingot => {
        event.create(`${ingot}_ingot`).displayName(`${capitalize(ingot)} Ingot`);
    });

    const plates = [
        'aluminum', 'brass', 'bronze',
        'constantan', 'copper', 'electrum',
        'enderium', 'gold', 'infinitium',
        'invar', 'iron', 'lead',
        'lumium', 'manasteel', 'netherite',
        'nickel', 'signalum', 'silver', 'steel',
        'terrasteel', 'tin', 'zinc'
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
        'bronze', 'constantan', 'copper',
        'diamond', 'electrum', 'emerald',
        'enderium', 'gold', 'invar',
        'iron', 'lapis', 'lead',
        'lumium', 'manasteel', 'netherite',
        'nickel', 'quartz', 'ruby', 
        'sapphire', 'signalum', 'silver',
        'terrasteel', 'tin'
    ];

    gears.forEach(gear => {
        event.create(`${gear}_gear`).displayName(`${capitalize(gear)} Gear`);
    })

    const nuggets = [
        'brass', 'bronze', 'constantan',
        'copper', 'electrum', 'enderium', 
        'invar', 'lead', 'lumium', 'manasteel', 
        'netherite', 'nickel', 'osmium',
        'signalum', 'silver', 'steel', 'terrasteel',
        'tin', 'uranium', 'zinc'
    ];

    nuggets.forEach(nugget => {
        event.create(`${nugget}_nugget`).displayName(`${capitalize(nugget)} Nugget`);
    });
});
