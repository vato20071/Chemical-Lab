$(function() {
    $("#content").disableSelection();
	$(".box:not(.empty)").click(function() {
        if ($(this).hasClass("selected")) {
            $(this).removeClass("selected");
        } else {
            $(this).addClass("selected");
        }
    });
});