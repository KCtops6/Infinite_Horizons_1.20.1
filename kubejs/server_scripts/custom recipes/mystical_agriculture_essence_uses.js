ServerEvents.recipes(event => {
    const mappings = [
        { output: 'gtceu:red_alloy_ingot', essence: 'mysticalagriculture:red-alloy-seeds_essence' },
        { output: 'gtceu:wrought_iron_ingot', essence: 'mysticalagriculture:wrought-iron-seeds-essence'}
    ];

    mappings.forEach(m => {
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
