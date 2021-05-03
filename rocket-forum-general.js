function handleSearch() {
    $('.search-bar-top').prependTo($('.HLWelcome').closest('.pull-right'));
    $('.search-bar-top .form-control').attr('placeholder', 'Search the forum');
}

function handleFooter() {
    $('.footer-logo, .footer-social').wrapAll('<div class="footer-left-column" />');
}

function handleEvents() {
    $('.HLLandingControl.HLEventList ul li').each(function () {
        var self = $(this),
            month = $(self).find('.date-block .calendar-month span').text();

        month = month.substring(0, 3);
        $(self).find('.date-block .calendar-month').text(month);
    });
}

function handleWidgets() {
    // handle image and byline
    $('.HLDiscussions.HLLandingControl ul li, .HLLandingControl.SearchResults ul li, .HLLandingControl.HLRecentBlogs ul li, .HLLandingControl.HLMyDocuments ul li').each(function () {
        var self = $(this),
            image = !!($(self).find('.title-row > .col-md-2').html()) ? $(self).find('.title-row > .col-md-2') : $(self).find('.title-row > .col-md-1'),
            byline = $(self).find('.ByLine');

        $(byline).wrapInner('<div class="byline-date" />');

        $(image).append(byline);
    });
}

function showMe(klass) {
    $('.tabbed-widgets .HLLandingControl').hide();
    $(klass).find('.HLLandingControl').show();
    $('.tabs-list button').removeClass('active');
    $('.tabs-list button' + klass).addClass('active');
}

function handleTabbedWidgets() {
    $('.tabbed-discussions, .tabbed-questions').wrapAll('<div class="tabbed-widgets" />');
    $('.tabbed-widgets').prepend('<div class="tabs-list" />');
    // handle tab
    $('.tabbed-discussions, .tabbed-questions').each(function () {

        var self = $(this),
            heading = $(self).find('h2').text(),
            klass;

        klass = heading.toLowerCase();
        klass = klass.replace(/\s+/g, '');
        klass = klass.replace(/\&/g, '-');

        $(self).addClass(klass);

        $('.tabs-list').append('<button type="button" class="' + klass + '" onclick="showMe(\'.' + klass + '\');">' + heading + '</button>');

    });

    $('.tabs-list button.latestdiscussions').addClass('active');
    $('.tabbed-questions .HLLandingControl').hide();


}

function handleMAM() {
    $('.active-users-button').appendTo('.active-users .Content');
}

function handleChampions() {
    $('.champion, .champion-btn').wrapAll('<div class="champions" />');
}

function handleAlternatePageTitle() {
    $('.alternate-title').closest('#MPContentArea').addClass('alternate-title');
    $('.alternate-title .alternate-title').removeClass('alternate-title');
}

function handleAnchorBlockDiscussions() {
    if (!!($('.anchor-block-discussions').html())) {
        $('.anchor-block .HtmlContent').wrapInner('<div class="text-container" />');
        $('.anchor-block-discussions').appendTo('.anchor-block .HtmlContent');
        $('.anchor-block').addClass('has-discussions');
    }
}

$(function () {
    handleSearch();
    handleFooter();
    handleEvents();
    handleWidgets();
    handleTabbedWidgets();
    handleMAM();
    handleChampions();
    handleAlternatePageTitle();
    handleAnchorBlockDiscussions();
});