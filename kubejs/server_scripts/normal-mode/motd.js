PlayerEvents.loggedIn(event => {
    event.player.tell(Text.of(`§6§lWelcome to §aInfinite Horizons§6!`));
    // event.player.tell(Text.darkRed('Note, the following mods will be removed in Version 15.1: ')
    //     .append(Text.red('Mystical Expansion').bold())
    //     // .append(Text.red(', '))
    //     // .append(Text.red('Custom Villager Professions (Forge)').bold())
    //     // .append(Text.red(', '))
    //     // .append(Text.red('Environmental Materials').bold())
    //     .append(Text.darkRed('. Feel free to readd these mods if you enjoy them. This is a decision about refining the pack.')));
    // event.player.tell(Text.darkRed('Note, the following old KubeJS/"Infinite Horizons" items will be depreciated in Version 14.1: ')
    //     .append(Text.red('Wooden/Stone/Iron Trowel').bold())
    //     .append(Text.red(', '))
    //     .append(Text.red('Stone/Andesite/Diorite/Granite/Deepslate Pebbles').bold())
    //     .append(Text.red(', '))
    //     .append(Text.red('Dungeon Keys').bold()));
});