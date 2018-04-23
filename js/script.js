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
    nextEl: '.carousel-control-next',
    prevEl: '.carousel-control-prev',
  },

});


$('#myDropdown .dropdown-menu').on({
	"click":function(e){
      e.stopPropagation();
    }
});
