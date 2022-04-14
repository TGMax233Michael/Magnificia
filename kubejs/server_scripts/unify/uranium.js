// dirty dust --> dust(grit)
onEvent('recipes', event => {
  event.remove({
    id: `mekanism:processing/uranium/dust/from_dirty_dust`
  })


  event.custom({
    "type": "mekanism:enriching",
    "input": {
      "ingredient": Ingredient.of('#mekanism:dirty_dusts/uranium')
    },
    "output": Ingredient.of('immersiveengineering:dust_uranium')
  }).id(`kubejs:mekanism/enriching/dust_uranium/from_dirty_dust`)

  return;
});

// ore --> dust(grit)
onEvent('recipes', event => {
  event.remove({
    id: `mekanism:processing/uranium/dust/from_ore`
  })

  event.remove({
    id: `mekanism:processing/uranium/dust/from_raw_ore`
  })


  event.custom({
    "type": "mekanism:enriching",
    "input": {
      "ingredient": Ingredient.of('#forge:ores/uranium')
    },
    "output": {
      "item": 'immersiveengineering:dust_uranium',
      "count": 2,
    }
  }).id(`kubejs:mekanism/enriching/dust_uranium/from_ore`)


  event.custom({
    "type": "mekanism:enriching",
    "input": {
      "ingredient": '#forge:raw_materials/uranium',
      "amount": 3,
    },

    "output": {
      "item": 'immersiveengineering:dust_uranium',
      "count": 4,
    }
  }).id(`kubejs:mekanism/enriching/dust_uranium/from_raw_ore`)

  return;
});

// ingot --> dust(grit)
onEvent('recipes', event => {

  event.remove({
    id: `mekanism:processing/uranium/dust/from_ingot`
  })
  event.remove({
    id: `mekanism:processing/lead/dust/from_ingot`
  })


  event.custom({
    "type": "mekanism:crushing",
    "input": {
      "ingredient": Ingredient.of('#forge:ingots/uranium')
    },
    "output": {
      "item": 'immersiveengineering:dust_uranium',
      "count": 1,
    }
  }).id(`kubejs:mekanism/crushing/dust_uranium/from_ingot`)

  return;
});


// raw --> ore
onEvent('recipes', event => {

  event.custom({
    "type": "mekanism:combining",
    "mainInput": {
      "ingredient": Ingredient.of('#forge:raw_materials/uranium'),
      "amount": 8,
    },
    "extraInput": {
      "ingredient": Ingredient.of('minecraft:cobblestone'),
      "amount": 1,
    },
    "output": {
      "item": 'immersiveengineering:ore_uranium',
      "count": 1,
    }
  }).id('kubejs:mekanism/combining/ore_uranium/from_raw_ore')


  event.custom({
    "type": "mekanism:combining",
    "mainInput": {
      "ingredient": Ingredient.of('#forge:raw_materials/uranium'),
      "amount": 8,
    },
    "extraInput": {
      "ingredient": Ingredient.of('minecraft:cobbled_deepslate'),
      "amount": 1,
    },
    "output": {
      "item": 'immersiveengineering:deepslate_ore_uranium',
      "count": 1,
    }
  }).id('kubejs:mekanism/combining/ore_uranium/from_deepslate_raw_ore')

  return;
});