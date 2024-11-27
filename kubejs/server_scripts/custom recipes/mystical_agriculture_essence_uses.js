ServerEvents.recipes(event => {
    const essenceIngotMappings = [
        { output: 'gtceu:red_alloy_ingot', essence: 'mysticalagriculture:red_alloy_essence' },
        { output: 'gtceu:wrought_iron_ingot', essence: 'mysticalagriculture:wrought_iron_essence'}
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
