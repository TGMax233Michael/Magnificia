// ingot --> rod
onEvent('recipes', event => {
  // Metal Press
  let ingots_1 = ['gold', 'copper', 'iron', 'brass']
  for (let i of ingots_1) {

    event.custom({
      "type": 'immersiveengineering:metal_press',
      "mold": 'immersiveengineering:mold_plate',
      "result": {
        "count": 1,
        "base_ingredient": Ingredient.of(`create:${i}_sheet`)
      },
      "input": {
        "count": 1,
        "base_ingredient": {
          "tag": `forge:ingots/${i}`,
        }
      },
      "energy": 2400,
    }).id(`kubejs:metal_press/${i}_plate/from_ingot`)

  }

  event.custom({
    "type": 'immersiveengineering:metal_press',
    "mold": 'immersiveengineering:mold_plate',
    "result": {
      "count": 1,
      "base_ingredient": Ingredient.of('createaddition:zinc_sheet')
    },
    "input": {
      "count": 1,
      "base_ingredient": {
        "tag": 'forge:ingots/zinc',
      }
    },
    "energy": 2400,
  }).id(`kubejs:metal_press/zinc_plate/from_ingot`)


  // Create Pressing
  let ingots_2 = ['aluminum', 'lead', 'silver', 'nickel', 'uranium', 'constantan', 'electrum', 'steel']
  for (let i of ingots_2) {

    event.custom({
      "type": "create:pressing",
      "ingredients": [
        {
          "tag": `forge:ingots/${i}`
        }
      ],
      "results": [
        {
          "item": `immersiveengineering:plate_${i}`
        }
      ]
    }).id(`kubejs:pressing/${i}_plate/from_ingot`)
  }

  return;
});

