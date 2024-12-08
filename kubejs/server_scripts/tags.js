ServerEvents.tags('item', event => {
    event.add('forge:ingots/andesite_alloy', 'create:andesite_alloy')
    event.add('forge:ingots/andesite_alloy', 'kubejs:stone_alloy')

    const plates = [
        'brass', 'bronze', 'constantan', 'copper', 'electrum', 'gold',
        'invar', 'iron', 'lead', 'netherite', 'nickel', 'silver', 'tin', 'zinc'
    ];

    plates.forEach(plate => {
        event.add(`forge:plates/${plate}`, `kubejs:${plate}_plate`);
    })

    event.add('forge:wires', 'kubejs:netherite_wire')

    const blocks = [
        'brass', 'bronze', 'constantan',
        'copper', 'electrum', 'gold',
        'invar', 'iron', 'lead',
        'nickel', 'osmium', 'silver', 'tin', 'zinc'
    ];

    blocks.forEach(block => {
        event.add(`forge:storage_blocks/${block}`, `kubejs:${block}_block`);
    })

    const dusts = [
        'brass', 'bronze', 'charcoal', 'constantan', 'coal', 'copper',
        'electrum', 'gold', 'invar', 'iron', 'lead', 'nickel', 'obsidian', 'osmium',
        'sapphire', 'silver', 'steel', 'sulfur', 'tin', 'zinc'
    ];

    dusts.forEach(dust => {
        event.add(`forge:dusts/${dust}`, `kubejs:${dust}_dust`);
    })

    const ingots = [
        'brass', 'bronze', 'constantan', 'copper', 'electrum',
        'gold', 'invar', 'iron', 'lead', 'nickel', 'silver', 'tin', 'zinc'
    ];
    
    ingots.forEach(ingot => {
        event.add(`forge:ingots/${ingot}`, `kubejs:${ingot}_ingot`);
    })

    event.add('forge:silicon', 'kubejs:silicon');
})