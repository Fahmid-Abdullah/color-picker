let box = document.getElementById("colorBox");
function color() {
	var r = document.getElementById("red").value;
	var g = document.getElementById("green").value;
	var b = document.getElementById("blue").value;

	box.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
	document.getElementById("output").innerHTML =  'rgb(' + r + ',' + g + ',' + b + ')' ;
	document.getElementById("outputHex").innerHTML = (rgba2hex(box.style.backgroundColor));
	navigator.clipboard.writeText(document.getElementById("outputHex").innerHTML);
}

const rgba2hex = (rgba) => `#${rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/).slice(1).map((n, i) => (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n)).toString(16).padStart(2, '0').replace('NaN', '')).join('')}`