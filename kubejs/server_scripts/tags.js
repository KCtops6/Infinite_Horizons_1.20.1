ServerEvents.tags('item', event => {
    event.add('forge:ingots/andesite_alloy', 'create:andesite_alloy');
    event.add('forge:ingots/andesite_alloy', 'kubejs:stone_alloy');

    const plates = [
        'aluminum', 'brass', 'bronze',
        'constantan', 'copper', 'electrum',
        'enderium', 'gold', 'infinitium',
        'invar', 'iron', 'lead',
        'lumium', 'manasteel', 'netherite',
        'nickel', 'signalum', 'silver',
        'terrasteel', 'tin', 'zinc'
    ];

    plates.forEach(plate => {
        event.add(`forge:plates/${plate}`, `kubejs:${plate}_plate`);
    });

    event.add('forge:wires', 'kubejs:netherite_wire');

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
        event.add(`forge:storage_blocks/${block}`, `kubejs:${block}_block`);
    });

    const dusts = [
        'aluminum', 'apatite', 'brass',
        'bronze', 'charcoal', 'cinnabar',
        'constantan', 'coal', 'copper',
        'diamond', 'electrum', 'elementium', 'emerald',
        'enderium', 'gold', 'invar',
        'iron', 'lapis', 'lead',
        'lumium', 'manasteel', 'nickel',
        'niter', 'obsidian', 'osmium',
        'quartz', 'sapphire', 'signalum',
        'silver', 'steel', 'sulfur',
        'terrasteel', 'ruby', 'tin',
        'uranium', 'zinc'
    ];

    dusts.forEach(dust => {
        event.add(`forge:dusts/${dust}`, `kubejs:${dust}_dust`);
    });
    event.add(`forge:dusts/ender_pearl`, `kubejs:ender_pearl_dust`);
    event.add(`forge:dusts/wood`, `kubejs:sawdust`);

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
        'bronze', 'constantan', 'copper',
        'diamond', 'electrum', 'emerald',
        'enderium', 'gold', 'invar',
        'iron', 'lapis', 'lead',
        'lumium', 'manasteel', 'netherite',
        'nickel', 'quartz', 'ruby', 
        'sapphire', 'signalum', 'silver',
        'terrasteel', 'tin'
    ];

    gears.forEach(gears => {
        event.add(`forge:gears/${gears}`, `kubejs:${gears}_gear`);
    });

    const nuggets = [
        'brass', 'bronze', 'constantan',
        'copper', 'electrum', 'enderium', 
        'invar', 'lead', 'lumium', 'manasteel', 
        'netherite', 'nickel', 'osmium',
        'signalum', 'silver', 'steel', 'terrasteel',
        'tin', 'uranium', 'zinc'
    ];

    nuggets.forEach(nugget => {
        event.add(`forge:nuggets/${nugget}`, `kubejs:${nugget}_nugget`);
    });
})