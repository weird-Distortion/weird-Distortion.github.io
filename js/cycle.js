$(document).ready(function () {
    $('#slideshow').cycle({
        fx: 'fade',
        containerResize: 1,
        width: 'fit',
        after: function (curr, next, obj) {
            activeSlide = obj.currSlide;
        }
    });

    $(window).resize(function () {
        $('#slideshow').cycle('destroy');
        $('#slideshow').each(function () {
            newWidth = $(this).parent('div').width();
            $(this).width(newWidth);
            $(this).height('auto');
            $(this).children('div').width(newWidth);
            $(this).children('div').height('auto');
        });
        $('#slideshow').cycle({
            fx: 'fade',
            containerResize: 1,
            width: 'fit',
            after: function (curr, next, obj) {
                activeSlide = obj.currSlide;
            },
            startingSlide: activeSlide
        });
    });
});
