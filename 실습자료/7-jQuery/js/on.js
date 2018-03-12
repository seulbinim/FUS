$(function() {

  $('li').on('click', function(e) {
    // 새로운 Date 객체를 생성한다.
    var date = new Date();
    // li 요소가 클릭되어 해당 이벤트가 발생한 시간을 저장한다.
    date.setTime(e.timeStamp);
    // 이벤트가 발생한 시간을 실제로 읽을 수 있는 문자열로 변환한다.
    var clicked = date.toDateString();
    // li 요소가 클릭된 시간과 이벤트 종류를 <span> 요소를 사용하여 추가한다.  
    $(this).append('<span class="date">' + clicked + ' ' + e.type + '</span>');
  });

});