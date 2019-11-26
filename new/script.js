
	var chota = new XMLHttpRequest();
	chota.open('GET', 'new.txt');
	chota.onload = function(){
	var cho = (chota.responseText);
	console.log(cho);
	};
	chota.send(); 