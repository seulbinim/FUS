$(function() {
    $('li').each(function() {
        // this 키워드는 루프 내에서 현재 요소 노드를 참조한다. 
        // 이 키워드를 통해 현재 요소의 id 속성 값을 가져와 ids 변수에 저장한다.  
        var ids = this.id;
        // $(this)는 루프 내의 현재 요소를 가지고 있는 jQuery 객체를 생성한다.
        // 해당 객체에 .append() 메소드를 사용하여 <span> 요소를 추가한다.
        $(this).append(' <span class="order">' + ids + '</span>');
    });
});