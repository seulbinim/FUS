$(function() {
    // class 속성 값이 hot인 요소의 텍스트 앞에 플러스(+)를 추가한다.
    $('li.hot').prepend('+ ');
    
    // class 속성 값이 cool인 요소의 텍스트 앞에 별표(*)를 추가한다.
    $('li.cool').append(' *');
});