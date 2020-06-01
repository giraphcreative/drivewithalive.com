

var viewportResize = function(){
	if ( $(window).innerWidth()<835 ) {
		$(".viewport").attr("content","width=835;initial-scale=1")
	}
}

$(document).ready(function(){

	viewportResize();

});

