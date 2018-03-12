var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = '좋은 아침 이네요.';
} else if (hourNow > 12) {
    greeting = '점심은 드셨나요?';
} else if (hourNow > 0) {
    greeting = '편안한 저녁 보내세요';
} else {
    greeting = '안녕하세요';
}

document.write('<h3>' + greeting + '</h3>');