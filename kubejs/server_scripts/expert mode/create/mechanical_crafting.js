//packmode: expert
ServerEvents.recipes(event => {
    // Pity Machine Frame
    event.remove({ id: "industrialforegoing:machine_frame_pity" });
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "thermal:machine_frame"
            },
            B: {
                item: "kubejs:iron_plate"
            },
            C: {
                tag: "minecraft:logs"
            }
        },
        pattern: [
            "CBC",
            "BAB",
            "CBC"
        ],
        result: {
            count: 1,
            item: "industrialforegoing:machine_frame_pity"
        }
    });
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "thermal:machine_frame"
            },
            B: {
                item: "kubejs:invar_plate"
            },
            C: {
                tag: "minecraft:logs"
            }
        },
        pattern: [
            "CBC",
            "BAB",
            "CBC"
        ],
        result: {
            count: 2,
            item: "industrialforegoing:machine_frame_pity"
        }
    });

    // Fluid Extractor
    event.remove({ id: "industrialforegoing:fluid_extractor" });
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "industrialforegoing:machine_frame_pity"
            },
            B: {
                item: "create:mechanical_pump"
            },
            C: {
                item: "create:fluid_tank"
            },
            D: {
                item: "kubejs:invar_plate"
            },
            E: {
                item: "kubejs:electrum_plate"
            }
        },
        pattern: [
            "DED",
            "CAC",
            "DBD"
        ],
        result: {
            count: 1,
            item: "industrialforegoing:fluid_extractor"
        }
    });

    // Latex Processing Unit
    event.remove({ id: "industrialforegoing:latex_processing_unit" });
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "industrialforegoing:machine_frame_pity"
            },
            B: {
                item: "thermal:machine_furnace"
            },
            C: {
                item: "create:fluid_tank"
            },
            D: {
                item: "kubejs:invar_plate"
            },
            E: {
                item: "redstone_arsenal:flux_gem_block"
            }
        },
        pattern: [
            "DED",
            "CAC",
            "DBD"
        ],
        result: {
            count: 1,
            item: "industrialforegoing:latex_processing_unit"
        }
    });

    // Dissolution Chamber
    event.remove({ id: "industrialforegoing:dissolution_chamber" });
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "industrialforegoing:machine_frame_pity"
            },
            B: {
                item: "kubejs:enderium_gear"
            },
            C: {
                item: "create:fluid_tank"
            },
            D: {
                item: "kubejs:electrum_plate"
            },
            E: {
                item: "industrialforegoing:plastic"
            },
            F: {
                item: "thermal:item_buffer"
            }
        },
        pattern: [
            "EFE",
            "CAC",
            "DBD"
        ],
        result: {
            count: 1,
            item: "industrialforegoing:dissolution_chamber"
        }
    });

    // Plant Gatherer
    event.remove({ id: "industrialforegoing:plant_gatherer" });
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "industrialforegoing:machine_frame_pity"
            },
            B: {
                item: "thermal:rf_coil"
            },
            C: {
                item: "create:mechanical_saw"
            },
            D: {
                item: "kubejs:electrum_gear"
            },
            E: {
                item: "industrialforegoing:plastic"
            },
            F: {
                item: "create:mechanical_harvester"
            }
        },
        pattern: [
            "EFE",
            "CAC",
            "DBD"
        ],
        result: {
            count: 1,
            item: "industrialforegoing:plant_gatherer"
        }
    });

    // Sewer
    event.remove({ id: "industrialforegoing:sewer" });
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "industrialforegoing:machine_frame_pity"
            },
            B: {
                item: "kubejs:invar_gear"
            },
            C: {
                item: "minecraft:brick"
            },
            E: {
                item: "industrialforegoing:plastic"
            },
            F: {
                item: "create:fluid_tank"
            }
        },
        pattern: [
            "EFE",
            "CAC",
            "CBC"
        ],
        result: {
            count: 1,
            item: "industrialforegoing:sewer"
        }
    });

    // Sewage Composter
    event.remove({ id: "industrialforegoing:sewage_composter" });
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "industrialforegoing:machine_frame_pity"
            },
            B: {
                item: "kubejs:invar_gear"
            },
            C: {
                item: "minecraft:brick"
            },
            D: {
                item: "create:mechanical_piston"
            },
            E: {
                item: "industrialforegoing:plastic"
            },
            F: {
                item: "thermal:machine_furnace"
            }
        },
        pattern: [
            "EFE",
            "DAD",
            "CBC"
        ],
        result: {
            count: 1,
            item: "industrialforegoing:sewage_composter"
        }
    });

    // Plant Fertilizer
    event.remove({ id: "industrialforegoing:plant_fertilizer" });
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "industrialforegoing:machine_frame_simple"
            },
            C: {
                item: "kubejs:invar_gear"
            },
            D: {
                item: "thermal:item_buffer"
            },
            E: {
                item: "thermal:rf_coil"
            },
            B: {
                item: "industrialforegoing:plastic"
            },
            F: {
                item: "thermal:device_composter"
            },
            G: {
                item: "kubejs:invar_plate"
            }
        },
        pattern: [
            "BBBBB",
            "BBDBB",
            "BFAFB",
            "GGGGG",
            "GCECG"
        ],
        result: {
            count: 1,
            item: "industrialforegoing:plant_fertilizer"
        }
    });

    // Plant Sower
    event.remove({ id: "industrialforegoing:plant_sower" });
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "industrialforegoing:machine_frame_pity"
            },
            B: {
                item: "thermal:rf_coil"
            },
            C: {
                item: "create:mechanical_piston"
            },
            D: {
                item: "kubejs:electrum_gear"
            },
            E: {
                item: "industrialforegoing:plastic"
            },
            F: {
                item: "create:mechanical_harvester"
            }
        },
        pattern: [
            "EFE",
            "CAC",
            "DBD"
        ],
        result: {
            count: 1,
            item: "industrialforegoing:plant_sower"
        }
    });

    // Mob Slaughter Factory
    event.remove({ id: "industrialforegoing:mob_slaugher_factory" });
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "industrialforegoing:machine_frame_pity"
            },
            B: {
                item: "thermal:rf_coil"
            },
            C: {
                item: "mob_grinding_utils:saw"
            },
            D: {
                item: "kubejs:invar_plate"
            },
            E: {
                item: "industrialforegoing:plastic"
            },
            F: {
                item: "kubejs:electrum_gear"
            }
        },
        pattern: [
            "EFE",
            "CAC",
            "DBD"
        ],
        result: {
            count: 1,
            item: "industrialforegoing:mob_slaugher_factory"
        }
    });

    // Animal Rancher
    event.remove({ id: "industrialforegoing:animal_rancher" });
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "create:fluid_tank"
            },
            B: {
                item: "industrialforegoing:machine_frame_pity"
            },
            C: {
                item: "minecraft:shears"
            },
            D: {
                item: "kubejs:electrum_gear"
            },
            E: {
                item: "industrialforegoing:plastic"
            }
        },
        pattern: [
            "EEE",
            "CAC",
            "DBD"
        ],
        result: {
            count: 1,
            item: "industrialforegoing:animal_rancher"
        }
    });

    // Animal Feeder
    event.remove({ id: "industrialforegoing:animal_feeder" });
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "industrialforegoing:machine_frame_pity"
            },
            B: {
                item: "kubejs:invar_gear"
            },
            C: {
                item: "farmingforblockheads:feeding_trough"
            },
            D: {
                item: "kubejs:electrum_plate"
            },
            E: {
                item: "industrialforegoing:plastic"
            },
            F: {
                item: "create:deployer"
            }
        },
        pattern: [
            "EFE",
            "CAC",
            "DBD"
        ],
        result: {
            count: 1,
            item: "industrialforegoing:animal_feeder"
        }
    });

    // Animal Baby Seperator
    event.remove({ id: "industrialforegoing:animal_baby_seperator" });
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "industrialforegoing:machine_frame_pity"
            },
            B: {
                item: "kubejs:electrum_gear"
            },
            C: {
                item: "minecraft:hay_block"
            },
            D: {
                item: "kubejs:invar_plate"
            },
            E: {
                item: "industrialforegoing:plastic"
            },
            F: {
                item: "farmingforblockheads:feeding_trough"
            }
        },
        pattern: [
            "EFE",
            "CAC",
            "DBD"
        ],
        result: {
            count: 1,
            item: "industrialforegoing:animal_baby_seperator"
        }
    });

    // Material Stonework Factory
    event.remove({ id: "industrialforegoing:material_stonework_factory" });
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "industrialforegoing:machine_frame_advanced"
            },
            B: {
                item: "thermal:machine_furnace"
            },
            C: {
                item: "thermal:machine_pulverizer"
            },
            D: {
                item: "thermal:machine_crafter"
            },
            E: {
                item: "thermal:device_rock_gen"
            },
            F: {
                item: "industrialforegoing:pink_slime_ingot"
            },
            G: {
                item: "kubejs:electrum_gear"
            },
            H: {
                item: "thermal:obsidian_glass"
            },
            I: {
                item: "industrialforegoing:plastic"
            },
            J: {
                item: "kubejs:invar_plate"
            }
        },
        pattern: [
            "IIIII",
            "IFDGI",
            "HCABH",
            "JGEFJ",
            "JJJJJ"
        ],
        result: {
            count: 1,
            item: "industrialforegoing:material_stonework_factory"
        }
    });
});