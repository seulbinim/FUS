// 구구단의 5단을 변수에 저장한다. 
while (i < 10) { 
    msg += i + ' x 5 = ' + (i * 5) + '<br>' ; 
    i++ ; 
}
// msg 변수에 저장된 값을 answer id 속성 값을 가진 요소에 추가한다.
document.getElementById('answer').innerHTML = msg ;    
