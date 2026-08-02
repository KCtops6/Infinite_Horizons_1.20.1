BlockEvents.rightClicked(event => {
    var { block, item, player, hand, level } = event;
    if (hand !== 'MAIN_HAND' || item.id !== 'minecraft:shears') return;
    var nyliumMap = {
        'minecraft:nether_wart_block': 'kubejs:crimson_nylium_spores',
        'minecraft:warped_wart_block': 'kubejs:warped_nylium_spores'
    };
    if (!level.isClientSide()) {
        if (block.id in nyliumMap) {
            player.give(nyliumMap[block.id]);
            if (!player.isCreative()) item.setDamageValue(item.getDamageValue() + 1);
        }
        else if (block.id === 'minecraft:mycelium') {
            var mushroomSpore = Math.random() < 0.5 
                ? 'kubejs:red_mushroom_spores' 
                : 'kubejs:brown_mushroom_spores';
            player.give(mushroomSpore);
            if (!player.isCreative()) item.setDamageValue(item.getDamageValue() + 1);
        }
    }
});

BlockEvents.rightClicked(event => {
    var sporeMap = {
        'kubejs:crimson_nylium_spores': 'minecraft:crimson_fungus',
        'kubejs:warped_nylium_spores': 'minecraft:warped_fungus',
        'kubejs:red_mushroom_spores': 'minecraft:red_mushroom',
        'kubejs:brown_mushroom_spores': 'minecraft:brown_mushroom'
    };
    var { block, item, player, hand, level } = event;
    if (hand !== 'MAIN_HAND' || !(item.id in sporeMap)) return;
    if (!level.isClientSide()) {
        block.offset('up').set(sporeMap[item.id]);
        if (!player.isCreative()) item.count--;
    }
});

BlockEvents.rightClicked(event => {
    var { block, item, player, hand, level } = event;
    if (hand !== 'MAIN_HAND' && item.id === 'kubejs:mycellium_spores' && block.id === 'minecraft:grass_block') return;
    if (!level.isClientSide()) {
        block.set('minecraft:mycelium');
        if (!player.isCreative()) item.count--;
    }
});