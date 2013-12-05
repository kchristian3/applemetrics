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
    .segmentAppHeight(23)
    .innerRadius(50)
    .numAppSegments(12)
    .radialLabels(["2008", "2009", "2010", "2011", "2012", "2013"])
    .segmentLabels(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])
    .margin({top: 20, right: 50, bottom: 20, left: 15});
    
var chartG = spiralGameCount()
	.accessor(function(d) {
		return d.value;
	})
    .segmentGameHeight(23)
    .innerRadius(50)
    .numGameSegments(12)
    .radialLabels(["2008", "2009", "2010", "2011", "2012", "2013"])
    .segmentLabels(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])
    .margin({top: 20, right: 20, bottom: 20, left: 15});    


///////////////////////////////// Data //////////////////////////////////////
 
var dataA = [
{month: "January", year: "2008", date:	"Jan-08",value:	0	, indx: 0, circle: 0},
{month: "February", year: "2008", date:	"Feb-08",value:	0	, indx: 1, circle: 0},
{month: "March", year: "2008", date:"Mar-08",value:		0	, indx: 2,circle: 0},
{month: "April", year: "2008", date:"Apr-08",value:		0	, indx: 3,circle: 0},
{month: "May", year: "2008", date:	"May-08",value:	0	, indx: 4,circle: 0},
{month: "June", year: "2008", date:	"Jun-08",value:	0	, indx: 5,circle: 0},
{month: "July", year: "2008",date:	"Jul-08",value: 	38833	, indx: 6,circle: 0},
{month: "August", year: "2008",date:	"Aug-08",value:	39405	,indx: 7, circle: 0},
{month: "September", year: "2008",date:	"Sep-08",value:	40205	, indx: 8, circle: 0},
{month: "October", year: "2008",date:	"Oct-08",value:	41294	, indx: 9, circle: 0},
{month: "November", year: "2008",date:	"Nov-08",value:	42490	, indx: 10, circle: 0},
{month: "December", year: "2008",date:	"Dec-08",value:	44002	, indx: 11, circle: 0},
{month: "January", year: "2009", date:	"Jan-09",value:	45802	, indx: 12, circle: 0},
{month: "February", year: "2009", date:	"Feb-09",value:	48243	, indx: 13, circle: 0},
{month: "March", year: "2009", date:"Mar-09",value:		50854	, indx: 14, circle: 0},
{month: "April", year: "2009", date:	"Apr-09",value:	53618	, indx: 15, circle: 0},
{month: "May", year: "2009", date:	"May-09",value:	56086	, indx: 16, circle: 0},
{month: "June", year: "2009",date:	"Jun-09",value:	59069	, indx: 17, circle: 0},
{month: "July", year: "2009",date:	"Jul-09",value:	62457	, indx: 18, circle: 0},
{month: "August", year: "2009",date:	"Aug-09",value:	66470	, indx: 19, circle: 0},
{month: "September", year: "2009",date:	"Sep-09",value:	71018	, indx: 20, circle: 0},
{month: "October", year: "2009",date:	"Oct-09",value:	75518	, indx: 21, circle: 0},
{month: "November", year: "2009",date:	"Nov-09",value:	80513	, indx: 22, circle: 0},
{month: "December", year: "2009",date:	"Dec-09",value:	89245	, indx: 23, circle: 0},
{month: "January", year: "2010", date:	"Jan-10",value:	96125	, indx: 24, circle: 0},
{month: "February", year: "2010", date:	"Feb-10",value:	103436	, indx: 25, circle: 0},
{month: "March", year: "2010", date:"Mar-10",value:		112150	, indx: 26, circle: 0},
{month: "April", year: "2010", date:	"Apr-10",value:	121388	, indx: 27, circle: 0},
{month: "May", year: "2010", date:	"May-10",value:	129580	, indx: 28, circle: 0},
{month: "June", year: "2010",date:	"Jun-10",value:	138454	, indx: 29, circle: 0},
{month: "July", year: "2010",date:	"Jul-10",value:	147474	, indx: 30, circle: 0},
{month: "August", year: "2010",date:	"Aug-10",value:	157155	, indx: 31, circle: 0},
{month: "September", year: "2010",date:	"Sep-10",value:	165619	, indx: 32, circle: 0},
{month: "October", year: "2010",date:	"Oct-10",value:	175969	, indx: 33, circle: 0},
{month: "November", year: "2010",date:	"Nov-10",value:	185702	, indx: 34, circle: 0},
{month: "December", year: "2010",date:	"Dec-10",value:	199052	, indx: 35, circle: 0},
{month: "January", year: "2011", date:	"Jan-11",value:	209125	, indx: 36, circle: 0},
{month: "February", year: "2011", date:	"Feb-11",value:	218880	, indx: 37, circle: 0},
{month: "March", year: "2011", date:"Mar-11",value:		230221	, indx: 38, circle: 0},
{month: "April", year: "2011", date:	"Apr-11",value:	241953	, indx: 39, circle: 0},
{month: "May", year: "2011", date:	"May-11",value:	252669	, indx: 40, circle: 0},
{month: "June", year: "2011",date:	"Jun-11",value:	264734	, indx: 41, circle: 0},
{month: "July", year: "2011",date:	"Jul-11",value:	275452	, indx: 42, circle: 0},
{month: "August", year: "2011",date:	"Aug-11",value:	288581	, indx: 43, circle: 0},
{month: "September", year: "2011",date:	"Sep-11",value:	301650	, indx: 44, circle: 0},
{month: "October", year: "2011",date:	"Oct-11",value:	314491	, indx: 45, circle: 0},
{month: "November", year: "2011",date:	"Nov-11",value:	327551	, indx: 46, circle: 0},
{month: "December", year: "2011",date:	"Dec-11",value:	342388	, indx: 47, circle: 0},
{month: "January", year: "2012", date:	"Jan-12",value:	356836	, indx: 48, circle: 0},
{month: "February", year: "2012", date:	"Feb-12",value:	370458	, indx: 49, circle: 0},
{month: "March", year: "2012", date:"Mar-12",value:		387441	, indx: 50, circle: 0},
{month: "April", year: "2012", date:	"Apr-12",value:	405011	, indx: 51, circle: 0},
{month: "May", year: "2012", date:	"May-12",value:	423661	, indx: 52, circle: 0},
{month: "June", year: "2012",date:	"Jun-12",value:	439266	, indx: 53, circle: 0},
{month: "July", year: "2012",date:	"Jul-12",value:	454081	, indx: 54, circle: 0},
{month: "August", year: "2012",date:	"Aug-12",value:	470054	, indx: 55, circle: 0},
{month: "September", year: "2012",date:	"Sep-12",value:	490028	, indx: 56, circle: 0},
{month: "October", year: "2012",date:	"Oct-12",value:	510296	, indx: 57, circle: 0},
{month: "November", year: "2012",date:	"Nov-12",value:	533366	, indx: 58, circle: 0},
{month: "December", year: "2012",date:	"Dec-12",value:	554788	, indx: 59, circle: 0},
{month: "January", year: "2013", date:	"Jan-13",value:	578258	, indx: 60, circle: 0},
{month: "February", year: "2013", date:	"Feb-13",value:	599257	, indx: 61, circle: 0},
{month: "March", year: "2013", date:"Mar-13",value:		622270	, indx: 62, circle: 0},
{month: "April", year: "2013", date:	"Apr-13",value:	647241	, indx: 63, circle: 0},
{month: "May", year: "2013", date:	"May-13",value:	673062	, indx: 64, circle: 0},
{month: "June", year: "2013",date:	"Jun-13",value:	695237	, indx: 65, circle: 0},
{month: "July", year: "2013",date:	"Jul-13",value:	719109	, indx: 66, circle: 0},
{month: "August", year: "2013",date:	"Aug-13",value:	741495	, indx: 67, circle: 0},
{month: "September", year: "2013",date:	"Sep-13",value:	767060	, indx: 68, circle: 0},
{month: "October", year: "2013",date:	"Oct-13",value:	798191	, indx: 69, circle: 0},
{month: "November", year: "2013",date:	"Nov-13",value:	816566	, indx: 70, circle: 0},
{month:  "December", year: "2013",date:	"Dec-13",value:	0	, indx: 71, circle: 0},
];
   
var dataG = [ 
{month: "January", year: "2008",date:	"Jan-08",value:	0	, indx: 0, circle: 1},
{month: "February", year: "2008",date:	"Feb-08",value:	0	, indx: 1, circle: 1},
{month: "March", year: "2008",date:	"Mar-08",value:	0	, indx: 2, circle: 1},
{month: "April", year: "2008",date:	"Apr-08",value:	0	, indx: 3, circle: 1},
{month: "May", year: "2008",date:	"May-08",value:	0	, indx: 4, circle: 1},
{month: "June", year: "2008",date:	"Jun-08",value:	0	, indx: 5, circle: 1},
{month: "July", year: "2008",date:	"Jul-08",value:	34747	, indx: 6, circle: 1},
{month: "August", year: "2008",date:	"Aug-08",value:	34950	, indx: 7, circle: 1},
{month: "September", year: "2008",date:	"Sep-08",value:	35219	, indx: 8, circle: 1},
{month: "October", year: "2008",date:	"Oct-08",value:	35563	, indx: 9, circle: 1},
{month: "November", year: "2008",date:	"Nov-08",value:	35929	, indx: 10, circle: 1},
{month: "December", year: "2008",date:	"Dec-08",value:	36360	, indx: 11, circle: 1},
{month: "January", year: "2009",date:	"Jan-09",value:	36817	, indx: 12, circle: 1},
{month: "February", year: "2009",date:	"Feb-09",value:	37362	, indx: 13, circle: 1},
{month: "March", year: "2009",date:	"Mar-09",value:	37979	, indx: 14, circle: 1},
{month: "April", year: "2009",date:	"Apr-09",value:	38636	, indx: 15, circle: 1},
{month: "May", year: "2009",date:	"May-09",value:	39335	, indx: 16, circle: 1},
{month: "June", year: "2009",date:	"Jun-09",value:	40114	, indx: 17, circle: 1},
{month: "July", year: "2009",date:	"Jul-09",value:	40875	, indx: 18, circle: 1},
{month: "August", year: "2009",date:	"Aug-09",value:	41791	, indx: 19, circle: 1},
{month: "September", year: "2009",date:	"Sep-09	",value:	42881	, indx: 20, circle: 1},
{month: "October", year: "2009",date:	"Oct-09	",value:	43909	, indx: 21, circle: 1},
{month: "November", year: "2009",date:	"Nov-09",value:	45003	, indx: 22, circle: 1},
{month: "December", year: "2009",date:	"Dec-09",value:	46786	, indx: 23, circle: 1},
{month: "January", year: "2010",date:	"Jan-10",value:	47919	, indx: 24, circle: 1},
{month: "February", year: "2010",date:	"Feb-10",value:	49201	, indx: 25, circle: 1},
{month: "March", year: "2010",date:	"Mar-10",value:	50559	, indx: 26, circle: 1},
{month: "April", year: "2010",date:	"Apr-10",value:	52588	, indx: 27, circle: 1},
{month: "May", year: "2010",date:	"May-10",value:	53925	, indx: 28, circle: 1},
{month: "June", year: "2010",date:	"Jun-10",value:	55532	, indx: 29, circle: 1},
{month: "July", year: "2010",date:	"Jul-10",value:	57052	, indx: 30, circle: 1},
{month: "August", year: "2010",date:	"Aug-10",value:	58785	, indx: 31, circle: 1},
{month: "September", year: "2010",date:	"Sep-10	",value:	60275	, indx: 32, circle: 1},
{month: "October", year: "2010",date:	"Oct-10	",value:	62101	, indx: 33, circle: 1},
{month: "November", year: "2010",date:	"Nov-10",value:	63804	, indx: 34, circle: 1},
{month: "December", year: "2010",date:	"Dec-10",value:	66676	, indx: 35, circle: 1},
{month: "January", year: "2011",date:	"Jan-11",value:	68618	, indx: 36, circle: 1},
{month: "February", year: "2011",date:	"Feb-11",value:	70685	, indx: 37, circle: 1},
{month: "March", year: "2011",date:	"Mar-11",value:	73072	, indx: 38, circle: 1},
{month: "April", year: "2011",date:	"Apr-11",value:	75475	, indx: 39, circle: 1},
{month: "May", year: "2011",date:	"May-11",value:	77390	, indx: 40, circle: 1},
{month: "July", year: "2011",date:	"Jul-11",value:	79650	, indx: 41, circle: 1},
{month: "June", year: "2011",date:	"Jun-11",value:	81867	, indx: 42, circle: 1},
{month: "August", year: "2011",date:	"Aug-11",value:	84325	, indx: 43, circle: 1},
{month: "September", year: "2011",date:	"Sep-11	",value:	86648	, indx: 44, circle: 1},
{month: "October", year: "2011",date:	"Oct-11	",value:	88681	, indx: 45, circle: 1},
{month: "November", year: "2011",date:	"Nov-11",value:	90815	, indx: 46, circle: 1},
{month: "December", year: "2011",date:	"Dec-11",value:	94161	, indx: 47, circle: 1},
{month: "January", year: "2012",date:	"Jan-12",value:	96786	, indx: 48, circle: 1},
{month: "February", year: "2012",date:	"Feb-12",value:	99247	, indx: 49, circle: 1},
{month: "March", year: "2012",date:	"Mar-12",value:	102202	, indx: 50, circle: 1},
{month: "April", year: "2012",date:	"Apr-12",value:	105345	, indx: 51, circle: 1},
{month: "May", year: "2012",date:	"May-12",value:	108442	, indx: 52, circle: 1},
{month: "June", year: "2012",date:	"Jun-12",value:	111224	, indx: 53, circle: 1},
{month: "July", year: "2012",date:	"Jul-12",value:	113945	, indx: 54, circle: 1},
{month: "August", year: "2012",date:	"Aug-12",value:	116853	, indx: 55, circle: 1},
{month: "September", year: "2012",date:	"Sep-12"	,value:	120310	, indx: 56, circle: 1},
{month: "October", year: "2012",date:	"Oct-12"	,value:	123543	, indx: 57, circle: 1},
{month: "November", year: "2012",date:	"Nov-12",value:	127044	, indx: 58, circle: 1},
{month: "December", year: "2012",date:	"Dec-12",value:	131407	, indx: 59, circle: 1},
{month: "January", year: "2013",date:	"Jan-13",value:	135120	, indx: 60, circle: 1},
{month: "February", year: "2013",date:	"Feb-13",value:	138597	, indx: 61, circle: 1},
{month: "March", year: "2013",date:	"Mar-13",value:	142653	, indx: 62, circle: 1},
{month: "April", year: "2013",date:	"Apr-13",value:	147001	, indx: 63, circle: 1},
{month: "May", year: "2013",date:	"May-13",value:	151469	, indx: 64, circle: 1},
{month: "June", year: "2013",date:	"Jun-13",value:	155381	, indx: 65, circle: 1},
{month: "July", year: "2013",date:	"Jul-13",value:	160084	, indx: 66, circle: 1},
{month: "August", year: "2013",date:	"Aug-13",value:	164706	, indx: 67, circle: 1},
{month: "September", year: "2013",date:	"Sep-13"	,value:	169560	, indx: 68, circle: 1},
{month: "October", year: "2013",date:	"Oct-13",value:	176309	, indx: 69, circle: 1},
{month: "November", year: "2013",date:	"Nov-13",value:	181342	, indx: 70, circle: 1},
{month: "December", year: "2013",date:	"Dec-13",value:	0	, indx: 71, circle: 1},
];

var dataT = [
{value:		0, indx: 0, circle: 2},
{value:		0, indx: 0, circle: 2},
{value:		0, indx: 0, circle: 2},
{value:		0, indx: 0, circle: 2},
{value:		0, indx: 0, circle: 2},
{value:		0, indx: 0, circle: 2},
{value:				73580	, indx: 0, circle: 2},
{value:				74355	, indx: 0, circle: 2},
{value:				75424	, indx: 0, circle: 2},
{value:				76857	, indx: 0, circle: 2},
{value:				78419	, indx: 0, circle: 2},
{value:				80362	, indx: 0, circle: 2},
{value:	82619	, indx: 0, circle: 2},
{value:	85605	, indx: 0, circle: 2},
{value:		88833	, indx: 0, circle: 2},
{value:	92254	, indx: 0, circle: 2},
{value:	95421	, indx: 0, circle: 2},
{value:	99183	, indx: 0, circle: 2},
{value:	103332	, indx: 0, circle: 2},
{value:	108261	, indx: 0, circle: 2},
{value:	113899	, indx: 0, circle: 2},
{value:	119427	, indx: 0, circle: 2},
{value:	125516	, indx: 0, circle: 2},
{value:	136031	, indx: 0, circle: 2},
{value:	144044	, indx: 0, circle: 2},
{value:	152637	, indx: 0, circle: 2},
{value:	162709	, indx: 0, circle: 2},
{value:	173976	, indx: 0, circle: 2},
{value:	183505	, indx: 0, circle: 2},
{value:	193986	, indx: 0, circle: 2},
{value:	204526	, indx: 0, circle: 2},
{value:	215940	, indx: 0, circle: 2},
{value:	225894	, indx: 0, circle: 2},
{value:	238070	, indx: 0, circle: 2},
{value:	249506	, indx: 0, circle: 2},
{value:	265728	, indx: 0, circle: 2},
{value:	277743	, indx: 0, circle: 2},
{value:	289565	, indx: 0, circle: 2},
{value:	303293	, indx: 0, circle: 2},
{value:	317428	, indx: 0, circle: 2},
{value:	330059	, indx: 0, circle: 2},
{value:	344384	, indx: 0, circle: 2},
{value:		357319	, indx: 0, circle: 2},
{value:	372906	, indx: 0, circle: 2},
{value:	388298	, indx: 0, circle: 2},
{value:	403172	, indx: 0, circle: 2},
{value:	418366	, indx: 0, circle: 2},
{value:	436549	, indx: 0, circle: 2},
{value:	453622	, indx: 0, circle: 2},
{value:	469705	, indx: 0, circle: 2},
{value:	489643	, indx: 0, circle: 2},
{value:	510356	, indx: 0, circle: 2},
{value:	532103	, indx: 0, circle: 2},
{value:	550490	, indx: 0, circle: 2},
{value:	568026	, indx: 0, circle: 2},
{value:	586907	, indx: 0, circle: 2},
{value:		610338	, indx: 0, circle: 2},
{value:	633839	, indx: 0, circle: 2},
{value:	660410	, indx: 0, circle: 2},
{value:	686195	, indx: 0, circle: 2},
{value:	713378	, indx: 0, circle: 2},
{value:	737854	, indx: 0, circle: 2},
{value:	764923	, indx: 0, circle: 2},
{value:	794242	, indx: 0, circle: 2},
{value:	824531	, indx: 0, circle: 2},
{value:	850618	, indx: 0, circle: 2},
{value:	879193	, indx: 0, circle: 2},
{value:	906201	, indx: 0, circle: 2},
{value:	936620	, indx: 0, circle: 2},
{value:	974500	, indx: 0, circle: 2},
{value:	997908	, indx: 0, circle: 2},
{value:		0, indx: 0, circle: 2},
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
	
///////////////////////////////// MouseOver: DoD //////////////////////////////////////

//Set default text    
d3.select("#totalInfo").text("" + energyDataT[68].value);
d3.select("#appInfo").text("" + energyDataA[68].value);
d3.select("#gameInfo").text("" + energyDataG[68].value);
d3.select("#yearInfo").text("" + energyDataA[68].year);
d3.select("#monthInfo").text("" + energyDataG[68].month);
d3.select("#appDif").text(Math.ceil((energyDataA[68].value/energyDataT[68].value)*100) + "%");
d3.select("#gameDif").text(Math.ceil((energyDataG[68].value/energyDataT[68].value)*100) + "%");

d3.selectAll("#spiralAppCount path")
	.on('mouseover', function() {
        var d = d3.select(this).data()[0];
    	d3.select(this).style({ 'stroke': 'Black', 'stroke-width': '3px'});
    	//d3.selectAll('#appLabelText').style("opacity",".6");	
    	highlight(d.date, d.year, d.indx, d.circle);
	});

d3.selectAll("#spiralAppCount path")
	.on('mouseout', function() { 
    	d3.select(this).style({ 'stroke': 'none', 'stroke-width': 'none'});
    	//d3.selectAll('#appLabelText').style("opacity","0");
    	highlight(null, null, 0,null);  
});

d3.selectAll("#spiralGameCount path")
	.on('mouseover', function() {
        var d = d3.select(this).data()[0];
    	d3.select(this).style({ 'stroke': 'Black', 'stroke-width': '3px'});
    	//d3.selectAll('#gameLabelText').style("opacity",".6");		
    	highlight(d.date, d.year, d.indx, d.circle);
	});

d3.selectAll("#spiralGameCount path")
	.on('mouseout', function() {
    	d3.select(this).style({ 'stroke': 'none', 'stroke-width': 'none'});
    	//d3.selectAll('#gameLabelText').style("opacity","0");	
    	highlight(null, 0, 0, null);   
});

function highlight(date, year, id, circle) {
  if (date == null) {
  	d3.select("#yearInfo").text("" + energyDataA[68].year);
  	d3.select("#monthInfo").text("" + energyDataG[68].month);
	d3.selectAll(".date").classed("active", false);
	d3.select("#totalInfo").text("" + energyDataG[68].value);
	d3.select("#appDif").text(Math.ceil((energyDataA[68].value/energyDataT[68].value)*100) + "%");
	d3.select("#gameDif").text(Math.ceil((energyDataG[68].value/energyDataT[68].value)*100) + "%");
	d3.select("#zeroInfo").text("");
	d3.select("#appInfo")
		.text("" + energyDataA[68].value)
		.style("opacity", ".6");
	d3.select("#gameInfo")
		.text("" + energyDataG[68].value)
		.style("opacity", ".6");
  }
  else {
  	d3.select("#yearInfo").text("" + energyDataA[id].year);
  	d3.select("#monthInfo").text("" + energyDataG[id].month);
  	if(energyDataA[id].value == 0){
  		d3.select("#appDif").text("N/A");
		d3.select("#gameDif").text("N/A");
		if(year == "2008"){
			d3.select("#zeroInfo").text("App store opened July 2008");
		} else {
			d3.select("#zeroInfo").text("Current month data collected at end of month");
		}
	} else {
		d3.select("#appDif").text(Math.ceil((energyDataA[id].value/energyDataT[id].value)*100) + "%");
		d3.select("#gameDif").text(Math.ceil((energyDataG[id].value/energyDataT[id].value)*100) + "%");
	}
  	d3.selectAll(".date." + date).classed("active", true);
  	if(circle == 0){
  		d3.select("#totalInfo").text("" + energyDataT[id].value);
    	d3.select("#appInfo")
    		.text("" + energyDataA[id].value)
    		.style("opacity", "1");
  		d3.select("#gameInfo")
  			.text("" + energyDataG[id].value)
  			.style("opacity", ".6");
  	} else{
  		d3.select("#totalInfo").text("" + energyDataT[id].value);
    	d3.select("#appInfo")
    		.text("" + energyDataA[id].value)
    		.style("opacity", ".6");
  		d3.select("#gameInfo")
  			.text("" + energyDataG[id].value)
  			.style("opacity", "1");
  	}
  }
  	
}