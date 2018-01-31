$('.sl').slick({
    autoplay: false,
    autoplaySpeed: 10000,
    cssEase: 'ease-in',
    asNavFor: '.sl2'
});

$('.sl2').slick({
    dots: false,
    slidesToShow: 7,
    centerMode: true,
    centerPaddig: '40px',
    asNavFor: '.sl',
    focusOnSelect: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 6
            }
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 3,
                centerMode: false
            }
        }
    ]
})