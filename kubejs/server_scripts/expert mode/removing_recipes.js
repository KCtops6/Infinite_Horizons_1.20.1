//packmode: expert

// https://kubejs.com/wiki/tutorials/recipes#removing-recipes
ServerEvents.recipes(event => {
    // removing by id
    const identifications = [
        "industrialforegoing:machine_frame_pity", "industrialforegoing:fluid_extractor", "industrialforegoing:latex_processing_unit",
        "industrialforegoing:dissolution_chamber", "industrialforegoing:plant_gatherer", "industrialforegoing:sewer",
        "industrialforegoing:sewage_composter", "industrialforegoing:plant_fertilizer", "industrialforegoing:plant_sower",
        "industrialforegoing:mob_slaugher_factory", "industrialforegoing:animal_rancher", "industrialforegoing:animal_feeder",
        "industrialforegoing:animal_baby_seperator", "industrialforegoing:mob_crusher", "industrialforegoing:hydroponic_bed",
        "industrialforegoing:mob_duplicator", "industrialforegoing:material_stonework_factory", "enderio:alloy_smelting/dark_steel_ingot",
        "enderio:alloy_smelting/end_steel_ingot", "thermal:machine_frame"
    ];
    identifications.forEach(identification => {
        event.remove({ id: identification });
    });
    
    // removing by output
    const outputs = [
        
    ];
    outputs.forEach(output => {
        event.remove({ output: output });
    });

    // removing by mod
    const mods = [

    ];
    mods.forEach(mod => {
        event.remove({mod: mod});
    });
});