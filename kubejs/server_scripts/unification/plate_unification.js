 onEvent('recipes', event => { 
	let ingots = ['iron', 'gold', 'copper']   
	let mod = 'create'
	 
 for (let i of ingots) {
		 
 event.replaceOutput({}, `#forge:plates/${i}`, `${mod}:${i}_sheet`)
		 
 }})