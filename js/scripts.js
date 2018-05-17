
$(document).ready(function() {
  $(".star-1").hover(function(){
    $(".star-1").addClass("fas star-1 star-2 star-3 star-4 star-5");
});
$(".star-2").hover(function(){
  $(".star-2").addClass("fas star-1 star-2 star-3 star-4 star-5");
});
$(".star-3").hover(function(){
  $(".star-3").addClass("fas star-1 star-2 star-3 star-4 star-5");
});
$(".star-4").hover(function(){
  $(".star-4").addClass("fas star-1 star-2 star-3 star-4 star-5");
});
$(".star-5").hover(function(){
  $(".star-5").addClass("fas star-1 star-2 star-3 star-4 star-5");
});
// $(".fa-star").mouseout(function(){
//     $(".fa-star").css("color", "white");
// });
});










// // <script type="text/javascript">
// // (function($){
// //
// //    $(document).ready(function() {
// //     var $option = $('.fa-star');
// //     // var $fruit = $('.fruit-name');
// //     var $last;
// //     var parent
// //     $option.click(function() {
// //         parent=$(this).parents('.comment-form-rating');
// //         // $('.fruit-name',parent).val(this.innerHTML)
// //     })
// //
// //
// // $(".star-1").hover(function(){
// //     parent=$(this).parents('.comment-form-rating');
// //     $('.star-1',parent).css('color','gold')
// //     },function(){
// //     $(".starr1").css("color","#ddd");
// //   });
// //
// //
// // $(".star-2").hover(function(){
// //     parent=$(this).parents('.comment-form-rating');
// //     $('.star-1',parent).css('color','gold')
// //     $('.star-2',parent).css('color','gold')
// //     },function(){
// //     $(".star-1").css("color","#ddd");
// //     $(".star-2").css("color","#ddd");
// //   });
// //
// // $(".star-3").hover(function(){
// //     parent=$(this).parents('.comment-form-rating');
// //     $('.star-1',parent).css('color','gold')
// //     $('.star-2',parent).css('color','gold')
// //     $('.starr3',parent).css('color','gold')
// //     },function(){
// //     $(".star-1").css("color","#ddd");
// //     $(".star-2").css("color","#ddd");
// //     $(".star-3").css("color","#ddd");
// //   });
// //
// // $(".star-4").hover(function(){
// //     parent=$(this).parents('.comment-form-rating');
// //     $('.star-1',parent).css('color','gold')
// //     $('.star-2',parent).css('color','gold')
// //     $('.star-3',parent).css('color','gold')
// //     $('.star-4',parent).css('color','gold')
// //     },function(){
// //     $(".star-1").css("color","#ddd");
// //     $(".star-2").css("color","#ddd");
// //     $(".star-3").css("color","#ddd");
// //     $(".star-4").css("color","#ddd");
// //   });
// //
// // $(".star-5").hover(function(){
// //     parent=$(this).parents('.comment-form-rating');
// //     $('.star-1',parent).css('color','gold')
// //     $('.star-2',parent).css('color','gold')
// //     $('.star-3',parent).css('color','gold')
// //     $('.star-4',parent).css('color','gold')
// //     $('.star-5',parent).css('color','gold')
// //     },function(){
// //     $(".star-1").css("color","#ddd");
// //     $(".star-2").css("color","#ddd");
// //     $(".star-3").css("color","#ddd");
// //     $(".star-4").css("color","#ddd");
// //     $(".star-5").css("color","#ddd");
// //   });
// //
// // });
// //
// // })(jQuery);
// // </script>
//
// var current_star_statusses = [];
//
// star_elements = $('.fa-star');
//
// star_elements.each(function(i, elem)
// {
//     current_star_status.push($(elem).hasClass('yellow'));
// });
//
// star_elements.mouseenter(changeRatingStars);
// star_elements.mouseleave(resetRatingStars);
//
// /**
//  * Changes the rating star colors when hovering over it.
//  */
// function changeRatingStars()
// {
//     // Current star hovered
//     var star = $(this);
//
//     // Removes all colors first from all stars
//     $('.fa-star').removeClass('gray').removeClass('yellow');
//
//     // Makes the current hovered star yellow
//     star.addClass('yellow');
//
//     // Makes the previous stars yellow and the next stars gray
//     star.parent().prevAll().children('.fa-star').addClass('yellow');
//     star.parent().nextAll().children('.fa-star').addClass('gray');
// }
//
// /**
//  * Resets the rating star colors when not hovered anymore.
//  */
// function resetRatingStars()
// {
//     star_elements.each(function(i, elem)
//     {
//         $(elem).removeClass('yellow').removeClass('gray').addClass(current_star_status[i] ? 'yellow' : 'gray');
//     });
// }
