ServerEvents.recipes(event => {
    const recipes = [
        {mob: 'axolotl', inputs: ['mysticalagriculture:dye_essence', 'mysticalagriculture:nature_essence', 'mysticalagriculture:water_essence']},
        {mob: 'basalz', inputs: ['mysticalagriculture:fire_essence', 'mysticalagriculture:nether_essence', 'mysticalagriculture:coal_essence']},
        {mob: 'blaze', inputs: ['mysticalagriculture:nether_essence', 'mysticalagriculture:sulfur_essence', 'mysticalagriculture:soulium_gemstone']},
        {mob: 'blitz', inputs: ['mysticalagriculture:air_essence', 'mysticalagriculture:earth_essence', 'mysticalagriculture:fire_essence']},
        {mob: 'blizz', inputs: ['mysticalagriculture:water_essence', 'mysticalagriculture:earth_essence', 'mysticalagriculture:ice_essence']},
        {mob: 'camel', inputs: ['mysticalagriculture:fire_essence', 'mysticalagriculture:dirt_essence', 'mysticalagriculture:nature_essence']},
        {mob: 'dolphin', inputs: ['mysticalagriculture:fish_essence', 'mysticalagriculture:water_essence', 'mysticalagriculture:nature_essence']},
        {mob: 'drowned', inputs: ['mysticalagriculture:copper_essence', 'mysticalagriculture:zombie_essence', 'mysticalagriculture:water_essence']},
        {mob: 'elder_guardian', inputs: ['mysticalagriculture:prismarine_essence', 'mysticalagriculture:prismarine_essence', 'mysticalagriculture:prismarine_essence']},
        {mob: 'evoker', inputs: ['mysticalagriculture:emerald_essence', 'mysticalagriculture:supremium_essence', 'mysticalagriculture:nature_essence']},
        {mob: 'fox', inputs: ['mysticalagriculture:earth_essence', 'mysticalagriculture:nature_essence', 'mysticalagriculture:ice_essence']},
        {mob: 'frog', inputs: ['mysticalagriculture:slime_essence', 'mysticalagriculture:water_essence', 'mysticalagriculture:nature_essence']},
        {mob: 'ghast', inputs: ['mysticalagriculture:creeper_essence', 'mysticalagriculture:fire_essence', 'mysticalagriculture:nether_essence']},
        {mob: 'glow_squid', inputs: ['mysticalagriculture:water_essence', 'mysticalagriculture:glowstone_essence', 'mysticalagriculture:squid_essence']},
        {mob: 'goat', inputs: ['mysticalagriculture:ice_essence', 'mysticalagriculture:stone_essence', 'mysticalagriculture:nature_essence']},
        {mob: 'guardian', inputs: ['mysticalagriculture:earth_essence', 'mysticalagriculture:water_essence', 'mysticalagriculture:prismarine_essence']},
        {mob: 'hoglin', inputs: ['mysticalagriculture:pig_essence', 'mysticalagriculture:zombie_essence', 'mysticalagriculture:nether_essence']},
        {mob: 'husk', inputs: ['mysticalagriculture:fire_essence', 'mysticalagriculture:air_essence', 'mysticalagriculture:zombie_essence']},
        {mob: 'llama', inputs: ['mysticalagriculture:cow_essence', 'mysticalagriculture:nature_essence', 'mysticalagriculture:earth_essence']},
        {mob: 'magma_cube', inputs: ['mysticalagriculture:nether_essence', 'mysticalagriculture:slime_essence', 'mysticalagriculture:fire_essence']},
        {mob: 'mooshroom', inputs: ['mysticalagriculture:dirt_essence', 'mysticalagriculture:nature_essence', 'mysticalagriculture:cow_essence']},
        {mob: 'panda', inputs: ['mysticalagriculture:slime_essence', 'mysticalagriculture:nature_essence', 'mysticalagriculture:earth_essence']},
        {mob: 'parrot', inputs: ['mysticalagriculture:nature_essence', 'mysticalagriculture:earth_essence', 'mysticalagriculture:dye_essence']},
        {mob: 'piglin', inputs: ['mysticalagriculture:nether_essence', 'mysticalagriculture:zombie_essence', 'mysticalagriculture:gold_essence']},
        {mob: 'pillager', inputs: ['mysticalagriculture:nature_essence', 'mysticalagriculture:wood_essence', 'mysticalagriculture:earth_essence']},
        {mob: 'polar_bear', inputs: ['mysticalagriculture:ice_essence', 'mysticalagriculture:fish_essence', 'mysticalagriculture:water_essence']},
        {mob: 'shulker', inputs: ['mysticalagriculture:air_essence', 'mysticalagriculture:end_essence', 'mysticalagriculture:enderman_essence']},
        {mob: 'squid', inputs: ['mysticalagriculture:water_essence', 'mysticalagriculture:earth_essence', 'mysticalagriculture:nature_essence']},
        {mob: 'stray', inputs: ['mysticalagriculture:ice_essence', 'mysticalagriculture:skeleton_essence', 'mysticalagriculture:water_essence']},
        {mob: 'turtle', inputs: ['mysticalagriculture:coral_essence', 'mysticalagriculture:nature_essence', 'mysticalagriculture:water_essence']},
        {mob: 'warden', inputs: ['kubejs:dark_matter', 'kubejs:weak_echo_shard', 'mysticalagradditions:insanium_essence']},
        {mob: 'wither_skeleton', inputs: ['mysticalagriculture:nether_essence', 'mysticalagriculture:coal_essence', 'mysticalagriculture:skeleton_essence']},
        {mob: 'wolf', inputs: ['mysticalagriculture:skeleton_essence', 'mysticalagriculture:nature_essence', 'mysticalagriculture:sheep_essence']}
    ];
    recipes.forEach(recipe => {
        event.recipes.summoningrituals  // https://github.com/AlmostReliable/summoningrituals/wiki/Recipes
            .altar('mysticalagriculture:soulium_gemstone')
            .input(recipe.inputs[0])
            .input(recipe.inputs[1])
            .input(recipe.inputs[2])
            .itemOutput(`kubejs:${recipe.mob}_catalyst`)
            .blockBelow('mysticalagriculture:soulium_block')
            .recipeTime(1000);
    });
});
