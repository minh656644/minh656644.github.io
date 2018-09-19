
var check = 2;
$('#icon-left-header').click(function () {
    $('.menu-right').toggle();
    $('.main').toggleClass('main-left-30px');
    $('.menu-li, .menu-li-ul-li').removeAttr('style');
    $('.menu-li-dropdown').filter('[status=show]').next().hide();
    $('.menu-li-dropdown').filter('[status=show]').removeAttr('status');

    if (check%2 == 0) {
        $('.search-box').css('min-width','390px');
        $('#ip-search').css('width','80%');
        $('.nav-panel-l-r').css('width','29.2%');
        $('.setting-dialog').css('width','29.2%');
        $('.nav-menu').css('box-shadow','7px -2px 36px -5px #003f7f');
    }else{
        $('.search-box').css('min-width','305px');
        $('#ip-search').css('width','74%');
        $('.nav-panel-l-r').css('width','24.2%');
        $('.setting-dialog').css('width','26.6%');
        $('.nav-menu').css('box-shadow','0 0 0 0');

    }
    check++;
});

// Thay đổi backgroup khi click vào 1 menu trong list menu bên trái
$('.menu-li, .menu-li-ul-li').click(function () {
    $('.menu-li, .menu-li-ul-li').removeAttr('style');
    $(this).css("background-color", "#EDA235");
});

$('.menu-left').click(function () {
    $('.menu-right').show();
    $('.main').removeClass('main-left-30px');
}); 

$('.menu-li-dropdown').click(function () {
    if ($(this).attr('status') !== 'show') {
        $('.menu-li-dropdown').filter('[status=show]').find('span').removeClass("icon-menu-dropup");
        $('.menu-li-dropdown').filter('[status=show]').find('span').addClass("icon-menu-dropdown");
        $('.menu-li-dropdown').filter('[status=show]').next().stop().slideUp(300);
        $('.menu-li-dropdown').filter('[status=show]').removeAttr('status');
        $(this).next().stop().slideDown(300);
        $(this).attr('status', 'show');
        $(this).find('span').removeClass("icon-menu-dropdown");
        $(this).find('span').addClass("icon-menu-dropup");

        debugger;
    } else {
        $(this).next().stop().slideUp(300);
        $(this).removeAttr('status');
        $(this).find('span').removeClass("icon-menu-dropup");
        $(this).find('span').addClass("icon-menu-dropdown");
    }
});

