onEvent('recipes', event => {
	event.shaped('createaddition:heater', [
		' A ',
		'BCB',
		'DED'
	], {
		A: 'createaddition:capacitor',
		B: 'createaddition:copper_spool',
		C: '#forge:rods/iron',
		D: '#forge:ingots/brass',
		E: '#forge:plates/copper'
	}).id(`kubejs:createaddition/heater`)
})

