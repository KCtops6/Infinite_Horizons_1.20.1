// https://kubejs.com/wiki/tutorials/recipes#modifying-and-replacing-recipes
ServerEvents.recipes(event => {
    // replace inputs
    const replaceInputs = [
        { old: 'extendedcrafting:black_iron_slate', new: 'kubejs:infinitium_plate' },
        { old: 'extendedcrafting:black_iron_block', new: 'kubejs:infinitium_block' },
        { old: 'extendedcrafting:black_iron_ingot', new: 'kubejs:infinitium_ingot' }
    ];
    replaceInputs.forEach(input => { event.replaceInput({ input: input.old }, input.old, input.new); });

    // // replace outputs
    // const replaceOutputs = [ ];
    // replaceOutputs.forEach(outputs => { event.replaceInput({ outputs: outputs.old }, outputs.old, outputs.new); });
});