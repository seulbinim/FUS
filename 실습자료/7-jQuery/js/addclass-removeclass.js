$(function() {
  // id 속성 값이 three인 요소를 찾아 해당 요소의 class 속성 값인 hot을 제거한다.    
  $('li#three').removeClass('hot');
  // class 속성 값이 hot인 요소를 찾아 해당 요소의 class 속성 값에 favorite를 추가한다.  
  $('li.hot').addClass('favorite');
});