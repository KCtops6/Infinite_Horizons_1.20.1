ServerEvents.recipes(event => {
    event.recipes.createCrushing([
        'gtceu:raw_calcite',
        Item.of('gtceu:calcium_dust').withChance(0.5),
        Item.of('gtceu:raw_sodalite').withChance(0.25)],
        'minecraft:calcite'
    )
    event.recipes.createMilling([
        'gtceu:raw_calcite'],
        'minecraft:calcite'
    )
})