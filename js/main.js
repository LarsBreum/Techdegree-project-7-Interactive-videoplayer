document.addEventListener('DOMContentLoaded', () => {
	//init mediaelement js
	$('video').mediaelementplayer();

	//declaring consts and variables
	const vid = document.getElementsByTagName("video")[0];
	const allSpans = document.querySelectorAll('span[data-start]');

	function highlight(time) {
		//Loop through all spans
		for (let i = 0; i < allSpans.length; i++) {
			//Get the start time of the span
			const start = allSpans[i].getAttribute('data-start');
			const end = allSpans[i].getAttribute('data-end');
			if (time >= start && time <= end) {
				//Add active cla<ss
				allSpans[i].classList.add("active");
			} else {
				allSpans[i].classList.remove("active");
			}
		}
	}

	//get time and pass it to the highlight function
	function getTime() {
		vid.addEventListener('timeupdate', () => {
			let time = vid.currentTime;
			console.log("TIME = " + time);
			highlight(time);
		});
	}

	//Video starts
	vid.addEventListener("play", () => {
		console.log("video begun");
		getTime();
	});	

	//When element is clicked, set currentTime to data-time value
	for (let i = 0; i < allSpans.length; i++) {
		const start = allSpans[i].getAttribute('data-start');
		allSpans[i].addEventListener('click', () => {
		vid.currentTime = start;
		});
	}
});
