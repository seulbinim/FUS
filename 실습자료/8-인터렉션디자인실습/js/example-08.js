$('.spinner-master').on('click', function() {
    var div = $(this).toggleClass('act');
    var btn = div.find('.button');
    if (div.hasClass('act')) {
        btn.text('메뉴보기');
    } else {
        btn.text('메뉴닫기');
    }
});