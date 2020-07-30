$(document).ready(function(){
	var about_click = $("#aboutOp");
	var skills_click = $("#skillsOp");

	about_click.on("click", function(){
		$("#myb").css("display","block");

		$("#sk").css("display","none");
	});

	skills_click.on("click", function(){
		$("#sk").css("display","block");

		$("#myb").css("display","none");
	});

	$(".close").on("click", function(){
		$("#blok1").css("display","none");
	});
});