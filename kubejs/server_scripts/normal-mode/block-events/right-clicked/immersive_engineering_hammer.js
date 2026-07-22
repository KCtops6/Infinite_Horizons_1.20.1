BlockEvents.rightClicked(event => {
    const { block, player, item } = event;
    if (item.id === 'immersiveengineering:hammer') {
        if (block.id === 'kubejs:steel_block') {
            block.set('immersiveengineering:storage_steel');
            event.server.runCommandSilent(`playsound minecraft:block.anvil.use block @a ${block.x} ${block.y} ${block.z} 1 1`);
        }
    }
});
