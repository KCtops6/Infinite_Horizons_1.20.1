let fake_waters = [
    'create_confectionery:black_chocolate', 'create_confectionery:flowing_black_chocolate',
    'create_confectionery:white_chocolate', 'create_confectionery:flowing_white_chocolate',
    'create_confectionery:hot_chocolate', 'create_confectionery:flowing_hot_chocolate',
    'create_confectionery:ruby_chocolate', 'create_confectionery:flowing_ruby_chocolate',
    'create_confectionery:caramel', 'create_confectionery:flowing_caramel',
    'createaddition:seed_oil', 'createaddition:flowing_seed_oil',
    'createaddition:bioethanol', 'createaddition:flowing_bioethanol'
]
ServerEvents.tags('fluid', event => {
    fake_waters.forEach(f => {
        event.remove('minecraft:water', f)
    })
})