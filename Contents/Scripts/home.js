
var check = 2;
$('#icon-left-header').click(function () {
    $('.menu-right').toggle();
    $('.main').toggleClass('main-left-30px');
    $('.menu-li, .menu-li-ul-li').removeAttr('style');
    $('.menu-li-dropdown').filter('[status=show]').next().hide();
    $('.menu-li-dropdown').filter('[status=show]').removeAttr('status');

    //thu lại các dialog setting và application nếu nó đang được hiện,khi click vào icon menubar
    $('.setting-dialog').css('display', 'none');
    $('.triangle').css('display', 'none');
    $('.catalog-application-catalog').css('display', 'none');
    $('.type1-sub-menu').hide();
    $('.type2-sub-menu').hide();
    $('.type3-sub-menu').hide();
    //
    $('.menu-li-dropdown').find('span').removeClass("icon-menu-dropup");
    $('.menu-li-dropdown').find('span').addClass("icon-menu-dropdown");
    if (check % 2 == 0) {
        $('.search-box').css('min-width', '390px');
        $('#ip-search').css('width', '80%');
        $('.nav-panel-l-r').css('width', '29.2%');
        $('.setting-dialog').css('width', '29.2%');
        $('.nav-menu').css('box-shadow', '7px -2px 36px -5px #003f7f');

        // box
        //$('.box-content').css('left', '30px');
        $('.box-content').css('width', 'calc(100vw - 30px)');
        $('.building-alert').css('width', 'calc(100vw - 48px)');
        //box
    } else {
        $('.search-box').css('min-width', '305px');
        $('#ip-search').css('width', '74%');
        $('.nav-panel-l-r').css('width', '24.2%');
        $('.setting-dialog').css('width', '26.6%');
        $('.nav-menu').css('box-shadow', '0 0 0 0');
        // box
        //$('.box-content').css('left', '230px');
        $('.box-content').css('width', 'calc(100vw - 230px)');
        //box
        $('.building-alert').css('width', 'calc(100vw - 248px)');
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

//thay doi chieu mui ten cua 1 danh muc khi tat/bat
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
    } else {
        $(this).next().stop().slideUp(300);
        $(this).removeAttr('status');
        $(this).find('span').removeClass("icon-menu-dropup");
        $(this).find('span').addClass("icon-menu-dropdown");
    }
    $('.time-management-sub-menu').hide();
    $('.time-sheet-sub-menu').hide();
    $('.salary-sub-menu').hide();
    $('.tax-sub-menu').hide();
    $('.insure-sub-menu').hide();
    $('.recruit-sub-menu').hide();
    $('.training-sub-menu').hide();
    $('.report-sub-menu').hide();
    $('.list-sub-menu').hide();
    $('.system-sub-menu').hide();
});


//hien thi trang dang duoc nang cap
$('#desk-item').click(function () {   
    $('.building-alert').show();
    $('.box-title').hide();
    $('#info-all-employee-tuan-anh').hide();
    $('.box-body-frame').hide();
    $('.contents').hide();
})

$('#contact-item').click(function () {
    $('.building-alert').show();
    $('.box-title').hide();
    $('#info-all-employee-tuan-anh').hide();
    $('.box-body-frame').hide();
    $('.contents').hide();
})

$('#fast-report-item').click(function () {
    $('.building-alert').show();
    $('.box-title').hide();
    $('#info-all-employee-tuan-anh').hide();
    $('.box-body-frame').hide();
    $('.contents').hide();
})

$('#garbage-item').click(function () {
    $('.building-alert').show();
    $('.box-title').hide();
    $('#info-all-employee-tuan-anh').hide();
    $('.box-body-frame').hide();
    $('.contents').hide();
})

$('#email-history-item').click(function () {
    $('.building-alert').show();
    $('.box-title').hide();
    $('#info-all-employee-tuan-anh').hide();
    $('.box-body-frame').hide();
    $('.contents').hide();
})

$('.contract-item').click(function () {
    $('.building-alert').show();
    $('.box-title').hide();
    $('#info-all-employee-tuan-anh').hide();
    $('.box-body-frame').hide();
    $('.contents').hide();
})

$('.self-update-item').click(function () {
    $('.building-alert').show();
    $('.box-title').hide();
    $('#info-all-employee-tuan-anh').hide();
    $('.box-body-frame').hide();
    $('.contents').hide();
})

$('.receive-item').click(function () {
    $('.building-alert').show();
    $('.box-title').hide();
    $('#info-all-employee-tuan-anh').hide();
    $('.box-body-frame').hide();
    $('.contents').hide();
})

$('.grant-item').click(function () {
    $('.building-alert').show();
    $('.box-title').hide();
    $('#info-all-employee-tuan-anh').hide();
    $('.box-body-frame').hide();
    $('.contents').hide();
})

$('.error-item').click(function () {
    $('.building-alert').show();
    $('.box-title').hide();
    $('#info-all-employee-tuan-anh').hide();
    $('.box-body-frame').hide();
    $('.contents').hide();
})

$('.review-item').click(function () {
    $('.building-alert').show();
    $('.box-title').hide();
    $('#info-all-employee-tuan-anh').hide();
    $('.box-body-frame').hide();
    $('.contents').hide();
})

$('.welfare-item').click(function () {
    $('.building-alert').show();
    $('.box-title').hide();
    $('#info-all-employee-tuan-anh').hide();
    $('.box-body-frame').hide();
    $('.contents').hide();
})

// toggle-menu
$('.time-management').click(function () {
    $('.time-management-sub-menu').slideToggle();
    $('.time-sheet-sub-menu').hide();
    $('.salary-sub-menu').hide();
    $('.tax-sub-menu').hide();
    $('.insure-sub-menu').hide();
    $('.recruit-sub-menu').hide();
    $('.training-sub-menu').hide();
    $('.report-sub-menu').hide();
    $('.list-sub-menu').hide();
    $('.system-sub-menu').hide();
})

$('.time-sheet').click(function () {
    $('.time-sheet-sub-menu').slideToggle();
    $('.time-management-sub-menu').hide();
    $('.salary-sub-menu').hide();
    $('.tax-sub-menu').hide();
    $('.insure-sub-menu').hide();
    $('.recruit-sub-menu').hide();
    $('.training-sub-menu').hide();
    $('.report-sub-menu').hide();
    $('.list-sub-menu').hide();
    $('.system-sub-menu').hide();
})

$('.salary').click(function () {
    $('.salary-sub-menu').slideToggle();
    $('.time-management-sub-menu').hide();
    $('.time-sheet-sub-menu').hide();
    $('.tax-sub-menu').hide();
    $('.insure-sub-menu').hide();
    $('.recruit-sub-menu').hide();
    $('.training-sub-menu').hide();
    $('.report-sub-menu').hide();
    $('.list-sub-menu').hide();
    $('.system-sub-menu').hide();
})

$('.tax').click(function () {
    $('.tax-sub-menu').slideToggle();
    $('.time-management-sub-menu').hide();
    $('.time-sheet-sub-menu').hide();
    $('.salary-sub-menu').hide();
    $('.insure-sub-menu').hide();
    $('.recruit-sub-menu').hide();
    $('.training-sub-menu').hide();
    $('.report-sub-menu').hide();
    $('.list-sub-menu').hide();
    $('.system-sub-menu').hide();
})

$('.insure').click(function () {
    $('.insure-sub-menu').slideToggle();
    $('.time-management-sub-menu').hide();
    $('.time-sheet-sub-menu').hide();
    $('.tax-sub-menu').hide();
    $('.salary-sub-menu').hide();
    $('.recruit-sub-menu').hide();
    $('.training-sub-menu').hide();
    $('.report-sub-menu').hide();
    $('.list-sub-menu').hide();
    $('.system-sub-menu').hide();
})

$('.recruit').click(function () {
    $('.recruit-sub-menu').slideToggle();
    $('.time-management-sub-menu').hide();
    $('.time-sheet-sub-menu').hide();
    $('.tax-sub-menu').hide();
    $('.insure-sub-menu').hide();
    $('.salary-sub-menu').hide();
    $('.training-sub-menu').hide();
    $('.report-sub-menu').hide();
    $('.list-sub-menu').hide();
    $('.system-sub-menu').hide();
})

$('.training').click(function () {
    $('.training-sub-menu').slideToggle();
    $('.time-management-sub-menu').hide();
    $('.time-sheet-sub-menu').hide();
    $('.salary-sub-menu').hide();
    $('.tax-sub-menu').hide();
    $('.insure-sub-menu').hide();
    $('.recruit-sub-menu').hide();
    $('.report-sub-menu').hide();
    $('.list-sub-menu').hide();
    $('.system-sub-menu').hide();
})

$('.report').click(function () {
    $('.report-sub-menu').slideToggle();
    $('.time-management-sub-menu').hide();
    $('.time-sheet-sub-menu').hide();
    $('.salary-sub-menu').hide();
    $('.training-sub-menu').hide();
    $('.tax-sub-menu').hide();
    $('.insure-sub-menu').hide();
    $('.recruit-sub-menu').hide();
    $('.list-sub-menu').hide();
    $('.system-sub-menu').hide();
})

$('.list').click(function () {
    $('.list-sub-menu').slideToggle();
    $('.time-management-sub-menu').hide();
    $('.time-sheet-sub-menu').hide();
    $('.salary-sub-menu').hide();
    $('.training-sub-menu').hide();
    $('.tax-sub-menu').hide();
    $('.report-sub-menu').hide();
    $('.insure-sub-menu').hide();
    $('.recruit-sub-menu').hide();
    $('.system-sub-menu').hide();
})

$('.system').click(function () {
    $('.system-sub-menu').slideToggle();
    $('.time-management-sub-menu').hide();
    $('.time-sheet-sub-menu').hide();
    $('.salary-sub-menu').hide();
    $('.tax-sub-menu').hide();
    $('.insure-sub-menu').hide();
    $('.recruit-sub-menu').hide();
    $('.training-sub-menu').hide();
    $('.report-sub-menu').hide();
    $('.list-sub-menu').hide();
})

$('#profile-item, #close-add-panel').click(function () {
    $('.building-alert').hide();
    $('.box-title').show();
    $('#profile-panel').show();
    $('#info-all-employee-tuan-anh').show();
    $('.box-body-frame').hide();
    $('.contents').hide();
    $('#employee-file-add-button-pannel').hide();
})

$('#add-button').click(function () {
    $('#info-all-employee-tuan-anh').hide();
    $('.box-body-frame').show();
    $('.contents').show();
    $('#profile-panel').hide();
    $('#employee-file-add-button-pannel').show();
})
