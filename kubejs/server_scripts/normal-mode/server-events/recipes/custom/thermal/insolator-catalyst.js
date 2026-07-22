ServerEvents.recipes(event => {
    const insolatorCatalysts = [
      { id: 'minecraft:cake', primaryMod: 1.0, secondaryMod: 1.0, energyMod: 1.25, minChance: 0.05, useChance: 0.5 }
    ];
    insolatorCatalysts.forEach(catalyst => {
        let itemName = catalyst.id.split(':')[1];
        event.custom({
            type: "thermal:insolator_catalyst",
            ingredient: {
                item: catalyst.id
            },
            primary_mod: catalyst.primaryMod,
            secondary_mod: catalyst.secondaryMod,
            energy_mod: catalyst.energyMod,
            min_chance: catalyst.minChance,
            use_chance: catalyst.useChance
        }).id(`kubejs:thermal/insolator_catalyst/${itemName}`);
    });
});