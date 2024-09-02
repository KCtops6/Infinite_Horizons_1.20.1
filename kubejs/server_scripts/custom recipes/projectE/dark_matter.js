ServerEvents.recipes(event => {
    event.remove(
        {
            output: 'projecte:dark_matter',
            input:  'projecte:aeternalis_fuel'
        }
    )
    event.shaped(
        Item.of('projecte:dark_matter', 1),
        [
          'AAA',
          'AIA',
          'AAA'
        ],
        {
          A:    'projecte:aeternalis_fuel',
          I:    'mysticalagradditions:insanium_gemstone'
        }
    )
})