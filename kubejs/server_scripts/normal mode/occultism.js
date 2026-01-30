ServerEvents.recipes(event => {
    const replacements = [
        { id: 'occultism:crushing/end_stone_dust', output: 'occultism:crushed_end_stone' },
        { id: 'occultism:crushing/iesnium_dust_from_ingot', output: 'occultism:iesnium_dust' },
        { id: 'occultism:crushing/iesnium_dust', output: '2x occultism:iesnium_dust' },
        { id: 'occultism:crushing/iesnium_dust_from_raw', output: '2x occultism:iesnium_dust' },
        { id: 'occultism:crushing/iesnium_dust_from_raw_block', output: '18x occultism:iesnium_dust' },
        { id: 'occultism:crushing/arcane_crystal_dust', output: '4x forbidden_arcanus:arcane_crystal_dust' },
        { id: 'occultism:crushing/arcane_crystal_dust_from_gem', output: 'forbidden_arcanus:arcane_crystal_dust' },
        { id: 'occultism:crushing/redstone_dust', output: '4x minecraft:redstone_dust' },
        { id: 'occultism:crushing/blaze_powder_from_rod', output: 'minecraft:blaze_powder' },
        { id: 'occultism:crushing/topaz_dust_from_gem', output: 'gtceu:topaz_dust' }
    ];

    replacements.forEach(replacement => {
        event.replaceOutput({ id: replacement.id }, 'minecraft:barrier', replacement.output);
    });
});
