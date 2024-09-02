MoreJSEvents.wandererTrades((event) => {
    const sandTemplates = [
        'minecraft:wayfinder_armor_trim_smithing_template',
        'minecraft:raiser_armor_trim_smithing_template',
        'minecraft:shaper_armor_trim_smithing_template',
        'minecraft:host_armor_trim_smithing_template'
    ];

    const tradeItems = ['3x minecraft:emerald', Item.of('minecraft:brush', '{Damage:0}')];

    sandTemplates.forEach((template) => {
        event.addTrade(2, tradeItems, template);
    });
});
