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
    .segmentAppHeight(25)
    .innerRadius(50)
    .numAppSegments(12)
    .radialLabels(["2008", "2009", "2010", "2011", "2012", "2013"])
    .segmentLabels(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])
    .margin({top: 20, right: 50, bottom: 20, left: 15});
    
var chartG = spiralGameCount()
	.accessor(function(d) {
		return d.value;
	})
    .segmentGameHeight(25)
    .innerRadius(50)
    .numGameSegments(12)
    .radialLabels(["2008", "2009", "2010", "2011", "2012", "2013"])
    .segmentLabels(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])
    .margin({top: 20, right: 20, bottom: 20, left: 15});    


///////////////////////////////// Data //////////////////////////////////////
 
var dataA = [
{month: "January", year: "2008", date:	"Jan-08",value:	0, indx: 0, indx: 0, circle: 0},
{month: "February", year: "2008", date:	"Feb-08",value:	0, indx: 1, indx: 0, circle: 0},
{month: "March", year: "2008", date:"Mar-08",value:	0, indx: 2,circle: 0},
{month: "April", year: "2008", date:"Apr-08",value:	0, indx: 3,circle: 0},
{month: "May", year: "2008", date:	"May-08",value:	0, indx: 4,circle: 0},
{month: "June", year: "2008", date:	"Jun-08",value:	0, indx: 5,circle: 0},
{month: "July", year: "2008",date:	"Jul-08",value: 35821, indx: 6,circle: 0},
{month: "August", year: "2008",date:	"Aug-08",value:	36396,indx: 7, indx: 0, circle: 0},
{month: "September", year: "2008",date:	"Sep-08",value:	37197, indx: 8, circle: 0},
{month: "October", year: "2008",date:	"Oct-08",value:	38285, indx: 9, circle: 0},
{month: "November", year: "2008",date:	"Nov-08",value:	39477, indx: 10, circle: 0},
{month: "December", year: "2008",date:	"Dec-08",value:	41002, indx: 11, circle: 0},
{month: "January", year: "2009", date:	"Jan-09",value:	42790, indx: 12, circle: 0},
{month: "February", year: "2009", date:	"Feb-09",value:	45207, indx: 13, circle: 0},
{month: "March", year: "2009", date:"Mar-09",value:	47783, indx: 14, circle: 0},
{month: "April", year: "2009", date:	"Apr-09",value:	50501, indx: 15, circle: 0},
{month: "May", year: "2009", date:	"May-09",value:	52944, indx: 16, circle: 0},
{month: "June", year: "2009",date:	"Jun-09",value:	55896, indx: 17, circle: 0},
{month: "July", year: "2009",date:	"Jul-09",value:	59248, indx: 18, circle: 0},
{month: "August", year: "2009",date:	"Aug-09",value:	63232, indx: 19, circle: 0},
{month: "September", year: "2009",date:	"Sep-09",value:	67741, indx: 20, circle: 0},
{month: "October", year: "2009",date:	"Oct-09",value:	72174, indx: 21, circle: 0},
{month: "November", year: "2009",date:	"Nov-09",value:	77110, indx: 22, circle: 0},
{month: "December", year: "2009",date:	"Dec-09",value:	85651, indx: 23, circle: 0},
{month: "January", year: "2010", date:	"Jan-10",value:	92313, indx: 24, circle: 0},
{month: "February", year: "2010", date:	"Feb-10",value:	99314, indx: 25, circle: 0},
{month: "March", year: "2010", date:"Mar-10",value:	107501, indx: 26, circle: 0},
{month: "April", year: "2010", date:	"Apr-10",value:	116329, indx: 27, circle: 0},
{month: "May", year: "2010", date:	"May-10",value:	124050, indx: 28, circle: 0},
{month: "June", year: "2010",date:	"Jun-10",value:	132362, indx: 29, circle: 0},
{month: "July", year: "2010",date:	"Jul-10",value:	140766, indx: 30, circle: 0},
{month: "August", year: "2010",date:	"Aug-10",value:	149742, indx: 31, circle: 0},
{month: "September", year: "2010",date:	"Sep-10",value:	157605, indx: 32, circle: 0},
{month: "October", year: "2010",date:	"Oct-10",value:	167182, indx: 33, circle: 0},
{month: "November", year: "2010",date:	"Nov-10",value:	176088, indx: 34, circle: 0},
{month: "December", year: "2010",date:	"Dec-10",value:	188294, indx: 35, circle: 0},
{month: "January", year: "2011", date:	"Jan-11",value:	197357, indx: 36, circle: 0},
{month: "February", year: "2011", date:	"Feb-11",value:	206109, indx: 37, circle: 0},
{month: "March", year: "2011", date:"Mar-11",value:	216257, indx: 38, circle: 0},
{month: "April", year: "2011", date:	"Apr-11",value:	226645, indx: 39, circle: 0},
{month: "May", year: "2011", date:	"May-11",value:	236192, indx: 40, circle: 0},
{month: "June", year: "2011",date:	"Jun-11",value:	247029, indx: 41, circle: 0},
{month: "July", year: "2011",date:	"Jul-11",value:	256683, indx: 42, circle: 0},
{month: "August", year: "2011",date:	"Aug-11",value:	268505, indx: 43, circle: 0},
{month: "September", year: "2011",date:	"Sep-11",value:	280369, indx: 44, circle: 0},
{month: "October", year: "2011",date:	"Oct-11",value:	292147, indx: 45, circle: 0},
{month: "November", year: "2011",date:	"Nov-11",value:	304076, indx: 46, circle: 0},
{month: "December", year: "2011",date:	"Dec-11",value:	317678, indx: 47, circle: 0},
{month: "January", year: "2012", date:	"Jan-12",value:	330983, indx: 48, circle: 0},
{month: "February", year: "2012", date:	"Feb-12",value:	343914, indx: 49, circle: 0},
{month: "March", year: "2012", date:"Mar-12",value:	359898, indx: 50, circle: 0},
{month: "April", year: "2012", date:	"Apr-12",value:	376519, indx: 51, circle: 0},
{month: "May", year: "2012", date:	"May-12",value:	394253, indx: 52, circle: 0},
{month: "June", year: "2012",date:	"Jun-12",value:	409033, indx: 53, circle: 0},
{month: "July", year: "2012",date:	"Jul-12",value:	423094, indx: 54, circle: 0},
{month: "August", year: "2012",date:	"Aug-12",value:	438305, indx: 55, circle: 0},
{month: "September", year: "2012",date:	"Sep-12",value:	457381, indx: 56, circle: 0},
{month: "October", year: "2012",date:	"Oct-12",value:	477478, indx: 57, circle: 0},
{month: "November", year: "2012",date:	"Nov-12",value:	499703, indx: 58, circle: 0},
{month: "December", year: "2012",date:	"Dec-12",value:	520241, indx: 59, circle: 0},
{month: "January", year: "2013", date:	"Jan-13",value:	542833, indx: 60, circle: 0},
{month: "February", year: "2013", date:	"Feb-13",value:	563029, indx: 61, circle: 0},
{month: "March", year: "2013", date:"Mar-13",value:	585268, indx: 62, circle: 0},
{month: "April", year: "2013", date:	"Apr-13",value:	609353, indx: 63, circle: 0},
{month: "May", year: "2013", date:	"May-13",value:	634874, indx: 64, circle: 0},
{month: "June", year: "2013",date:	"Jun-13",value:	656374, indx: 65, circle: 0},
{month: "July", year: "2013",date:	"Jul-13",value:679585, indx: 66, circle: 0},
{month: "August", year: "2013",date:	"Aug-13",value:	701438, indx: 67, circle: 0},
{month: "September", year: "2013",date:	"Sep-13",value:	727641, indx: 68, circle: 0},
{month: "October", year: "2013",date:	"Oct-13",value:	0, indx: 69, circle: 0},
{month: "November", year: "2013",date:	"Nov-13",value:	0, indx: 70, circle: 0},
{month: "December", year: "2013",date:	"Dec-13",value:	0, indx: 71, circle: 0},
];
   
var dataG = [ 
{month: "January", year: "2008",date:	"Jan-08",value:	0, indx: 0, circle: 1},
{month: "February", year: "2008",date:	"Feb-08",value:	0, indx: 1, circle: 1},
{month: "March", year: "2008",date:	"Mar-08",value:	0, indx: 2, circle: 1},
{month: "April", year: "2008",date:	"Apr-08",value:	0, indx: 3, circle: 1},
{month: "May", year: "2008",date:	"May-08",value:	0, indx: 4, circle: 1},
{month: "June", year: "2008",date:	"Jun-08",value:	0, indx: 5, circle: 1},
{month: "July", year: "2008",date:	"Jul-08",value:	32349, indx: 6, circle: 1},
{month: "August", year: "2008",date:	"Aug-08",value:	32554, indx: 7, circle: 1},
{month: "September", year: "2008",date:	"Sep-08",value:	32822, indx: 8, circle: 1},
{month: "October", year: "2008",date:	"Oct-08	",value:	33167, indx: 9, circle: 1},
{month: "November", year: "2008",date:	"Nov-08",value:	33532, indx: 10, circle: 1},
{month: "December", year: "2008",date:	"Dec-08",value:	33963, indx: 11, circle: 1},
{month: "January", year: "2009",date:	"Jan-09",value:	34423, indx: 12, circle: 1},
{month: "February", year: "2009",date:	"Feb-09",value:	34971, indx: 13, circle: 1},
{month: "March", year: "2009",date:	"Mar-09",value:	35589, indx: 14, circle: 1},
{month: "April", year: "2009",date:	"Apr-09",value:	36245, indx: 15, circle: 1},
{month: "May", year: "2009",date:	"May-09",value:36943, indx: 16, circle: 1},
{month: "June", year: "2009",date:	"Jun-09",value:	37715, indx: 17, circle: 1},
{month: "July", year: "2009",date:	"Jul-09",value:	38474, indx: 18, circle: 1},
{month: "August", year: "2009",date:	"Aug-09",value:	39390, indx: 19, circle: 1},
{month: "September", year: "2009",date:	"Sep-09	",value:	40480, indx: 20, circle: 1},
{month: "October", year: "2009",date:	"Oct-09	",value:	41510, indx: 21, circle: 1},
{month: "November", year: "2009",date:	"Nov-09",value:	42601, indx: 22, circle: 1},
{month: "December", year: "2009",date:	"Dec-09",value:	44374, indx: 23, circle: 1},
{month: "January", year: "2010",date:	"Jan-10",value:	45506, indx: 24, circle: 1},
{month: "February", year: "2010",date:	"Feb-10",value:	46784, indx: 25, circle: 1},
{month: "March", year: "2010",date:	"Mar-10",value:	48143, indx: 26, circle: 1},
{month: "April", year: "2010",date:	"Apr-10",value:	50168, indx: 27, circle: 1},
{month: "May", year: "2010",date:	"May-10",value:51511, indx: 28, circle: 1},
{month: "June", year: "2010",date:	"Jun-10",value:	53125, indx: 29, circle: 1},
{month: "July", year: "2010",date:	"Jul-10",value:	54646, indx: 30, circle: 1},
{month: "August", year: "2010",date:	"Aug-10",value:	56380, indx: 31, circle: 1},
{month: "September", year: "2010",date:	"Sep-10	",value:	57871, indx: 32, circle: 1},
{month: "October", year: "2010",date:	"Oct-10	",value:	59694, indx: 33, circle: 1},
{month: "November", year: "2010",date:	"Nov-10",value:	61388, indx: 34, circle: 1},
{month: "December", year: "2010",date:	"Dec-10",value:	64255, indx: 35, circle: 1},
{month: "January", year: "2011",date:	"Jan-11",value:	66201, indx: 36, circle: 1},
{month: "February", year: "2011",date:	"Feb-11",value:	68265, indx: 37, circle: 1},
{month: "March", year: "2011",date:	"Mar-11",value:	70646, indx: 38, circle: 1},
{month: "April", year: "2011",date:	"Apr-11",value:	73043, indx: 39, circle: 1},
{month: "May", year: "2011",date:	"May-11",value:74949, indx: 40, circle: 1},
{month: "July", year: "2011",date:	"Jul-11",value:	79416, indx: 41, circle: 1},
{month: "June", year: "2011",date:	"Jun-11",value:	77208, indx: 42, circle: 1},
{month: "August", year: "2011",date:	"Aug-11",value:	81872, indx: 43, circle: 1},
{month: "September", year: "2011",date:	"Sep-11	",value:	84195, indx: 44, circle: 1},
{month: "October", year: "2011",date:	"Oct-11	",value:	86225, indx: 45, circle: 1},
{month: "November", year: "2011",date:	"Nov-11",value:	88348, indx: 46, circle: 1},
{month: "December", year: "2011",date:	"Dec-11",value:	91683, indx: 47, circle: 1},
{month: "January", year: "2012",date:	"Jan-12",value:	94300, indx: 48, circle: 1},
{month: "February", year: "2012",date:	"Feb-12",value:	96780, indx: 49, circle: 1},
{month: "March", year: "2012",date:	"Mar-12",value:	99718, indx: 50, circle: 1},
{month: "April", year: "2012",date:	"Apr-12",value:	102846, indx: 51, circle: 1},
{month: "May", year: "2012",date:	"May-12",value:105935, indx: 52, circle: 1},
{month: "June", year: "2012",date:	"Jun-12",value:	108701, indx: 53, circle: 1},
{month: "July", year: "2012",date:	"Jul-12",value:	111413, indx: 54, circle: 1},
{month: "August", year: "2012",date:	"Aug-12",value:	114308, indx: 55, circle: 1},
{month: "September", year: "2012",date:	"Sep-12	",value:	117742, indx: 56, circle: 1},
{month: "October", year: "2012",date:	"Oct-12	",value:	121087, indx: 57, circle: 1},
{month: "November", year: "2012",date:	"Nov-12",value:	124606, indx: 58, circle: 1},
{month: "December", year: "2012",date:	"Dec-12",value:	128951, indx: 59, circle: 1},
{month: "January", year: "2013",date:	"Jan-13",value:	132659, indx: 60, circle: 1},
{month: "February", year: "2013",date:	"Feb-13",value:	136128, indx: 61, circle: 1},
{month: "March", year: "2013",date:	"Mar-13",value:	140184, indx: 62, circle: 1},
{month: "April", year: "2013",date:	"Apr-13",value:	144538, indx: 63, circle: 1},
{month: "May", year: "2013",date:	"May-13",value:149120, indx: 64, circle: 1},
{month: "June", year: "2013",date:	"Jun-13",value:	153030, indx: 65, circle: 1},
{month: "July", year: "2013",date:	"Jul-13",value:	157724, indx: 66, circle: 1},
{month: "August", year: "2013",date:	"Aug-13",value:	162325, indx: 67, circle: 1},
{month: "September", year: "2013",date:	"Sep-13	",value:	166510, indx: 68, circle: 1},
{month: "October", year: "2013",date:	"Oct-13",value:	0, indx: 69, circle: 1},
{month: "November", year: "2013",date:	"Nov-13",value:	0, indx: 70, circle: 1},
{month: "December", year: "2013",date:	"Dec-13",value:	0, indx: 71, circle: 1},
];

var dataT = [
{date:	"Jan-08",value:	0, indx: 0, circle: 2},
{date:	"Feb-08",value:	0	, indx: 0, circle: 2},
{date:	"Mar-08",value:	0, indx: 0, circle: 2},
{date:	"Apr-08",value:	0	, indx: 0, circle: 2},
{date:	"May-08",value:	0	, indx: 0, circle: 2},
{date:	"Jun-08",value:	0	, indx: 0, circle: 2},
{	date:	"Jul-08"	,	value:	68170	, indx: 0, circle: 2},
{	date:	"Aug-08"	,	value:	68950	, indx: 0, circle: 2},
{	date:	"Sep-08",	value:	70019	, indx: 0, circle: 2},
{	date:	"Oct-08"	,	value:	71452	, indx: 0, circle: 2},
{	date:	"Nov-08"	,	value:	73009	, indx: 0, circle: 2},
{	date:	"Dec-08"	,	value:	74965	, indx: 0, circle: 2},
{	date:	"Jan-09"	,	value:	77213, indx: 0, circle: 2},
{	date:	"Feb-09"	,	value:	80178, indx: 0, circle: 2},
{	date:	"Mar-09"	,	value:	83372	, indx: 0, circle: 2},
{	date:	"Apr-09"	,	value:	86746	, indx: 0, circle: 2},
{	date:	"May-09"	,	value:	89887	, indx: 0, circle: 2},
{	date:	"Jun-09"	,	value:	93611	, indx: 0, circle: 2},
{	date:	"Jan-10"	,	value:	137819, indx: 0, circle: 2},
{	date:	"Feb-10"	,	value:	146098, indx: 0, circle: 2},
{	date:	"Mar-10"	,	value:	155644	, indx: 0, circle: 2},
{	date:	"Apr-10"	,	value:	166497	, indx: 0, circle: 2},
{	date:	"May-10"	,	value:	175561	, indx: 0, circle: 2},
{	date:	"Jun-10"	,	value:	185487	, indx: 0, circle: 2},
{	date:	"Jan-11",	value:	263558, indx: 0, circle: 2},
{	date:	"Feb-11"	,	value:	274374, indx: 0, circle: 2},
{	date:	"Mar-11"	,	value:	286903	, indx: 0, circle: 2},
{	date:	"Apr-11"	,	value:	299688	, indx: 0, circle: 2},
{	date:	"May-11"	,	value:	311141	, indx: 0, circle: 2},
{	date:	"Jun-11"	,	value:	324237	, indx: 0, circle: 2},
{	date:	"Jan-12"	,	value:	425283, indx: 0, circle: 2},
{	date:	"Feb-12"	,	value:	440694, indx: 0, circle: 2},
{	date:	"Mar-12"    ,	value:	459616	, indx: 0, circle: 2},
{	date:	"Apr-12"	,	value:	479365	, indx: 0, circle: 2},
{	date:	"May-12"	,	value:	500188	, indx: 0, circle: 2},
{	date:	"Jun-12"	,	value:	517734	, indx: 0, circle: 2},
{	date:	"Jan-13"	,	value:	675492, indx: 0, circle: 2},
{	date:	"Feb-13"	,	value:	699157, indx: 0, circle: 2},
{	date:	"Mar-13"	,	value:	725452	, indx: 0, circle: 2},
{	date:	"Apr-13"	,	value:	753891	, indx: 0, circle: 2},
{	date:	"May-13"	,	value:	783994	, indx: 0, circle: 2},
{	date:	"Jun-13"	,	value:	809404	, indx: 0, circle: 2},



{	date:	"Jul-08"	,	value:	68170	, indx: 0, circle: 2},
{	date:	"Jul-09"	,	value:	97722	, indx: 0, circle: 2},
{	date:	"Aug-09"	,	value:	102622	, indx: 0, circle: 2},
{	date:	"Sep-09"	,	value:	108221	, indx: 0, circle: 2},
{	date:	"Oct-09"	,	value:	113684	, indx: 0, circle: 2},
{	date:	"Nov-09"	,	value:	119711	, indx: 0, circle: 2},
{	date:	"Dec-09"	,	value:	130025	, indx: 0, circle: 2},
{	date:	"Jul-10"	,	value:	195412	, indx: 0, circle: 2},
{	date:	"Aug-10"	,	value:	206122	, indx: 0, circle: 2},
{	date:	"Sep-10"	,	value:	215476	, indx: 0, circle: 2},
{	date:	"Oct-10"	,	value:	226876	, indx: 0, circle: 2},
{	date:	"Nov-10"	,	value:	237476	, indx: 0, circle: 2},
{	date:	"Dec-10"	,	value:	252549	, indx: 0, circle: 2},
{	date:	"Jul-11"	,	value:	336099	, indx: 0, circle: 2},
{	date:	"Aug-11"	,	value:	350377	, indx: 0, circle: 2},
{	date:	"Sep-11"	,	value:	364564	, indx: 0, circle: 2},
{	date:	"Oct-11"	,	value:	378372	, indx: 0, circle: 2},
{	date:	"Nov-11"	,	value:	392424	, indx: 0, circle: 2},
{	date:	"Dec-11"	,	value:	409361	, indx: 0, circle: 2},
{	date:	"Jul-12"	,	value:	534507	, indx: 0, circle: 2},
{	date:	"Aug-12"	,	value:	552613	, indx: 0, circle: 2},
{	date:	"Sep-12"	,	value:	575123	, indx: 0, circle: 2},
{	date:	"Oct-12"	,	value:	598565	, indx: 0, circle: 2},
{	date:	"Nov-12"	,	value:	624309	, indx: 0, circle: 2},
{	date:	"Dec-12"	,	value:	649192	, indx: 0, circle: 2},
{	date:	"Jul-13"	,	value:	837309	, indx: 0, circle: 2},
{	date:	"Aug-13"	,	value:	863763	, indx: 0, circle: 2},
{	date:	"Sep-13"	,	value:	894151	, indx: 0, circle: 2},
{date:	"Oct-13",value:	0	, indx: 0, circle: 2},
{date:	"Nov-13",value:	0	, indx: 0, circle: 2},
{date:	"Dec-13",value:	0	, indx: 0, circle: 2},
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

d3.selectAll("#spiralAppCount path")
	.on('mouseover', function() {
        var d = d3.select(this).data()[0];
    	d3.select(this).style({ 'stroke': 'Black', 'stroke-width': '3px'});
    	d3.selectAll('#appLabelText').style("opacity",".6");	
    	highlight(d.date, d.indx, d.circle);
	});

d3.selectAll("#spiralAppCount path")
	.on('mouseout', function() { 
    	d3.select(this).style({ 'stroke': 'none', 'stroke-width': 'none'});
    	d3.selectAll('#appLabelText').style("opacity","0");
    	highlight(null,0,null);  
});

d3.selectAll("#spiralGameCount path")
	.on('mouseover', function() {
        var d = d3.select(this).data()[0];
    	d3.select(this).style({ 'stroke': 'Black', 'stroke-width': '3px'});
    	d3.selectAll('#gameLabelText').style("opacity",".6");		
    	highlight(d.date, d.indx, d.circle);
	});

d3.selectAll("#spiralGameCount path")
	.on('mouseout', function() {
    	d3.select(this).style({ 'stroke': 'none', 'stroke-width': 'none'});
    	d3.selectAll('#gameLabelText').style("opacity","0");	
    	highlight(null, 0, null);   
});

function highlight(date, id, circle) {
  if (date == null) {
  	d3.select("#yearInfo").text("" + energyDataA[68].year);
  	d3.select("#monthInfo").text("" + energyDataG[68].month);
	d3.selectAll(".date").classed("active", false);
	d3.select("#totalInfo").text("0");
	d3.select("#appInfo")
		.text("0")
		.style("opacity", ".6");
	d3.select("#gameInfo")
		.text("0")
		.style("opacity", ".6");
  }
  else {
  	d3.select("#yearInfo").text("" + energyDataA[id].year);
  	d3.select("#monthInfo").text("" + energyDataG[id].month);
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