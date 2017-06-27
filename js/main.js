$('video').mediaelementplayer();


//declaring consts and variables
const vid = document.getElementsByTagName("video")[0];
let allPs = document.querySelectorAll('p');
let breaks = [4.130, 7.535, 11.270, 13.960, 22.370,
				26.880, 32.100, 34.730,];

//change color
function changeFontWeight (elementNum, weight="bold") {
	if (elementNum > 0) {
		allPs[elementNum - 1].style.fontWeight = "normal";
		allPs[elementNum].style.fontWeight = weight;
	} else {
		allPs[elementNum].style.fontWeight = weight;
	}
	
}
//highlight the p
function highlight (time) {
		if (time >= 0) {
		changeFontWeight(0);			
		}
		if (time >= breaks[0]) {
			changeFontWeight(1);
		} 
		if (time >= 7.535) {
			changeFontWeight(2);
		}
		if (time >= 11.270) {
			changeFontWeight(3);
		}
		if (time >= 13.960) {
			changeFontWeight(4);
		}
		if (time >= 17.940) {
			changeFontWeight(5);
		}
		if (time >= 22.370) {
			changeFontWeight(6);
		}
		if (time >= 26.880) {
			changeFontWeight(7);
		}
		if (time >= 32.100) {
			changeFontWeight(8);
		}
		if (time >= 34.730) {
			changeFontWeight(9);
		}
		if (time >= 39.430) {
			changeFontWeight(10);
		}
		if (time >= 42.350) {
			changeFontWeight(11);
		}
		if (time >= 46.300) {
			changeFontWeight(12);
		}
		if (time >= 49.300) {
			changeFontWeight(13);
		}
		if (time >= 53.760) {
			changeFontWeight(14);
		}
		if (time >= 57.780) {
			changeFontWeight(15);
		} 
		vid.addEventListener("ended", () => {
			allPs[15].style.fontWeight = "normal";
		});
}
vid.addEventListener("play", () => {
	//Getting elapsed time of video
	vid.addEventListener("timeupdate", () => {
		let time = vid.currentTime;
		console.log("Time = " + time);
		highlight(time);
		
	})
});
	






	
