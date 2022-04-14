// dirty dust --> dust(grit)
onEvent('recipes', event => {
  
  event.remove({
    id: `mekanism:processing/lead/dust/from_dirty_dust`
  })


  event.custom({
    "type": "mekanism:enriching",
    "input": {
      "ingredient": Ingredient.of('#mekanism:dirty_dusts/lead')
    },
    "output": Ingredient.of('immersiveengineering:dust_lead')
  }).id(`kubejs:mekanism/enriching/dust_lead/from_dirty_dust`)

  return;
});

// ore --> dust(grit)
onEvent('recipes', event => {

  event.remove({
    id: `mekanism:processing/lead/dust/from_ore`
  })

  event.remove({
    id: `mekanism:processing/lead/dust/from_raw_ore`
  })


  event.custom({
    "type": "mekanism:enriching",
    "input": {
      "ingredient": Ingredient.of('#forge:ores/lead')
    },
    "output": {
      "item": 'immersiveengineering:dust_lead',
      "count": 2,
    }
  }).id(`kubejs:mekanism/enriching/dust_lead/from_ore`)


  event.custom({
    "type": "mekanism:enriching",
    "input": {
      "ingredient": '#forge:raw_materials/lead',
      "amount": 3,
    },
    "output": {
      "item": 'immersiveengineering:dust_lead',
      "count": 4,
    }
  }).id(`kubejs:mekanism/enriching/dust_lead/from_raw_ore`)

  return;
});

// ingot --> dust(grit)
onEvent('recipes', event => {

  event.remove({
    id: `mekanism:processing/lead/dust/from_ingot`
  })


  event.custom({
    "type": "mekanism:crushing",
    "input": {
      "ingredient": Ingredient.of('#forge:ingots/lead')
    },
    "output": {
      "item": 'immersiveengineering:dust_lead',
      "count": 1,
    }
  }).id(`kubejs:mekanism/crushing/dust_lead/from_ingot`)

  return;
});


// raw --> ore
onEvent('recipes', event => {

  event.custom({
    "type": "mekanism:combining",
    "mainInput": {
      "ingredient": Ingredient.of('#forge:raw_materials/lead'),
      "amount": 8,
    },
    "extraInput": {
      "ingredient": Ingredient.of('minecraft:cobblestone'),
      "amount": 1,
    },
    "output": {
      "item": 'immersiveengineering:ore_lead',
      "count": 1,
    }
  }).id('kubejs:mekanism/combining/ore_lead/from_raw_ore')


  event.custom({
    "type": "mekanism:combining",
    "mainInput": {
      "ingredient": Ingredient.of('#forge:raw_materials/lead'),
      "amount": 8,
    },
    "extraInput": {
      "ingredient": Ingredient.of('minecraft:cobbled_deepslate'),
      "amount": 1,
    },
    "output": {
      "item": 'immersiveengineering:deepslate_ore_lead',
      "count": 1,
    }
  }).id('kubejs:mekanism/combining/ore_lead/from_deepslate_raw_ore')

  return;
});