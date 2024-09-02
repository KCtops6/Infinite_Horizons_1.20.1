ServerEvents.recipes(event => {
    event.remove(
        {
            output: 'projecte:red_matter',
            input:  'projecte:aeternalis_fuel'
        }
    )
    event.shaped(
        Item.of('projecte:red_matter', 1),
        [
          'ADA',
          'ADA',
          'ADA'
        ],
        {
          A:    'projecte:aeternalis_fuel',
          D:    'projecte:dark_matter'
        }
    )
})
// 'projecte:aeternalis_fuel', 'projecte:dark_matter', 'projecte:red_matter'