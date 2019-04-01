const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  swipeToSlide: true,
  rows: 1,
  variableWidth: true,
  className: 'slider',
  responsive: [
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
