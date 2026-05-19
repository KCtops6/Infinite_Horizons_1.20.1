ServerEvents.recipes(event => {
    event.custom({
        type: "industrialforegoing:laser_drill_ore",
        catalyst: {
            item: "industrialforegoing:laser_lens4"
        },
        output: {
            item: "kubejs:sulfur_gem"
        },
        pointer: 0,
        rarity: [
            {
                blacklist: {},
                depth_max: 256,
                depth_min: -64,
                weight: 8,
                whitelist: {}
            }
        ]
    }).id('kubejs:industrialforegoing/laser_drill_ore/kubejs/sulfur_gem');
    function gtceuLaserOre(color, material, minDepth, maxDepth, weight) {
        let lensItem = (color === "white") ? "gtceu:glass_lens" : `gtceu:${color}_glass_lens`;
        event.custom({
            type: "industrialforegoing:laser_drill_ore",
            catalyst: {
                item: lensItem
            },
            output: {
                item: `gtceu:raw_${material}`
            },
            pointer: 0,
            rarity: [
                {
                    blacklist: {},
                    depth_max: maxDepth,
                    depth_min: minDepth,
                    weight: weight,
                    whitelist: {}
                }
            ]
        }).id(`kubejs:industrialforegoing/laser_drill_ore/gtceu/raw_${material}`);
    }
    gtceuLaserOre("light_blue", "kyanite", -40, -10, (20*3)/8);
    gtceuLaserOre("white", "mica", -40, -10, (20*2)/8);
    gtceuLaserOre("light_gray", "pollucite", -40, -10, (20*1)/8);
    gtceuLaserOre("gray", "basaltic_mineral_sand", 15, 60, (80*3)/8);
    gtceuLaserOre("gray", "granitic_mineral_sand", 15, 60, (80*2)/8);
    gtceuLaserOre("yellow", "fullers_earth", 15, 60, (80*2)/8);
    gtceuLaserOre("white", "gypsum", 15, 60, (80*1)/8);
    gtceuLaserOre("orange", "wulfenite", 20, 50, (5*3)/7);
    gtceuLaserOre("white", "molybdenum", 20, 50, (5*1)/7);
    gtceuLaserOre("yellow", "molybdenite", 20, 50, (5*2)/7);
    gtceuLaserOre("orange", "powellite", 20, 50, (5*1)/7);
    gtceuLaserOre("orange", "bastnasite", 20, 40, (30*3)/5);
    gtceuLaserOre("orange", "neodymium", 20, 40, (30*1)/5);
    gtceuLaserOre("lime", "monazite", 20, 40, (30*1)/5);
    gtceuLaserOre("black", "naquadah", 10, 90, (30*7)/8);
    gtceuLaserOre("red", "plutonium", 10, 90, (30*1)/8);
    gtceuLaserOre("white", "nether_quartz", 40, 80, (80*3)/4);
    gtceuLaserOre("light_blue", "quartzite", 40, 80, (80*1)/4);
    gtceuLaserOre("green", "garnierite", -10, 60, (40*3)/8);
    gtceuLaserOre("gray", "nickel", -10, 60, (40*2)/8);
    gtceuLaserOre("blue", "cobaltite", -10, 60, (40*2)/8);
    gtceuLaserOre("yellow", "pentlandite", -10, 60, (40*1)/8);
    gtceuLaserOre("black", "oilsands", 30, 80, 40);
    gtceuLaserOre("yellow", "bentonite", -20, 10, (20*3)/8);
    gtceuLaserOre("white", "magnesite", -20, 10, (20*2)/8);
    gtceuLaserOre("green", "olivine", -20, 10, (20*2)/8);
    gtceuLaserOre("green", "glauconite_sand", -20, 10, (20*1)/8);
    gtceuLaserOre("black", "pitchblende", 30, 60, (30*7)/8);
    gtceuLaserOre("black", "uraninite", 30, 60, (30*1)/8);
    gtceuLaserOre("blue", "apatite", 10, 80, (40*3)/6);
    gtceuLaserOre("white", "tricalcium_phosphate", 10, 80, (40*2)/6);
    gtceuLaserOre("orange", "pyrochlore", 10, 80, (40*1)/6);
    gtceuLaserOre("brown", "goethite", 20, 40, (30*3)/8);
    gtceuLaserOre("yellow", "yellow_limonite", 20, 40, (30*2)/8);
    gtceuLaserOre("red", "hematite", 20, 40, (30*2)/8);
    gtceuLaserOre("yellow", "gold", 20, 40, (30*1)/8);
    gtceuLaserOre("black", "cassiterite", 10, 80, (80*2)/6);
    gtceuLaserOre("cyan", "certus_quartz", 80, 120, (40*2)/6);
    gtceuLaserOre("white", "barite", 80, 120, (40*1)/6);
    gtceuLaserOre("black", "coal", 10, 140, 80);
    gtceuLaserOre("orange", "chalcopyrite", -10, 160, (50*5)/10);
    gtceuLaserOre("gray", "zeolite", -10, 160, (50*2)/10);
    gtceuLaserOre("red", "realgar", -10, 160, (50*1)/10);
    gtceuLaserOre("gray", "iron", -40, 10, (80*2)/11);
    gtceuLaserOre("orange", "copper", -40, 10, (80*2)/11);
    gtceuLaserOre("brown", "tungstate", 20, 60, 40/3);
    gtceuLaserOre("black", "chalcocite", 20, 60, (70*2)/2);
    gtceuLaserOre("yellow", "sulfur", 10, 30, (100*3)/2);
    gtceuLaserOre("orange", "sphalerite", 10, 30, (100*1)/2);
    gtceuLaserOre("pink", "rock_salt", 30, 70, (50*3)/1);
    gtceuLaserOre("white", "salt", 30, 70, (50*2)/1);
    gtceuLaserOre("white", "lepidolite", -10, 70, (50*1)/1);
    gtceuLaserOre("orange", "spodumene", 30, 70, (50*1)/1);
    gtceuLaserOre("black", "ilmenite", 10, 80, (40*1)/3);
    gtceuLaserOre("cyan", "aluminium", 10, 80, (40*1)/3); 
    gtceuLaserOre("lime", "cooperite", 5, 50, (10*2)/3);
    gtceuLaserOre("purple", "palladium", 5, 50, (10*1)/3);
    gtceuLaserOre("orange", "grossular", -30, 30, (20*3)/1);
    gtceuLaserOre("orange", "spessartine", -30, 0, (20*2)/1);
    gtceuLaserOre("gray", "pyrolusite", -30, 30, (20*2)/1);
    gtceuLaserOre("blue", "tantalite", -30, 30, (20*2)/1);
    gtceuLaserOre("red", "red_garnet", -10, 50, (40*3)/1);
    gtceuLaserOre("yellow", "yellow_garnet", -10, 50, (40*2)/1);
    gtceuLaserOre("purple", "amethyst", -10, 50, (40*2)/1);
    gtceuLaserOre("white", "opal", -10, 50, (40*2)/1);
    gtceuLaserOre("green", "beryllium", 5, 30, (30*3)/2);
    gtceuLaserOre("green", "emerald", 5, 30, (30*2)/2);
    gtceuLaserOre("green", "thorium", 5, 30, (30*1)/2);
    gtceuLaserOre("red", "redstone", 5, 40, 60*3);
    gtceuLaserOre("red", "ruby", 5, 40, 60*2);
    gtceuLaserOre("blue", "saltpeter", 5, 45, 40*3);
    gtceuLaserOre("light_gray", "diatomite", 5, 45, 40*2);
    gtceuLaserOre("light_blue", "electrotine", 5, 45, 40*2);
    gtceuLaserOre("orange", "alunite", 5, 45, 40*1);
    gtceuLaserOre("red", "almandine", -40, 0, 60*3);
    gtceuLaserOre("pink", "pyrope", -40, 0, 60*2);
    gtceuLaserOre("blue", "sapphire", -40, 0, 60*1);
    gtceuLaserOre("green", "green_sapphire", -40, 0, 60*1);
    gtceuLaserOre("orange", "scheelite", 20, 60, 20*3);
    gtceuLaserOre("white", "lithium", 20, 40, 20*1);
    gtceuLaserOre("yellow", "bornite", 5, 50, 10*3);
    gtceuLaserOre("white", "platinum", 5, 50, 10*2);
    gtceuLaserOre("orange", "copper", 80, 120, 70*2);
    gtceuLaserOre("gray", "stibnite", 80, 120, 70*1);
    gtceuLaserOre("cyan", "blue_topaz", 80, 120, 70*3);
    gtceuLaserOre("orange", "topaz", 80, 120, 70*2);
    gtceuLaserOre("lime", "malachite", -10, 60, 120);
    gtceuLaserOre("light_blue", "diamond", -55, -30, 40*3);
    gtceuLaserOre("blue", "sodalite", -60, 10, 40*2);
    gtceuLaserOre("blue", "lazurite", -60, 10, 40*3);
    gtceuLaserOre("white", "calcite", -60, 10, 40*1);
    gtceuLaserOre("light_blue", "lapis", -60, 10, 40*2);
    gtceuLaserOre("light_gray", "talc", 0, 50, 40*2);
    gtceuLaserOre("green", "soapstone", 0, 50, 40*3);
    gtceuLaserOre("light_gray", "asbestos", 30, 60, 80*2);
    gtceuLaserOre("light_gray", "cassiterite_sand", 30, 60, 80*3);
    gtceuLaserOre("gray", "graphite", -55, -30, 40*7);
    gtceuLaserOre("orange", "garnet_sand", 30, 60, 80*2);
    gtceuLaserOre("gray", "magnetite", 20, 80, (30*3)/2);
    gtceuLaserOre("gray", "vanadium_magnetite", 20, 80, (30*2)/2);
    gtceuLaserOre("gray", "chromite", 20, 80, (30*2)/2);
});