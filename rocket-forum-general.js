function handleSearch() {
    $('.search-bar-top').prependTo($('.HLWelcome').closest('.pull-right'));
    $('.search-bar-top .form-control').attr('placeholder', 'Search the forum');
}

function handleFooter() {
    $('.footer-logo, .footer-social').wrapAll('<div class="footer-left-column" />');
}

$(function () {
    handleSearch();
    handleFooter();
});