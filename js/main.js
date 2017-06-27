$('video').mediaelementplayer();

//declaring consts and variables
const vid = document.getElementsByTagName("video")[0];
const allAs = document.querySelectorAll('a[data-time]');

function highlight(time) {
	allAs[0].classList.add('active');
	for (let i = 1; i <= allAs.length; i++) {
		const dataTime = allAs[i].getAttribute('data-time');
		if(dataTime <= time) {
			//remove active on the
			//preceding element and add to the current
			allAs[i-1].classList.remove("active");
			allAs[i].classList.add("active");
		}
	}
}

//remove active class from all elements
function removeActive () {
	for (let i = 0; i <= allAs.length; i++) {
		allAs[i].classList.remove('active');
	}
}

//Video starts
vid.addEventListener("play", () => {
	//Getting elapsed time of video
	vid.addEventListener("timeupdate", () => {
		let time = vid.currentTime;
		highlight(time);
	})
});	

//video ends and removes active class on all elements
vid.addEventListener('ended', () => {
	removeActive();
});
//seeks and removes all active classes
vid.addEventListener('seeked', () => {
	removeActive();
});
//When element is clicked, set currentTime to data-time value
for (let i = 0; i <= allAs.length; i++) {
	const dataTime = allAs[i].getAttribute('data-time');
	allAs[i].addEventListener('click', () => {
	vid.currentTime = dataTime;
	});
}