 onEvent('recipes', event => { 
	let ingots = ['iron']   
	let mod = 'createaddition'
	 
 for (let i of ingots) {
		 
 event.replaceOutput({}, `#forge:rods/${i}`, `${mod}:${i}_rod`)
		 
 }})