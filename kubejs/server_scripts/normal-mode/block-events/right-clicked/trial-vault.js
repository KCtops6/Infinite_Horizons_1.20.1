BlockEvents.rightClicked('minecraft:chest', event => { 
    const { item, level, player, server } = event;
    const { x, y, z } = event.block;
    if (item.id !== 'kubejs:trial_core') return;
    const timeOfDay = level.getDayTime() % 24000;
    const isNight = (timeOfDay >= 13000 && timeOfDay <= 23000);
    if (!isNight) {
        player.tell(Text.red('The transfer only stirs in the darkness of night.'));
        return;
    }
    const getId = (dx, dy, dz) => level.getBlock(x + dx, y + dy, z + dz).id;
    const sideOffsets = [[0, -1, -1], [0, -1, 1], [-1, -1, 0], [1, -1, 0]];
    const cornerOffsets = [[-1, -1, -1], [-1, -1, 1], [1, -1, -1], [1, -1, 1]];
    const centerValid = getId(0, -1, 0) === 'minecraft:copper_block';
    const sidesValid = sideOffsets.every(([dx, dy, dz]) => getId(dx, dy, dz) === 'ntrials:chiseled_copper');
    const cornersValid = cornerOffsets.every(([dx, dy, dz]) => getId(dx, dy, dz) === 'ntrials:tuff_bricks');
    if (!centerValid || !sidesValid || !cornersValid) {
        player.tell(Text.red('The copper foundation is incomplete.'));
        return;
    }
    const hasOminous = player.potionEffects.isActive('ntrials:trial_omen');
    let setBlockCommand
    server.runCommandSilent(setBlockCommand);
    if (hasOminous) {
        setBlockCommand = `setblock ${x} ${y} ${z} ntrials:vault[ominous= true ]{config:{key_item:{count:1,id: "ntrials:ominous_trial_key" },loot_table: "ntrials:chests/reward_ominous" }} replace`;
    } else {
        setBlockCommand = `setblock ${x} ${y} ${z} ntrials:vault[ominous= false ]{config:{key_item:{count:1,id: "ntrials:trial_key" },loot_table: "ntrials:chests/reward_common" }} replace`;
    }
    server.runCommandSilent(setBlockCommand);
    item.count--;
    player.tell(Text.green(`The chest warps into a ${hasOminous ? '§5Ominous ' : ''}Trial Vault!`));
    event.cancel();
});

BlockEvents.rightClicked('minecraft:vault', event => {
    const { item, player, level, server, block, hand } = event;
    if (item.empty && hand == 'main_hand') {
        const { x, y, z } = block;
        let nbt = block.getEntityData();
        let currentTime = level.time;
        let hasPlayers = nbt.server_data && nbt.server_data.rewarded_players && nbt.server_data.rewarded_players.length > 0;
        let lastReset = nbt.ForgeData ? nbt.ForgeData.last_reset : 0;
        if (hasPlayers && (currentTime - lastReset > 600)) {
            server.runCommandSilent(`data modify block ${x} ${y} ${z} server_data.rewarded_players set value []`);
            server.runCommandSilent(`data merge block ${x} ${y} ${z} {ForgeData:{last_reset:${currentTime}L}}`);
            level.spawnParticles('minecraft:trial_spawner_detection', true, x + 0.5, y + 1.2, z + 0.5, 0.2, 0.2, 0.2, 10, 0.05);
            player.tell(Text.aqua("The vault's memories have faded. You may use it again."));
        } else if (hasPlayers) {
            let remaining = Math.ceil((600 - (currentTime - lastReset)) / 20);
            player.statusMessage(Text.yellow(`Vault is recharging... (${remaining}s)`));
        }
    }
});