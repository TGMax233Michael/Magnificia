onEvent('recipes', function (event) {

	var idRemove = [
		// Create
		`create:blasting/ingot/uranium/compact/mekanism`,

		`create:blasting/ingot/lead/compact/mekanism`,

	].forEach(function (remove) {
		event.remove({ id: remove })
	});

	var outputRemove = [

		// Immersive Engineering 
		'immersiveengineering:sword_steel',
		'immersiveengineering:pickaxe_steel',
		'immersiveengineering:shovel_steel',
		'immersiveengineering:axe_steel',
		'immersiveengineering:hoe_steel',
		'immersiveengineering:plate_iron',
		'immersiveengineering:plate_gold',
		'immersiveengineering:plate_copper',
		'immersiveengineering:armor_steel_head',
		'immersiveengineering:armor_steel_chest',
		'immersiveengineering:armor_steel_legs',
		'immersiveengineering:armor_steel_feet',


		'immersiveengineering:stick_steel',
		'immersiveengineering:stick_aluminum',
		'immersiveengineering:stick_iron',

		// Mekanism Machines
		'mekanism:quantum_entangloporter',

		// Mekanism Tools 
		'mekanismtools:lapis_lazuli_sword',
		'mekanismtools:lapis_lazuli_pickaxe',
		'mekanismtools:lapis_lazuli_axe',
		'mekanismtools:lapis_lazuli_shovel',
		'mekanismtools:lapis_lazuli_hoe',
		'mekanismtools:lapis_lazuli_paxel',
		'mekanismtools:lapis_lazuli_helmet',
		'mekanismtools:lapis_lazuli_chestplate',
		'mekanismtools:lapis_lazuli_leggings',
		'mekanismtools:lapis_lazuli_boots',
		'mekanismtools:lapis_lazuli_shield',

		// Mekanism Materials
		'mekanism:block_uranium',
		'mekanism:block_raw_uranium',
		'mekanism:uranium_ore',
		'mekanism:dust_uranium',
		'mekanism:raw_uranium',
		'mekanism:ingot_uranium',
		'mekanism:deepslate_uranium_ore',
		'mekanism:nugget_uranium',
		'mekanism:block_lead',
		'mekanism:block_raw_lead',
		'mekanism:lead_ore',
		'mekanism:dust_lead',
		'mekanism:raw_lead',
		'mekanism:ingot_lead',
		'mekanism:deepslate_lead_ore',
		'mekanism:nugget_lead',
		'mekanism:nugget_lead',
		'mekanism:block_steel',
		'mekanism:ingot_steel',
		'mekanism:nugget_steel',
		'mekanism:dust_steel',
		'mekanism:dust_iron',
		'mekanism:dust_gold',
		'mekanism:dust_copper',

		// Energy Meter
		'energymeter:meter',

		// Create
		'create:powdered_obsidian',

		// Create Additions Materials
		'createaddition:iron_rod',
		'createaddition:copper_wire',

		// Create Additions Machines
		'createaddition:heater',

		// Create Deco
		'createdeco:zinc_sheet',


	].forEach(function (remove) {
		event.remove({ output: remove })
	});


	// Remove Immersive Engineering Hammer-Crafting 
	event.remove({ output: 'immersiveengineering:plate_aluminum', type: 'minecraft:crafting_shapeless' })
	event.remove({ output: 'immersiveengineering:plate_lead', type: 'minecraft:crafting_shapeless' })
	event.remove({ output: 'immersiveengineering:plate_silver', type: 'minecraft:crafting_shapeless' })
	event.remove({ output: 'immersiveengineering:plate_nickel', type: 'minecraft:crafting_shapeless' })
	event.remove({ output: 'immersiveengineering:plate_uranium', type: 'minecraft:crafting_shapeless' })
	event.remove({ output: 'immersiveengineering:plate_steel', type: 'minecraft:crafting_shapeless' })
	event.remove({ output: 'immersiveengineering:plate_electrum', type: 'minecraft:crafting_shapeless' })
	event.remove({ output: 'immersiveengineering:plate_constantan', type: 'minecraft:crafting_shapeless' })

	event.remove({ output: 'immersiveengineering:stick_steel', type: 'minecraft:crafting_shapeless' })
	event.remove({ output: 'immersiveengineering:stick_aluminium', type: 'minecraft:crafting_shapeless' })
	event.remove({ output: 'immersiveengineering:stick_iron', type: 'minecraft:crafting_shapeless' })

	event.remove({ output: 'immersiveengineering:wire_copper', type: 'minecraft:crafting_shapeless' })
	event.remove({ output: 'immersiveengineering:wire_electrum', type: 'minecraft:crafting_shapeless' })
	event.remove({ output: 'immersiveengineering:wire_aluminum', type: 'minecraft:crafting_shapeless' })
	event.remove({ output: 'immersiveengineering:wire_steel', type: 'minecraft:crafting_shapeless' })
	event.remove({ output: 'immersiveengineering:wire_lead', type: 'minecraft:crafting_shapeless' })

	event.remove({ output: 'immersiveengineering:dust_constantan', type: 'minecraft:crafting_shapeless' })
	event.remove({ output: 'immersiveengineering:dust_electrum', type: 'minecraft:crafting_shapeless' })

});

