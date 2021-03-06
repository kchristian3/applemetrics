var wApp = 30,
    hApp = 500;

var appGradSvg = d3.select("#appBar").append("svg")
    .attr("width", wApp)
    .attr("height", hApp);

var gradient = appGradSvg.append("defs")
  .append("linearGradient")
    .attr("id", "appGradient")
    .attr("x1", "100%")
    .attr("y1", "100%")
    .attr("x2", "0%")
    .attr("y2", "0%")
    .attr("appSpreadMethod", "pad");

gradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#ffffff")
    .attr("stop-opacity", 1);

gradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#01939A")
    .attr("stop-opacity", 1);

appGradSvg.append("rect")
    .attr("width", wApp)
    .attr("height", hApp)
    .style("fill", "url(#appGradient)");
    
var appGradLabels = appGradSvg.append("g")
	.classed("appGrad0", true)
	.text("0")
    .attr("transform", "translate(" + 100 + "," + 100 + ")");
