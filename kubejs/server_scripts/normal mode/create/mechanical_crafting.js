ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mechanical_crafting",
        "pattern": [
  	        "  A  ",
            " BSB ",
            "BSRSB",
            " BCB "
        ],
        "key": {
            "A": {
                "item": "kubejs:stone_alloy"
            },
            "C": {
                "item": "createaddition:capacitor"
            },
            "B": {
                "tag": "forge:plates/brass"
            },
            "R": {
                "tag": "forge:rods/iron"
            },
            "S": {
                "item": "createaddition:copper_spool"
            }
        },
        "result": {
            "item": "createaddition:electric_motor"
        }
    })
    event.custom({
        "type": "create:mechanical_crafting",
        "pattern": [
            "  A  ",
            " ISI ",
            "ISRSI",
            " ICI "
        ],
        "key": {
            "C": {
                "item": "createaddition:capacitor"
            },
            "I": {
                "tag": "forge:plates/iron"
            },
            "R": {
                "tag": "forge:rods/iron"
            },
            "S": {
                "item": "createaddition:copper_spool"
            },
            "A": {
                "item": "kubejs:stone_alloy"
            }
        },
        "result": {
            "item": "createaddition:alternator"
        }
    })
    event.custom({
        "type": "create:mechanical_crafting",
        "pattern": [
            "SSS",
            " A ",
            "CBC",
            "PEP"
        ],
        "key": {
            "A": {
                "item": "kubejs:stone_alloy"
            },
            "C": {
                "item": "createaddition:capacitor"
            },
            "P": {
                "tag": "forge:plates/brass"
            },
            "B": {
                "item": "create:brass_casing"
            },
            "S": {
                "item": "createaddition:copper_spool"
            },
            "E": {
                "item": "create:electron_tube"
            }
        },
        "result": {
            "item": "createaddition:tesla_coil"
        }
    })
})