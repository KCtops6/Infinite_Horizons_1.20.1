// https://kubejs.com/wiki/tutorials/recipes#modifying-and-replacing-recipes
ServerEvents.recipes(event => {
    // replace inputs
    const replaceInputs = [
        { old: 'extendedcrafting:black_iron_slate', new: 'kubejs:infinitium_plate' },
        { old: 'extendedcrafting:black_iron_block', new: 'kubejs:infinitium_block' },
        { old: 'extendedcrafting:black_iron_ingot', new: 'kubejs:infinitium_ingot' },
        { old: 'botania:elementium_ingot', new: 'kubejs:elementium_ingot'}
    ];
    replaceInputs.forEach(input => { event.replaceInput({ input: input.old }, input.old, input.new); });

    // replace outputs
    const replaceOutputs = [ 
        { old: 'thermal:ender_pearl_dust', new: 'kubejs:ender_pearl_dust' },
        { old: 'gtceu:ender_pearl_dust', new: 'kubejs:ender_pearl_dust' }
    ];
    replaceOutputs.forEach(outputs => { event.replaceOutput({ outputs: outputs.old }, outputs.old, outputs.new); });
});