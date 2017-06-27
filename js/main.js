$('video').mediaelementplayer();


//declaring consts and variables
const vid = document.getElementsByTagName("video")[0];
const allSpans = document.querySelectorAll('span');

//change color
/*function changeFontWeight (elementNum, weight="bold") {
	if (elementNum > 0) {
		allSpans[elementNum - 1].style.fontWeight = "normal";
		allSpans[elementNum].style.fontWeight = weight;
	} else {
		allSpans[elementNum].style.fontWeight = weight;
	}
	
}*/
function highlight(time) {
	for (let i = 1; i <= allSpans.length; i++) {
		const dataTime = allSpans[i].getAttribute('data-time');
		if(dataTime <= time) {
			allSpans[i].classList.add("active");
			allSpans[i-1].classList.remove("active");
		}
	}
}
//Video starts
vid.addEventListener("play", () => {
	allSpans[0].classList.add('active');
	//Getting elapsed time of video
	vid.addEventListener("timeupdate", () => {
		let time = vid.currentTime;
		console.log("Time = " + time);
		highlight(time);
	})
});


	






	
/*1
00:00:00,240 --> 00:00:04,130
Now that we've looked at the architecture
of the internet, let's see how you might

2
00:00:04,130 --> 00:00:07,535
connect your personal devices to
the internet inside your house.

3
00:00:07,535 --> 00:00:11,270
Well there are many ways to
connect to the internet, and

4
00:00:11,270 --> 00:00:13,960
most often people connect wirelessly.

5
00:00:13,960 --> 00:00:17,940
Let's look at an example of how
you can connect to the internet.

6
00:00:17,940 --> 00:00:22,370
If you live in a city or a town,
you probably have a coaxial cable for

7
00:00:22,370 --> 00:00:26,880
cable Internet, or a phone line if you
have DSL, running to the outside of

8
00:00:26,880 --> 00:00:30,920
your house, that connects you to
the Internet Service Provider, or ISP.

9
00:00:32,100 --> 00:00:34,730
If you live far out in the country,
you'll more likely have

10
00:00:34,730 --> 00:00:39,430
a dish outside your house, connecting
you wirelessly to your closest ISP, or

11
00:00:39,430 --> 00:00:41,190
you might also use the telephone system.

12
00:00:42,350 --> 00:00:46,300
Whether a wire comes straight from
the ISP hookup outside your house, or

13
00:00:46,300 --> 00:00:49,270
it travels over radio
waves from your roof,

14
00:00:49,270 --> 00:00:53,760
the first stop a wire will make once
inside your house, is at your modem.

15
00:00:53,760 --> 00:00:57,780
A modem is what connects the internet
to your network at home.

16
00:00:57,780 --> 00:01:00,150
A few common residential modems are DSL or*/