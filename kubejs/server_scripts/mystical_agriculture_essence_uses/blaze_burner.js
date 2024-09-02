/**
 * BLAZE BURNER
 * 
 * 'mysticalagriculture:blaze_essence'
 * 'create:empty_blaze_burner'
 * 'create:blaze_burner'
 */
ServerEvents.recipes(event => {
    event.shaped(
        Item.of('create:blaze_burner', 1),
        [
          'SSS',
          'SNS',
          'SSS'
        ],
        {
          S: 'mysticalagriculture:blaze_essence',
          N: 'create:empty_blaze_burner'
        }
    )
})