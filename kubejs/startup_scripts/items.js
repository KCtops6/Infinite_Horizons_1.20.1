StartupEvents.registry('item', e => {
    const items = [
        'arrow', 'blue_candle', 'bomb', 'boomerang', 'bow', 'chicken_fried_steak_ingot', 'dark_matter', 'weak_echo_shard', 'mycellium_spores',
        'red_mushroom_spores', 'brown_mushroom_spores', 'crimson_nylium_spores', 'warped_nylium_spores', 'desert_temple_dungeon_key', 'explorer_map',
        'forbidden_transmutation_matter', 'jungle_temple_dungeon_key', 'magical_boomerang', 'magical_shield', 'magical_sword', 'mekanism_mystery_box',
        'netherite_wire', 'silver_arrow', 'stone_alloy', 'stronghold_dungeon_key', 'sword', 'white_sword', 'wooden_shield',
        'void_flour', 'void_cake_base', 'void_cake', 'token_of_the_nether_edge', 'token_of_the_end_twilight', 'glyph_of_inferno', 'glyph_of_the_void',
        'mekanized_plasma_infuser', 'ender_quantum_extractor'
    ];

    const formatName = (id) => {
        return id.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    items.forEach(id => {
        e.create(id).displayName(formatName(id));
    });
});
