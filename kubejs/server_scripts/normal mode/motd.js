PlayerEvents.loggedIn(event => {
    event.player.tell(Text.of(`§6§lWelcome to §aInfinite Horizons§6!`));
    event.player.tell(Text.darkRed('Note, the following mods will be removed in Version 12.1: ')
        .append(Text.red('Villager Workers: Traveling Merchant Update!').bold())
        .append(Text.red(' , '))
        .append(Text.red('Immersive Aircraft').bold())
        .append(Text.darkRed('. Feel free to readd these mods if you enjoy them. This is a decision about refining the pack.')));
});