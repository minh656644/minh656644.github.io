/* *
 * Hàm đổi chuỗi chữ thường có dấu sang không dấu
 * @param : string str;
 * @return : string str;
 */
function ascii_slug(str) {
    str = str.toLowerCase();// chuyển chuỗi sang chữ thường để xử lý

    // tìm kiếm và thay thế tất cả các nguyên âm có dấu sang không dấu
    str = str.replace(/à|á|ả|ã|ạ|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/g, "a");
    str = str.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/g, "e");
    str = str.replace(/í|ì|ỉ|ĩ|ị/g, "i");
    str = str.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/g, "o");
    str = str.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/g, "u");
    str = str.replace(/ý|ỳ|ỷ|ỹ|ỵ/g, "y");

    return str;// xuất kết quả xữ lý ra	
};

$(document).ready(function () {

    var  countryCode = "";
    
    var BATTUTA_KEY = "5267f635de2ad6bfa7a5ad59cb2e8b7f"; 

    // đưa dữ liệu country vào ô list option
    $.ajax({
        type: 'GET',
        url: 'Scripts/data-address/country.json',
        success: function (data) {
            $.each(data, function (index, value) {
                // APPEND OR INSERT DATA TO SELECT ELEMENT. Set the country code in the id section rather than in the value.
                $(".country").append(
                    '<div id="' + value.code + '" value="' + value.name + '" class="option">' + value.name + "</div>"
                );
            });
            $('.option').click(function () {
                $(this).parent().siblings().find('input').val($(this).attr('value'));
                $(this).parent().siblings().find('input').attr('code-country', $(this).attr('id'));
                $(this).parent().siblings().find('input').focus();
            });
        },
    });

    // đưa dữ liệu region vào ô list option
    $('.input-region').focus(function () {
        countryCode = $(this).parents('.row-input').prev().find('input').attr('code-country');
        // Trường hợp là Việt Nam thì load dữ liệu có sẵn
        if (countryCode == "vn") {
            $(this).parent().next().empty();
            $.ajax({
                type: 'GET',
                url: 'Scripts/data-address/tinh_tp_vn.json',
                success: function (data) {
                    $.each(data, function (index, value) {
                        $(".region").append(
                            '<div id="' + value.code + '" value="' + value.name + '" class="option">' + value.name + "</div>"
                        );
                    });
                    $('.option').click(function () {
                        $(this).parent().siblings().find('input').val($(this).attr('value'));
                        $(this).parent().siblings().find('input').attr('code-region', $(this).attr('id'));
                        $(this).parent().siblings().find('input').focus();
                    });
                },
            });
        } else { 
            // Trường hợp không phải Việt Nam load dữ liệu từ API
            var url_region = "https://battuta.medunes.net/api/region/" +
                countryCode +
                "/all/?key=" +
                BATTUTA_KEY +
                "&callback=?";

            $(this).parent().next().empty();
            $.getJSON(url_region, function (data) {
                //$('.region').empty();
                $.each(data, function (index, value) {
                    // APPEND OR INSERT DATA TO SELECT ELEMENT.
                    $(".region").append(
                        '<div value="' + value.region + '" class="option">' + value.region + "</div>"
                    );
                });
                $('.option').click(function () {
                    $(this).parent().siblings().find('input').val($(this).attr('value'));
                    //$(this).parent().siblings().find('input').attr('code-country', $(this).attr('id'));
                    $(this).parent().siblings().find('input').focus();
                });
            });
        }
    });

    // đưa dữ liệu city vào ô list option
    $('.input-city').focus(function () {
        region = $(this).parents('.row-input').prev().find('input').val();
        var regionCode = $(this).parents('.row-input').prev().find('input').attr("code-region");
        if (countryCode == "vn") {
            $(this).parent().next().empty();
            $.ajax({
                type: 'GET',
                url: 'Scripts/data-address/quan_huyen_vn.json',
                success: function (data) {
                    $.each(data, function (index, value) {
                        if (value.parent_code == regionCode) {
                            $(".city").append(
                                '<div id="' + value.code + '" value="' + value.name + '" class="option">' + value.name + "</div>"
                            );
                        }
                        //$(".city").append(
                        //    '<div id="' + value.code + '" value="' + value.name + '" class="option">' + value.name + "</div>"
                        //);
                    });
                    $('.option').click(function () {
                        $(this).parent().siblings().find('input').val($(this).attr('value'));
                        $(this).parent().siblings().find('input').attr('code-city', $(this).attr('id'));
                        $(this).parent().siblings().find('input').focus();
                    });
                },
            });
        } else {
            var url_city = "https://battuta.medunes.net/api/city/" +
                countryCode +
                "/search/?region=" +
                region +
                "&key=" +
                BATTUTA_KEY +
                "&callback=?";

            $(this).parent().next().empty();
            $.getJSON(url_city, function (data) {
                //$('.region').empty();
                $.each(data, function (index, value) {
                    // APPEND OR INSERT DATA TO SELECT ELEMENT.
                    $(".city").append(
                        '<div value="' + value.city + '" class="option">' + value.city + "</div>"
                    );
                });
                $('.option').click(function () {
                    $(this).parent().siblings().find('input').val($(this).attr('value'));
                    //$(this).parent().siblings().find('input').attr('code-country', $(this).attr('id'));
                    $(this).parent().siblings().find('input').focus();
                });
            });
        }
    });

    // đưa dữ liệu wards vào ô list option
    $('.input-wards').focus(function () {
        var cityCode = $(this).parents('.row-input').prev().find('input').attr("code-city");
        if (countryCode == "vn") {
            $(this).parent().next().empty();
            $.ajax({
                type: 'GET',
                url: 'Scripts/data-address/xa_phuong_vn.json',
                success: function (data) {
                    $.each(data, function (index, value) {
                        if (value.parent_code == cityCode) {
                            $(".wards").append(
                                '<div id="' + value.code + '" value="' + value.name + '" class="option">' + value.name + "</div>"
                            );
                        }
                    });
                    $('.option').click(function () {
                        $(this).parent().siblings().find('input').val($(this).attr('value'));
                        $(this).parent().siblings().find('input').attr('code-wards', $(this).attr('id'));
                        $(this).parent().siblings().find('input').focus();
                    });
                },
            });
        }
    });

    // Cập nhập thông tin địa chỉ vào ô textarea
    $('#form-address').find('input').blur(function () {
        $(this).parents('.row-input').siblings().last().find('textarea').empty();
        var link = $(this).parents('.block');
        var address = "";
        if (link.find('.input-country').val() != "") {
            address = address + link.find('.input-country').val();
        }
        if (link.find('.input-region').val().trim() != "") {
            address = link.find('.input-region').val().trim() + ", " + address;
        }
        if (link.find('.input-city').val().trim() != "") {
            address = link.find('.input-city').val().trim() + ", " + address;
        }
        if (link.find('.input-wards').val().trim() != "") {
            address = link.find('.input-wards').val().trim() + ", " + address;
        }
        if (link.find('.input-village').val().trim() != "") {
            address = link.find('.input-village').val().trim() + ", " + address;
        }
        $(this).parents('.row-input').siblings().last().find('textarea').append(address);


    });

    // Cập nhập thông tin địa chỉ khối phải khi thay đổi khối trái
    $('#form-address').children('.block-left').find('input').blur(function () {
        if ($('#form-address').children('.block-right').find('span').first().hasClass('checked')) {
            var link_left = $('#form-address').children('.block-left');
            var link_right = $('#form-address').children('.block-right');
            link_right.find('.input-country').val(link_left.find('.input-country').val());
            link_right.find('.input-region').val(link_left.find('.input-region').val());
            link_right.find('.input-city').val(link_left.find('.input-city').val());
            link_right.find('.input-wards').val(link_left.find('.input-wards').val());
            link_right.find('.input-village').val(link_left.find('.input-village').val());
            link_right.find('textarea').val(link_left.find('textarea').val());
        }
    });

    // Click vào khối check thì không cho nhập thông tin vào khối phải
    $('#form-address').children('.block-right').find('span').first().click(function () {
        if ($('#form-address').children('.block-right').find('span').first().hasClass('unchecked')) {
            $('#form-address-right').trigger('reset');
            $('#form-address').children('.block-right').find('.country').removeClass('list-option');
            debugger;
            $('#form-address').children('.block-right').find('input').attr('disabled', '');
            $('#form-address').children('.block-right').find('textarea').attr('disabled', '');
            var link_left = $('#form-address').children('.block-left');
            var link_right = $('#form-address').children('.block-right');
            link_right.find('.input-country').val(link_left.find('.input-country').val());
            link_right.find('.input-region').val(link_left.find('.input-region').val());
            link_right.find('.input-city').val(link_left.find('.input-city').val());
            link_right.find('.input-wards').val(link_left.find('.input-wards').val());
            link_right.find('.input-village').val(link_left.find('.input-village').val());
            link_right.find('textarea').val(link_left.find('textarea').val());
        } else {
            $('#form-address').children('.block-right').find('input').removeAttr('disabled');
            $('#form-address-right').trigger('reset');
            $('#form-address').children('.block-right').find('textarea').empty();
            $('#form-address').children('.block-right').find('textarea').removeAttr('disabled');
            $('#form-address').children('.block-right').find('.country').addClass('list-option');
        }
    });

    // tải dữ liệu quan hệ vào option
    $.ajax({
        type: 'GET',
        url: 'Scripts/data-address/relationship.json',
        success: function (data) {
            $.each(data, function (index, value) {
                // APPEND OR INSERT DATA TO SELECT ELEMENT. Set the country code in the id section rather than in the value.
                $(".relationship").append(
                    '<div value="' + value.relationship_name + '" class="option">' + value.relationship_name + "</div>"
                );
            });
            $('.option').click(function () {
                $(this).parent().siblings().find('input').val($(this).attr('value'));
                $(this).parent().siblings().find('input').focus();
            });
        },
    });

    // lọc dữ liệu theo giá trị nhập vào từ bàn phím người dùng
    $('#form-address, #box-input-city').find("input").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(this).parent().next().find(".option").filter(function () {
            $(this).parents('.list-option').show();
            value = ascii_slug(value);
            $(this).toggle(ascii_slug($(this).text().toLowerCase()).indexOf(value) > -1);
        });
    });


    // tải dữ liệu city vào option
    $.ajax({
        type: 'GET',
        url: 'Scripts/data-address/tinh_tp_vn.json',
        success: function (data) {
            $.each(data, function (index, value) {
                // APPEND OR INSERT DATA TO SELECT ELEMENT. Set the country code in the id section rather than in the value.
                $(".list-option-city").append(
                    '<div value="' + value.name + '" class="option">' + value.name + "</div>"
                );
            });
            $('.option').click(function () {
                $(this).parent().siblings().find('input').val($(this).attr('value'));
                $(this).parent().siblings().find('input').focus();
            });
        },
    });

});