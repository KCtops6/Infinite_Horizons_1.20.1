ServerEvents.recipes(event => {
    // Induction Smelter Catalysts
    const smelterCatalysts = [
      { id: 'minecraft:cake', primaryMod: 1.0, secondaryMod: 1.0, energyMod: 1.25, minChance: 0.05, useChance: 0.5}
    ];
    smelterCatalysts.forEach(catalyst => {
      event.custom({
        type: "thermal:smelter_catalyst",
        ingredient: {
          item: catalyst.id
        },
        primary_mod: catalyst.primaryMod,
        secondary_mod: catalyst.secondaryMod,
        energy_mod: catalyst.energyMod,
        min_chance: catalyst.minChance,
        use_chance: catalyst.useChance
      })
    });

    // Pulverizer Catalysts
    const pulverizerCatalysts = [
      { id: 'minecraft:cake', primaryMod: 1.0, secondaryMod: 1.0, energyMod: 1.25, minChance: 0.05, useChance: 0.5}
    ];
    pulverizerCatalysts.forEach(catalyst => {
      event.custom({
        type: "thermal:pulverizer_catalyst",
        ingredient: {
          item: catalyst.id
        },
        primary_mod: catalyst.primaryMod,
        secondary_mod: catalyst.secondaryMod,
        energy_mod: catalyst.energyMod,
        min_chance: catalyst.minChance,
        use_chance: catalyst.useChance
      })
    });

    // Insolator Catalysts
    const insolatorCatalysts = [
      { id: 'minecraft:cake', primaryMod: 1.0, secondaryMod: 1.0, energyMod: 1.25, minChance: 0.05, useChance: 0.5}
    ];
    insolatorCatalysts.forEach(catalyst => {
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
      })
    });
  
    // Copper Alloy Ingot
    event.custom({
        type: "thermal:smelter",
        ingredients: [
          {
            value: [
              {
                tag: "forge:ingots/copper"
              },
              {
                tag: "forge:dusts/copper"
              }
            ],
            count: 1
          },
          {
            tag: "forge:silicon",
            count: 1
          }
        ],
        result: [
          {
            item: "enderio:copper_alloy_ingot",
            count: 1
          }
        ],
        energy: 3200
    });
    // Energetic Alloy Ingot
    event.custom({ 
        type: "thermal:smelter",
        ingredients: [
          {
            tag: "forge:dusts/redstone",
            count: 1
          },
          {
            value: [
              {
                tag: "forge:ingots/gold"
              },
              {
                tag: "forge:dusts/gold"
              }
            ],
            count: 1
          },
          
          {
            tag: "forge:dusts/glowstone",
            count: 1
          }
        ],
        result: [
          {
            item: "enderio:energetic_alloy_ingot",
            count: 1
          }
        ],
        energy: 4800
    });
    // Vibrant Alloy Ingot
    event.custom({
        type: "thermal:smelter",
        ingredients: [
          {
            item: "enderio:energetic_alloy_ingot",
            count: 1
          },
          {
            value: [
              {
                tag: "forge:ingots/ender_pearl"
              },
              {
                tag: "forge:dusts/ender_pearl"
              }
            ],
            count: 1
          }
        ],
        result: [
          {
            item: "enderio:vibrant_alloy_ingot",
            count: 1
          }
        ],
        energy: 4800
    });
    // Redstone Alloy Ingot
    event.custom({
        type: "thermal:smelter",
        ingredients: [
          {
            tag: "forge:dusts/redstone",
            count: 1
          },
          {
            tag: "forge:silicon",
            count: 1
          }
        ],
        result: [
          {
            item: "enderio:redstone_alloy_ingot",
            count: 1
          }
        ],
        energy: 3200
    });
    // Conductive Alloy Ingot
    event.custom({
        type: "thermal:smelter",
        ingredients: [
          {
            item: "enderio:copper_alloy_ingot",
            count: 1
          },
          {
            value: [
              {
                tag: "forge:ingots/iron"
              },
              {
                tag: "forge:dusts/iron"
              }
            ],
            count: 1
          },
          {
            tag: "forge:dusts/redstone",
            count: 1
          }
        ],
        result: [
          {
            item: "enderio:conductive_alloy_ingot",
            count: 1
          }
        ],
        energy: 4800
    });
    // Pulsating Alloy Ingot
    event.custom({
        type: "thermal:smelter",
        ingredients: [
          {
            value: [
              {
                tag: "forge:ingots/iron"
              },
              {
                tag: "forge:dusts/iron"
              }
            ],
            count: 1
          },
          {
            value: [
              {
                tag: "forge:ingots/ender_pearl"
              },
              {
                tag: "forge:dusts/ender_pearl"
              }
            ],
            count: 1
          }
        ],
        result: [
          {
            item: "enderio:pulsating_alloy_ingot",
            count: 1
          }
        ],
        energy: 4800
    });
    // Dark Steel Ingot
    event.custom({
        type: "thermal:smelter",
        ingredients: [
          {
            value: [
              {
                tag: "forge:ingots/iron"
              },
              {
                tag: "forge:dusts/iron"
              }
            ],
            count: 1
          },
          {
            tag: "forge:dusts/coal",
            count: 1
          },
          {
            item: "minecraft:obsidian",
            count: 1
          }
        ],
        result: [
          {
            item: "enderio:dark_steel_ingot",
            count: 1
          }
        ],
        energy: 6400
    });
    // Soularium Ingot
    event.custom({
        type: "thermal:smelter",
        ingredients: [
          {
            item: "minecraft:soul_sand",
            count: 1
          },
          {
            value: [
              {
                tag: "forge:ingots/gold"
              },
              {
                tag: "forge:dusts/gold"
              }
            ],
            count: 1
          }
        ],
        result: [
          {
            item: "enderio:soularium_ingot",
            count: 1
          }
        ],
        energy: 5600
    });
    // End Steel Ingot
    event.custom({
        type: "thermal:smelter",
        ingredients: [
          {
            item: "minecraft:end_stone",
            count: 1
          },
          {
            item: "enderio:dark_steel_ingot",
            count: 1
          },
          {
            item: "minecraft:obsidian",
            count: 1
          }
        ],
        result: [
          {
            item: "enderio:end_steel_ingot",
            count: 1
          }
        ],
        energy: 5600
    });

    // Mystical Agriculture Ingots
    const essences = ['inferium', 'prudentium', 'tertium', 'imperium', 'supremium', 'insanium'];
    essences.forEach(essence => {
      // Ingot
      event.custom({
        type: "thermal:smelter",
        ingredients: [
          {
            item: 'mysticalagriculture:prosperity_ingot',
            count: 1
          },
          {
            item: `mysticalagriculture:${essence}_essence`,
            count: 1
          }
        ],
        result: [
          {
            item: `mysticalagriculture:${essence}_ingot`,
            count: 1
          }
        ],
        energy: 500
      });
      // Block
      event.custom({
        type: "thermal:smelter",
        ingredients: [
          {
            item: 'mysticalagriculture:prosperity_ingot_block',
            count: 1
          },
          {
            item: `mysticalagriculture:${essence}_block`,
            count: 1
          }
        ],
        result: [
          {
            item: `mysticalagriculture:${essence}_ingot_block`,
            count: 1
          }
        ],
        energy: 500 * 9
      });
    });
    // Prosperity Ingot
    event.custom({
      type: "thermal:smelter",
      ingredients: [
        {
          value: [
            {
              tag: "forge:ingots/iron"
            },
            {
              tag: "forge:dusts/iron"
            }
          ],
          count: 1
        },
        {
          item: "mysticalagriculture:prosperity_shard",
          count: 4
        }
      ],
      result: [
        {
          item: "mysticalagriculture:prosperity_ingot",
          count: 1
        }
      ],
      energy: 500
    });

    // Ingot of the Depts (Natures Aura)
    event.custom({
      type: "thermal:smelter",
      ingredients: [
        {
          item: "naturesaura:tainted_gold",
          count: 2
        },
        {
          item: "naturesaura:sky_ingot",
          count: 2
        },
        {
          item: "minecraft:netherite_scrap",
          count: 1
        }
      ],
      result: [
        {
          item: "naturesaura:depth_ingot",
          count: 1
        }
      ],
      energy: 500
    });
    // Gold Powder (Natures Aura)
    event.custom({
      type: "thermal:pulverizer",
      ingredient: {
        tag: "naturesaura:gold_leaf"
      },
      result: [
        {
          item: "naturesaura:gold_powder",
          count: 3
        }
      ]
    });

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
      });
    });

    // Pressing Ingot to Plate
    const ingotToPlate = ['brass', 'infinitium', 'manasteel', 'terrasteel', 'zinc'];
    ingotToPlate.forEach(i => {
      event.custom({
        type: "thermal:press",
        ingredient: {
          item: `kubejs:${i}_ingot`
        },
        result: [
          {
            item: `kubejs:${i}_plate`,
            count: 1
          }
        ]
      });
    })

});