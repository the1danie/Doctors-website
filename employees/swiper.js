var swiper = new Swiper(".slide-content", {
        
        spaceBetween: 25,
        initialSlide: 2,
        loop: true,
        centerSlide: "true",
        fade: "true",
        gragCursor: "true",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          0: {
              slidesPerView: 1,
              spaceBetween: 10
          },
          600: {
              slidesPerView: 2,
              spaceBetween: 20
          },
          950: {
              slidesPerView: 3,
              spaceBetween: 30
          }
      }
      });
    
