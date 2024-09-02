StartupEvents.registry('item', event => {
    event.create('copper_mesh','createsifter:mesh').displayName('Copper Mesh').parentModel("createsifter:block/meshes/mesh").texture("mesh","kubejs:item/copper_mesh").texture("frame","kubejs:block/example_mesh_frame");
    event.create('iron_mesh','createsifter:mesh').displayName('Iron Mesh').parentModel("createsifter:block/meshes/mesh").texture("mesh","kubejs:item/iron_mesh").texture("frame","kubejs:block/example_mesh_frame");
    event.create('netherite_mesh','createsifter:mesh').displayName('Netherite Mesh').parentModel("createsifter:block/meshes/mesh").texture("mesh","kubejs:item/netherite_mesh").texture("frame","kubejs:block/example_mesh_frame");
})