ServerEvents.recipes(event => {
    const blocks = [
        'minecraft:andesite',
        'minecraft:deepslate',
        'minecraft:diorite',
        'minecraft:granite',
        'minecraft:netherrack',
        'minecraft:tuff',
        'forbidden_arcanus:darkstone'
    ];
    blocks.forEach(block => {
        event.custom({
            type: "create_mechanical_extruder:extruding",
            catalyst: {
                item: block
            },
            ingredients: [
                {
                    amount: 1000,
                    fluid: "minecraft:water",
                    nbt: {}
                },
                {
                    amount: 1000,
                    fluid: "minecraft:lava",
                    nbt: {}
                }
            ],
            result: {
                item: block
            }
        });
    });
});