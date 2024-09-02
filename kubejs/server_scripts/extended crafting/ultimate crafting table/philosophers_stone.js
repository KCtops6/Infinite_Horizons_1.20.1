ServerEvents.recipes(event => {
    event.remove(
        {
            output: 'projecte:philosophers_stone'
        }
    )
    event.recipes.extendedcrafting.shaped_table('projecte:philosophers_stone',
        [
            'aaaiiieee',
            'aaiiiiiee',
            'aiiiiiiie',
            'iiikkkiii',
            'iiikbkiii',
            'iiikkkiii',
            'fiiiiiiiw',
            'ffiiiiiww',
            'fffiiiwww'
        ], 
        {
            a:  'mysticalagriculture:air_agglomeratio',
            i:  'mysticalagradditions:insanium_essence',
            e:  'mysticalagriculture:earth_agglomeratio',
            k:  'mysticalagriculture:awakened_supremium_gemstone',
            b:  'mysticalagriculture:awakened_supremium_gemstone_block',
            f:  'mysticalagriculture:fire_agglomeratio',
            w:  'mysticalagriculture:water_agglomeratio'
        }
    ).tier(4);
})
