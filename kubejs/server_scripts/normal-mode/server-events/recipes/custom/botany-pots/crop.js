ServerEvents.recipes(event => {
    event.custom({
        type: "botanypots:crop",
        seed: {
            item: "twigs:petrified_lichen"
        },
        categories: [
            "dirt",
            "stone"
        ],
        growthTicks: 1200,
        display: {
            block: "twigs:petrified_lichen"
        },
        drops: [
            {
                chance: 1,
                output: {
                    item: "twigs:petrified_lichen"
                }
            }
        ]
    }).id('kubejs/botanypots/twigs/petrified_lichen');
});