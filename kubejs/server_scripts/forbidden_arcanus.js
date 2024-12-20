ServerEvents.lowPriorityData(event => {
    const recipes = [
        {
            forge_tier: 3,
            aureal: 500,
            blood: 1000,
            experience: 15,
            souls: 10,
            input1: 'minecraft:nether_star',
            input2: 'minecraft:wither_skeleton_skull',
            input3: 'extendedcrafting:enhanced_redstone_catalyst', 
            input4: 'extendedcrafting:enhanced_redstone_catalyst',
            input5: 'extendedcrafting:dark_matter',
            input6: 'extendedcrafting:dark_matter',
            input7: 'extendedcrafting:dark_matter',
            input8: 'extendedcrafting:dark_matter',
            main_ingredient: 'forbidden_arcanus:arcane_crystal_block',
            output: 'kubejs:inferno_prism'
        }, 
        {
            forge_tier: 3,
            aureal: 500,
            blood: 1000,
            experience: 30,
            souls: 15,
            input1: 'minecraft:dragon_egg',
            input2: 'forbidden_arcanus:dragon_scale',
            input3: 'extendedcrafting:enhanced_ender_catalyst', 
            input4: 'extendedcrafting:enhanced_ender_catalyst',
            input5: 'extendedcrafting:dark_matter',
            input6: 'extendedcrafting:dark_matter',
            input7: 'extendedcrafting:dark_matter',
            input8: 'extendedcrafting:dark_matter',
            main_ingredient: 'forbidden_arcanus:arcane_crystal_block',
            output: 'kubejs:void_prism'
        }
    ];
    recipes.forEach(recipe => {
        event.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/eternal_stella', {
            "additional_requirements": {
                "forge_tier": recipe.forge_tier
            },
            "essences": {
                "aureal": recipe.aureal,
                "blood": recipe.blood,
                "experience": recipe.experience,
                "souls": recipe.souls
            },
            "inputs": [
                {
                    "amount": 1,
                    "ingredient": {
                        "item": recipe.input1
                    }
                },
                {
                    "amount": 1,
                    "ingredient": {
                        "item": recipe.input2
                    }
                },
                {
                    "amount": 1,
                    "ingredient": {
                        "item": recipe.input3
                    }
                },
                {
                    "amount": 1,
                    "ingredient": {
                        "item": recipe.input4
                    }
                },
                {
                    "amount": 1,
                    "ingredient": {
                        "item": recipe.input5
                    }
                },
                {
                    "amount": 1,
                    "ingredient": {
                        "item": recipe.input6
                    }
                },
                {
                    "amount": 1,
                    "ingredient": {
                        "item": recipe.input7
                    }
                },
                {
                    "amount": 1,
                    "ingredient": {
                        "item": recipe.input8
                    }
                }
            ],
            "main_ingredient": {
                "item": recipe.main_ingredient
            },
            "result": {
                "type": "forbidden_arcanus:create_item",
                "result_item": {
                    "Count": 1,
                    "id": recipe.output
                }
            }
        });
    });
});