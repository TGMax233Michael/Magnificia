onEvent('jei.hide.items', event => {
	let ingots = ['silver']  
	let mod = 'occultism'

	 for (let i of ingots) {
		event.hide(`${mod}:${i}_ingot`)

		event.hide(`${mod}:${i}_nugget`)

		event.hide(`${mod}:${i}_block`)

		event.hide(`${mod}:raw_${i}`)

		event.hide(`${mod}:${i}_dust`)

		event.hide(`${mod}:${i}_grit`)
			 
 }})
 
