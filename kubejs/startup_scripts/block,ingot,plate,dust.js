StartupEvents.registry('block', event => {
    const blocks = [
        'brass', 'bronze', 'constantan', 'copper', 'electrum', 'gold', 'invar',
        'iron', 'lead', 'nickel', 'osmium', 'silver', 'tin', 'zinc'
    ];
    
    blocks.forEach(block => {
        event.create(`${block}_block`) // Create a new block
        .displayName(`${capitalize(block)} Block`) // Set a custom name
        .soundType('metal') // Set a material (affects the sounds and some properties)
        .hardness(5.0) // Set hardness (affects mining time)
        .resistance(6.0) // Set resistance (to explosions, etc)
        .requiresTool(true) // Requires a tool or it won't drop (see tags below)
        .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
        .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
    })

    const dusts = [
        'brass', 'bronze', 'charcoal', 'constantan', 'coal', 'copper', 'electrum', 'gold', 'invar',
        'iron', 'lead', 'nickel', 'obsidian', 'osmium', 'sapphire', 'silver', 'steel', 'sulfur', 'tin', 'zinc'
    ];

    dusts.forEach(dust => {
        e.create(`${dust}_dust`).displayName(`${capitalize(dust)} Dust`);
    })

    const ingots = [
        'brass', 'bronze', 'constantan', 'electrum', 'invar', 'lead', 'nickel', 'osmium', 'silver', 'steel', 'tin', 'zinc'
    ];

    ingots.forEach(ingot => {
        e.create(`${ingot}_ingot`).displayName(`${capitalize(ingot)} Ingot`);
    })

    const plates = [
        'brass', 'bronze', 'constantan', 'copper', 'electrum', 'gold', 'invar', 'iron', 'lead', 'nickel', 'silver', 'tin', 'zinc'
    ];

    plates.forEach(plate => {
        e.create(`${plate}_plate`).displayName(`${capitalize(plate)} Plate`);
    });

    e.create('silicon').displayName('Silicon');
    
})

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}