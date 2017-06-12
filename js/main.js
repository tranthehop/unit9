function myFunction() {
	var x = document.getElementById('val').value;
	var text = document.getElementById('result');
	var number = /[0-9]/g;
	var result = x.match(number);
	var sum = 0;
	for ( var i =0; i<result.length; i++) {
		sum += parseInt(result[i]);
	}
	text.innerHTML = sum;
}
var y = document.getElementById('sum');
y.addEventListener('click', myFunction);