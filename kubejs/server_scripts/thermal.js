ServerEvents.recipes(event => {
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

})