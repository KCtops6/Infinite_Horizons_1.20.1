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
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "thermal:machine_frame"
            },
            B: {
                item: "kubejs:steel_plate"
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
            count: 4,
            item: "industrialforegoing:machine_frame_pity"
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