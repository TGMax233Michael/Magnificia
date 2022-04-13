onEvent('recipes', event => {

  // ingot --> dust(grit)
  event.remove({
    id: `mekanism:processing/steel/ingot_to_dust`
  })

  event.custom({
    "type": "mekanism:crushing",
    "input": {
      "ingredient": Ingredient.of('#forge:ingots/steel'),
      "amount": 1,
    },
    "output": {
      "item": 'immersiveengineering:dust_steel',
      "count": 1,
    }
  }).id(`kubejs:mekanism/crushing/dust_steel/from_ingot`)

  // enriched iron --> dust(grit)
  event.remove({
    id: `mekanism:processing/steel/enriched_iron_to_dust`
  })

  event.custom({
    "type": "mekanism:metallurgic_infusing",
    "itemInput": {
        "ingredient": Ingredient.of("mekanism:enriched_iron"),
    },
    "chemicalInput": {
        "amount": 10,
        "tag": "mekanism:carbon",
    },
    "output": {
        "item": 'immersiveengineering:dust_steel'
    }
}).id(`kubejs:mekanism/crushing/dust_steel/from_enriched_iron`)

  return;
});
