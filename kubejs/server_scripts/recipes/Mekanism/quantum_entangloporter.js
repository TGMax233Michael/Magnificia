onEvent('recipes', event => {
	event.shaped('mekanism:quantum_entangloporter', [
		'ABA',
		'CDC',
		'ABA'
	], {
		A: '#forge:ingots/refined_obsidian',
		B: '#forge:circuits/ultimate',
		C: '#mekanism:alloys/atomic',
		D: 'mekanism:creative_energy_cube'
	}).id(`kubejs:mekanism/quantum_entangloporter`)
})

