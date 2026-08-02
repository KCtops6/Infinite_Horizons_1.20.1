BlockEvents.rightClicked(event => {
    var { block, item, player, hand, level } = event;
    if (hand !== 'MAIN_HAND') return;
    if (item.id === 'minecraft:shears') {
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
        return;
    }
    if (item.id === 'kubejs:mycellium_spores' && block.id === 'minecraft:grass_block') {
        if (!level.isClientSide()) {
            block.set('minecraft:mycelium');
            if (!player.isCreative()) item.count--;
        }
        return;
    }
    var mushroomMap = {
        'kubejs:red_mushroom_spores': 'minecraft:red_mushroom',
        'kubejs:brown_mushroom_spores': 'minecraft:brown_mushroom'
    };
    if (item.id in mushroomMap && block.id === 'minecraft:mycelium') {
        if (!level.isClientSide()) {
            block.offset('up').set(mushroomMap[item.id]);
            if (!player.isCreative()) item.count--;
        }
        return;
    }
    var nyliumSporeData = {
        'kubejs:crimson_nylium_spores': {
            nyliumBlock: 'minecraft:crimson_nylium',
            fungus: 'minecraft:crimson_fungus'
        },
        'kubejs:warped_nylium_spores': {
            nyliumBlock: 'minecraft:warped_nylium',
            fungus: 'minecraft:warped_fungus'
        }
    };
    if (item.id in nyliumSporeData) {
        var data = nyliumSporeData[item.id];
        if (block.id === 'minecraft:netherrack') {
            if (!level.isClientSide()) {
                block.set(data.nyliumBlock);
                if (!player.isCreative()) item.count--;
            }
            return;
        }
        if (block.id === data.nyliumBlock) {
            if (!level.isClientSide()) {
                block.offset('up').set(data.fungus);
                if (!player.isCreative()) item.count--;
            }
            return;
        }
    }
});