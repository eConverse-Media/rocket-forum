
$(function () {
    var name = $('.HLWelcomeHeader .panel-body h4').text(),
        greeting = '<div class="greeting"><span>Hello, </span><a href="profile">' + name + '</a></div>',
        linkToInbox = '/network/members/profile/myaccount/inbox/',
		unreadEmailCount = $('a[id^="Welcome_Details_MessagesCount"]').length !== 0 ? parseInt($('a[id^="Welcome_Details_MessagesCount"]').text()) : 0,
        emailContent = '<div class="email-content"><a href ="' + linkToInbox + '"><i class="rf rf-envelope"></i>' + unreadEmailCount + '</a></div>',
        progressBar = $('div[id*="CompleteBarProgress"]').clone(),
        progressText = '<span class="progress-text">Profile Completion</span>';
        
    // create the first column
    $('.member-dashboard-img').wrap('<div class="user-details" />')
    $('.user-details').wrap('<div class="dashboard-col-1" />');
    $('.user-details').append(greeting);
    $('.member-dashboard-img').append(emailContent);
    if (!!($.trim($(progressBar).html()))) {
        $(progressBar).find('.progress-bar-info').wrapInner('<div class="progress-bar-number" />');
        $('.greeting').append(progressBar);
        $('.greeting').append(progressText);
    }

    $('.dashboard-link').wrapAll('<div class="dashboard-links" />');
    $('.dashboard-links').appendTo('.dashboard-col-1');

    // make the second column
    $('.dashboard-btn').wrapAll('<div class="dashboard-buttons" />');
    $('.my-forums, .whats-next, .dashboard-buttons').wrapAll('<div class="dashboard-col-2" />');
    $('.my-forums h2 + div[id*="UpdatePanel"]').prepend('<div class="add-forum make-buttons small secondary"><em><a href="allcommunities">Add Forums</a></em></div>');
    $('.my-forums h2 + div[id*="UpdatePanel"]').append('<div class="my-forums-link make-buttons large secondary"><em><a href="mycommunities">See all</a></em></div>');
    
    // handle extra spaces in community name h3
    $('.my-forums .community-list').each(function () {
        var self = $(this),
            h3 = $(self).find('h3'),
            link = $(h3).find('a');

        $(h3).html(link);
    });

    // make the dashboard
    $('.dashboard-col-1, .dashboard-col-2').wrapAll('<div class="member-dashboard clearfix" />');
    $('.member-dashboard').wrapInner('<div class="dashboard-inner" />');
    $('.bottom-triangles').appendTo('.member-dashboard');

    // handle mobile
    checkForDesktop();
    $(window).on('resize orientationChange', function () {
        if ($(window).width() < 992 &&
        !($('.dashboard-inner .slick-track').html())) {
            slickify();
        }
    });

});

function slickify() {
    $('.dashboard-inner').slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: false,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 992,
                settings: 'unslick'
            }
        ]
    });
}

function checkForDesktop() {
	if ($(window).width() < 991) {
        slickify();
	}
}