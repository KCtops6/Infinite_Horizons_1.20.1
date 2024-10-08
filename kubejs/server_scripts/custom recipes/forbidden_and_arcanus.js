ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('kubejs:forbidden_transmutation_matter', 16),
        [
            'forbidden_arcanus:arcane_crystal_dust',
            'forbidden_arcanus:corrupti_dust',
            'forbidden_arcanus:mundabitur_dust'
        ]
    )
    event.shapeless(
        Item.of('forbidden_arcanus:growing_edelwood', 1),
        [
            '#minecraft:saplings',
            'kubejs:forbidden_transmutation_matter'
        ]
    )
    event.shaped(
        Item.of('forbidden_arcanus:darkstone', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:stone',
            B: 'kubejs:forbidden_transmutation_matter'
        }
    )
})