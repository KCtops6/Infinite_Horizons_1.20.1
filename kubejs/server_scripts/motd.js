PlayerEvents.loggedIn(event => {
    let player = event.player;

    // Welcome message
    player.tell(Text.of("§6§lWelcome to §aInfinite Horizons§6!"));

    // Clickable links
    player.tell(
        Text.of("§eCheck out the project on CurseForge ").append(
            Text.of("§b§nhere")
                .click("open_url", "https://www.curseforge.com/projects/infinite-horizons")
                .hover("show_text", "§aClick to visit the CurseForge page!")
        )
    );

    player.tell(
        Text.of("§eView the source code and issues on GitHub ").append(
            Text.of("§b§nhere")
                .click("open_url", "https://github.com/username/infinite-horizons")
                .hover("show_text", "§aClick to visit the GitHub repo!")
        )
    );

    player.tell(
        Text.of("§eJoin our community on Discord ").append(
            Text.of("§b§nhere")
                .click("open_url", "https://discord.gg/yourdiscordlink")
                .hover("show_text", "§aClick to join the Discord server!")
        )
    );
});