$('#btn-maxsize-restore').click(function () {
    if ($(this).hasClass('btn-maxsize')) {
        $(this).parents('.modal-contents').removeClass('modal-size');
        $(this).removeClass('btn-maxsize');
        $(this).addClass('btn-restore');        
    } else {
        $(this).parents('.modal-contents').addClass('modal-size');
        $(this).removeClass('btn-restore');
        $(this).addClass('btn-maxsize');
        debugger;
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

    
