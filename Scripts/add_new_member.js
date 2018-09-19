$(document).ready(function () {

    // hiệu ứng focus vào input loại 1
    $('.box-input').children('.input-select-one').children('input').focus(function () {
        $(this).css('border', '1px solid #3892D4');
    });

    // tắt hiệu ứng khi blur input loại 1
    $('.box-input').children('.input-select-one').children('input').blur(function () {
        $(this).removeAttr('style');
    });

    // hiệu ứng focus vào input loại 2,3
    $('.box-input').children('.input-select-two, .input-select-three').children('input').focus(function () {
        $(this).css({ 'border': '1px solid #3892D4', 'border-right': 'none' });
        $(this).siblings(".icon-drop-option").css({ 'border': '1px solid #3892D4', 'border-left': 'none' });
    });

    // tắt hiệu ứng khi blur input loại 2,3
    $('.box-input').children('.input-select-two, .input-select-three').children('input').blur(function () {
        $(this).removeAttr('style');
        $(this).siblings(".icon-drop-option").removeAttr('style');
    });

    // hiệu ứng focus vào textarea
    $('.box-input').children('textarea').focus(function () {
        $(this).css('border', '1px solid #3892D4');
    });

    // tắt hiệu ứng khi blur textarea
    $('.box-input').children('textarea').blur(function () {
        $(this).removeAttr('style');
    });

    // toggle checkbox
    $('.form-check').children('.checked, .unchecked').click(function () {
        $(this).toggleClass('checked');
        $(this).toggleClass('unchecked');
    });

    // toggle select option
    $('.box-input').children('.input-select-two, .input-select-three').children('.icon-drop-option').click(function () {
        $(this).parent().siblings('.list-option').toggle();
        $(this).siblings('input').focus();
    });


    // hide list-option khi click ra ngoài
    $(document).click(function (e) {
        // Đối tượng container
        var container = $('.icon-drop-option');

        // Nếu click bên ngoài đối tượng container thì ẩn phần option đi
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.list-option').hide();
        }
    });

    $('.button-country').click(function () {
        $("#table").load("Views/table-relationship.html", function () {
            $(".btn-close").click(function () {
                $('#table').empty();
            });
        });
    });
});




