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
        'aluminum', 'apatite', 'brass', 'bronze', 'cinnabar', 'cobalt', 'constantan', 
        'copper', 'electrum', 'enderium', 'gold',
        'invar', 'iron', 'lead', 'lumium', 
        'nickel', 'osmium', 'platinum', 'ruby', 'sapphire', 'signalum', 'silver', 'steel', 'tin', 'uranium', 'zinc'
    ];

    blocks.forEach(block => {
        event.add(`forge:storage_blocks/${block}`, `kubejs:${block}_block`);
    });

    const dusts = [
        'aluminum', 'apatite', 'brass', 'bronze', 'charcoal', 'cinnabar', 'constantan', 'coal', 'copper', 'diamond',
        'electrum', 'emerald', 'enderium', 'gold', 'invar', 'iron', 'lapis', 'lead', 'nickel', 'niter', 'obsidian',
        'osmium', 'quartz', 'sapphire', 'signalum', 'silver', 'steel', 'sulfur', 'ruby', 'tin', 'uranium', 'zinc'
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
        'apatite', 'certus_quartz', 'cinnabar', 'niter', 'ruby', 'sapphire', 'sulfur'
    ];

    gems.forEach(gem => {
        event.add(`forge:gems/${gem}`, `kubejs:${gem}_gem`);
    });

    const gears = [
        'bronze', 'constantan', 'copper', 'diamond', 'electrum', 'emerald', 'enderium', 'gold',
        'invar', 'iron', 'lapis', 'lead', 'lumium', 'netherite', 'nickel', 'quartz', 'ruby', 'sapphire', 'signalum', 'silver', 'tin'
    ];

    gears.forEach(gears => {
        event.add(`forge:gears/${gears}`, `kubejs:${gears}_gear`);
    });

    const nuggets = [
        'netherite', 'tin', 'lead', 'silver', 'nickel',
        'bronze', 'electrum', 'invar', 'constantan',
        'signalum', 'lumium', 'enderium', 'osmium', 'uranium',
        'steel', 'copper', 'zinc', 'brass', 'netherite',
        'tin', 'lead', 'silver', 'nickel', 'bronze',
        'electrum', 'invar', 'constantan', 'signalum', 'enderium', 'lumium'
    ];

    nuggets.forEach(nugget => {
        event.add(`forge:nuggets/${nugget}`, `kubejs:${nugget}_nugget`);
    });
})