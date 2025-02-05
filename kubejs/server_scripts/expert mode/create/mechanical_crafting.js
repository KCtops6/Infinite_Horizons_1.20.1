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