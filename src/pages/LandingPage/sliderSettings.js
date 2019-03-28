const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToScroll: 3,
  variableWidth: true,
  className: 'slider',
  responsive: [
    {
      breakpoint: 1800,
      settings: {
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1150,
      settings: {
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        dots: false,
      },
    },
  ],
};

export default sliderSettings;
