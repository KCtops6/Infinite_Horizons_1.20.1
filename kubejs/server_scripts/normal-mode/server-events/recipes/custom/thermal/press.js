ServerEvents.recipes(event => {
    const ingotToPlate = ['brass', 'zinc'];
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
        }).id(`kubejs:thermal/press/kubejs/${i}_plate`);
    });
});