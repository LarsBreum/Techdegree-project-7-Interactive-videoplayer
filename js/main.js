$('video').mediaelementplayer();

$(document).ready( function () {
	function getElements (selector) {
		return document.querySelectorAll(selector);
	}

	let $allPs = $('p');
	console.log($allPs);
		

	$('video').on('play', function () {
		console.log("video is playing");
	});
})
	
