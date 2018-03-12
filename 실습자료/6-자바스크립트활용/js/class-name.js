// hot 클래스가 지정된 요소를 찾는다. 
var elements = document.getElementsByClassName('hot') ; 
// 찾은 요소가 2개 이상인지 검사한다. 
if (elements.length >= 2) { 
    // NodeList 객체에서 두 번째 아이템을 선택한다. 
    var el = elements[1] ; 
    // 선택한 요소의 class 속성 값을 cool로 변경한다. 
    el.className = 'cool' ; 
}    
