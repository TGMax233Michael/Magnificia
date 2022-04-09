onEvent('recipes', function (event) {

	// Remove recipes by output.
	[
		'refinedstorage:quartz_enriched_iron'
	].forEach(function (remove) {
	  event.remove({output: remove})
	});
  
});

onEvent('recipes', event => {
event.shapeless('3x refinedstorage:quartz_enriched_iron', ['3x minecraft:iron_ingot', 'minecraft:quartz'])
});
