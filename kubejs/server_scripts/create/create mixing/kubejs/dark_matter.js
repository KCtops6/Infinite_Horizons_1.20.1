// https://kubejs.com/wiki/addons/create#mixing
ServerEvents.recipes(event => {
    /**
     * 'gtceu:ender_pearl_dust'
     * 'create:cinder_flour'
     * 'kubejs:dark_matter'
     */
    event.recipes.createMixing('kubejs:dark_matter', ['gtceu:ender_pearl_dust', 'create:cinder_flour']).superheated()
})