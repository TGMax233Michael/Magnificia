onEvent('recipes', function (event) {

	const replaceInputID = (id, from, to) => {
	  event.replaceInput({id: id}, from, to, true)
	};
  
	const replaceInput = (from, to) => {
	  event.replaceInput({}, from, to, true)
	};
  
	// Cobblestone Replacement
	[ 
	  'minecraft:dispenser',
	  'minecraft:dropper',
	  'minecraft:observer',
	  'minecraft:piston',
	  'botania:cobble_rod',
	  'botania:apothecary_default',
	  'supplementaries:turn_table',
	].forEach(function (id) {
	  replaceInputID(id, 'minecraft:cobblestone', '#forge:cobblestone');
	});
  
	// Stone Replacement
	[ 
	  'botania:exchange_rod',
	  'botania:temperance_stone',
	  'botania:tiny_planet',
	  'botania:tiny_planet_block',
	].forEach(function (id) {
	  replaceInputID(id, 'minecraft:stone', '#forge:stone');
	});
    
	
	// Vine Replacement
	[ 
	  'minecraft:mossy_cobblestone_from_vine',
	  'minecraft:mossy_stone_bricks_from_vine',
	  'alexsmobs:vine_lasso',
	  'botania:mossy_livingwood_planks_vine',
	  'botania:mossy_livingrock_bricks_vine',
	  'botania:mossy_dreamwood_planks_vine',
	  'botania:keep_ivy',
	  'botania:thorn_chakram',
	  'botania:vine_ball',
	  'valhelsia_structures:lapidified_jungle_log',
	  'waystones:mossy_waystone_convert',
	  
	].forEach(function (id) {
	  replaceInputID(id, 'minecraft:vine', '#valhelsia:vines/green');
	});
  
  });