$(document).ready(function() {
	$(".editor").scroll(function() {
  	var left = $(this).scrollLeft();
    var top = $(this).scrollTop();
    $(".cell.first").css("left", left);
    $(".row.header").css("top", top);
  });
});