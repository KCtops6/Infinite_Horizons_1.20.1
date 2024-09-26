ServerEvents.recipes(event => {
    const data = {
        ulv: 'red_alloy',
        lv: 'tin',
        mv: 'copper',
        hv: 'gold',
        ev: 'aluminum',
        iv: 'platinum',
        luv: 'niobium_titanium',
        zpm: 'vanadium_gallium',
        uv: 'yttrium_barium_cuprate',
        uhv: 'europium'
    };

    Object.entries(data).forEach(([tier, material]) => {
        event.shapeless(`gtceu:${tier}_1a_energy_converter`, [
            `gtceu:${material}_single_cable`,
            `gtceu:${tier}_machine_hull`,
            `#gtceu:circuits/${tier}`
        ]);
    });

    Object.entries(data).forEach(([tier, material]) => {
        event.shapeless(`gtceu:${tier}_4a_energy_converter`, [
            `gtceu:${material}_quadruple_cable`,
            `gtceu:${tier}_machine_hull`,
            `#gtceu:circuits/${tier}`
        ]);
    });

    Object.entries(data).forEach(([tier, material]) => {
        event.shapeless(`gtceu:${tier}_8a_energy_converter`, [
            `gtceu:${material}_octal_cable`,
            `gtceu:${tier}_machine_hull`,
            `#gtceu:circuits/${tier}`
        ]);
    });

    Object.entries(data).forEach(([tier, material]) => {
        event.shapeless(`gtceu:${tier}_16a_energy_converter`, [
            `gtceu:${material}_hex_cable`,
            `gtceu:${tier}_machine_hull`,
            `#gtceu:circuits/${tier}`
        ]);
    });
});

