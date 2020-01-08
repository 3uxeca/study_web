var SCISSORS = "가위";
var ROCK = "바위";
var PAPER = "보";

// 사용자의 패
var userInput = prompt("가위, 바위, 보!");

if (userInput !== SCISSORS && userInput !== ROCK && userInput !== PAPER) {
    alert("가위, 바위, 보 중 하나를 입력해야 합니다!")
} else {

// 컴퓨터의 패
var comInput;

// Math.random()은 0부터 1 사이의 임의의 값을 리턴함
var rnd = Math.random();

if (rnd < 0.33) {           // 0에서 0.33 사이의 값, 즉 1/3 확률
    comInput = SCISSORS;
} else if (rnd < 0.66) {
    comInput = ROCK;
} else {
    comInput = PAPER;
};

console.log('컴퓨터의 패: ', comInput);

// 게임의 승패 정하기 if문
// if (userInput === SCISSORS) {
//     // 컴퓨터 패 비교
//     if (comInput === SCISSORS) {
//         // 비긴 경우
//         alert("컴퓨터 : " + comInput + " - 컴퓨터와 비겼습니닷");
//     } else if (comInput === ROCK) {
//         // 사용자가 진 경우
//         alert("컴퓨터 : " + comInput + " - 컴퓨터에게 졌습니당..힝,");
//     } else {
//         // 사용자가 이긴 경우
//         alert("컴퓨터 : " + comInput + " - 컴퓨터에게 이겨버렸습니다아아아아ㅊㅋㅊㅋ");
//     }
// } else if (userInput === ROCK) {
//     // 컴퓨터 패 비교
//     if (comInput === ROCK) {
//         // 비긴 경우
//         alert("컴퓨터 : " + comInput + " - 컴퓨터와 비겼습니닷");
//     } else if (comInput === PAPER) {
//         // 사용자가 진 경우
//         alert("컴퓨터 : " + comInput + " - 컴퓨터에게 졌습니당..힝,");
//     } else {
//         // 사용자가 이긴 경우
//         alert("컴퓨터 : " + comInput + " - 컴퓨터에게 이겨버렸습니다아아아아ㅊㅋㅊㅋ");
//     }
// } else {
//     // 컴퓨터 패 비교
//     if (comInput === PAPER) {
//         // 비긴 경우
//         alert("컴퓨터 : " + comInput + " - 컴퓨터와 비겼습니닷");
//     } else if (comInput === SCISSORS) {
//         // 사용자가 진 경우
//         alert("컴퓨터 : " + comInput + " - 컴퓨터에게 졌습니당..힝,");
//     } else {
//         // 사용자가 이긴 경우
//         alert("컴퓨터 : " + comInput + " - 컴퓨터에게 이겨버렸습니다아아아아ㅊㅋㅊㅋ");
//     }
// }

// 게임의 승패 정하기 switch문
switch (userInput) {
    case SCISSORS:
        switch (comInput) {
            case SCISSORS:
                alert("컴퓨터 : " + comInput + " - 컴퓨터와 비겼습니닷 '-'");
            break;
            case ROCK:
                alert("컴퓨터 : " + comInput + " - 컴퓨터에게 졌습니당..힝,ㅠ");
            break;
            default:
                alert("컴퓨터 : " + comInput + " - 컴퓨터에게 이겨버렸습니다아아아아ㅊㅋㅊㅋ");
            break;
        }
        break;
    case ROCK:
        switch (comInput) {
            case ROCK:
                alert("컴퓨터 : " + comInput + " - 컴퓨터와 비겼습니닷 '-'");
            break;
            case PAPER:
                alert("컴퓨터 : " + comInput + " - 컴퓨터에게 졌습니당..힝,ㅠ");
            break;
            default:
                alert("컴퓨터 : " + comInput + " - 컴퓨터에게 이겨버렸습니다아아아아ㅊㅋㅊㅋ");
            break;
        }
        break;     
    default:
        switch (comInput) {
            case PAPER:
                alert("컴퓨터 : " + comInput + " - 컴퓨터와 비겼습니닷 '-'");
            break;
            case SCISSORS:
                alert("컴퓨터 : " + comInput + " - 컴퓨터에게 졌습니당..힝,ㅠ");
            break;
            default:
                alert("컴퓨터 : " + comInput + " - 컴퓨터에게 이겨버렸습니다아아아아ㅊㅋㅊㅋ");
            break;
        }
        break;        
}

} // else

