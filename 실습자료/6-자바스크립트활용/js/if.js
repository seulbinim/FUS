var score = 75 ; // 점수 
var msg ; // 메시지     
if (score >= 50) { // 만일 점수가 50점보다 높으면 
          msg = '축하합니다.' ; 
          msg += '다음 단계를 진행합니다.' ; 
}
// id 속성 값이 answer인 요소를 찾아서 el 변수에 저장한다.
var el = document.getElementById('answer') ; 
// el 변수에 저장 된 요소에 mas 변수의 값을 텍스트로 추가한다. 
el.textContent = msg ; 
