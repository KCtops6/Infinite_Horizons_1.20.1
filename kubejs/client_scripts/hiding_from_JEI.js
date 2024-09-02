JEIEvents.hideItems((event) => {
    // event.hide();
    /**
     * APPLIED ENERGISTICS 2
     * Hiding all AE2 facades as they take up half of JEI.
     */
    event.hide('ae2:facade');
    /**
     * CREATE SIFTER
     * Hiding all unused items from create sifter.
     */
    event.hide('createsifter:string_mesh');
    event.hide('createsifter:andesite_mesh');
    event.hide('createsifter:zinc_mesh');
    event.hide('createsifter:custom_mesh');
    event.hide('createsifter:advanced_brass_mesh');
    event.hide('createsifter:advanced_custom_mesh');
    /**
     * EXTENDED CRAFTING
     * Hiding all unused items/blocks from extended crafting.
     */
    event.hide('extendedcrafting:luminessence_block');
    event.hide('extendedcrafting:redstone_ingot_block');
    event.hide('extendedcrafting:enhanced_redstone_ingot_block');
    event.hide('extendedcrafting:ender_ingot_block');
    event.hide('extendedcrafting:enhanced_ender_ingot_block');
    event.hide('extendedcrafting:crystaltine_block');
    event.hide('extendedcrafting:the_ultimate_block');
    event.hide('extendedcrafting:nether_star_block');
    event.hide('extendedcrafting:flux_star_block');
    event.hide('extendedcrafting:ender_star_block');
    event.hide('extendedcrafting:black_iron_nugget');
    event.hide('extendedcrafting:redstone_nugget');
    event.hide('extendedcrafting:enhanced_redstone_nugget');
    event.hide('extendedcrafting:ender_nugget');
    event.hide('extendedcrafting:enhanced_ender_nugget');
    event.hide('extendedcrafting:crystaltine_nugget');
    event.hide('extendedcrafting:the_ultimate_nugget');
    event.hide('extendedcrafting:black_iron_block');
    event.hide('extendedcrafting:black_iron_ingot');
    event.hide('extendedcrafting:black_iron_slate');
    /**
     * GREGTECH
     * Hiding all ore blocks from Gregtech as they are redundant.
     */
    event.hide('#forge:ores_in_ground/andesite')
    event.hide('#forge:ores_in_ground/basalt')
    event.hide('#forge:ores_in_ground/blackstone')
    event.hide('#forge:ores_in_ground/deepslate')
    event.hide('#forge:ores_in_ground/diorite')
    event.hide('#forge:ores_in_ground/endstone')
    event.hide('#forge:ores_in_ground/gravel')
    event.hide('#forge:ores_in_ground/granite')
    event.hide('#forge:ores_in_ground/marble')
    event.hide('#forge:ores_in_ground/netherrack')
    event.hide('#forge:ores_in_ground/red_granite')
    event.hide('#forge:ores_in_ground/red_sand')
    event.hide('#forge:ores_in_ground/sand')
    event.hide('#forge:ores_in_ground/stone')
    event.hide('#forge:ores_in_ground/tuff')

    event.hide('create:andesite_alloy')
});