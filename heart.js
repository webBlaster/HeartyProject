
$(document).ready(function(){
    $(".button").click(function(){
        $("#first").fadeOut(500);
		$("#second").fadeOut(500);
		$("#third").fadeOut(500);
		$("footer").fadeOut(500);
		$("#popout").fadeIn("slow");
    });
});
function myFunction(x) {
    x.classList.toggle("change");
	 $("#first").fadeIn(500);
		$("#second").fadeIn(500);
		$("#third").fadeIn(500);
		$("footer").fadeIn(500);
		$("#popout").fadeOut("slow");
}