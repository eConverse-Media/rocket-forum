$(function () {
    $('.announcement-slide').wrapAll('<div class="announcement-slider" />');
    $('.announcement-slider').slick({
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="prev-arrow slick-arrow"><i class="rf rf-caret-left"></i></button>',
        nextArrow: '<button type="button" class="next-arrow slick-arrow"><i class="rf rf-caret-right"></i></button>'
    });
});