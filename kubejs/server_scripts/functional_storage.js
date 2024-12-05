ServerEvents.recipes(event => {
    event.remove({id: 'functionalstorage:oak_drawer_alternate_x1'})
    event.remove({id: 'functionalstorage:oak_drawer_alternate_x2'})
    event.remove({id: 'functionalstorage:oak_drawer_alternate_x4'})
    event.custom({ 
        type: "functionalstorage:custom_compacting", 
        higher_input: { 
          count: 1, 
          item: "gtceu:gallium_arsenide_dust"
        }, 
        lower_input: { 
          count: 4, 
          item: "gtceu:small_gallium_arsenide_dust"
        } 
    })
    event.custom({ 
      type: "functionalstorage:custom_compacting", 
      higher_input: { 
        count: 1, 
        item: "gtceu:ash_dust"
      }, 
      lower_input: { 
        count: 9, 
        item: "gtceu:tiny_ash_dust"
      } 
    })
})