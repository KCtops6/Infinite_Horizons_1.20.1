StartupEvents.registry('block', event => {
    const blocks = [
        'brass', 'bronze', 'constantan', 'copper', 'electrum', 'gold', 'invar', 'iron', 'lead', 'nickel', 'silver', 'tin', 'zinc'
    ];
    
    blocks.forEach(block => {
        event.create(`${block}_block`) // Create a new block
        .displayName(`${capitalize(block)} Block`) // Set a custom name
        .soundType('metal') // Set a material (affects the sounds and some properties)
        .hardness(5.0) // Set hardness (affects mining time)
        .resistance(6.0) // Set resistance (to explosions, etc)
        .requiresTool(true) // Requires a tool or it won't drop (see tags below)
        .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
        .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
    })
    
})

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}