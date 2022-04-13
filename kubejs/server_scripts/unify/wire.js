// ingot --> wire
onEvent('recipes', event => {
  // Metal Press
  let ingots_1 = ['electrum', 'copper', 'aluminum', 'steel', 'lead']
  for (let i of ingots_1) {

    event.custom({
      "type": 'immersiveengineering:metal_press',
      "mold": 'immersiveengineering:mold_wire',
      "result": {
        "count": 2,
        "base_ingredient": Ingredient.of(`immersiveengineering:wire_${i}`)
      },
      "input": {
        "count": 1,
        "base_ingredient": {
          "tag": `forge:plates/${i}`,
        }
      },
      "energy": 2400,
    }).id(`kubejs:metal_press/${i}_wire/from_plates`)
  }

  let ingots_2 = ['iron', 'gold']
  for (let i of ingots_2) {
    event.custom({
      "type": 'immersiveengineering:metal_press',
      "mold": 'immersiveengineering:mold_wire',
      "result": {
        "count": 2,
        "base_ingredient": Ingredient.of(`createaddition:${i}_wire`)
      },
      "input": {
        "count": 1,
        "base_ingredient": {
          "tag": `forge:plates/${i}`,
        }
      },
      "energy": 2400,
    }).id(`kubejs:metal_press/${i}_wire/from_plates`)
  }

  event.custom({
    "type": 'createaddition:rolling',
    "input": {
      "tag": `forge:plates/lead`,
    },
    "result": {
      "item": `immersiveengineering:wire_lead`,
      "count": 2,
    }
  }).id(`kubejs:rolling/lead_wire/from_plates`)

  return;
});

