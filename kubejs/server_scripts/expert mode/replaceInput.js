//packmode: expert

ServerEvents.recipes(event => {
    event.replaceInput({ mod: 'ars_nouveau' }, 'minecraft:gold_ingot', 'kubejs:electrum_ingot')
    event.replaceInput({ mod: 'ars_nouveau' }, 'minecraft:gold_nugget', 'kubejs:electrum_ingot')
})
  