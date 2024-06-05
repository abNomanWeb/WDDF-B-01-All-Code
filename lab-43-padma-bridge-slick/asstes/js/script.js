$('.gallery-parent').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    // speed: 500,
    cssEase: 'linear',
    // arrows: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        }
      ],
  });