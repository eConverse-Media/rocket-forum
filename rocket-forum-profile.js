$(function () {
    var url = window.location.href;

    if (url.indexOf('#addphoto') > -1) {
        $('a[id*="lnkEditPicture"]').click();
    }
});