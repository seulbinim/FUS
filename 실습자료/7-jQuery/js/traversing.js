$(function() {
    var heading = $('h1') ;
    var list = $('ul') ;
    // h1 요소 뒤에 button 요소를 추가한다.
    heading.after('<button type="button">목록 보기</button> ') ;    
    var list = $('ul') ;
    // ul 요소를 숨긴다.
    list.hide() ;
    var btn = $('button') ;
    // CSS의 cursor 스타일을 지정한다.
    btn.css('cursor', 'pointer');
    // 버튼을 클릭할 때 다음 형제 요소인 ul 요소에 FadiIn 효과를 지정하고
    // ul 요소의 자식 요소 중 hot 이라는 class 속성 값을 favorite으로 변경한다.
    // ul 요소 하위 요소 중 em 요소의 CSS 스타일을 변경한다.
    btn.on('click', function() {
        btn.next('ul')
            .fadeIn(1000)
            .children('.hot')
            .addClass('favorite') ;
        list.find('em').css('fontStyle', 'normal') ; 
    });
});