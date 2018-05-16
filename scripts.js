//business logic


//user Interface logic
$(document).ready(function(){
	var animationSpeed = 2000;
	var total = 1;
	var interval;
function startSlider(){
	interval = setInterval(function(){
		$("#img0 #img2").animate({"margin-left": "-=1350"}, animationSpeed, function(){
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

 $("#toggle").click(function() {
    doBounce($(this), 3, '70px', 300);   
});
function doBounce(element, times, distance, speed) {
    for(var i = 0; i < times; i++) {
        element.animate({marginTop: '-='+distance}, speed)
            .animate({marginTop: '+='+distance}, speed);
    }        
}
$(function() {
  $("#scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#Down").offset().top
      }, 800, function(){
})
});
})

$(function(){
	$("#scrolld").click(function(){
		   $('html, body').animate({
        scrollTop: $("#top").offset().top
      }, 800, function(){
})
	})
})

function search() {
 
   var name = document.getElementById("search").elements["searchItem"].value;
   var pattern = name.toLowerCase();
   var targetId = "";
 
   var divs = document.getElementsByClassName("col-md-3");
   for (var i = 0; i < divs.length; i++) {
      var para = divs[i].getElementsByTagName("p");
      var index = para[0].innerText.toLowerCase().indexOf(pattern);
      if (index != -1) {
         targetId = divs[i].parentNode.id;
         document.getElementById(targetId).scrollIntoView();
         break;
      }
   }  
}


})	

