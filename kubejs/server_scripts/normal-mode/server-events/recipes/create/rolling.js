ServerEvents.recipes(event => {
    var metals = [
        'tin', 'silver', 'nickel',
        'zinc', 'osmium', 'uranium',
        'brass', 'bronze', 'invar',
        'constantan', 'lumium', 'enderium',
        'signalum'
    ];
    metals.forEach(metal => {
        event.custom({
            type: "createaddition:rolling",
            input: {
                tag: `forge:plates/${metal}`
            },
            result: {
                item: `infinite_resources:${metal}_wire`,
                count: 2
            }
        });
    });
    event.custom({
        type: "createaddition:rolling",
        input: {
            item: 'kubejs:netherite_plate'
        },
        result: {
            item: 'kubejs:netherite_wire',
            count: 2
        }
    });
});