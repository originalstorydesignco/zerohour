$(function() {
  
	$(".hamburger").click(function(e) {
    e.preventDefault();
		
		$(".hamburger").toggleClass("is-active");
		$(".menu-overlay").toggleClass("open");
		$(".menu").toggleClass("open");

	});
	
});