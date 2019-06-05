document.addEventListener("DOMContentLoaded", function(){
	console.log("running ");
	makeNoise();
});

function makeNoise() {
	var body = document.querySelector("body");

	setInterval(function(){
		if(body.classList.contains('texture-1')){
			body.classList.remove('texture-1');
			body.classList.add('texture-2');
			console.log('2');
		}
		else if(body.classList.contains('texture-2')){
			body.classList.remove('texture-2');
			body.classList.add('texture-3');
			console.log('3');
		}
		else {
			body.classList.remove('texture-3');
			body.classList.add('texture-1');
			console.log('1');
		}
	}, 2500)
}