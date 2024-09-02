// https://wiki.latvian.dev/books/kubejs/page/recipes#bkmrk-removing-recipes%E2%86%91 
ServerEvents.recipes(event => {
    event.shaped(
        /**
         * 'summoningrituals:altar'
         * 'minecraft:red_carpet'
         * 'minecraft:dark_oak_log'
         * 'create:golden_sheet'
         * 'minecraft:wither_skeleton_skull'
         * 'minecraft:candle'
         * 'create:brass_sheet'
         */
        Item.of('summoningrituals:altar', 1),
        [
          'DEF',
          'CAC',
          'BAB'
        ],
        {
          A:    'minecraft:dark_oak_log',
          B:    'create:brass_sheet',
          C:    'create:golden_sheet',
          D:    'minecraft:candle',
          E:    'minecraft:red_carpet',
          F:    'minecraft:wither_skeleton_skull'
        }
    )
})