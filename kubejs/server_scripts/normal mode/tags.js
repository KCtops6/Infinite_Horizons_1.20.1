ServerEvents.tags('item', event => {
    // adding andesite alloy and new 'stone alloy' into custom tag.
    event.add('forge:ingots/andesite_alloy', 'create:andesite_alloy');
    event.add('forge:ingots/andesite_alloy', 'kubejs:stone_alloy');

    // merging the 'forge:dusts/endstone' and 'forge:dusts/end_stone' tags into the latter.
    event.removeAll('forge:dusts/endstone');    // Removing the endstone tag.
    event.add('forge:dusts/end_stone', [    // to the 'forge:dusts/end_stone' tag we add...
        'gtceu:endstone_dust',  // ...gregtech endstone dust (formerly from 'forge:dusts/endstone')...
        'kubejs:end_stone_dust' // ...and the custom end stone dust.
    ]);   

    const plates = [    // materials that have plates.
        'aluminum', 'brass', 'bronze',
        'constantan', 'copper', 'electrum',
        'enderium', 'gold', 'infinitium',
        'invar', 'iron', 'lead',
        'lumium', 'manasteel', 'netherite',
        'nickel', 'signalum', 'silver', 'steel',
        'terrasteel', 'tin', 'zinc'
    ];

    plates.forEach(plate => {   // for each material...
        event.add(`forge:plates/${plate}`, `kubejs:${plate}_plate`);    // ...we add the custom plate for that material into that 'forge:plates/' tag.
    });

    event.add('forge:wires', 'kubejs:netherite_wire');  // add the custom netherite wire to the 'forge:wires' tag.

    const blocks = [    // materials that have blocks.
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

    blocks.forEach(block => {   // for each material...
        event.add(`forge:storage_blocks/${block}`, `kubejs:${block}_block`);    // ...we add the custom block for that material into that 'forge:storage_blocks/' tag.
    });

    const dusts = [ // materials that have dusts.
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

    dusts.forEach(dust => { // for each material...
        event.add(`forge:dusts/${dust}`, `kubejs:${dust}_dust`);    // ...we add the custom dust for that material into that 'forge:dusts/' tag.
    });

    // seperate events here because they are unique compared to other item ids/tags.
    event.add(`forge:dusts/ender_pearl`, `kubejs:ender_pearl_dust`);    // adding custom ender pearl dust to 'forge:dusts/ender_pearl' tag.
    event.add(`forge:dusts/wood`, `kubejs:sawdust`);    // adding custom sawdust to 'forge:dusts/wood' tag.

    const ingots = [    // materials that have ingots.
        'aluminum', 'brass', 'bronze',
        'constantan', 'electrum', 'elementium', 'enderium',
        'infinitium', 'invar', 'lead',
        'lumium', 'manasteel', 'nickel',
        'osmium', 'signalum', 'silver',
        'steel', 'terrasteel',
        'tin', 'uranium', 'zinc'
    ];
    
    ingots.forEach(ingot => {   // for each material...
        event.add(`forge:ingots/${ingot}`, `kubejs:${ingot}_ingot`);    // ...we add the custom ingot for that material into that 'forge:ingots/' tag.
    });

    event.add('forge:silicon', 'kubejs:silicon');   // adding custom silicon to 'forge:silicon' tag.

    const gems = [  // materials that have gems.
        'apatite', 'certus_quartz', 'cinnabar', 'niter', 'ruby', 'sapphire', 'sulfur'
    ];

    gems.forEach(gem => {   // for each material...
        event.add(`forge:gems/${gem}`, `kubejs:${gem}_gem`);    // ...we add the custom ingot for that material into that 'forge:gems/' tag.
    });

    const gears = [ // materials that have gears.
        'bronze', 'constantan', 'copper',
        'diamond', 'electrum', 'emerald',
        'enderium', 'gold', 'invar',
        'iron', 'lapis', 'lead',
        'lumium', 'manasteel', 'netherite',
        'nickel', 'quartz', 'ruby', 
        'sapphire', 'signalum', 'silver',
        'terrasteel', 'tin'
    ];

    gears.forEach(gears => {    // for each material...
        event.add(`forge:gears/${gears}`, `kubejs:${gears}_gear`);  // ...we add the custom gear for that material into that 'forge:gears/' tag.
    });

    const nuggets = [   // materials that have nuggets.
        'brass', 'bronze', 'constantan',
        'copper', 'electrum', 'enderium', 
        'invar', 'lead', 'lumium', 'manasteel', 
        'netherite', 'nickel', 'osmium',
        'signalum', 'silver', 'steel', 'terrasteel',
        'tin', 'uranium', 'zinc'
    ];

    nuggets.forEach(nugget => { // for each material...
        event.add(`forge:nuggets/${nugget}`, `kubejs:${nugget}_nugget`);    // ...we add the custom nugget for that material into that 'forge:nuggets/' tag.
    });
})