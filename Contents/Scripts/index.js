$("#employee-file-add-button").click(function () {
    $('#employee-file').hide();
    $('#employee-file-add-button-pannel').show();
})

$('.arr-dropdown').click(function () {
    $('.dropdown-content').toggle();
})

function filterFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('input-filter');
    filter = input.value.toUpperCase();
    ul = document.getElementById("contentfilter");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
$('.contentfilter li').click(function () {
    var input = $(this).attr('value');
    $('.dropdown-content').hide();
    $('.input-filter').val(input);
})
$('.current-status').click(function () {
    $('.right-right-status').toggle();
})
$('.right-right-status li').click(function () {
    var input = $(this).attr('value');
    $('.right-right-status').hide();
    $('.current-status').val(input);

})