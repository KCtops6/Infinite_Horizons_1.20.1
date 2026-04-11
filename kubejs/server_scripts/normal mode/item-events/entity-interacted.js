ItemEvents.entityInteracted(event => {
    const MAPPING = [
        { item: 'mysticalagriculture:nether_essence', input: 'minecraft:piglin', output: 'irons_spellbooks:apothecarist' },
        { item: 'mysticalagriculture:ice_essence', input: 'minecraft:villager', output: 'irons_spellbooks:cryomancer' },
        { item: 'mysticalagriculture:fire_essence', input: 'minecraft:villager', output: 'irons_spellbooks:pyromancer' },
        { item: 'mysticalagriculture:gold_essence', input: 'minecraft:villager', output: 'irons_spellbooks:priest' }
    ];
    const { item, target, level, player } = event;
    MAPPING.forEach(m => {
        if (item.id === m.item && target.type === m.input) {
            let newEntity = level.createEntity(m.output);
            newEntity.setPosition(target.x, target.y, target.z);
            newEntity.setRotation(target.yaw, target.pitch);
            newEntity.spawn();
            target.discard();
            if (!player.isCreative()) item.count--;
            event.success();
        }
    });
});