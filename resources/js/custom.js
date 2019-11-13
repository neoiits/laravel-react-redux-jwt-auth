$(window).on('load', function () {
    window_height_adjustment();
});

$(window).on('resize', function () {
    window_height_adjustment();
});

function window_height_adjustment() {
    var window_height           = $(window).height();
    var header_height           = $("body .site-header").outerHeight();
    var footer_height           = $("body .site-footer").outerHeight();
    var total_height            = header_height + footer_height;
    var container_min_height    = window_height - total_height;
    $("body .main-container").css({
        'margin-top' : header_height+'px',
        'min-height' : container_min_height+'px'
    });
}
