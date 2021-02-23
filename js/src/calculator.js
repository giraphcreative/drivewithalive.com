

$(function(){

	$(".calculator").accrue({
		mode: 'basic',
		response_output_div: ".result",
		response_basic:"<span>Est. Payment:</span> $%payment_amount%"
	});

	$(".numbers-only").keyup(function(){
		var fixed=$(this).val().replace(/[^0-9.]/g,"");
		$(this).val( fixed );
	});

});

