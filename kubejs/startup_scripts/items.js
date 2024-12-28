StartupEvents.registry('item', e => {
    const items = [
        'arrow', 'blue_candle', 'bomb', 'boomerang', 'bow', 'chicken_fried_steak_ingot', 'dark_matter', 'weak_echo_shard', 'mycellium_spores',
        'red_mushroom_spores', 'brown_mushroom_spores', 'crimson_nylium_spores', 'warped_nylium_spores', 'desert_temple_dungeon_key', 'explorer_map',
        'forbidden_transmutation_matter', 'jungle_temple_dungeon_key', 'magical_boomerang', 'magical_shield', 'magical_sword', 'mekanism_mystery_box',
        'netherite_wire', 'red_candle', 'silver_arrow', 'stone_alloy', 'stronghold_dungeon_key', 'sword', 'white_sword', 'wooden_shield',
        'void_flour', 'void_cake_base', 'void_cake', 'lava_infuser', 'nether_gemstone', 'magma_core', 'ancient_glyph', 'soul_prism', 'ashen_vessel',
        'purpur_lantern', 'dragon_eye_gem', 'voidshade_moss', 'dragonfire_relic', 'end_gateway_key', 'stargazer_lens', 'infinite_void_rune', 'void_glyph',
        'voidwalker_reagent', 'infernal_reagent', 'infernal_sigil', 'voidwalker_sigil', 'rune_of_the_end', 'rune_of_the_nether', 'wither_skeletal_contractor',
        'e-logic_controller', 'ender_addon', 'nether_addon', 
    ];

    const formatName = (id) => {
        return id.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    items.forEach(id => {
        e.create(id).displayName(formatName(id));
    });

    const glowingitems = [
        'wither_controller', 'ender_controller', 'token_of_the_nether', 'token_of_the_end'
    ];

    glowingitems.forEach(id => {
        e.create(id).displayName(formatName(id)).glow(true);
    });
});
