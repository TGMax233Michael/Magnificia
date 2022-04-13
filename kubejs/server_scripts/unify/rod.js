// ingot --> rod
onEvent('recipes', event => {
  // Immersive Engineering's Rod
  let ingots_1 = ['iron', 'steel', 'aluminum']
  for (let i of ingots_1) {

    // Rolling Mill
    event.custom({
      "type": 'createaddition:rolling',
      "input": {
        "tag": `forge:ingots/${i}`,
      },
      "result": {
        "item": `immersiveengineering:stick_${i}`,
        "count": 2,
      }
    }).id(`kubejs:rolling/${i}_rod/from_ingot`)

    // Metal Press
    event.custom({
      "type": 'immersiveengineering:metal_press',
      "mold": 'immersiveengineering:mold_rod',
      "result": {
        "count": 2,
        "base_ingredient": Ingredient.of(`immersiveengineering:stick_${i}`)
      },
      "input": {
        "count": 1,
        "base_ingredient": {
          "tag": `forge:ingots/${i}`,
        }
      },
      "energy": 2400,
    }).id(`kubejs:metal_press/${i}_rod/from_ingot`)
  }

  // Create Addition's Rod

  // Metal Press
  let ingots_2 = ['gold', 'copper', 'brass']
  for (let i of ingots_2) {

    event.custom({
      "type": 'immersiveengineering:metal_press',
      "mold": 'immersiveengineering:mold_rod',
      "result": {
        "count": 2,
        "base_ingredient": Ingredient.of(`createaddition:${i}_rod`)
      },
      "input": {
        "count": 1,
        "base_ingredient": {
          "tag": `forge:ingots/${i}`,
        }
      },
      "energy": 2400,
    }).id(`kubejs:metal_press/${i}_rod/from_ingot`)

  }

  return;
});

