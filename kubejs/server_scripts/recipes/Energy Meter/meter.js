onEvent('recipes', event => {
	event.shaped('energymeter:meter', [
		'AEA',
		'BCB',
		'ADA'
	], {
		A: '#forge:ingots/iron',
		B: 'mekanism:alloy_infused',
		C: '#forge:glass_panes/colorless',
		D: 'minecraft:observer',
		E: 'minecraft:comparator'
	}).id(`kubejs:energymeter/meter`)
})

