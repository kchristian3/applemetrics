function spiralTotalCount() {
    var margin = {top: 20, right: 20, bottom: 20, left: 20},
    scaleAngle = 0,
    innerRadius = 50,
    numTotalSegments = 24,
    segmentTotalHeight = 20,
    domain = null,
    range = ["white", "purple"],
    accessor = function(d) {return d;},
    radialLabels = segmentLabels = [];

    function chartA(selection) {
        selection.each(function(data) {
            var totalSvg = d3.select(this);

            var totalOffset = innerRadius + Math.ceil(data.length / numTotalSegments) * segmentTotalHeight;
            g = totalSvg.append("g")
                .classed("circular-total", true)
                .attr("transform", "translate(" + parseInt(margin.left + totalOffset) + "," + parseInt(margin.top + totalOffset) + ")")
                //attempt to add id to 'g' so I can do linking/brushing between dates
                //.attr("id", function(d) { return "date" + d.date; });

            var autoDomain = false;
            if (domain === null) {
                domain = d3.extent(data, accessor);
                autoDomain = true;
            }
            var totalColor = d3.scale.linear().domain(domain).range(range);
            if(autoDomain)
                domain = null;

            g.selectAll("path").data(data)
                .enter().append("path")
                .attr("d", d3.svg.arc().innerRadius(irTotal).outerRadius(orTotal).startAngle(saTotal).endAngle(eaTotal))
                .attr("fill", function(d) {return totalColor(accessor(d));});


            // Unique id so that the text path defs are unique - is there a better way to do this?
            var totalID = d3.selectAll(".circular-total")[0].length;

            //Radial labels
            var lsa = 0.01; //Label start angle
            var totalLabels = totalSvg.append("g")
                .classed("totalLabels", true)
                .classed("totalRadial", true)
                .attr("transform", "translate(" + parseInt(margin.left + totalOffset) + "," + parseInt(margin.top + totalOffset) + ")");

            totalLabels.selectAll("def")
                .data(radialLabels).enter()
                .append("def")
                .append("path")
                .attr("id", function(d, i) {return "totalRadial-label-path-"+totalID+"-"+i;})
                .attr("d", function(d, i) {
                    var r = innerRadius + ((i + 0.2) * segmentTotalHeight);
                    return "m" + r * Math.sin(lsa) + " -" + r * Math.cos(lsa) + 
                            " a" + r + " " + r + " 0 1 1 -1 0";
                });

            totalLabels.selectAll("text")
                .data(radialLabels).enter()
                .append("text")
                .append("textPath")
                .attr("xlink:href", function(d, i) {return "#totalRadial-label-path-"+totalID+"-"+i;})
                .style("font-size", 0.6 * segmentTotalHeight + 'px')
                .text(function(d) {return d;});

            //Segment labels
            var segmentLabelOffset = 2;
            var totalR = innerRadius + Math.ceil(data.length / numTotalSegments) * segmentTotalHeight + segmentLabelOffset;
            totalLabels = totalSvg.append("g")
                .classed("totalLabels", true)
                .classed("totalSegment", true)
                .attr("transform", "translate(" + parseInt(margin.left + totalOffset) + "," + parseInt(margin.top + totalOffset) + ")");

            totalLabels.append("def")
                .append("path")
                .attr("id", "totalSegment-label-path-"+totalID)
                .attr("d", "m0 -" + totalR + " a" + totalR + " " + totalR + " 0 1 1 -1 0");

            totalLabels.selectAll("text")
                .data(segmentLabels).enter()
                .append("text")
                .append("textPath")
                .attr("xlink:href", "#totalSegment-label-path-"+totalID)
                .attr("startOffset", function(d, i) {return i * 100 / numTotalSegments + "%";})
         
               .text(function(d) {return d;});
        });

    }

    /* Arc functions */
    irTotal = function(d, i) {
        return innerRadius + Math.floor(i/numTotalSegments) * segmentTotalHeight;
    }
    orTotal = function(d, i) {
        return innerRadius + segmentTotalHeight + Math.floor(i/numTotalSegments) * segmentTotalHeight;
    }
    saTotal = function(d, i) {
        return ((i * 2 * Math.PI) / numTotalSegments) + scaleAngle;
    }
    eaTotal = function(d, i) {
        return (((i + 1) * 2 * Math.PI) / numTotalSegments) + scaleAngle;
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

    chartA.numTotalSegments = function(_) {
        if (!arguments.length) return numTotalSegments;
        numTotalSegments = _;
        return chartA;
    };

    chartA.segmentTotalHeight = function(_) {
        if (!arguments.length) return segmentTotalHeight;
        segmentTotalHeight = _;
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
