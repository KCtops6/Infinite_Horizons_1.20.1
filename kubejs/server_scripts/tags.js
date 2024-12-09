ServerEvents.tags('item', event => {
    event.add('forge:ingots/andesite_alloy', 'create:andesite_alloy');
    event.add('forge:ingots/andesite_alloy', 'kubejs:stone_alloy');

    const plates = [
        'aluminum', 'brass', 'bronze', 'cobalt', 'constantan', 'copper', 'electrum', 'enderium', 'gold',
        'invar', 'iron', 'lead', 'lumium', 'netherite', 'nickel', 'osmium', 'platinum', 'signalum', 
        'silver', 'steel', 'tin', 'zinc'
    ];

    plates.forEach(plate => {
        event.add(`forge:plates/${plate}`, `kubejs:${plate}_plate`);
    });

    event.add('forge:wires', 'kubejs:netherite_wire');

    const blocks = [
        'aluminum', 'brass', 'bronze', 'cinnabar', 'cobalt', 'constantan', 
        'copper', 'electrum', 'enderium', 'gold',
        'invar', 'iron', 'lead', 'lumium', 
        'nickel', 'osmium', 'platinum', 'ruby', 'sapphire', 'signalum', 'silver', 'steel', 'tin', 'uranium', 'zinc'
    ];

    blocks.forEach(block => {
        event.add(`forge:storage_blocks/${block}`, `kubejs:${block}_block`);
    });

    const dusts = [
        'aluminum', 'brass', 'bronze', 'charcoal', 'cinnabar', 'cobalt', 'constantan', 'coal', 'copper',
        'electrum', 'enderium', 'gold', 'invar', 'iron', 'lead', 'lumium', 'nickel', 'obsidian', 'osmium', 'platinum', 'ruby', 
        'sapphire', 'signalum', 'silver', 'steel', 'sulfur', 'tin', 'uranium', 'zinc'
    ];

    dusts.forEach(dust => {
        event.add(`forge:dusts/${dust}`, `kubejs:${dust}_dust`);
    });

    const ingots = [
        'aluminum', 'brass', 'bronze', 'cobalt', 'constantan', 'copper', 'electrum', 'enderium', 
        'gold', 'invar', 'iron', 'lead', 'lumium', 'nickel', 'osmium', 'platinum', 'signalum', 'silver',
        'steel', 'tin', 'uranium', 'zinc'
    ];
    
    ingots.forEach(ingot => {
        event.add(`forge:ingots/${ingot}`, `kubejs:${ingot}_ingot`);
    });

    event.add('forge:silicon', 'kubejs:silicon');

    const gems = [
        'certus_quartz', 'cinnabar', 'ruby', 'sapphire'
    ]

    gems.forEach(gem => {
        event.add(`forge:gems/${gem}`, `kubejs:${gem}_gem`);
    })
})