$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 0,
  nav:true,
  center: true,
  autoplay: true,
  autoplayTimeout: 5000,
  responsiveClass: true,
  dots: false,
  responsive: {
      0: {
          items: 1
      },
      768: {
          items: 2.2
      },
      1300: {
          items: 3.5
      }
  }
});
