onEvent('recipes', event => {
  let ingots = ['uranium', 'lead']
  for (let i of ingots) {

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

    
    // raw --> ore
    event.custom({
      "type": "mekanism:combining",
      "mainInput": {
        "ingredient": Ingredient.of(`#forge:raw_materials/${i}`),
        "amount": 8,
      },
      "extraInput": {
        "ingredient": Ingredient.of('minecraft:cobblestone'),
        "amount": 1,
      },
      "output": {
        "item": `immersiveengineering:ore_${i}`,
        "count": 1,
      }
    }).id(`kubejs:mekanism/combining/ore_${i}/from_raw_ore`)


    event.custom({
      "type": "mekanism:combining",
      "mainInput": {
        "ingredient": Ingredient.of(`#forge:raw_materials/${i}`),
        "amount": 8,
      },
      "extraInput": {
        "ingredient": Ingredient.of('minecraft:cobbled_deepslate'),
        "amount": 1,
      },
      "output": {
        "item": `immersiveengineering:deepslate_ore_${i}`,
        "count": 1,
      }
    }).id(`kubejs:mekanism/combining/ore_${i}/from_deepslate_raw_ore`)
  }

  return;
});






