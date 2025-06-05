/**
 * To create custom tools, you specify an additional argument after the item name in the create() function.
 * Valid tool types are 'sword', 'pickaxe', 'axe', 'shovel', 'shears', 'hoe'.
 * The tier() function is chained onto create() and that depicts the base stats of the tool.
 * Valid tier types (vanilla) are 'wood', 'stone', 'gold', 'iron', 'diamond', 'netherite'.
 * 
 * You also need to implement the model in kubejs\assets\models\item\item_name.json.
 * For example, for the 'wooden_trowel', the json file must be titled 'wooden_trowel.json'.
 * 
 * You also need to specifiy a texture for the tool in kubejs\assets\textures\item\item_name.png.
 * For example, for the 'wooden_trowel', the png file must be titled 'wooden_trowel.png'.
 */
StartupEvents.registry('item', event => {
    /**
     * Creating trowels used in Infinite Horizons 2.
     * Trowels act as shovels, but have special functionality implemented in "server scripts".
     */
    event.create('wooden_trowel', 'shovel').tier('wood')
    event.create('stone_trowel', 'shovel').tier('stone')
    event.create('iron_trowel', 'shovel').tier('iron')
    /**
     * Creating hammers used in Infinite Horizons 2.
     * Hammers act as pickaxes, but have special functionality implemented in "server scripts".
     */
    event.create('stone_hammer', 'pickaxe').tier('stone')
    event.create('iron_hammer', 'pickaxe').tier('iron')
})
