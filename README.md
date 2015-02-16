# D3Example

## Intro
**D3Example** is a Titanium project that demonstrates how the [D3.js](http://d3js.org/) library can be used to create graphs in a mobile app.
It is a simple example that shows a scrolling line graph made up from random generated points.

This has been tested only on iOS but should work on Android as long as the the OS version is hgh enough to support the required HTML 5 functionality. 

## How it works

The sample app has a webview on the index view that loads a local HTML file called d3graph.html. The html loads the D3 library, a style sheet and the javascript code required to generate and plot the graph. All the relevent code and support files for creating the graph are under the d3 directory in the prject assets dir.

Most of the work is actually done in the linegraph.js file that the html page loads. This is just a simple demo of using D3 to manipulate the HTML5 <svg> tag.

