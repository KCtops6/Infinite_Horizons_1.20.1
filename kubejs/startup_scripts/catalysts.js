StartupEvents.registry('item', e => {
    // Helper function to create catalysts
    function createCatalyst(name) {
        e.create(`${name}_catalyst`).displayName(`${capitalize(name)} Catalyst`).unstackable();
    }

    // Helper function to capitalize names for display
    function capitalize(str) {
        return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    // Vanilla catalyst names
    const vanillaCatalysts = [
        "pillager", "axolotl", "blaze", "camel", "dolphin", "drowned", "elder_guardian",
        "evoker", "fox", "frog", "ghast", "glow_squid", "goat", "guardian", "hoglin",
        "husk", "llama", "magma_cube", "mooshroom", "panda", "parrot", "piglin",
        "polar_bear", "shulker", "slime", "squid", "stray", "turtle", "warden",
        "wither_skeleton", "wolf"
    ];

    // Thermal catalyst names
    const thermalCatalysts = ["basalz", "blitz", "blizz"];

    // Register catalysts using loops
    vanillaCatalysts.forEach(createCatalyst);
    thermalCatalysts.forEach(createCatalyst);
});
