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
            byline = $(self).find('.ByLine'),
            postedIn = $(self).find('h5');

        $(byline).wrapInner('<div class="byline-date" />');

        $(image).append(byline);

        $(self).append(image);
        $(image).wrap('<div class="byline-posted-in" />');
        $(postedIn).insertAfter(image);
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
    if ($('.anchor-block').hasClass('multiple-testimonials')) {
        $('.anchor-block.multiple-testimonials .HtmlContent').wrapInner('<div class="text-container" />');
        $('.anchor-block blockquote').each(function () {
            var self = $(this),
                attribution = $(self).find('+ h5');

            $(self).wrap('<div class="testimonial-quote" />');
            $(self).closest('.testimonial-quote').append(attribution);
        });
        $('.testimonial-quote').wrapAll('<div class="anchor-testimonials" />');
        $('.anchor-block .anchor-testimonials').insertAfter('.anchor-block.multiple-testimonials .text-container');
    } else if (!!($('.anchor-block-discussions').html())) {
        $('.anchor-block .HtmlContent').wrapInner('<div class="text-container" />');
        $('.anchor-block-discussions').appendTo('.anchor-block .HtmlContent');
        $('.anchor-block').addClass('has-discussions');
    }

}

function handleCommunityList() {
    $('.community-list div[id*="pnlViewOnly"]').each(function () {
        var self = $(this),
            button = '<a href="login?ReturnUrl=https%3a%2f%2fcommunity.rocketsoftware.com%2fwebdev%2fforums%2fallforums" class="btn btn-default">Join</a>';

        $(self).html(button);
    });
}

function handleLoginPage() {
    if (!!($('.login-panel .ErrorMessage').text())) {
        $('.login-panel .ErrorMessage').text('Invalid email/password combination');
        $('.login-panel .ErrorMessage').wrap('<div class="callout-panel" />');
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
    handleCommunityList();
    handleLoginPage();
});