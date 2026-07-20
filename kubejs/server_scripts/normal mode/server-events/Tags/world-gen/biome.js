// kubejs\server_scripts\normal-mode\server-events\tags\world-gen\biome.js
ServerEvents.tags('worldgen/biome', event => {
    event.remove('minecraft:has_structure/stronghold', '#minecraft:is_overworld');
});