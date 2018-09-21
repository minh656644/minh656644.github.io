// update Box chose item for input

$('[requiredInput="true"]').blur( function () {
	var currentInput = this;
	var value = $(currentInput).val();

	if (value.trim().length ===0) {
		$(currentInput).css('border-color','red');
		$(currentInput).attr('title', 'Trường này không được để trống')
	}else{
		$(currentInput).css('border-color','#d9d9d9');
		$(currentInput).removeAttr('title', 'Trường này không được để trống');
	}

});


$('#job-position').click(function () {
	$('#box-job-position').css('display','block');
});
$('#job-position-2').click(function () {
    $('#box-job-position').css('display', 'block');
});
$('#work-unit').click(function () {
	$('#box-work-unit').css('display','block');
});
$('#work-unit-2').click(function () {
    $('#box-work-unit').css('display', 'block');
});
$('#degree-training').click(function () {
	$('#box-degree-training').css('display','block');
});
$('#degree-training').click(function () {
	$('#box-degree-training').css('display','block');
});
$('#training-places').click(function () {
	$('#box-training-places').css('display','block');
});
$('#faculty-training').click(function () {
	$('#box-faculty-training').css('display','block');
});
$('#specialized').click(function () {
	$('#box-specialized').css('display','block');
});
$('#classification').click(function () {
	$('#box-classification').css('display','block');
});
$('#job-select').click(function () {
	$('#box-job').css('display','block');
});
$('#marital-status').click(function () {
	$('#box-marital-status').css('display','block');
});
$('#ingredient-family').click(function () {
	$('#box-ingredient-family').css('display','block');
});
$('#ingredient-seft').click(function () {
	$('#box-ingredient-seft').css('display','block');
});
$('#nation').click(function () {
	$('#box-nation').css('display','block');
});
$('#religion').click(function () {
	$('#box-religion').css('display','block');
});
$('#nationality').click(function () {
	$('#box-nationality').css('display','block');
});


$('.close-box').click(function () {
	$('#box-work-unit').css('display','none');
	$('#box-job-position').css('display','none');
	$('#box-degree-training').css('display','none');
	$('#box-training-places').css('display','none');
	$('#box-faculty-training').css('display','none');
	$('#box-specialized').css('display','none');
	$('#box-classification').css('display','none');
	$('#box-job').css('display','none');
	$('#box-marital-status').css('display','none');
	$('#box-ingredient-family').css('display','none');
	$('#box-ingredient-seft').css('display','none');
	$('#box-nation').css('display','none');
	$('#box-religion').css('display','none');
	$('#box-nationality').css('display','none');
});