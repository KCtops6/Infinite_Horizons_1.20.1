ServerEvents.recipes(event => {
    /**
     * 'kubejs:bomb'
     * 'minecraft:tnt'
     * 'ae2:tiny_tnt'
     * 'thermal:detonator'
     * 'thermal:explosive_grenade'
     * 'thermal:ender_tnt'
     * 'thermal:glowstone_tnt'
     * 'thermal:redstone_tnt'
     * 'thermal:slime_tnt'
     * 'thermal:fire_tnt'
     * 'mekanismadditions:obsidian_tnt'
     * 'thermal:ender_grenade'
     * 'thermal:glowstone_grenade'
     * 'thermal:ice_tnt'
     * 'thermal:lightning_tnt'
     * 'thermal:earth_tnt'
     * 'thermal:redstone_grenade'
     * 'thermal:slime_grenade'
     * 'thermal:fire_grenade'
     * 'thermal:ice_grenade'
     * 'thermal:lightning_grenade'
     * 'thermal:earth_grenade'
     */
    event.recipes.extendedcrafting.combination(
        'kubejs:bomb',    // Output
        'minecraft:tnt',    // Catalyst
        // Input items
        ['ae2:tiny_tnt',
        'thermal:detonator',
        'thermal:explosive_grenade',
        'thermal:ender_tnt',
        'thermal:glowstone_tnt',
        'thermal:redstone_tnt',
        'thermal:slime_tnt',
        'thermal:fire_tnt',
        'mekanismadditions:obsidian_tnt',
        'thermal:ender_grenade',
        'thermal:glowstone_grenade',
        'thermal:ice_tnt',
        'thermal:lightning_tnt',
        'thermal:earth_tnt',
        'thermal:redstone_grenade',
        'thermal:slime_grenade',
        'thermal:fire_grenade',
        'thermal:ice_grenade',
        'thermal:lightning_grenade',
        'thermal:earth_grenade',
        'ars_nouveau:bombegranate_pod',
        'supplementaries:bomb'],
        10000000    // RF cost
    );
})