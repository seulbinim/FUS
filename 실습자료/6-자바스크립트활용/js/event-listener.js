// checkUsername 함수 선언
function checkUsername() { 
// id 속성 값이 feedback인 요소를 찾아 elMsg 변수에 저장한다.          
var elMsg = document.getElementById('feedback') ; 
// 조건문 if else 구문을 사용하여 입력된 값이 5글자 미만인지 비교한다.  
if (this.value.length < 5) {
    // 조건이 참(true)일 경우 출력한 텍스트를 elMag 변수에 할당한다.
    elMsg.textContent = '아이디는 5글자 이상이어야 합니다.' ; 
    } else {  // 조건이 거짓(false)일 경우                                       
        elMsg.textContent = '' ; // elMag 변수의 값은 비워놓는다.                         
    }
}
        
// id 속성 값이 username인 요소를 찾아 elUsername 변수에 저장한다. 
var elUsername = document.getElementById('username') ;  
// username이라는 id 속성 값을 가진 input 요소에서 포커스를 잃어버릴 때 
// checkUsername 함수를 실행한다.
elUsername.addEventListener('blur', checkUsername, false) ;