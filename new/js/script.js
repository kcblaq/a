var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

function timeNow (){

	var clock = document.getElementById("clock");
	var time = new Date();
	document.write(time);
}