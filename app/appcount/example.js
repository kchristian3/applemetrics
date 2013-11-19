var chart = circularHeatChart()
	.accessor(function(d) {
		return d.value;
	})
    .segmentHeight(8)
    .innerRadius(20)
    .numSegments(6)
    .radialLabels(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])
    .segmentLabels(["2008", "2009", "2010", "2011", "2012", "2013"])
    .margin({top: 20, right: 0, bottom: 20, left: 0})
    .scaleAngle(d3.slider().value());
   
var dataA = [
{date:	"Jan-08",value:	0},
{date:	"Jan-09",value:	42790},
{date:	"Jan-10",value:	92313},
{date:	"Jan-11",value:	197357},
{date:	"Jan-12",value:	330983},
{date:	"Jan-13",value:	542833},
{date:	"Feb-08",value:	0},
{date:	"Feb-09",value:	45207},
{date:	"Feb-10",value:	99314},
{date:	"Feb-11",value:	206109},
{date:	"Feb-12",value:	343914},
{date:	"Feb-13",value:	563029},
{date:	"Mar-08",value:	0},
{date:	"Mar-09",value:	47783},
{date:	"Mar-10",value:	107501},
{date:	"Mar-11",value:	216257},
{date:	"Mar-12",value:	359898},
{date:	"Mar-13",value:	585268},
{date:	"Apr-08",value:	0},
{date:	"Apr-09",value:	50501},
{date:	"Apr-10",value:	116329},
{date:	"Apr-11",value:	226645},
{date:	"Apr-12",value:	376519},
{date:	"Apr-13",value:	609353},
{date:	"May-08",value:	0},
{date:	"May-09",value:	52944},
{date:	"May-10",value:	124050},
{date:	"May-11",value:	236192},
{date:	"May-12",value:	394253},
{date:	"May-13",value:	634874},
{date:	"Jun-08",value:	0},
{date:	"Jun-09",value:	55896},
{date:	"Jun-10",value:	132362},
{date:	"Jun-11",value:	247029},
{date:	"Jun-12",value:	409033},
{date:	"Jun-13",value:	656374},
{date:	"Jul-08",value: 35821},
{date:	"Jul-09",value:	59248},
{date:	"Jul-10",value:	140766},
{date:	"Jul-11",value:	256683},
{date:	"Jul-12",value:	423094},
{date:	"Jul-13",value:679585},
{date:	"Aug-08",value:	36396},
{date:	"Aug-09",value:	63232},
{date:	"Aug-10",value:	149742},
{date:	"Aug-11",value:	268505},
{date:	"Aug-12",value:	438305},
{date:	"Aug-13",value:	701438},
{date:	"Sep-08",value:	37197},
{date:	"Sep-09",value:	67741},
{date:	"Sep-10",value:	157605},
{date:	"Sep-11",value:	280369},
{date:	"Sep-12",value:	457381},
{date:	"Sep-13",value:	727641},
{date:	"Oct-08",value:	38285},
{date:	"Oct-09",value:	72174},
{date:	"Oct-10",value:	167182},
{date:	"Oct-11",value:	292147},
{date:	"Oct-12",value:	477478},
{date:	"Oct-13",value:	0},
{date:	"Nov-08",value:	39477},
{date:	"Nov-09",value:	77110},
{date:	"Nov-10",value:	176088},
{date:	"Nov-11",value:	304076},
{date:	"Nov-12",value:	499703},
{date:	"Nov-13",value:	0},
{date:	"Dec-08",value:	41002},
{date:	"Dec-09",value:	85651},
{date:	"Dec-10",value:	188294},
{date:	"Dec-11",value:	317678},
{date:	"Dec-12",value:	520241},
{date:	"Dec-13",value:	0}

    ];
   
var dataB = [ 
    {date: "thisData", value:  Math.round(0.334734*100)},
    {date: "thisData", value:  Math.round(0.334734*100)},
    {date: "thisData", value:  Math.round(0.334734*100)},
    {date: "thisData", value:  Math.round(0.334734*100)},
    {date: "thisData", value:  Math.round(0.334734*100)},
    {date: "thisData", value:  Math.round(0.334734*100)},
    {date: "thisData", value:  Math.round(0.334734*100)},
    {date: "thisData", value:  Math.round(0.334734*100)},
    {date: "thisData", value:  Math.round(0.334734*100)},
    {date: "thisData", value:  Math.round(0.334734*100)},
    {date: "thisData", value:  Math.round(0.334734*100)}
    ];
    
var energyData = [];
for(var i=0; i<3; i++) {
	energyData[i] = [];
	for(var j=0; j<71; j++) {
		if(j <= 10){
    		energyData[i][j] = dataB[j];
    	} else energyData[i][j] = dataA[j];
    }
}    
   
d3.select('#energychart')
    .selectAll('svg')
    .data(energyData)
    .enter()
    .append('svg')
    .call(chart);
    
d3.select("#info")
	.text('Total app count is 1,000,000');   
    
d3.selectAll("#energychart path")
	.on('mouseover', function() {
        var d = d3.select(this).data()[0];
    	d3.select("#info").text(' In ' + d.date + ' of ' + d.date +' there were ' + d.value + ' total apps ');
    	d3.select(this).style({ 'stroke': 'Black', 'stroke-width': '3px'});
	}
);

d3.selectAll("#energychart path")
	.on('mouseout', function() {
    d3.select("#info").text('Total app count is 1,000,000');  
    d3.select(this).style({ 'stroke': 'none', 'stroke-width': 'none'});      
});

d3.select('#slider')
	.call(d3.slider()
		.axis(
			d3.svg.axis().orient("top").ticks(6)
		)
		.min(0)
		.max(360)
		.step(10)
	)
	.call(chart);
