// 'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

$(function(){
	$( "div.box" ).bind("taphold", tapholdHandler);
	function tapholderHandler(event){
		$(event.target).addClass("taphold");
	}
});
/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Page ready");
 	// initCamera();
 	initGestures();
 	initRSVPForm();
}

// init jQuery gestures  
function initGestures() {
	// add gestures listener here
}

// init RSVP form submit listener
function initRSVPForm() {
  // add your code here
}

//init jQuery gestures
function initGestures(){
	//add gestures listener here
	$(function(){
		$(".judge-img").bind("taphold", tapholderHandler);
		functioj tapholdHandler(event){
			var targetIDPrefix = event.target.id;
			console.log("got prefix: "+ targetIDPrefix);
			$("#" + targetIDPrefix + "-bio").show();
		}
	});
}