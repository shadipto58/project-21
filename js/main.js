
function clock() {

	var somoy = new Date(),
	ghonta = somoy.getHours(),
	minit = somoy.getMinutes(), 
	sec = somoy.getSeconds(),
	dinrat = ' PM';

	// am-pm
	if (ghonta < 12) {
		dinrat = ' AM'
	}
	
	// 12 hours Format
	if ( ghonta > 12 ) {
		ghonta = ghonta - 12;
	}

	// 0 = 12
	if ( ghonta == 0 ) {
		ghonta = 12;
	}

	document.getElementById('pro').innerHTML = ghonta + ':' + minit + ':' + sec + dinrat;

}

setInterval( clock, 100 );
