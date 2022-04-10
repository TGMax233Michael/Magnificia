/*
onEvent('recipes', event => { 
	let ingots = ['silver']   
	let mod = 'immersiveengineering'
	 
 for (let i of ingots) {
		 
 event.replaceOutput({}, `#forge:ingots/${i}`, `${mod}:${i}_ingot`)
		 
 event.replaceOutput({}, `#forge:nuggets/${i}`, `${mod}:${i}_nugget`)
		 
 event.replaceOutput({}, `#forge:storage_blocks/${i}`, `${mod}:${i}_block`)
	 
 event.replaceOutput({}, `#forge:raw_materials/${i}`, `raw_/${mod}:${i}`)

 event.replaceOutput({}, `#forge:dusts/${i}`, `${mod}:${i}_dust`);

 event.replaceOutput({}, `#forge:dusts/${i}`, `${mod}:${i}_grit`);
	 
 }})
 */
