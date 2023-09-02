function easing(n){
	return 1 == n ? n : 1 - Math.pow(2, -10 * n);
};

function Loader(timestamp, el, distance, duration){
	var start = 0;
	var bar = el.querySelector('.bar');
	var percent = el.querySelector('.percent');

	var runtime = timestamp - start;
	var progress = runtime / duration;
	progress = Math.min(progress, 1);
	var val = easing(progress);

	bar.style.transform = "scaleX(" + Math.round(distance * val) / 100 + ")";
	percent.textContent = Math.round(distance * val);
	if (runtime < duration) {
		requestAnimationFrame(function(timestamp){
			Loader(timestamp, el, distance, duration);
		});
	} else {
		setTimeout(function(){
			el.classList.add("hide");
		}, 1000);
	}
}

setTimeout(function(){
	let myLoader = requestAnimationFrame(function(timestamp){
		Loader(timestamp, document.getElementById('loader'), 100, 5000);
	});
}, 1000);