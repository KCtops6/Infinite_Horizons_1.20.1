ServerEvents.recipes(event => {
    event.replaceInput({ input: '#forge:dough' }, '#forge:dough', 'create:dough');
    event.replaceInput({ input: '#forge:flour' }, '#forge:flour', 'create:wheat_flour');
});