$(".slick__carousel--container").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 989,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

const textSizeMatch = () => {
  let largest = 0;
  $(".slick__carousel--interior").each(function () {
    $(this)
      .find(".slick__carousel--quote")
      .each(function () {
        let findHeight = $(this).height();
        if (findHeight > largest) {
          largest = findHeight;
        }
      });
    /*
  $(this)
    .find(".slick__carousel--quote")
    .each(function () {
      $(this).css({ height: largest + "px" });
      $(this).css({ color: "red" });
    });
    */
  });
  console.log(largest);
  $(".slick__carousel--quote").each(function () {
    $(this).css({ height: largest + "px" });
  });
};

$(window).resize(textSizeMatch());
