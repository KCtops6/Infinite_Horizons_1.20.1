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
    let forbidden_arcanus_scales = [
        'forbidden_arcanus:aquatic_dragon_scale', 'forbidden_arcanus:golden_dragon_scale', 
        'forbidden_arcanus:silver_dragon_scale'
    ];
    forbidden_arcanus_scales.forEach(scale => {
        event.remove('forge:dragon_scales', scale);
    });
    let stone_pebbles = ['twigs:pebble', 'botania:pebble', 'kubejs:stone_pebble'];
    stone_pebbles.forEach(s => {
        event.add('kubejs:pebbles', s);
    });
    let gearboxes = ['create:gearbox', 'create:vertical_gearbox']
    gearboxes.forEach(g => {
        event.add('create:gearboxes', g)
    });
    let copper_tools = [
        'create_sa:copper_pickaxe', 'create_sa:copper_axe', 'create_sa:copper_sword',
        'create_sa:copper_shovel', 'create_sa:copper_hoe'
    ];
    copper_tools.forEach(t => {
        event.add('create:copper_tools', t);
    });
    let copper_armor = [
        'create_sa:copper_helmet', 'create_sa:copper_chestplate',
        'create_sa:copper_leggings', 'create_sa:copper_boots'
    ];
    copper_armor.forEach(a => {
        event.add('create:copper_armor', a);
    });
    let lapis_armor = [
        'mekanismtools:lapis_lazuli_helmet', 'mekanismtools:lapis_lazuli_chestplate',
        'mekanismtools:lapis_lazuli_leggings', 'mekanismtools:lapis_lazuli_boots'
    ];
    lapis_armor.forEach(a => {
        event.add('create:lapis_armor', a);
    });
    let lapis_tools = [
        'mekanismtools:lapis_lazuli_pickaxe', 'mekanismtools:lapis_lazuli_axe', 'mekanismtools:lapis_lazuli_shovel',
        'mekanismtools:lapis_lazuli_hoe', 'mekanismtools:lapis_lazuli_sword'
    ];
    lapis_tools.forEach(t => {
        event.add('create:lapis_tools', t);
    });

    event.add('forge:coal_coke', 'kubejs:coal_coke');
    event.add('forge:storage_blocks/coal_coke', 'kubejs:coal_coke_block');
    event.remove('forge:coal_coke', [
        'immersiveengineering:coal_coke',
        'thermal:coal_coke'
    ]);
    event.remove('forge:storage_blocks/coal_coke', [
        'immersiveengineering:coke',
        'thermal:coal_coke_block'
    ]);

    global.raw_ore_blocks.forEach(b => {
        event.add(`forge:storage_blocks/raw_${b}`, `kubejs:block_of_raw_${b}`);
    });
    global.raw_ores.forEach(r => {
        event.add(`forge:raw_materials/${r}`, `kubejs:raw_${r}`);
    });
    event.add('kubejs:raw_rubber', ['thermal:cured_rubber', 'kubejs:raw_rubber']);
});