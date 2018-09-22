$.ajax({
    type: 'GET',
    url: 'Scripts/data-address/relationship.json',
    success: function (data) {
        $.each(data, function (index, value) {
            // APPEND OR INSERT DATA TO SELECT ELEMENT. Set the country code in the id section rather than in the value.
            $("#table-list-relationship").append(
                '<tr> <td>' + value.relationship_name + '</td> <td>' + value.relationshipg_group + '</td> <td>' + value.note + '</td></tr>'
            );
        });

        $('.table-select-relationship').find("input").first().on("keyup", function () {
            var value = $(this).val().toLowerCase();
            $('#table-list-relationship').find("tr").filter(function () {
                value = ascii_slug(value);
                $(this).toggle(ascii_slug($(this).children().first().text().toLowerCase()).indexOf(value) > -1);
            });
        });

        $('.table-select-relationship').find("input:odd").on("keyup", function () {
            var value = $(this).val().toLowerCase();
            debugger;
            $('#table-list-relationship').find("tr").filter(function () {
                value = ascii_slug(value);
                $(this).toggle(ascii_slug($(this).children().first().next().text().toLowerCase()).indexOf(value) > -1);
            });
        });

        $('.table-select-relationship').find("input").last().on("keyup", function () {
            var value = $(this).val().toLowerCase();
            $('#table-list-relationship').find("tr").filter(function () {
                value = ascii_slug(value);
                $(this).toggle(ascii_slug($(this).children().last().text().toLowerCase()).indexOf(value) > -1);
            });
        });

        $('#table-list-relationship').find('tr').click(function () {
            $('#table-list-relationship').find('tr').removeClass('select-tr');
            $(this).addClass('select-tr');
        });

        $('.button-madal-select-country').click(function () {
            var tr_select = $('#table-list-relationship').find('.select-tr');
            $('.processing').siblings('input').val(tr_select.children().first().text());
            $('.processing').siblings('input').focus();
            $('.processing').removeClass('processing');
            $('#table').empty();
        });
    },
});

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


