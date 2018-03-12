$(function() {
    // h1 요소를 숨겼다가 슬라이드 되어 나타나는 효과를 지정한다.
    $('h1').hide().slideDown();
    var $li = $('li');
    // 모든 li 요소를 숨겼다가 1초 후에 서서히 나타나도록 FadeIn 효과를 지정한다.
    $li.hide().each(function(index) {
        $(this).delay(1000 * index).fadeIn(700);
    });
    // li 요소를 클릭할 경우 서서히 사라지도록 FadeOut 효과를 지정한다.
    $li.on('click', function() {
        $(this).fadeOut(1000);
    });
});