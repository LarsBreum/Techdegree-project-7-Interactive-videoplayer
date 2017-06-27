$('video').mediaelementplayer();


//declaring consts and variables
const vid = document.getElementsByTagName("video")[0];
let allPs = document.querySelectorAll('p');

//change color
function changeColor (elementNum, color="orange") {
	if (elementNum > 0) {
		allPs[elementNum - 1].style.color = "black";
		allPs[elementNum].style.color = color;
	} else {
		allPs[elementNum].style.color = color;
	}
	
}
//highlight the p
function highlight (time) {
		changeColor(0);
		if (time >= 4.130) {
			changeColor(1);
		} 
		if (time >= 7.535) {
			changeColor(2);
		}
		if (time >= 11.270) {
			changeColor(3);
		}
		if (time >= 13.960) {
			changeColor(4);
		}
		if (time >= 17.940) {
			changeColor(5);
		}
		if (time >= 22.370) {
			changeColor(6);
		}
		if (time >= 26.880) {
			changeColor(7);
		}
		if (time >= 32.100) {
			changeColor(8);
		}
		if (time >= 34.730) {
			changeColor(9);
		}
		if (time >= 39.430) {
			changeColor(10);
		}
		if (time >= 42.350) {
			changeColor(11);
		}
		if (time >= 46.300) {
			changeColor(12);
		}
		if (time >= 49.300) {
			changeColor(13);
		}
		if (time >= 53.760) {
			changeColor(14);
		}
		if (time >= 57.780) {
			changeColor(15);
		}
}
//Getting elapsed time of video
vid.addEventListener("timeupdate", () => {
	let time = vid.currentTime;
	console.log("Time = " + time);
	highlight(time);
	
})






	
