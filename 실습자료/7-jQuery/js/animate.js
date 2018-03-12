$(function() {
    // li 요소를 클릭할 때
    $('li').on('click', function() {
        $(this).animate({
            // 점점 투명해지도록 투명도는 0            
            opacity: 0.0,
            // 왼쪽 방향 여백을 80px씩 증가하도록 지정한다.
            paddingLeft: '+=80'
            // 0.5초 동안 애니메이션이 완료되면 콜백함수를 실행한다.
        }, 500, function() {
            // 클릭한 li 요소를 제거한다.
            $(this).remove();
        });
    });
});