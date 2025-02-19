ServerEvents.recipes(event => {
    const recipes = [
        {
            pattern: [
                'AAA',
                'ABA',
                'AAA'
            ],
            keys: {
                A: 'minecraft:stone',
                B: 'kubejs:forbidden_transmutation_matter',
            },
            output: 'forbidden_arcanus:darkstone',
            count: 8
        },
        {
            pattern: [
                ' A ',
                'BCB',
                ' A '
            ],
            keys: {
                A: 'minecraft:emerald',
                B: 'minecraft:crafting_table',
                C: 'cookingforblockheads:recipe_book'
            },
            output: 'cookingforblockheads:crafting_book',
            count: 1
        },
        {
            pattern: [
                'ABA',
                'C C',
                'ABA'
            ],
            keys: {
                A: '#minecraft:planks',
                B: '#minecraft:logs',
                C: 'minecraft:paper'
            },
            output: 'bountiful:bountyboard',
            count: 1
        },
        {
            pattern: [
                'LLL',
                'SMS',
                'CPC'
            ],
            keys: {
                L: '#minecraft:logs',
                M: 'create_mechanical_extruder:mechanical_extruder',
                S: 'mekanism:structural_glass',
                C: 'create:cogwheel',
                P: 'create:precision_mechanism'
            },
            output: 'cobblefordays:tier_1',
            count: 1
        },
        {
            pattern: [
                'LLL',
                'SMS',
                'CPC'
            ],
            keys: {
                L: '#forge:cobblestone',
                M: 'cobblefordays:tier_1',
                S: 'mekanism:structural_glass',
                C: 'create:cogwheel',
                P: 'create:precision_mechanism'
            },
            output: 'cobblefordays:tier_2',
            count: 1
        },
        {
            pattern: [
                'LLL',
                'SMS',
                'CPC'
            ],
            keys: {
                L: 'minecraft:iron_block',
                M: 'cobblefordays:tier_2',
                S: 'mekanism:structural_glass',
                C: 'create:cogwheel',
                P: 'create:precision_mechanism'
            },
            output: 'cobblefordays:tier_3',
            count: 1
        },
        {
            pattern: [
                'LLL',
                'SMS',
                'CPC'
            ],
            keys: {
                L: 'minecraft:gold_block',
                M: 'cobblefordays:tier_3',
                S: 'mekanism:structural_glass',
                C: 'create:cogwheel',
                P: 'create:precision_mechanism'
            },
            output: 'cobblefordays:tier_4',
            count: 1
        },
        {
            pattern: [
                'LLL',
                'SMS',
                'CPC'
            ],
            keys: {
                L: 'minecraft:diamond_block',
                M: 'cobblefordays:tier_4',
                S: 'mekanism:structural_glass',
                C: 'create:cogwheel',
                P: 'create:precision_mechanism'
            },
            output: 'cobblefordays:tier_5',
            count: 1
        },
        {
            pattern: [
                'DEF',
                'CAC',
                'BAB'
            ],
            keys: {
                A:    'minecraft:dark_oak_log',
                B:    'kubejs:brass_plate',
                C:    'kubejs:gold_plate',
                D:    'minecraft:candle',
                E:    'minecraft:red_carpet',
                F:    'minecraft:wither_skeleton_skull'
            },
            output: 'summoningrituals:altar',
            count: 1
        },
        {
            pattern: [
                'DDD',
                'BCB',
                'ACA'
            ],
            keys: {
                A: 'minecraft:emerald_block',
                B: 'minecraft:emerald',
                C: '#minecraft:logs',
                D: 'minecraft:torch'
            },
            output: 'torchmaster:megatorch',
            count: 1
        },
        {
            pattern: [
                'AAA',
                'AIA',
                'AAA'
            ],
            keys: {
                A: 'projecte:aeternalis_fuel',
                I: 'mysticalagradditions:insanium_gemstone'
            },
            output: 'projecte:dark_matter',
            count: 1
        },
        {
            pattern: [
                'N N', 
                ' N ',
                'N  '  
            ],
            keys: {
                N:  'mysticalagriculture:nature_essence'
            },
            output: 'pamhc2crops:aridgarden',
            count: 1
        },
        {
            pattern: [
                'NNN', 
                'N  ',
                '   '  
            ],
            keys: {
                N:  'mysticalagriculture:nature_essence'
            },
            output: 'pamhc2crops:frostgarden',
            count: 1
        },
        {
            pattern: [
                '  N', 
                'N  ',
                'N N'  
            ],
            keys: {
                N:  'mysticalagriculture:nature_essence'
            },
            output: 'pamhc2crops:shadedgarden',
            count: 1
        },
        {
            pattern: [
                'NN ', 
                '  N',
                '  N'  
            ],
            keys: {
                N:  'mysticalagriculture:nature_essence'
            },
            output: 'pamhc2crops:soggygarden',
            count: 1
        },
        {
            pattern: [
                ' NN', 
                'N  ',
                '  N'  
            ],
            keys: {
                N:  'mysticalagriculture:nature_essence'
            },
            output: 'pamhc2crops:tropicalgarden',
            count: 1
        },
        {
            pattern: [
                'N N', 
                ' N ',
                'N  '  
            ],
            keys: {
                N:  'mysticalagriculture:nature_essence'
            },
            output: 'pamhc2crops:windygarden',
            count: 1
        },
        {
            pattern: [
                'AAA',
                '  A',
                '  A'
            ],
            keys: {
                A: 'mysticalagriculture:nature_essence',
            },
            output: 'minecraft:big_dripleaf',
            count: 1
        },
        {
            pattern: [
                'AAA',
                'A A',
                'AAA'
            ],
            keys: {
                A: '#minecraft:logs',
            },
            output: 'minecraft:chest',
            count: 4
        },
        {
            pattern: [
                'AAA',
                'ABA',
                'AAA'
            ],
            keys: {
                A: 'minecraft:gold_block',
                B: 'minecraft:golden_apple'
            },
            output: 'minecraft:enchanted_golden_apple',
            count: 1
        },
        {
            pattern: [
                ' A ',
                'ABA',
                'BBB'
            ],
            keys: {
                A: 'mysticalagriculture:water_essence',
                B: 'mysticalagriculture:nature_essence'
            },
            output: 'minecraft:seagrass',
            count: 8
        },
        {
            pattern: [
                '   ',
                'AAA',
                '  A'
            ],
            keys: {
                A: 'mysticalagriculture:nature_essence',
            },
            output: 'minecraft:small_dripleaf',
            count: 1
        },
        {
            pattern: [
                'AAA',
                'AAA',
                'AAA'
            ],
            keys: {
                A: 'kubejs:dark_matter'
            },
            output: 'kubejs:weak_echo_shard',
            count: 1
        },
        {
            pattern: [
                'AB ', 
                'BA ',
                '   '  
            ],
            keys: {
                A: 'minecraft:iron_nugget', 
                B: 'twigs:pebble'
            },
            output: 'kubejs:stone_alloy',
            count: 1
        },
        {
            pattern: [
                'ABA', 
                'BBB',
                'ABA'  
            ],
            keys: {
                A: 'minecraft:stick', 
                B: 'kubejs:netherite_wire'
            },
            output: 'kubejs:netherite_mesh',
            count: 1
        },
        {
            pattern: [
                'ABA', 
                'BBB',
                'ABA'  
            ],
            keys: {
                A: 'minecraft:stick', 
                B: 'createaddition:iron_wire'
            },
            output: 'kubejs:iron_mesh',
            count: 1
        },
        {
            pattern: [
                'ABA', 
                'BBB',
                'ABA'  
            ],
            keys: {
                A: 'minecraft:stick', 
                B: 'createaddition:copper_wire'
            },
            output: 'kubejs:copper_mesh',
            count: 1
        },
        {
            pattern: [
                'YYY', 
                'GCS',
                'OOO'  
            ],
            keys: {
                C:  'minecraft:crafting_table',
                G:  'minecraft:glass_bottle',
                O:  'minecraft:oak_planks',
                S:  Item.of('minecraft:shears', '{Damage:0}'),
                Y:  'minecraft:yellow_wool'
            },
            output: 'kubejs:apiarist_workbench',
            count: 1
        },
        {
            pattern: [
                'RRR', 
                'GCG',
                'SSS'  
            ],
            keys: {
                C:  'minecraft:crafting_table',
                G:  'minecraft:gold_ingot',
                R:  'minecraft:red_wool',
                S:  'minecraft:stone'
            },
            output: 'kubejs:agronomancer_workbench',
            count: 1
        },
        {
            pattern: [
                'ABA',
                'BCB',
                'ABA'
            ],
            keys: {
                A: 'mysticalagriculture:end_essence',
                B: 'mysticalagriculture:dragon_egg_essence',
                C: 'mysticalagriculture:dye_essence'
            },
            output: 'naturesaura:end_flower',
            count: 1
        },
        {
            pattern: [
                'SSS',
                'SNS',
                'SSS'
            ],
            keys: {
                S: 'mysticalagriculture:blaze_essence',
                N: 'create:empty_blaze_burner'
            },
            output: 'create:blaze_burner',
            count: 1
        },
        {
            pattern: [
                'SSS',
                'SNS',
                'SSS'
            ],
            keys: {
                S: 'mysticalagriculture:stone_essence',
                N: 'mysticalagriculture:nether_essence'
            },
            output: 'mysticalagriculture:soulstone_cobble',
            count: 24
        },
        {
            pattern: [
                'AFA',
                'FBF',
                'AFA'
            ],
            keys: {
                A: 'minecraft:air',
                F: 'mysticalagriculture:fire_essence',
                B: Item.of('woodenbucket:wooden_bucket', '{Damage:0}')
            },
            output: Item.of('woodenbucket:wooden_bucket', '{Damage:0,Fluid:{Amount:1000,FluidName:"minecraft:lava"}}'),
            count: 1
        },
        {
            pattern: [
                'AAA',
                'AAA',
                'AAA'
            ],
            keys: {
                A: 'kubejs:infinitium_ingot'
            },
            output: 'kubejs:infinitium_block',
            count: 1
        }
    ];

    recipes.forEach(recipe => {
        event.shaped(
            Item.of(recipe.output, recipe.count),
            recipe.pattern,
            recipe.keys
        );
    });

    const essenceIngotMappings = [
        { output: 'gtceu:antimony_ingot', essence: 'mysticalagriculture:antimony_essence'},
        { output: 'gtceu:battery_alloy_ingot', essence: 'mysticalagriculture:battery_alloy_essence'},
        { output: 'gtceu:potin_ingot', essence: 'mysticalagriculture:potin_essence'},
        { output: 'gtceu:red_alloy_ingot', essence: 'mysticalagriculture:red_alloy_essence' },
        { output: 'gtceu:tin_alloy_ingot', essence: 'mysticalagriculture:tin_alloy_essence' },
        { output: 'gtceu:wrought_iron_ingot', essence: 'mysticalagriculture:wrought_iron_essence'},
    ];

    essenceIngotMappings.forEach(m => {
        event.shaped(
            Item.of(m.output, 6),
            [
                'AAA',
                'A A',
                'AAA'
            ],
            {
                A: m.essence
            }
        );
    });

    const saplings = [
        { sapling: 'ore_tree:coal_tree_sapling', essence: 'mysticalagriculture:coal_essence' },
        { sapling: 'ore_tree:copper_tree_sapling', essence: 'mysticalagriculture:copper_essence' },
        { sapling: 'ore_tree:diamond_tree_sapling', essence: 'mysticalagriculture:diamond_essence' },
        { sapling: 'ore_tree:emerald_tree_sapling', essence: 'mysticalagriculture:emerald_essence' },
        { sapling: 'ore_tree:gold_tree_sapling', essence: 'mysticalagriculture:gold_essence' },
        { sapling: 'ore_tree:iron_tree_sapling', essence: 'mysticalagriculture:iron_essence' },
        { sapling: 'ore_tree:lapis_tree_sapling', essence: 'mysticalagriculture:lapis_essence' },
        { sapling: 'ore_tree:quartz_tree_sapling', essence: 'mysticalagriculture:nether_quartz_essence' },
        { sapling: 'ore_tree:redstone_tree_sapling', essence: 'mysticalagriculture:redstone_essence' }
    ];

    saplings.forEach(m => {
        event.remove({ output: m.sapling });
        event.shaped(
            Item.of(m.sapling, 1),
            [
                'SSS',
                'SNS',
                'SSS'
            ],
            {
                S: m.essence,
                N: 'mysticalagriculture:wood_essence'
            }
        );
    });
});