///////////////////////////////// Create Spirals //////////////////////////////////////

/*
var chartT = spiralTotalCount()
	.accessor(function(d) {
		return d.value;
	})
    .segmentTotalHeight(15)
    .innerRadius(20)
    .numTotalSegments(6)
    .radialLabels(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])
    .segmentLabels(["2008", "2009", "2010", "2011", "2012", "2013"])
    .margin({top: 20, right: 0, bottom: 20, left: 0});
    */
    
var chartA = spiralAppCount()
	.accessor(function(d) {
		return d.value;
	})
    .segmentAppHeight(15)
    .innerRadius(20)
    .numAppSegments(6)
    .radialLabels(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])
    .segmentLabels(["2008", "2009", "2010", "2011", "2012", "2013"])
    .margin({top: 20, right: 0, bottom: 20, left: 0});
    
var chartG = spiralGameCount()
	.accessor(function(d) {
		return d.value;
	})
    .segmentGameHeight(15)
    .innerRadius(20)
    .numGameSegments(6)
    .radialLabels(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])
    .segmentLabels(["2008", "2009", "2010", "2011", "2012", "2013"])
    .margin({top: 20, right: 0, bottom: 20, left: 0});    


///////////////////////////////// Data //////////////////////////////////////
 
var dataA = [
{month: "January", year: "2008", date:	"Jan-08",value:	0, circle: 0},
{month: "January", year: "2009", date:	"Jan-09",value:	42790, circle: 0},
{month: "January", year: "2010", date:	"Jan-10",value:	92313, circle: 0},
{month: "January", year: "2011", date:	"Jan-11",value:	197357, circle: 0},
{month: "January", year: "2012", date:	"Jan-12",value:	330983, circle: 0},
{month: "January", year: "2013", date:	"Jan-13",value:	542833, circle: 0},
{month: "February", year: "2008", date:	"Feb-08",value:	0, circle: 0},
{month: "February", year: "2009", date:	"Feb-09",value:	45207, circle: 0},
{month: "February", year: "2010", date:	"Feb-10",value:	99314, circle: 0},
{month: "February", year: "2011", date:	"Feb-11",value:	206109, circle: 0},
{month: "February", year: "2012", date:	"Feb-12",value:	343914, circle: 0},
{month: "February", year: "2013", date:	"Feb-13",value:	563029, circle: 0},
{month: "March", year: "2008", date:"Mar-08",value:	0, circle: 0},
{month: "March", year: "2009", date:"Mar-09",value:	47783, circle: 0},
{month: "March", year: "2010", date:"Mar-10",value:	107501, circle: 0},
{month: "March", year: "2011", date:"Mar-11",value:	216257, circle: 0},
{month: "March", year: "2012", date:"Mar-12",value:	359898, circle: 0},
{month: "March", year: "2013", date:"Mar-13",value:	585268, circle: 0},
{month: "April", year: "2008", date:"Apr-08",value:	0, circle: 0},
{month: "April", year: "2009", date:	"Apr-09",value:	50501, circle: 0},
{month: "April", year: "2010", date:	"Apr-10",value:	116329, circle: 0},
{month: "April", year: "2011", date:	"Apr-11",value:	226645, circle: 0},
{month: "April", year: "2012", date:	"Apr-12",value:	376519, circle: 0},
{month: "April", year: "2013", date:	"Apr-13",value:	609353, circle: 0},
{month: "May", year: "2008", date:	"May-08",value:	0, circle: 0},
{month: "May", year: "2009", date:	"May-09",value:	52944, circle: 0},
{month: "May", year: "2010", date:	"May-10",value:	124050, circle: 0},
{month: "May", year: "2011", date:	"May-11",value:	236192, circle: 0},
{month: "May", year: "2012", date:	"May-12",value:	394253, circle: 0},
{month: "May", year: "2013", date:	"May-13",value:	634874, circle: 0},
{month: "June", year: "2008", date:	"Jun-08",value:	0, circle: 0},
{month: "June", year: "2009",date:	"Jun-09",value:	55896, circle: 0},
{month: "June", year: "2010",date:	"Jun-10",value:	132362, circle: 0},
{month: "June", year: "2011",date:	"Jun-11",value:	247029, circle: 0},
{month: "June", year: "2012",date:	"Jun-12",value:	409033, circle: 0},
{month: "June", year: "2013",date:	"Jun-13",value:	656374, circle: 0},
{month: "July", year: "2008",date:	"Jul-08",value: 35821, circle: 0},
{month: "July", year: "2009",date:	"Jul-09",value:	59248, circle: 0},
{month: "July", year: "2010",date:	"Jul-10",value:	140766, circle: 0},
{month: "July", year: "2011",date:	"Jul-11",value:	256683, circle: 0},
{month: "July", year: "2012",date:	"Jul-12",value:	423094, circle: 0},
{month: "July", year: "2013",date:	"Jul-13",value:679585, circle: 0},
{month: "August", year: "2008",date:	"Aug-08",value:	36396, circle: 0},
{month: "August", year: "2009",date:	"Aug-09",value:	63232, circle: 0},
{month: "August", year: "2010",date:	"Aug-10",value:	149742, circle: 0},
{month: "August", year: "2011",date:	"Aug-11",value:	268505, circle: 0},
{month: "August", year: "2012",date:	"Aug-12",value:	438305, circle: 0},
{month: "August", year: "2013",date:	"Aug-13",value:	701438, circle: 0},
{month: "September", year: "2008",date:	"Sep-08",value:	37197, circle: 0},
{month: "September", year: "2009",date:	"Sep-09",value:	67741, circle: 0},
{month: "September", year: "2010",date:	"Sep-10",value:	157605, circle: 0},
{month: "September", year: "2011",date:	"Sep-11",value:	280369, circle: 0},
{month: "September", year: "2012",date:	"Sep-12",value:	457381, circle: 0},
{month: "September", year: "2013",date:	"Sep-13",value:	727641, circle: 0},
{month: "October", year: "2008",date:	"Oct-08",value:	38285, circle: 0},
{month: "October", year: "2009",date:	"Oct-09",value:	72174, circle: 0},
{month: "October", year: "2010",date:	"Oct-10",value:	167182, circle: 0},
{month: "October", year: "2011",date:	"Oct-11",value:	292147, circle: 0},
{month: "October", year: "2012",date:	"Oct-12",value:	477478, circle: 0},
{month: "October", year: "2013",date:	"Oct-13",value:	0, circle: 0},
{month: "November", year: "2008",date:	"Nov-08",value:	39477, circle: 0},
{month: "November", year: "2009",date:	"Nov-09",value:	77110, circle: 0},
{month: "November", year: "2010",date:	"Nov-10",value:	176088, circle: 0},
{month: "November", year: "2011",date:	"Nov-11",value:	304076, circle: 0},
{month: "November", year: "2012",date:	"Nov-12",value:	499703, circle: 0},
{month: "November", year: "2013",date:	"Nov-13",value:	0, circle: 0},
{month: "December", year: "2008",date:	"Dec-08",value:	41002, circle: 0},
{month: "December", year: "2009",date:	"Dec-09",value:	85651, circle: 0},
{month: "December", year: "2010",date:	"Dec-10",value:	188294, circle: 0},
{month: "December", year: "2011",date:	"Dec-11",value:	317678, circle: 0},
{month: "December", year: "2012",date:	"Dec-12",value:	520241, circle: 0},
{month: "December", year: "2013",date:	"Dec-13",value:	0, circle: 0},
];
   
var dataG = [ 
{month: "January", year: "2008",date:	"Jan-08",value:	0, circle: 1},
{month: "January", year: "2009",date:	"Jan-09",value:	34423, circle: 1},
{month: "January", year: "2010",date:	"Jan-10",value:	45506, circle: 1},
{month: "January", year: "2011",date:	"Jan-11",value:	66201, circle: 1},
{month: "January", year: "2012",date:	"Jan-12",value:	94300, circle: 1},
{month: "January", year: "2013",date:	"Jan-13",value:	132659, circle: 1},
{month: "February", year: "2008",date:	"Feb-08",value:	0, circle: 1},
{month: "February", year: "2009",date:	"Feb-09",value:	34971, circle: 1},
{month: "February", year: "2010",date:	"Feb-10",value:	46784, circle: 1},
{month: "February", year: "2011",date:	"Feb-11",value:	68265, circle: 1},
{month: "February", year: "2012",date:	"Feb-12",value:	96780, circle: 1},
{month: "February", year: "2013",date:	"Feb-13",value:	136128, circle: 1},
{month: "March", year: "2008",date:	"Mar-08",value:	0, circle: 1},
{month: "March", year: "2009",date:	"Mar-09",value:	35589, circle: 1},
{month: "March", year: "2010",date:	"Mar-10",value:	48143, circle: 1},
{month: "March", year: "2011",date:	"Mar-11",value:	70646, circle: 1},
{month: "March", year: "2012",date:	"Mar-12",value:	99718, circle: 1},
{month: "March", year: "2012",date:	"Mar-13",value:	140184, circle: 1},
{month: "April", year: "2008",date:	"Apr-08",value:	0, circle: 1},
{month: "April", year: "2009",date:	"Apr-09",value:	36245, circle: 1},
{month: "April", year: "2010",date:	"Apr-10",value:	50168, circle: 1},
{month: "April", year: "2011",date:	"Apr-11",value:	73043, circle: 1},
{month: "April", year: "2012",date:	"Apr-12",value:	102846, circle: 1},
{month: "April", year: "2013",date:	"Apr-13",value:	144538, circle: 1},
{month: "May", year: "2008",date:	"May-08",value:	0, circle: 1},
{month: "May", year: "2009",date:	"May-09",value:36943, circle: 1},
{month: "May", year: "2010",date:	"May-10",value:51511, circle: 1},
{month: "May", year: "2011",date:	"May-11",value:74949, circle: 1},
{month: "May", year: "2012",date:	"May-12",value:105935, circle: 1},
{month: "May", year: "2013",date:	"May-13",value:149120, circle: 1},
{month: "June", year: "2008",date:	"Jun-08",value:	0, circle: 1},
{month: "June", year: "2009",date:	"Jun-09",value:	37715, circle: 1},
{month: "June", year: "2010",date:	"Jun-10",value:	53125, circle: 1},
{month: "June", year: "2011",date:	"Jun-11",value:	77208, circle: 1},
{month: "June", year: "2012",date:	"Jun-12",value:	108701, circle: 1},
{month: "June", year: "2013",date:	"Jun-13",value:	153030, circle: 1},
{month: "July", year: "2008",date:	"Jul-08",value:	32349, circle: 1},
{month: "July", year: "2009",date:	"Jul-09",value:	38474, circle: 1},
{month: "July", year: "2010",date:	"Jul-10",value:	54646, circle: 1},
{month: "July", year: "2011",date:	"Jul-11",value:	79416, circle: 1},
{month: "July", year: "2012",date:	"Jul-12",value:	111413, circle: 1},
{month: "July", year: "2013",date:	"Jul-13",value:	157724, circle: 1},
{month: "August", year: "2008",date:	"Aug-08",value:	32554, circle: 1},
{month: "August", year: "2009",date:	"Aug-09",value:	39390, circle: 1},
{month: "August", year: "2010",date:	"Aug-10",value:	56380, circle: 1},
{month: "August", year: "2011",date:	"Aug-11",value:	81872, circle: 1},
{month: "August", year: "2012",date:	"Aug-12",value:	114308, circle: 1},
{month: "August", year: "2013",date:	"Aug-13",value:	162325, circle: 1},
{month: "September", year: "2008",date:	"Sep-08",value:	32822, circle: 1},
{month: "September", year: "2009",date:	"Sep-09	",value:	40480, circle: 1},
{month: "September", year: "2010",date:	"Sep-10	",value:	57871, circle: 1},
{month: "September", year: "2011",date:	"Sep-11	",value:	84195, circle: 1},
{month: "September", year: "2012",date:	"Sep-12	",value:	117742, circle: 1},
{month: "September", year: "2013",date:	"Sep-13	",value:	166510, circle: 1},
{month: "October", year: "2008",date:	"Oct-08	",value:	33167, circle: 1},
{month: "October", year: "2009",date:	"Oct-09	",value:	41510, circle: 1},
{month: "October", year: "2010",date:	"Oct-10	",value:	59694, circle: 1},
{month: "October", year: "2011",date:	"Oct-11	",value:	86225, circle: 1},
{month: "October", year: "2012",date:	"Oct-12	",value:	121087, circle: 1},
{month: "October", year: "2013",date:	"Oct-13",value:	0, circle: 1},
{month: "November", year: "2008",date:	"Nov-08",value:	33532, circle: 1},
{month: "November", year: "2009",date:	"Nov-09",value:	42601, circle: 1},
{month: "November", year: "2010",date:	"Nov-10",value:	61388, circle: 1},
{month: "November", year: "2011",date:	"Nov-11",value:	88348, circle: 1},
{month: "November", year: "2012",date:	"Nov-12",value:	124606, circle: 1},
{month: "November", year: "2013",date:	"Nov-13",value:	0, circle: 1},
{month: "December", year: "2008",date:	"Dec-08",value:	33963, circle: 1},
{month: "December", year: "2009",date:	"Dec-09",value:	44374, circle: 1},
{month: "December", year: "2010",date:	"Dec-10",value:	64255, circle: 1},
{month: "December", year: "2011",date:	"Dec-11",value:	91683, circle: 1},
{month: "December", year: "2012",date:	"Dec-12",value:	128951, circle: 1},
{month: "December", year: "2013",date:	"Dec-13",value:	0, circle: 1},
];

var dataT = [
{date:	"Jan-08",value:	0, circle: 2},
{	date:	"Jan-09"	,	value:	77213, circle: 2},
{	date:	"Jan-10"	,	value:	137819, circle: 2},
{	date:	"Jan-11",	value:	263558, circle: 2},
{	date:	"Jan-12"	,	value:	425283, circle: 2},
{	date:	"Jan-13"	,	value:	675492, circle: 2},
{date:	"Feb-08",value:	0	, circle: 2},
{	date:	"Feb-09"	,	value:	80178, circle: 2},
{	date:	"Feb-10"	,	value:	146098, circle: 2},
{	date:	"Feb-11"	,	value:	274374, circle: 2},
{	date:	"Feb-12"	,	value:	440694, circle: 2},
{	date:	"Feb-13"	,	value:	699157, circle: 2},
{date:	"Mar-08",value:	0, circle: 2},
{	date:	"Mar-09"	,	value:	83372	, circle: 2},
{	date:	"Mar-10"	,	value:	155644	, circle: 2},
{	date:	"Mar-11"	,	value:	286903	, circle: 2},
{	date:	"Mar-12"    ,	value:	459616	, circle: 2},
{	date:	"Mar-13"	,	value:	725452	, circle: 2},
{date:	"Apr-08",value:	0	, circle: 2},
{	date:	"Apr-09"	,	value:	86746	, circle: 2},
{	date:	"Apr-10"	,	value:	166497	, circle: 2},
{	date:	"Apr-11"	,	value:	299688	, circle: 2},
{	date:	"Apr-12"	,	value:	479365	, circle: 2},
{	date:	"Apr-13"	,	value:	753891	, circle: 2},
{date:	"May-08",value:	0	, circle: 2},
{	date:	"May-09"	,	value:	89887	, circle: 2},
{	date:	"May-10"	,	value:	175561	, circle: 2},
{	date:	"May-11"	,	value:	311141	, circle: 2},
{	date:	"May-12"	,	value:	500188	, circle: 2},
{	date:	"May-13"	,	value:	783994	, circle: 2},
{date:	"Jun-08",value:	0	, circle: 2},
{	date:	"Jun-09"	,	value:	93611	, circle: 2},
{	date:	"Jun-10"	,	value:	185487	, circle: 2},
{	date:	"Jun-11"	,	value:	324237	, circle: 2},
{	date:	"Jun-12"	,	value:	517734	, circle: 2},
{	date:	"Jun-13"	,	value:	809404	, circle: 2},
{	date:	"Jul-08"	,	value:	68170	, circle: 2},
{	date:	"Jul-09"	,	value:	97722	, circle: 2},
{	date:	"Jul-10"	,	value:	195412	, circle: 2},
{	date:	"Jul-11"	,	value:	336099	, circle: 2},
{	date:	"Jul-12"	,	value:	534507	, circle: 2},
{	date:	"Jul-13"	,	value:	837309	, circle: 2},
{	date:	"Aug-08"	,	value:	68950	, circle: 2},
{	date:	"Aug-09"	,	value:	102622	, circle: 2},
{	date:	"Aug-10"	,	value:	206122	, circle: 2},
{	date:	"Aug-11"	,	value:	350377	, circle: 2},
{	date:	"Aug-12"	,	value:	552613	, circle: 2},
{	date:	"Aug-13"	,	value:	863763	, circle: 2},
{	date:	"Sep-08",	value:	70019	, circle: 2},
{	date:	"Sep-09"	,	value:	108221	, circle: 2},
{	date:	"Sep-10"	,	value:	215476	, circle: 2},
{	date:	"Sep-11"	,	value:	364564	, circle: 2},
{	date:	"Sep-12"	,	value:	575123	, circle: 2},
{	date:	"Sep-13"	,	value:	894151	, circle: 2},
{	date:	"Oct-08"	,	value:	71452	, circle: 2},
{	date:	"Oct-09"	,	value:	113684	, circle: 2},
{	date:	"Oct-10"	,	value:	226876	, circle: 2},
{	date:	"Oct-11"	,	value:	378372	, circle: 2},
{	date:	"Oct-12"	,	value:	598565	, circle: 2},
{date:	"Oct-13",value:	0	, circle: 2},
{	date:	"Nov-08"	,	value:	73009	, circle: 2},
{	date:	"Nov-09"	,	value:	119711	, circle: 2},
{	date:	"Nov-10"	,	value:	237476	, circle: 2},
{	date:	"Nov-11"	,	value:	392424	, circle: 2},
{	date:	"Nov-12"	,	value:	624309	, circle: 2},
{date:	"Nov-13",value:	0	, circle: 2},
{	date:	"Dec-08"	,	value:	74965	, circle: 2},
{	date:	"Dec-09"	,	value:	130025	, circle: 2},
{	date:	"Dec-10"	,	value:	252549	, circle: 2},
{	date:	"Dec-11"	,	value:	409361	, circle: 2},
{	date:	"Dec-12"	,	value:	649192	, circle: 2},
{date:	"Dec-13",value:	0	, circle: 2},
];

///////////////////////////////// Store Data //////////////////////////////////////

var energyDataT = [];
var energyDataA = [];
var energyDataG = [];
for(var i=0; i<72; i++) {
	energyDataT[i] = dataT[i];
	energyDataA[i] = dataA[i];
	energyDataG[i] = dataG[i];
}

///////////////////////////////// Draw Spirals //////////////////////////////////////

//draw the App Count spiral
d3.select('#spiralAppCount')
    .selectAll('svg')
    .data([energyDataA])
    .enter()
    .append('svg')
    .call(chartA);
    
//draw the Game Count spiral
d3.select('#spiralGameCount')
    .selectAll('svg')
    .data([energyDataG])
    .enter()
    .append('svg')
    .call(chartG);
    
/*
//draw the Total Count spiral
d3.select('#spiralTotalCount')
    .selectAll('svg')
    .data([energyDataT])
    .enter()
    .append('svg')
    .call(chartT);  
*/

///////////////////////////////// Slider //////////////////////////////////////
d3.select('#slider')
	.call(d3.slider()
		.axis(d3.svg.axis().orient("top").ticks(6))
		.min(0)
		.max(360)
		.step(10)
		.on("slide", function(evt, value) {
      		d3.select('#slider3text').text(value);
      		d3.select('#appSegmentLabel').text(function(d) {return d;});
      		d3.select('#spiralAppCount').selectAll('svg').call(chartA.scaleAngle(value));
      		d3.select('#spiralGameCount').selectAll('svg').call(chartG.scaleAngle(value));
      		
     		//Redraw app count DoD pointers
     		d3.selectAll("#spiralAppCount path")
				.on('mouseover', function() {
        			var d = d3.select(this).data()[0];; 
        			d3.select("#info").text(' In ' + d.month + 'of' + d.year + ' there were ' + d.value + ' non-game apps. ');
    				d3.select(this).style({ 'stroke': 'Black', 'stroke-width': '3px'});
			});
			d3.selectAll("#spiralAppCount path")
				.on('mouseout', function() {
    				d3.select("#info").text('From Jun-08 when the app store opened with 0 apps to Sept-13 there are 894151 total apps in the Apple app store');  
    				d3.select(this).style({ 'stroke': 'none', 'stroke-width': 'none'});      
			});
			
			//Redraw games DoD pointers
			d3.selectAll("#spiralGameCount path")
				.on('mouseover', function() {
        			var d = d3.select(this).data()[0];; 
        			d3.select("#info").text(' In ' + d.date +' there were ' + d.value + ' game apps. ');
    				d3.select(this).style({ 'stroke': 'Black', 'stroke-width': '3px'});	
			});
			d3.selectAll("#spiralGameCount path")
				.on('mouseout', function() {
    				d3.select("#info").text('From Jun-08 when the app store opened with 0 apps to Sept-13 there are 894151 total apps in the Apple app store');  
    				d3.select(this).style({ 'stroke': 'none', 'stroke-width': 'none'});      
			});
			
    	})
	)
	
///////////////////////////////// MouseOver: DoD //////////////////////////////////////

//Set default text    
d3.select("#info")
	.text('From 0 apps in Jun-08 to 894151 total apps in Sept-13 in the Apple app store'); 

d3.selectAll("#spiralAppCount path")
	.on('mouseover', function() {
        var d = d3.select(this).data()[0];; 
        d3.select("#info").text(' In ' + d.month + ' of ' + d.year + ' there were ' + d.value + ' non-game apps. ');
    	d3.select(this).style({ 'stroke': 'Black', 'stroke-width': '3px'});	
    	highlight(d.date);
	});

d3.selectAll("#spiralAppCount path")
	.on('mouseout', function() {
    	d3.select("#info").text('From 0 apps in June of 2008 to 894151 total apps in September to 2013 in the Apple app store');  
    	d3.select(this).style({ 'stroke': 'none', 'stroke-width': 'none'});    
    	highlight(null);  
});

d3.selectAll("#spiralGameCount path")
	.on('mouseover', function() {
        var d = d3.select(this).data()[0];; 
        d3.select("#info").text(' In ' + d.month + ' of ' + d.year + ' there were ' + d.value + ' game apps. ');
    	d3.select(this).style({ 'stroke': 'Black', 'stroke-width': '3px'});	
    	highlight(d.date);
	});

d3.selectAll("#spiralGameCount path")
	.on('mouseout', function() {
    	d3.select("#info").text('From 0 apps in June of 2008 to 894151 total apps in September of 2013 in the Apple app store');  
    	d3.select(this).style({ 'stroke': 'none', 'stroke-width': 'none'}); 
    	highlight(null);   
});

/*
d3.selectAll("#spiralTotalCount path")
	.on('mouseover', function() {
        var d = d3.select(this).data()[0];; 
        d3.select("#info").text(' In ' + d.date +' there were ' + d.value + ' total apps. ');
    	d3.select(this).style({ 'stroke': 'Black', 'stroke-width': '3px'});	
	});

d3.selectAll("#spiralTotalCount path")
	.on('mouseout', function() {
    d3.select("#info").text('From Jun-08 when the app store opened with 0 apps to Sept-13 there are 894151 total apps in the Apple app store');  
    d3.select(this).style({ 'stroke': 'none', 'stroke-width': 'none'});      
});
*/

function highlight(date) {
  if (date == null) d3.selectAll(".date").classed("active", false);
  else d3.selectAll(".date." + date).classed("active", true);
}