function spiralAppCount() {
    var margin = {top: 20, right: 20, bottom: 20, left: 20},
    scaleAngle = 0,
    innerRadius = 50,
    numAppSegments = 24,
    segmentAppHeight = 20,
    indx = 0,
    labelOpacity = "0",
    segmentLabelDisplay = "none",
    domain = null,
    range = ["white", "#01939A"],
    accessor = function(d) {return d.value;},
    radialLabels = segmentLabels = [];

    function chartA(selection) {
        selection.each(function(data) {
            var appSvg = d3.select(this);

            var appOffset = innerRadius + Math.ceil(data.length / numAppSegments) * (segmentAppHeight + scaleAngle);
            g = appSvg.append("g")
                .classed("circular-app", true)
                .attr("transform", "translate(" + parseInt(margin.left + appOffset) + "," + parseInt(margin.top + appOffset) + ")")
                //attempt to add id to 'g' so I can do linking/brushing between dates
                //.attr("id", function(d) { return "date" + d.date; });

            var autoDomain = false;
            if (domain === null) {
                domain = d3.extent(data, accessor);
                autoDomain = true;
            }
            var appColor = d3.scale.linear().domain(domain).range(range);
            if(autoDomain)
                domain = null;

            g.selectAll("path").data(data)
                .enter().append("path")
                .attr("class", function(d) { 
                	var ret =  "date " + d.date + " " + indx;
                	indx++;
                	return ret;
                })
                .attr("id", function(d) { return "appSpiral";})
            	.attr("d", d3.svg.arc().innerRadius(irApp).outerRadius(orApp).startAngle(saApp).endAngle(eaApp))
            	.attr("fill", function(d) {return appColor(accessor(d));});


            // Unique id so that the text path defs are unique - is there a better way to do this?
            var appID = d3.selectAll(".circular-app")[0].length;

            //Radial labels
            var lsa = 0.01; //Label start angle
            var appLabels = appSvg.append("g")
                .classed("appLabels", true)
                .classed("appRadial", true)
                .attr("transform", "translate(" + parseInt(margin.left + appOffset) + "," + parseInt(margin.top + appOffset) + ")");

            appLabels.selectAll("def")
                .data(radialLabels).enter()
                .append("def")
                .append("path")
                .attr("id", function(d, i) {return "appRadial-label-path-"+appID+"-"+i;})
                .attr("d", function(d, i) {
                    var r = innerRadius + ((i + 0.2) * (segmentAppHeight + scaleAngle));
                    return "m" + r * Math.sin(lsa) + " -" + r * Math.cos(lsa) + 
                            " a" + r + " " + r + " 0 1 1 -1 0";
                });

            appLabels.selectAll("text")
                .data(radialLabels).enter()
                .append("text")
                .append("textPath")
                .style("opacity", ".6")
                .attr("id", "appLabelText")
                .attr("xlink:href", function(d, i) {return "#appRadial-label-path-"+appID+"-"+i;})
                .style("font-size", 0.4 * (segmentAppHeight + scaleAngle) + 'px')
                .text(function(d) {return d;});

            //Segment labels
            var segmentLabelOffset = 2;
            var appR = innerRadius + Math.ceil(data.length / numAppSegments) * (segmentAppHeight + scaleAngle) + segmentLabelOffset;
            appLabels = appSvg.append("g")
                .classed("appLabels", true)
                .classed("appSegment", true)
                .attr("transform", "translate(" + parseInt(margin.left + appOffset) + "," + parseInt(margin.top + appOffset) + ")");

            appLabels.append("def")
                .append("path")
                .attr("id", "appSegment-label-path-"+appID)
                .attr("d", "m0 -" + appR + " a" + appR + " " + appR + " 0 1 1 -1 0");

            appLabels.selectAll("text")
                .data(segmentLabels).enter()
                .append("text")
                .append("textPath")
                .style("opacity", ".6")
                .attr("id", "appLabelText")
                .attr("xlink:href", "#appSegment-label-path-"+appID)
                .attr("startOffset", function(d, i) {
                	var ret;
                	ret = ((i * 100) / numAppSegments);
                	return (ret + (scaleAngle*(100/numAppSegments))) + "%";
                })
         
               .text(function(d) {return d;});
        });

    }

    /* Arc functions */
    irApp = function(d, i) {
        return innerRadius + Math.floor(i/numAppSegments) * (segmentAppHeight + scaleAngle);
    }
    orApp = function(d, i) {
        return innerRadius + (segmentAppHeight + scaleAngle) + Math.floor(i/numAppSegments) * (segmentAppHeight + scaleAngle);
    }
    saApp = function(d, i) {
        return ((i * 2 * Math.PI) / numAppSegments); // + scaleAngle;
    }
    eaApp = function(d, i) {
        return (((i + 1) * 2 * Math.PI) / numAppSegments); // + scaleAngle;
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
    
    chartA.labelOpacity = function(_) {
        if (!arguments.length) return labelOpacity;
        labelOpacity = _;
        return chartA;
    };
    
    chartA.segmentLabelDisplay = function(_) {
        if (!arguments.length) return segmentLabelDisplay;
        segmentLabelDisplay = _;
        return chartA;
    };

    chartA.innerRadius = function(_) {
        if (!arguments.length) return innerRadius;
        innerRadius = _;
        return chartA;
    };

    chartA.numAppSegments = function(_) {
        if (!arguments.length) return numAppSegments;
        numAppSegments = _;
        return chartA;
    };

    chartA.segmentAppHeight = function(_) {
        if (!arguments.length) return segmentAppHeight;
        segmentAppHeight = _;
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
