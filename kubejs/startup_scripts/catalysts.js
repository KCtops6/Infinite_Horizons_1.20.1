// StartupEvents.registry('item', e => {
//     // Vanilla
//     e.create("pillager_catalyst").displayName("Pillager Catalyst").unstackable()
//     e.create("axolotl_catalyst").displayName("Axolotl Catalyst").unstackable()
//     e.create("blaze_catalyst").displayName("Blaze Catalyst").unstackable()
//     e.create("camel_catalyst").displayName("Camel Catalyst").unstackable()
//     e.create("dolphin_catalyst").displayName("Dolphin Catalyst").unstackable()
//     e.create("drowned_catalyst").displayName("Drowned Catalyst").unstackable()
//     e.create("elder_guardian_catalyst").displayName("Elder Guardian Catalyst").unstackable()
//     e.create("evoker_catalyst").displayName("Evoker Catalyst").unstackable()
//     e.create("fox_catalyst").displayName("Fox Catalyst").unstackable()
//     e.create("frog_catalyst").displayName("Frog Catalyst").unstackable()
//     e.create("ghast_catalyst").displayName("Ghast Catalyst").unstackable()
//     e.create("glow_squid_catalyst").displayName("Glow Squid Catalyst").unstackable()
//     e.create("goat_catalyst").displayName("Goat Catalyst").unstackable()
//     e.create("guardian_catalyst").displayName("Guardian Catalyst").unstackable()
//     e.create("hoglin_catalyst").displayName("Hoglin Catalyst").unstackable()
//     e.create("husk_catalyst").displayName("Husk Catalyst").unstackable()
//     e.create("llama_catalyst").displayName("Llama Catalyst").unstackable()
//     e.create("magma_cube_catalyst").displayName("Magma Cube Catalyst").unstackable()
//     e.create("mooshroom_catalyst").displayName("Mooshroom Catalyst").unstackable()
//     e.create("panda_catalyst").displayName("Panda Catalyst").unstackable()
//     e.create("parrot_catalyst").displayName("Parrot Catalyst").unstackable()
//     e.create("piglin_catalyst").displayName("Piglin Catalyst").unstackable()
//     e.create("polar_bear_catalyst").displayName("Polar Bear Catalyst").unstackable()
//     e.create("shulker_catalyst").displayName("Shulker Catalyst").unstackable()
//     e.create("slime_catalyst").displayName("Slime Catalyst").unstackable()
//     e.create("squid_catalyst").displayName("Squid Catalyst").unstackable()
//     e.create("stray_catalyst").displayName("Stray Catalyst").unstackable()
//     e.create("turtle_catalyst").displayName("Turtle Catalyst").unstackable()
//     e.create("warden_catalyst").displayName("Warden Catalyst").unstackable()
//     e.create("wither_skeleton_catalyst").displayName("Wither Skeleton Catalyst").unstackable()
//     e.create("wolf_catalyst").displayName("Wolf Catalyst").unstackable()

//     // Thermal
//     e.create("basalz_catalyst").displayName("Basalz Catalyst").unstackable()
//     e.create("blitz_catalyst").displayName("Blitz Catalyst").unstackable()
//     e.create("blizz_catalyst").displayName("Blizz Catalyst").unstackable()
// })

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
