$('video').mediaelementplayer();

$(document).ready( function () {
	function getElements (selector) {
		return document.querySelectorAll(selector);
	}

	const p = getElements('p');
	console.log(p);

		

	$('video').on('play', function () {
		console.log("video is playing");
	});
})
	
