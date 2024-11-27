ServerEvents.recipes(event => {
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
});
