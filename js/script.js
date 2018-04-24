var swiper = new Swiper('.swiper-container', {
  slidesPerView: 6,
  spaceBetween: 10,
  slidesPerGroup: 6,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.brand-control-next',
    prevEl: '.brand-control-prev',
  },

});

$('#myDropdown .dropdown-menu').on({
	"click":function(e){
      e.stopPropagation();
    }
});

(function($){
	$(document).ready(function() {

		$('li.dropdown [data-toggle="dropdown"]').on('click', function(event) {
			event.preventDefault();
			event.stopPropagation();

			$(this).parent().siblings().find('.show').removeClass('show');
			$(this).parent().siblings().removeClass('show');
			$(this).siblings().toggleClass('show');
			$(this).siblings().find('.show').removeClass('show');
			$(this).parent().toggleClass('show');
		});
	});
})(jQuery);


//
// $(document).ready(function() {
//
//     $( ".dropdown-submenu" ).click(function(event) {
//         // stop bootstrap.js to hide the parents
//         event.stopPropagation();
//         // hide the open children
//         $( this ).find(".dropdown-submenu").removeClass('open');
//         // add 'open' class to all parents with class 'dropdown-submenu'
//         $( this ).parents(".dropdown-submenu").addClass('open');
//         // this is also open (or was)
//         $( this ).toggleClass('open');
//     });
//
// });
$('.cat-btn-header').click(function(e){
		 e.preventDefault();
     $('.h-catalog-overlay').addClass('fixed');
	});
$('.h-catalog-overlay').click(function(){
	if ($(this).hasClass('fixed')) {
    $('.h-catalog-overlay').removeClass('fixed');
	}
});
