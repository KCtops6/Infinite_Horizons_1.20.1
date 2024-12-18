ServerEvents.recipes(event => {
    // ender crafter
    event.custom({
        type: "extendedcrafting:shaped_table",
        pattern: [
            "IIIII",
            "ECCCE",
            "ECCCE",
            "ECCCE",
            "EEEEE"
        ],
        key: {
            C: {
                item: "create:mechanical_crafter"
            },
            E: {
                item: "extendedcrafting:ender_ingot"
            },
            I: {
                item: "kubejs:infinitium_plate"
            }
        },
        result: {
            item: "extendedcrafting:ender_crafter"
        }
    });

    // ender alternator
    event.custom({
        type: "extendedcrafting:shaped_table",
        pattern: [
            "IPI",
            "IEI",
            "EEE"
        ],
        key: {
            P: {
                item: "minecraft:ender_eye"
            },
            E: {
                item: "extendedcrafting:ender_ingot"
            },
            I: {
                item: "kubejs:infinitium_plate"
            }
        },
        result: {
            item: "extendedcrafting:ender_alternator"
        }
    });

    // flux crafter
    event.custom({
        type: "extendedcrafting:shaped_table",
        pattern: [
            "IIIII",
            "RCCCR",
            "RCCCR",
            "RCCCR",
            "RRRRR"
        ],
        key: {
            C: {
                item: "create:mechanical_crafter"
            },
            R: {
                item: "extendedcrafting:redstone_ingot"
            },
            I: {
                item: "kubejs:infinitium_plate"
            }
        },
        result: {
            item: "extendedcrafting:flux_crafter"
        }
    });

    // flux alternator
    event.custom({
        type: "extendedcrafting:shaped_table",
        pattern: [
            "INI",
            "IEI",
            "EEE"
        ],
        key: {
            N: {
                item: "minecraft:nether_star"
            },
            E: {
                item: "extendedcrafting:redstone_ingot"
            },
            I: {
                item: "kubejs:infinitium_plate"
            }
        },
        result: {
            item: "extendedcrafting:flux_alternator"
        }
    });
});