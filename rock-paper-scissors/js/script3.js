var SCISSORS = "가위";
var ROCK = "바위";
var PAPER = "보";
var COM_MSG = "컴퓨터 : ";
var DRAW_MSG = " - 컴퓨터와 비겼습니닷 '-'";
var LOSE_MSG = " - 컴퓨터에게 졌습니당..힝,ㅠ";
var WIN_MSG = " - 컴퓨터에게 이겨버렸습니다아아아아ㅊㅋㅊㅋ";

function onButtonClick(userInput) {
    var comInput;
    var rnd = Math.random();

    if (rnd < 0.33) {           // 0에서 0.33 사이의 값, 즉 1/3 확률
        comInput = SCISSORS;
    } else if (rnd < 0.66) {
        comInput = ROCK;
    } else {
        comInput = PAPER;
    }
    // 가위
    if (userInput === SCISSORS) {
        if (comInput === SCISSORS) {
            alert(COM_MSG + comInput + DRAW_MSG);
        } else if (comInput === ROCK) {
            alert(COM_MSG + comInput + LOSE_MSG);
        } else {
            alert(COM_MSG + comInput + WIN_MSG);
        }
    // 바위
    } else if (userInput === ROCK) {
        if (comInput === SCISSORS) {
            alert(COM_MSG + comInput + WIN_MSG);
        } else if (comInput === ROCK) {
            alert(COM_MSG + comInput + DRAW_MSG);
        } else {
            alert(COM_MSG + comInput + LOSE_MSG);
        }
    // 보
    } else {
        if (comInput === SCISSORS) {
            alert(COM_MSG + comInput + LOSE_MSG);
        } else if (comInput === ROCK) {
            alert(COM_MSG + comInput + WIN_MSG);
        } else {
            alert(COM_MSG + comInput + DRAW_MSG);
        }  
    }

}