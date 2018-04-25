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

// document.addEventListener('DOMContentLoaded', function () {
//     $('.cat-btn-header').on('click', function () {
//       $(this)
//         .find('[data-fa-i2svg]')
//         .toggleClass('fa-bars')
//         .toggleClass('fa-angle-down');
//     });
//   });

$('.cat-btn-header').click(function(e){
		 e.preventDefault();
     $('.h-catalog-overlay').addClass('fixed');
	});
$('.h-catalog-overlay').click(function(){
	if ($(this).hasClass('fixed')) {
    $('.h-catalog-overlay').removeClass('fixed');
	}
});
