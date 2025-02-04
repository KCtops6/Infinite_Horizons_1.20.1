LootJS.modifiers((event) => {
    const lootModifiers = [
        {
            block: 'minecraft:bamboo',
            toolTag: '#forge:tools/swords',
            chance: 0.25,
            additionalLoot: 'twigs:bamboo_leaves',
        },
        {
            block: 'ars_nouveau:purple_archwood_leaves',
            chance: 0.25,
            additionalLoot: 'ars_nouveau:bastion_pod',
        },
        {
            block: 'ars_nouveau:red_archwood_leaves',
            chance: 0.25,
            additionalLoot: 'ars_nouveau:bombegranate_pod'
        },
        {
            block: 'ars_elemental:yellow_archwood_leaves',
            chance: 0.25,
            additionalLoot: 'ars_elemental:flashpine_pod'
        },
        {
            block: 'ars_nouveau:blue_archwood_leaves',
            chance: 0.25,
            additionalLoot: 'ars_nouveau:frostaya_pod'
        },
        {
            block: 'ars_nouveau:green_archwood_leaves',
            chance: 0.25,
            additionalLoot: 'ars_nouveau:mendosteen_pod'
        },
        {
            block: 'minecraft:grass_block',
            toolTag: '#forge:tools/shovels',
            chance: 0.25,
            additionalLoot: 'twigs:pebble'
        },
        {
            block: 'minecraft:dirt',
            toolTag: '#forge:tools/shovels',
            chance: 0.25,
            additionalLoot: 'twigs:pebble'
        },
        {
            block: '#minecraft:logs',
            toolTag: '#forge:tools/axes',
            chance: 0.75,
            additionalLoot: 'farmersdelight:tree_bark'
        },
        {
            block: '#minecraft:logs',
            toolTag: '#forge:tools/axes',
            chance: 0.25,
            additionalLoot: 'twigs:twig'
        },
    ];

    lootModifiers.forEach(modifier => {
        let modifierEvent = event.addBlockLootModifier(modifier.block)
            .randomChance(modifier.chance)
            .addLoot(modifier.additionalLoot);

        if (modifier.toolTag) {
            modifierEvent.matchMainHand(modifier.toolTag);
        }
    });
});
