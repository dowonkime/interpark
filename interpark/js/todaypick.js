window.addEventListener("load", function(){
    var swiper = new Swiper(".sw-todaypick", {
        navigation: {
          nextEl: ".todaypick .sw-next",
          prevEl: ".todaypick .sw-prew",
        },
        loop:true,
        pagination: {
          el: ".sw-todaypick-pg",
          clickable:true,
        },
        //loop기본값은 false 
        breakpoints: {
          
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          760: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
        },
      });
})
