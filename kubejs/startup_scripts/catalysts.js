StartupEvents.registry('item', e => {
    function createCatalyst(name) {
        e.create(`${name}_catalyst`).displayName(`${capitalize(name)} Catalyst`).unstackable();
    }
    function capitalize(str) {
        return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
    const vanillaCatalysts = [
        "pillager", "axolotl", "blaze", "camel", "dolphin", "drowned", "elder_guardian",
        "evoker", "fox", "frog", "ghast", "glow_squid", "goat", "guardian", "hoglin",
        "husk", "llama", "magma_cube", "mooshroom", "panda", "parrot", "piglin",
        "polar_bear", "shulker", "slime", "squid", "stray", "turtle", "warden",
        "wither_skeleton", "wolf", "basalz", "blitz", "blizz"
    ];
    vanillaCatalysts.forEach(createCatalyst);
});
