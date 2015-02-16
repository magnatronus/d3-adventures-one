/**
 * lineGraph.js
 * A simple example of using D3 to generate a moving line graph in Titanium
 * author: Steve Rogers (@sarmcon) - Feb 2015
 */

// just so we know whats going on
Ti.API.info('loading lineGraph.js');

// set up D3 and get our graph sizes
var dataBuffer=[], dataBufferSize = 50;
var svg = d3.select('body').select('svg');
var width = parseInt(svg.style("width"));
var height = parseInt(svg.style("height"));

/**
 * This will take a x,y point add it to the data buffer and plot it
 * The data buffer is used so that the graph can be scrolled 'on-screen'
 * 
 * @param {Object} p 
 */
function plotPoint(p){
		
	// add our plot data to the buffer
	dataBuffer.push(p);
	
  	// if we go over the data buffer size remove the oldest value
  	if(dataBuffer.length>dataBufferSize){
     	dataBuffer.shift();
   	}	
   	
   	// if there is an existing plot line get rid so we can re-draw
   	svg.select('.plotOne').remove();
   	
    // calculate our required x and y scales     
	xScale = d3.scale.linear()
		.domain([0,dataBufferSize])
		.range([0,width]);
		
	yScale = d3.scale.linear()
		.domain([0, 10])
		.range([height,0]);
    	
	// create our line function
	lineOne = d3.svg.line()
  		.x(function(d,i){
    		return xScale(i);
     	})
     	.y(function(d,i){
       		return yScale(d.y);
     	})
   		.interpolate('basis');

  	// draw our plot line
  	svg.append('path').attr({d: lineOne(dataBuffer),"class": 'plotOne'});
 	
}
