$(document).ready(function () {
    $('#slideshow-pred').cycle({
        fx: 'fade',
        containerResize: 1,
        width: 'fit',
        after: function (curr, next, obj) {
            activeSlide = obj.currSlide;
        }
    });

    $(window).resize(function () {
        $('#slideshow-pred').cycle('destroy');
        $('#slideshow-pred').each(function () {
            newWidth = $(this).parent('div').width();
            $(this).width(newWidth);
            $(this).height('auto');
            $(this).children('div').width(newWidth);
            $(this).children('div').height('auto');
        });
        $('#slideshow-pred').cycle({
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
