let capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
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
StartupEvents.registry("block", (event) => {
    event.create("andesite_gravel")
        .displayName("Andesite Gravel")
        .hardness(0.6)
        .resistance(0.6)
        .gravelSoundType()
        .requiresTool(false)
        .tagBlock("mineable/shovel")
        .textureAll('kubejs:block/andesite_gravel');
    event.create("basalt_gravel")
        .displayName("Basalt Gravel")
        .hardness(0.6)
        .resistance(0.6)
        .gravelSoundType()
        .requiresTool(false)
        .tagBlock("mineable/shovel")
        .textureAll('kubejs:block/basalt_gravel');
    event.create("deepslate_gravel")
        .displayName("Deepslate Gravel")
        .hardness(0.6)
        .resistance(0.6)
        .gravelSoundType()
        .requiresTool(false)
        .tagBlock("mineable/shovel")
        .textureAll('kubejs:block/deepslate_gravel');
    event.create("diorite_gravel")
        .displayName("Diorite Gravel")
        .hardness(0.6)
        .resistance(0.6)
        .gravelSoundType()
        .requiresTool(false)
        .tagBlock("mineable/shovel")
        .textureAll('kubejs:block/diorite_gravel');
    event.create("end_stone_gravel")
        .displayName("End Stone Gravel")
        .hardness(0.6)
        .resistance(0.6)
        .mapColor(2)
        .gravelSoundType()
        .requiresTool(false)
        .tagBlock("mineable/shovel")
        .textureAll('kubejs:block/end_stone_gravel');
    event.create("granite_gravel")
        .displayName("Granite Gravel")
        .hardness(0.6)
        .resistance(0.6)
        .gravelSoundType()
        .requiresTool(false)
        .tagBlock("mineable/shovel")
        .textureAll('kubejs:block/granite_gravel');
    event.create("limestone_gravel")
        .displayName("Limestone Gravel")
        .hardness(0.6)
        .resistance(0.6)
        .gravelSoundType()
        .requiresTool(false)
        .tagBlock("mineable/shovel")
        .textureAll('kubejs:block/limestone_gravel');
    event.create("netherrack_gravel")
        .displayName("Netherrack Gravel")
        .hardness(0.6)
        .resistance(0.6)
        .gravelSoundType()
        .requiresTool(false)
        .tagBlock("mineable/shovel")
        .textureAll('kubejs:block/netherrack_gravel');
    event.create("tuff_gravel")
        .displayName("Tuff Gravel")
        .hardness(0.6)
        .resistance(0.6)
        .gravelSoundType()
        .requiresTool(false)
        .tagBlock("mineable/shovel")
        .textureAll('kubejs:block/tuff_gravel');
    event.create("darkstone_gravel")
        .displayName("Darkstone Gravel")
        .hardness(0.6)
        .resistance(0.6)
        .gravelSoundType()
        .requiresTool(false)
        .tagBlock("mineable/shovel")
        .textureAll('kubejs:block/darkstone_gravel');
    event.create("calcite_gravel")
        .displayName("Calcite Gravel")
        .hardness(0.6)
        .resistance(0.6)
        .gravelSoundType()
        .requiresTool(false)
        .tagBlock("mineable/shovel")
        .textureAll('kubejs:block/calcite_gravel');
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

    event.create('coal_coke_block')
        .displayName('Block of Coal Coke')
        .hardness(5.0)
        .resistance(6.0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe');

    event.create('dormant_trial_spawner')
        .displayName('Dormant Trial Spawner')
        .mapColor('stone')
        .soundType('metal')
        .hardness(5.0)
        .resistance(10.0)
        .opaque(true)
        .fullBlock(true)
        .texture('up', 'kubejs:block/dormant_trial_spawner_top')
        .texture('down', 'kubejs:block/dormant_trial_spawner_botton')
        .texture('north', 'kubejs:block/dormant_trial_spawner_side')
        .texture('south', 'kubejs:block/dormant_trial_spawner_side')
        .texture('east', 'kubejs:block/dormant_trial_spawner_side')
        .texture('west', 'kubejs:block/dormant_trial_spawner_side');
});