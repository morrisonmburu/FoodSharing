//business logic


//user Interface logic
$(document).ready(function(){
	var animationSpeed = 2000;
	var total = 1;
	var interval;
function startSlider(){
	interval = setInterval(function(){
		$("#img0 #img2").animate({"margin-left": "-=1300"}, animationSpeed, function(){
			total++;
			if (total === $("#img0 #img2 #img21").length) {
			total = 1;
			$("#img0 #img2").css('margin-left',0);
		}
			});

		
	}, 3000);
}

function stopslider(){
	clearInterval(interval);
}
$("#img0").on('mouseenter', stopslider).on('mouseleave',startSlider);

startSlider();	
})

