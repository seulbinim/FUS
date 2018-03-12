var pass = 50 ;     // 합격 가능 점수
var score = 75 ;     // 현재 점수
var msg ;            // 메시지

// 점수를 토대로 메시지를 선택한다.    
if (score >= 50) {  // 만일 점수가 50점보다 높으면
    msg = '축하합니다. 합격입니다.' ;          
    }else{
        msg = '다시 한번...' ; 
    }

// id 속성 값이 answer인 요소를 찾아서 el 변수에 저장한다.
var el = document.getElementById('answer') ; 
// el 변수에 저장 된 요소에 mas 변수의 값을 텍스트로 추가한다. 
el.textContent = msg ; 