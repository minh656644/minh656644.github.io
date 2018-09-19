$(document).ready(function () {

    var selectedCountry = selectedRegion = selectedCity = countryCode = "";

    var BATTUTA_KEY = "b8dbfdd0584c9c1aff4d73f1ca121af0";

    // var url =
    //    "https://battuta.medunes.net/api/country/all/?key=" +
    //    BATTUTA_KEY +
    //    "&callback=?";

    //$.getJSON(url, function (data) {
    //    $.each(data, function (index, value) {
    //        // APPEND OR INSERT DATA TO SELECT ELEMENT. Set the country code in the id section rather than in the value.
    //        $("#country").append(
    //            '<div id="' + value.code + '" value="' + value.name + '" class="option">' + value.name + "</div>"
    //        );
    //    });
    //    $('.option').click(function () {
    //        $(this).parent().siblings().find('input').val($(this).attr('value'));
    //    });
    //});

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
                $(this).parent().siblings().find('input').attr('code-country', $(this).attr('id') );
                $(this).parent().siblings().find('input').focus();
            });
        },
    });

    $('.input-region').focus(function () {
        countryCode = $(this).parents('.row-input').prev().find('input').attr('code-country');
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
    });

    $('.input-city').focus(function () {
        region = $(this).parents('.row-input').prev().find('input').val();
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
    });

    
    
    if ($('#form-address').children('.block-right').find('span').first().hasClass('unchecked')) {
        $('#form-address').children('.block-right').find('span').first().click(function () {
            var link_left = $('#form-address').children('.block-left');
            var link_right = $('#form-address').children('.block-right');
            link_right.find('.input-country').val(link_left.find('.input-country').val());
            link_right.find('.input-region').val(link_left.find('.input-region').val());
            link_right.find('.input-city').val(link_left.find('.input-city').val());
            link_right.find('.input-wards').val(link_left.find('.input-wards').val());
            link_right.find('.input-village').val(link_left.find('.input-village').val());
            link_right.find('textarea').val(link_left.find('textarea').val());
        });
    }

    $('#form-address').children('.block-left').find('input').blur(function () {
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

    $('#form-address').children('.block-right').find('input').blur(function () {
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

        if ($('#form-address').children('.block-right').find('span').first().hasClass('checked')) {
            if ($('#form-address').children('.block-left').find('textarea').val() != $('#form-address').children('.block-right').find('textarea').val()) {
                $('#form-address').children('.block-right').find('span').first().removeClass('checked');
                $('#form-address').children('.block-right').find('span').first().addClass('unchecked');
            }
        }

    });

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

});