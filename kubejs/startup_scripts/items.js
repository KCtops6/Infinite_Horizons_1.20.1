// StartupEvents.registry('item', e => {
//     e.create('arrow').displayName('Arrow');
//     e.create('blue_candle').displayName('Blue Candle');
//     e.create('bomb').displayName('Bomb');
//     e.create('boomerang').displayName('Boomerang');
//     e.create('bow').displayName('Bow');
//     e.create('chicken_fried_steak_ingot').displayName('Chicken Fried Steak Ingot');
//     e.create("dark_matter").displayName("Dark Matter");
//     e.create("weak_echo_shard").displayName("Weak Echo Shard");
//     e.create("mycellium_spores").displayName("Mycellium Spores");
//     e.create("red_mushroom_spores").displayName("Red Mushroom Spores");
//     e.create("brown_mushroom_spores").displayName("Brown Mushroom Spores");
//     e.create("crimson_nylium_spores").displayName("Crimson Nylium Spores");
//     e.create("warped_nylium_spores").displayName("Warped Nylium Spores");
//     e.create('desert_temple_dungeon_key').displayName('Desert Temple Dungeon Key');
//     e.create('explorer_map').displayName('Explorer\'s Map');
//     e.create('forbidden_transmutation_matter').displayName('Forbidden Transmutation Matter');
//     e.create('jungle_temple_dungeon_key').displayName('Jungle Temple Dungeon Key');
//     e.create('magical_boomerang').displayName('Magical Boomerang');
//     e.create('magical_shield').displayName('Magical Shield');
//     e.create('magical_sword').displayName('Magical Sword');
//     e.create('mekanism_mystery_box').displayName('Mekanism Mystery Box');
//     e.create('netherite_wire').displayName('Netherite Wire');
//     e.create('red_candle', 'sword').displayName('Red Candle').tier('netherite').attackDamageBaseline(16.0);
//     e.create('silver_arrow').displayName('Silver Arrow');
//     e.create('stone_alloy').displayName('Stone Alloy');
//     e.create('stronghold_dungeon_key').displayName('Stronghold Dungeon Key');
//     e.create('sword').displayName('Sword');
//     e.create('white_sword').displayName('White Sword');
//     e.create('wooden_shield').displayName('Wooden Shield');

//     e.create('void_flour').displayName('Void Flour');
//     e.create('void_cake_base').displayName('Void Cake Base');
//     e.create('void_cake').displayName('Void Cake');

//     e.create('nether_painting_base').displayName('Nether Painting Base');
//     e.create('end_painting_base').displayName('End Painting Base');

//     e.create('infernal_canvas').displayName('Infernal Canvas');
//     e.create('obsidian_frame').displayName('Obsidian Frame');

//     e.create('infernal_reactor_core').displayName('Infernal Reactor Core');
//     e.create('dimensional_phase_shifter').displayName('Dimensional Phase Shifter');

//     e.create('rune_of_inferno').displayName('Rune of Inferno');

// })

StartupEvents.registry('item', e => {
    const items = [
        'arrow', 'blue_candle', 'bomb', 'boomerang', 'bow', 'chicken_fried_steak_ingot', 'dark_matter', 'weak_echo_shard', 'mycellium_spores',
        'red_mushroom_spores', 'brown_mushroom_spores', 'crimson_nylium_spores', 'warped_nylium_spores', 'desert_temple_dungeon_key', 'explorer_map',
        'forbidden_transmutation_matter', 'jungle_temple_dungeon_key', 'magical_boomerang', 'magical_shield', 'magical_sword', 'mekanism_mystery_box',
        'netherite_wire', 'silver_arrow', 'stone_alloy', 'stronghold_dungeon_key', 'sword', 'white_sword', 'wooden_shield', 'void_flour', 'void_cake_base',
        'void_cake', 'nether_painting_base', 'end_painting_base', 'infernal_canvas', 'obsidian_frame', 'infernal_reactor_core', 'dimensional_phase_shifter',
        'rune_of_inferno'
    ];

    const formatName = (id) => {
        return id.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    items.forEach(id => {
        e.create(id).displayName(formatName(id));
    });
});
