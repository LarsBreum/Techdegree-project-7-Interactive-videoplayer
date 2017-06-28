$('video').mediaelementplayer();

//declaring consts and variables
const vid = document.getElementsByTagName("video")[0];
const allAs = document.querySelectorAll('a[data-time]');

function highlight(time) {
	//allAs[0].classList.add('active');
	for (let i = 0; i < allAs.length; i++) {
		const dataTime = allAs[i].getAttribute('data-time');
		if(dataTime <= time) {
			//if i===0 you can't remove active from the
			//preceding element
			if (i === 0) {
				allAs[i].classList.add("active");
			} else {
				//remove active on the
				//preceding element and add to the current
				allAs[i-1].classList.remove("active");
				allAs[i].classList.add("active");
			}
		}
	}
}

//remove active class from all elements
function removeActive () {
	for (let i = 0; i < allAs.length; i++) {
		allAs[i].classList.remove('active');
	}
}

//get time
function getTime() {
	vid.addEventListener('timeupdate', () => {
		let time = vid.currentTime;
		console.log("TIME = " + time);
		highlight(time);
		console.log("video ended? " + vid.ended);
	});
}


//Video starts
vid.addEventListener("play", () => {
	console.log("video begun");
		getTime();
});	

//video ends and removes active class on all elements
vid.addEventListener('ended', () => {
	removeActive();
	console.log("video ended");
});
//seeks and removes all active classes
vid.addEventListener('seeked', () => {
	removeActive();
});
//When element is clicked, set currentTime to data-time value
for (let i = 0; i < allAs.length; i++) {
	const dataTime = allAs[i].getAttribute('data-time');
	allAs[i].addEventListener('click', () => {
	vid.currentTime = dataTime;
	});
}