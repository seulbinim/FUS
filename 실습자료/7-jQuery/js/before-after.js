$(function() {
    // ul 요소 앞에 새로운 p 요소를 추가한다.
    $('ul').before('<p class="notice">새로운 단락을 목록 앞에 추가하기</p>');
    
    // 새로운 li 요소를 생성한 후 마지막 li 요소 뒤에 추가한다.
    var $newListItem = $('<li class="cool"><em>무 방부제</em> 간장</li>');
    $('li:last').after($newListItem);
});