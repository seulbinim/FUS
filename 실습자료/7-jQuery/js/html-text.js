$(function() {
    // li 요소 중에서 “잣”이라는 단어가 포함된 콘텐츠를 찾고 아몬드로 변경한다.
    $('li:contains("잣")').text('아몬드');
    
    // class 속성 값이 cool인 li 요소의 텍스트에 em 요소를 추가한다.
    $('li.cool').html(function() {
        return '<em>' + $(this).text() + '</em>';
    });
    
    // id 속성 값이 one인 li 요소를 제거한다.
    $('li#one').remove();
});