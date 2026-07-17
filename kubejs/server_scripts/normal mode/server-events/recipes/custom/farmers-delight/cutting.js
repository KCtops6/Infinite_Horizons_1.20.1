ServerEvents.recipes(event => {
    /**
     * Helper function to create Farmer's Delight cutting recipes
     * @param {string} input - The input item
     * @param {string} tool - The tool (item or #tag)
     * @param {Array} results - Array of result objects {item, count, chance}
     */
    const cutting = (input, tool, results) => {
        let recipe = {
            type: 'farmersdelight:cutting',
            ingredients: [{ item: input }],
            tool: tool.startsWith('#') ? { tag: tool.substring(1) } : { item: tool },
            result: results.map(res => ({
                item: res.item,
                count: res.count || 1,
                chance: res.chance || 1.0
            }))
        };
        let idName = `${input.replace(':', '_')}_from${tool.replace(/[:#]/g, '_')}`;
        event.custom(recipe).id(`kubejs:cutting/${idName}`);
    };
    const botaniaWoods = [
        { main: 'botania:dreamwood', twig: 'botania:dreamwood_twig' },
        { main: 'botania:dreamwood_log', twig: 'botania:dreamwood_twig' },
        { main: 'botania:livingwood', twig: 'botania:livingwood_twig' },
        { main: 'botania:livingwood_log', twig: 'botania:livingwood_twig' }
    ];
    botaniaWoods.forEach(wood => {
        cutting(wood.main, '#forge:tools/knives', [
            { item: wood.main },
            { item: wood.twig, chance: 0.75 }
        ]);
    });
    let dirtBlocks = ["minecraft:dirt", "minecraft:grass_block", "minecraft:dirt_path"];
    let gravelBlocks = ["minecraft:gravel", "kubejs:andesite_gravel", "kubejs:diorite_gravel", "kubejs:granite_gravel"];
    dirtBlocks.forEach(b => {
        cutting(b, 'infinite_horizons_tweaks:wooden_trowel', [
            { item: "minecraft:dirt", chance: 0.75 },
            { item: "infinite_horizons_tweaks:stone_pebble", chance: 0.25 }
        ]);
        cutting(b, 'infinite_horizons_tweaks:stone_trowel', [
            { item: "minecraft:dirt", chance: 0.5 },
            { item: "infinite_horizons_tweaks:andesite_pebble", chance: 0.25 },
            { item: "infinite_horizons_tweaks:diorite_pebble", chance: 0.25 },
            { item: "infinite_horizons_tweaks:granite_pebble", chance: 0.25 }
        ]);
        cutting(b, 'infinite_horizons_tweaks:iron_trowel', [
            { item: "minecraft:dirt", chance: 0.25 },
            { item: "infinite_horizons_tweaks:stone_pebble", chance: 0.75 },
            { item: "infinite_horizons_tweaks:deepslate_pebble", chance: 0.25 }
        ]);
    });
    gravelBlocks.forEach(b => {
        cutting(b, 'infinite_horizons_tweaks:stone_trowel', [
            { item: b, chance: 0.75 },
            { item: "infinite_horizons_tweaks:stone_pebble", chance: 0.5 },
            { item: "minecraft:iron_nugget", chance: 0.25 }
        ]);
        cutting(b, 'infinite_horizons_tweaks:iron_trowel', [
            { item: b, chance: 0.5 },
            { item: "infinite_horizons_tweaks:stone_pebble", chance: 0.75 },
            { item: "minecraft:iron_nugget", chance: 0.5 }
        ]);
    });
    cutting('kubejs:tuff_gravel', 'infinite_horizons_tweaks:iron_trowel', [
        { item: "infinite_horizons_tweaks:tuff_gravel", chance: 0.25 },
        { item: "infinite_horizons_tweaks:tuff_pebble", chance: 0.75 },
        { item: "infinite_horizons_tweaks:deepslate_pebble", chance: 0.25 }
    ]);
    cutting('kubejs:deepslate_gravel', 'infinite_horizons_tweaks:iron_trowel', [
        { item: "infinite_horizons_tweaks:deepslate_gravel", chance: 0.25 },
        { item: "infinite_horizons_tweaks:deepslate_pebble", chance: 0.75 },
        { item: "infinite_horizons_tweaks:tuff_pebble", chance: 0.25 }
    ]);
    cutting('twigs:silt', '#forge:tools/shovels', [
        { item: "twigs:silt_ball", count: 4 }
    ]);
});