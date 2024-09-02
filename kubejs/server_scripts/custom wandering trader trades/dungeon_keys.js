MoreJSEvents.wandererTrades((event) => {
    const dungeonKeys = [
        'kubejs:desert_temple_dungeon_key',
        'kubejs:jungle_temple_dungeon_key',
        'kubejs:stronghold_dungeon_key'
    ];
    dungeonKeys.forEach((key) => {
        event.addTrade(2, '25x minecraft:emerald', key);
    });
});
