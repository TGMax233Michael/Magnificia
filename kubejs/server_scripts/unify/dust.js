onEvent('recipes', event => {

    let metal = ['iron', 'gold', 'copper']
    for (let i of metal) {
        // dirty dust --> dust(grit)
        event.custom({
            "type": "mekanism:enriching",
            "input": {
                "ingredient": Ingredient.of(`#mekanism:dirty_dusts/${i}`)
            },
            "output": Ingredient.of(`immersiveengineering:dust_${i}`)
        }).id(`kubejs:mekanism/enriching/dust_${i}/from_dirty_dust`)

        // ore --> dust(grit)
        event.custom({
            "type": "mekanism:enriching",
            "input": {
                "ingredient": Ingredient.of(`#forge:ores/${i}`)
            },
            "output": {
                "item": `immersiveengineering:dust_${i}`,
                "count": 2,
            }
        }).id(`kubejs:mekanism/enriching/dust_${i}/from_ore`)

        event.custom({
            "type": "mekanism:enriching",
            "input": {
                "ingredient": `#forge:raw_materials/${i}`,
                "amount": 3,
            },

            "output": {
                "item": `immersiveengineering:dust_${i}`,
                "count": 4,
            }
        }).id(`kubejs:mekanism/enriching/dust_${i}/from_raw_ore`)

        // ingot --> dust(grit)
        event.custom({
            "type": "mekanism:crushing",
            "input": {
                "ingredient": Ingredient.of(`#forge:ingots/${i}`)
            },
            "output": {
                "item": `immersiveengineering:dust_${i}`,
                "count": 1,
            }
        }).id(`kubejs:mekanism/crushing/dust_${i}/from_ingot`)


    }

    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "tag": 'forge:obsidian'
            }
        ],
        "results": [
            {
                "item": 'mekanism:dust_obsidian',
                "count": 3
            },
            {
                "item": 'mekanism:dust_obsidian',
                "count": 2,
                "chance": 0.75
            }
        ],
        "processingTime": 500
    }).id(`kubejs:create/crushing/obsidian_dust`)

    return;
});

