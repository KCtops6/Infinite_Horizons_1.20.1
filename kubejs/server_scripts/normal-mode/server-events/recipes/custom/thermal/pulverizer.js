ServerEvents.recipes(event => {
  // Gold Powder (Natures Aura)
  event.custom({
    type: "thermal:pulverizer",
    ingredient: {
      item: "naturesaura:gold_leaf"
    },
    result: [
      {
        item: "naturesaura:gold_powder",
        count: 3
      }
    ]
  }).id('kubejs:thermal/pulverizer/natures_aura/gold_powder');

  // Pulverizing Ingot to Dust
  const ingotToDust = ['osmium', 'uranium'];
  ingotToDust.forEach(i => {
    event.custom({
      type: "thermal:pulverizer",
      ingredient: {
        item: `kubejs:${i}_ingot`
      },
      result: [
        {
          item: `kubejs:${i}_dust`,
          count: 1
        }
      ],
      energy_mod: 0.5
    }).id(`kubejs:thermal/pulverizer/kubejs/${i}_dust`);
  });

  event.custom({
    type: "thermal:pulverizer",
    ingredient: {
      item: 'minecraft:end_stone'
    },
    result: [
      {
        item: 'infinite_horizons_tweaks:end_stone_gravel',
        count: 1
      }
    ],
    energy_mod: 0.5
  }).id(`kubejs:thermal/pulverizer/infinite_horizons_tweaks/end_stone_gravel`);

  event.custom({
    type: "thermal:pulverizer",
    ingredient: {
      item: 'minecraft:netherrack'
    },
    result: [
      {
        item: 'infinite_horizons_tweaks:netherrack_gravel',
        count: 1
      }
    ],
    energy_mod: 0.5
  }).id(`kubejs:thermal/pulverizer/infinite_horizons_tweaks/netherrack_gravel`);

  event.custom({
    type: "thermal:pulverizer",
    ingredient: {
      item: 'minecraft:sand'
    },
    result: [
      {
        item: 'createsifter:dust',
        count: 1
      }
    ],
    energy_mod: 0.5
  }).id(`kubejs:thermal/pulverizer/createsifter/dust`);
});