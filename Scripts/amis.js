$('.setting-search').click(function() {
	$('.setting-dialog').slideToggle(300);
	$('.triangle').slideUp(200);
	$('.catalog-application-catalog').slideUp(200);
});

$('.img-catalog-app').click(function () {
	$('.triangle').slideToggle(200);
	$('.catalog-application-catalog').slideToggle(200);
	$('.setting-dialog').slideUp(200);
});
$('.r-user').click(function () {
	$('.r-user-profile').slideToggle(150);
});

$('#ip-search').focus(function () {
	$('#ip-search').css('border', '0px');
});


$('.r-ring').mouseenter(function() {
	$('.r-ring').children('img').remove();
	$('.r-ring').append('<img src="Contents/Images/notification-hover.png">');
});
$('.r-ring').mouseleave(function() {
	$('.r-ring').children('img').remove();
	$('.r-ring').append('<img src="Contents/Images/notification.png">');	
});

//upadate
var graduationYear = 2010;
$('#number-up').click(function () {
    graduationYear++;
    $('#up-down-year').val(graduationYear);
});
$('#number-down').click(function () {
    graduationYear--;
    $('#up-down-year').val(graduationYear);
});

var salary = 0.00;
$('#number-up-salary').click(function () {
    salary++;
    $('#up-down-salary').val(salary);
});

$('#number-down-salary').click(function () {
    salary--;
    $('#up-down-salary').val(salary);
});

var insurance = 0;
$('#number-up-insurance').click(function () {
    insurance++;
    $('#up-down-insurance').val(insurance);
});

$('#number-down-insurance').click(function () {
    insurance--;
    $('#up-down-insurance').val(insurance);
});

var bounty = 0;
$('#number-up-bounty').click(function () {
    bounty++;
    $('#up-down-bounty').val(bounty + ',00');
});

$('#number-down-bounty').click(function () {
    bounty--;
    $('#up-down-bounty').val(bounty + ',00');
});

var absent = 0;
$('#up-down-absent').val(absent);
$('#number-up-absent').click(function () {
    absent++;
    $('#up-down-absent').val(absent);
});

$('#number-down-absent').click(function () {
    absent--;
    $('#up-down-absent').val(absent);
});

var ratio = 0;
$('#up-down-ratio').val(ratio+',00');
$('#number-up-ratio').click(function () {
    ratio++;
    $('#up-down-ratio').val(ratio + ',00');
});

$('#number-down-ratio').click(function () {
    ratio--;
    $('#up-down-ratio').val(ratio + ',00');
});

//upload image file
$('#upfile').click(function () {
    $('#file-up').trigger('click');
});

$('#excuse').click(function () {
    var excuse = $('#excuse').val();
    switch (excuse) {
        case "Đang làm thủ tục thôi việc":
            $('.absent-excuse').show();
            break;
        case "Đình chỉ công tác":
            $('.absent-excuse').show();
            break;
        case "Nghỉ hưu":
            $('.absent-excuse').show();
            break;
        case "Nghỉ việc":
            $('.absent-excuse').show();
            break;
        case "Nghỉ khác":
            $('.absent-excuse').show();
            break;
        case "Mất việc làm":
            $('.absent-excuse').show();
            break;
        case "Sa thải":
            $('.absent-excuse').show();
            break;
        default:
            $('.absent-excuse').hide();
    }
});

