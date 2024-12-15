ServerEvents.recipes(event => {
    event.recipes.extendedcrafting.combination(
        'kubejs:lava_infuser',
        'mekanism:metallurgic_infuser',
        [
            'thermal:charge_bench'
        ]
    ).powerRate(1000);
});