// tải dữ liệu country vào bảng
$.ajax({
    type: 'GET',
    url: 'Scripts/data-address/country.json',
    success: function (data) {
        $.each(data, function (index, value) {
            // APPEND OR INSERT DATA TO SELECT ELEMENT. Set the country code in the id section rather than in the value.
            $("#table-list-country").append(
                '<tr> <td>' + value.code.toUpperCase() +'</td> <td>' + value.name + '</td> <td><span class="box-check unchecked"></span></td></tr>'
            );
        });

        // lọc code-country theo giá trị nhập vào từ bán phím
        $('.table-select-country').find("input").first().on("keyup", function () {
            var value = $(this).val().toLowerCase();
            $('#table-list-country').find("tr").filter(function () {
                value = ascii_slug(value);
                $(this).toggle(ascii_slug($(this).children().first().text().toLowerCase()).indexOf(value) > -1);
            });
        });

        // lọc name-country theo giá trị nhập vào từ bàn phím
        $('.table-select-country').find("input").last().on("keyup", function () {
            var value = $(this).val().toLowerCase();
            $('#table-list-country').find("tr").filter(function () {
                value = ascii_slug(value);
                $(this).toggle(ascii_slug($(this).children().first().next().text().toLowerCase()).indexOf(value) > -1);
            });
        });

        // thêm select vào hàng country khi ấn 
        $('#table-list-country').find('tr').click(function () {
            $('#table-list-country').find('tr').removeClass('select-tr');
            $(this).addClass('select-tr');
            if ($(this).find('.box-check').hasClass('checked')) {
                $(this).find('.box-check').toggleClass('checked');
                $(this).find('.box-check').toggleClass('unchecked');
            }
            else {
                $('tbody').find('.box-check').removeClass('checked');
                $('tbody').find('.box-check').addClass('unchecked');
                $(this).find('.box-check').toggleClass('checked');
                $(this).find('.box-check').toggleClass('unchecked');
            }
        });

        // Án nút chọn thì thoát madel
        $('.button-madal-select-country').click(function () {
            var tr_select = $('#table-list-country').find('.select-tr');
            $('.processing').siblings('input').val(tr_select.children().first().next().text());
            $('.processing').siblings('input').attr('code-country', tr_select.children().first().text().toLowerCase());
            $('.processing').siblings('input').focus();
            $('.processing').removeClass('processing');
            $('#table').empty();
        });
    },
});

// phóng to madal
$('#btn-maxsize-restore').click(function () {
    if ($(this).hasClass('btn-maxsize')) {
        $(this).parents('.modal-contents').removeClass('modal-size');
        $(this).removeClass('btn-maxsize');
        $(this).addClass('btn-restore');
    } else {
        $(this).parents('.modal-contents').addClass('modal-size');
        $(this).removeClass('btn-restore');
        $(this).addClass('btn-maxsize');
    }
});

// phóng to madal
$('.modal-header').dblclick(function () {
    if ($(this).parent().hasClass('modal-size')) {
        $(this).parent().removeClass('modal-size');
        $(this).find("#btn-maxsize-restore").removeClass('btn-maxsize');
        $(this).find("#btn-maxsize-restore").addClass('btn-restore');
    } else {
        $(this).parent().addClass('modal-size');
        $(this).find("#btn-maxsize-restore").removeClass('btn-restore');
        $(this).find("#btn-maxsize-restore").addClass('btn-maxsize');
    }
});

    
