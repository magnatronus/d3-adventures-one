/**
 * Start feeding data to the graph
 * data generated as a JSON object so it will be easy to add other data without changing the data passing
 * @param {Object} e
 */
function showData(e) {
	
	Ti.API.info('Graph has loaded..');

	// generate a random data point every 200 m/s (approx)
	setInterval(function(){
		
		// Assemble our plot data = value should be between 0 - 10
		var data = {
			"y": Math.random() * 11
		};
		
		// push data to graph
		$.d3.evalJS('plotPoint(' + JSON.stringify(data) + ')');
		
		
	}, 200);

   
}

$.index.open();
