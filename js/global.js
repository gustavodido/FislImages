(function($) {
	'use strict'

	$(document).ready(function() {
		$("#panelPhotos").hide();
		$("#panelThanks").hide();

		$("#btnGoPhoto").click(function() {
			$("#panelSettings").hide("slide", { direction: "left" }, 1200, 
				function() 
				{ 
					$("#panelPhotos").show("slide", { direction: "right" }, 1200);
					startCamera();
				});	
		});

		$("#btnSnapPhoto").click(function() {
				$("#panelPhotos").hide("slide", { direction: "left" }, 1200, 
				function() 
				{ 
					$("#panelThanks").show("slide", { direction: "right" }, 1200);
				});	
		});
	});

	function startCamera()	{
		// Grab elements, create settings, etc.
		var canvas = document.getElementById("canvas"),
			context = canvas.getContext("2d"),
			video = document.getElementById("video"),
			videoObj = { "video": true },
			errBack = function(error) {
				console.log("Video capture error: ", error.code); 
			};


		// Put video listeners into place
		if(navigator.getUserMedia) { // Standard
			navigator.getUserMedia(videoObj, function(stream) {
				video.src = stream;
				video.play();
			}, errBack);
		} else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
			navigator.webkitGetUserMedia(videoObj, function(stream){
				video.src = window.webkitURL.createObjectURL(stream);
				video.play();
			}, errBack);
		}
		else if(navigator.mozGetUserMedia) { // Firefox-prefixed
			console.log("here")

			navigator.mozGetUserMedia(videoObj, function(stream){
				video.src = window.URL.createObjectURL(stream);
				video.play();
			}, errBack);
		}
	}
})($);