/**
 * WOODEN LAVA BUCKET
 * 
 * Item.of('woodenbucket:wooden_bucket', '{Damage:0,Fluid:{Amount:1000,FluidName:"minecraft:lava"}}')
 * Item.of('woodenbucket:wooden_bucket', '{Damage:0}')
 * 'mysticalagriculture:fire_essence'
 */
ServerEvents.recipes(event => {
    event.shaped(
        Item.of('woodenbucket:wooden_bucket', '{Damage:0,Fluid:{Amount:1000,FluidName:"minecraft:lava"}}'),
        [
          'AFA',
          'FBF',
          'AFA'
        ],
        {
          A: 'minecraft:air',
          F: 'mysticalagriculture:fire_essence',
          B: Item.of('woodenbucket:wooden_bucket', '{Damage:0}')
        }
      )
})