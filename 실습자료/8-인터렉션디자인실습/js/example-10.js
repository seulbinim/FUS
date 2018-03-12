$('input').on('focusin', function() {
    $(this).parent().children('label').addClass('focusable');
    $(this).parent().children('.bar').addClass('bar-active');
});
$('input').on('focusout', function() {
    $(this).parent().children('label').removeClass('focusable');
    $(this).parent().children('.bar').removeClass('bar-active');
});