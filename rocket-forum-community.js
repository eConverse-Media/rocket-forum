function createJoinButton() {
    var url = window.location.href,
        loginUrl = 'login?ReturnUrl=' + url,
        button = '<a href="' + loginUrl + '" class="btn btn-primary">Join</a>';

    $('div[id*="communityJoinLeave_pnlViewOnly"]').html(button);

}


$(function () {
    createJoinButton();
});