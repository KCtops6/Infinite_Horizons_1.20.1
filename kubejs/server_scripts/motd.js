PlayerEvents.loggedIn(event => {
    event.player.tell(
        ['Welcome to ', Text.green('Infinite Horizons'), '!']
    );
    event.player.tell(
        [
            'Report any issues to ',
            Text.purple('Github').underlined().clickOpenUrl('https://github.com/KCtops100/Infinite_Horizons_1.20.1').hover('Click to open'),
            ' or ',
            Text.blue('Discord').underlined().clickOpenUrl('https://discord.gg/9GTuyN4G').hover('Click to open'),
        ]
    );
})