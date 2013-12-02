function spiralGameCount() {
    var margin = {top: 20, right: 20, bottom: 20, left: 20},
    scaleAngle = 0,
    innerRadius = 50,
    numGameSegments = 24,
    segmentGameHeight = 20,
    domain = null,
    range = ["white", "#FF0700"],
    accessor = function(d) {return d;},
    radialLabels = segmentLabels = [];

    function chartA(selection) {
        selection.each(function(data) {
            var gameSvg = d3.select(this);

            var gameOffset = innerRadius + Math.ceil(data.length / numGameSegments) * segmentGameHeight;
            g = gameSvg.append("g")
                .classed("circular-game", true)
                .attr("transform", "translate(" + parseInt(margin.left + gameOffset) + "," + parseInt(margin.top + gameOffset) + ")")
                //attempt to add id to 'g' so I can do linking/brushing between dates
                //.attr("id", function(d) { return "date" + d.date; });

            var autoDomain = false;
            if (domain === null) {
                domain = d3.extent(data, accessor);
                autoDomain = true;
            }
            var gameColor = d3.scale.linear().domain(domain).range(range);
            if(autoDomain)
                domain = null;

            g.selectAll("path").data(data)
                .enter().append("path")
                .attr("class", function(d) { return "date " + d.date;})
                .attr("id", function(d) { return "gameSpiral";})
                .attr("d", d3.svg.arc().innerRadius(irGame).outerRadius(orGame).startAngle(saGame).endAngle(eaGame))
                .attr("fill", function(d) {return gameColor(accessor(d));});


            // Unique id so that the text path defs are unique - is there a better way to do this?
            var gameID = d3.selectAll(".circular-game")[0].length;

            //Radial labels
            var lsa = 0.01; //Label start angle
            var gameLabels = gameSvg.append("g")
                .classed("gameLabels", true)
                .classed("gameRadial", true)
                .attr("transform", "translate(" + parseInt(margin.left + gameOffset) + "," + parseInt(margin.top + gameOffset) + ")");

            gameLabels.selectAll("def")
                .data(radialLabels).enter()
                .append("def")
                .append("path")
                .attr("id", function(d, i) {return "gameRadial-label-path-"+gameID+"-"+i;})
                .attr("d", function(d, i) {
                    var r = innerRadius + ((i + 0.2) * segmentGameHeight);
                    return "m" + r * Math.sin(lsa) + " -" + r * Math.cos(lsa) + 
                            " a" + r + " " + r + " 0 1 1 -1 0";
                });

            gameLabels.selectAll("text")
                .data(radialLabels).enter()
                .append("text")
                .append("textPath")
                .attr("xlink:href", function(d, i) {return "#gameRadial-label-path-"+gameID+"-"+i;})
                .style("font-size", 0.6 * segmentGameHeight + 'px')
                .text(function(d) {return d;});

            //Segment labels
            var segmentLabelOffset = 2;
            var gameR = innerRadius + Math.ceil(data.length / numGameSegments) * segmentGameHeight + segmentLabelOffset;
            gameLabels = gameSvg.append("g")
                .classed("gameLabels", true)
                .classed("gameSegment", true)
                .attr("transform", "translate(" + parseInt(margin.left + gameOffset) + "," + parseInt(margin.top + gameOffset) + ")");

            gameLabels.append("def")
                .append("path")
                .attr("id", "gameSegment-label-path-"+gameID)
                .attr("d", "m0 -" + gameR + " a" + gameR + " " + gameR + " 0 1 1 -1 0");

            gameLabels.selectAll("text")
                .data(segmentLabels).enter()
                .append("text")
                .append("textPath")
                .attr("xlink:href", "#gameSegment-label-path-"+gameID)
                .attr("startOffset", function(d, i) {
                	var ret;
                	ret = ((i * 100) / numGameSegments);
                	return (ret + (scaleAngle*(100/numGameSegments))) + "%";
                })
         
               .text(function(d) {return d;});
        });

    }

    /* Arc functions */
    irGame = function(d, i) {
        return innerRadius + Math.floor(i/numGameSegments) * segmentGameHeight;
    }
    orGame = function(d, i) {
        return innerRadius + segmentGameHeight + Math.floor(i/numGameSegments) * segmentGameHeight;
    }
    saGame = function(d, i) {
        var ret;
        ret = ((i * 2 * Math.PI) / numGameSegments) + scaleAngle;
        //ret = ret % 6.28;
        return ret;
    }
    eaGame = function(d, i) {
    	var ret;
    	ret = (((i + 1) * 2 * Math.PI) / numGameSegments) + scaleAngle;
    	//ret = ret % 6.28;
        return ret;
    }

    /* Configuration getters/setters */
    chartA.margin = function(_) {
        if (!arguments.length) return margin;
        margin = _;
        return chartA;
    };
    
    //used to modify the initial drawing point for the circle
    //FYI in radians
    chartA.scaleAngle = function(_) {
        if (!arguments.length) return scaleAngle;
        scaleAngle = (_ * Math.PI)/180;
        return chartA;
    };

    chartA.innerRadius = function(_) {
        if (!arguments.length) return innerRadius;
        innerRadius = _;
        return chartA;
    };

    chartA.numGameSegments = function(_) {
        if (!arguments.length) return numGameSegments;
        numGameSegments = _;
        return chartA;
    };

    chartA.segmentGameHeight = function(_) {
        if (!arguments.length) return segmentGameHeight;
        segmentGameHeight = _;
        return chartA;
    };

    chartA.domain = function(_) {
        if (!arguments.length) return domain;
        domain = _;
        return chartA;
    };

    chartA.range = function(_) {
        if (!arguments.length) return range;
        range = _;
        return chartA;
    };

    chartA.radialLabels = function(_) {
        if (!arguments.length) return radialLabels;
        if (_ == null) _ = [];
        radialLabels = _;
        return chartA;
    };

    chartA.segmentLabels = function(_) {
        if (!arguments.length) return segmentLabels;
        if (_ == null) _ = [];
        segmentLabels = _;
        return chartA;
    };

    chartA.accessor = function(_) {
        if (!arguments.length) return accessor;
        accessor = _;
        return chartA;
    };

    return chartA;
}

/*
function highlight(date) {
  if (date == null) d3.selectAll("date").classed("active", false);
  else d3.selectAll("date" + date).classed("active", true);
}
*/
