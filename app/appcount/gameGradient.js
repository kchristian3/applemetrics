var wGame = 1000,
    hGame = 30;

var gameGradSvg = d3.select("#gameBar").append("svg")
    .attr("width", wGame)
    .attr("height", hGame);

var gameGradient = gameGradSvg.append("defs")
  .append("linearGradient")
    .attr("id", "gameGradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "100%")
    .attr("gameSpreadMethod", "pad");

gameGradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#ffffff")
    .attr("stop-opacity", 1);

gameGradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#FF0700")
    .attr("stop-opacity", 1);

gameGradSvg.append("rect")
    .attr("width", wGame)
    .attr("height", hGame)
    .style("fill", "url(#gameGradient)");
