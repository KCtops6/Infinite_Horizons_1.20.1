ServerEvents.recipes(event => {
    // .energizing([inputs, ...], output, energy)
	event.recipes.powah.energizing(["minecraft:gold_block", "minecraft:iron_block"], "2x powah:energized_steel_block", 90000);
    event.recipes.powah.energizing(["botania:blaze_block"], "powah:blazing_crystal_block", 180000);
    event.recipes.powah.energizing(["minecraft:diamond_block"], "powah:niotic_crystal_block", 2700000);
    event.recipes.powah.energizing(["minecraft:emerald_block"], "powah:spirited_crystal_block", 9000000);
})

PowahEvents.registerCoolants(event => {
    // .addFluid(fluid, coolness)
	//event.addFluid("minecraft:lava", 10);
    
    // .addSolid(fluid, coolness)
	//event.addSolid("minecraft:cobblestone", 10);
})

PowahEvents.registerHeatSource(event => {
    // .add(block, hotness)
	//event.add("minecraft:cobblestone", 10);
})

PowahEvents.registerMagmaticFluid(event => {
    // .add(fluid, hotness)
	//event.add("minecraft:water", 10);
})