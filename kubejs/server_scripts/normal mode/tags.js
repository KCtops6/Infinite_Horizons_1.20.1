ServerEvents.tags('item', event => {
    // merging the 'forge:dusts/endstone' and 'forge:dusts/end_stone' tags into the latter.
    event.removeAll('forge:dusts/endstone');    // Removing the endstone tag.
    event.add('forge:dusts/end_stone', [    // to the 'forge:dusts/end_stone' tag we add...
        'gtceu:endstone_dust',  // ...gregtech endstone dust (formerly from 'forge:dusts/endstone')...
        'kubejs:end_stone_dust' // ...and the custom end stone dust.
    ]);   
    global.plate_materials.forEach(plate => {   // for each material...
        event.add(`forge:plates/${plate}`, `kubejs:${plate}_plate`);    // ...we add the custom plate for that material into that 'forge:plates/' tag.
    });
    event.add('forge:wires', 'kubejs:netherite_wire');  // add the custom netherite wire to the 'forge:wires' tag.
    global.block_materials.forEach(block => {   // for each material...
        event.add(`forge:storage_blocks/${block}`, `kubejs:${block}_block`);    // ...we add the custom block for that material into that 'forge:storage_blocks/' tag.
    });
    global.dust_materials.forEach(dust => { // for each material...
        event.add(`forge:dusts/${dust}`, `kubejs:${dust}_dust`);    // ...we add the custom dust for that material into that 'forge:dusts/' tag.
    });
    // seperate events here because they are unique compared to other item ids/tags.
    event.add(`forge:dusts/ender_pearl`, `kubejs:ender_pearl_dust`);    // adding custom ender pearl dust to 'forge:dusts/ender_pearl' tag.
    event.add(`forge:dusts/wood`, `kubejs:sawdust`);    // adding custom sawdust to 'forge:dusts/wood' tag.
    global.ingot_materials.forEach(ingot => {   // for each material...
        event.add(`forge:ingots/${ingot}`, `kubejs:${ingot}_ingot`);    // ...we add the custom ingot for that material into that 'forge:ingots/' tag.
    });
    event.add('forge:silicon', 'kubejs:silicon');   // adding custom silicon to 'forge:silicon' tag.
    global.gems_materials.forEach(gem => {   // for each material...
        event.add(`forge:gems/${gem}`, `kubejs:${gem}_gem`);    // ...we add the custom ingot for that material into that 'forge:gems/' tag.
    });
    global.gear_materials.forEach(gears => {    // for each material...
        event.add(`forge:gears/${gears}`, `kubejs:${gears}_gear`);  // ...we add the custom gear for that material into that 'forge:gears/' tag.
    });
    global.nugget_materials.forEach(nugget => { // for each material...
        event.add(`forge:nuggets/${nugget}`, `kubejs:${nugget}_nugget`);    // ...we add the custom nugget for that material into that 'forge:nuggets/' tag.
    });
    let scales = [
        'mysticalagradditions:dragon_scale', 'forbidden_arcanus:dragon_scale', 'quark:dragon_scale'
    ];
    scales.forEach(scale => {
        event.add('forge:dragon_scales', scale);
    });
    let forbiddenArcanusScales = [
        'forbidden_arcanus:aquatic_dragon_scale', 'forbidden_arcanus:golden_dragon_scale', 
        'forbidden_arcanus:silver_dragon_scale'
    ];
    forbiddenArcanusScales.forEach(scale => {
        event.remove('forge:dragon_scales', scale);
    });
    let stonePebbles = ['twigs:pebble', 'botania:pebble', 'kubejs:stone_pebble'];
    stonePebbles.forEach(s => {
        event.add('kubejs:pebbles', s);
    })
});