var comScore = 0;
var userScore = 0;
var isComputerTurn = true;
var shotsLeft = 15;

function showText(s) {
    var textElem = document.getElementById("text");
    textElem.innerHTML = s;
}

function updateComputerScore(score) {
    comScore += score;
    var comScoreElem = document.getElementById("computer-score");
    comScoreElem.innerHTML = comScore;
}

function updateUserScore(score) {
    userScore += score;
    var userScoreElem = document.getElementById("user-score");
    userScoreElem.innerHTML = userScore;
}

function disableComputerButtons(flag) {
    var computerButtons = document.getElementsByClassName('btn-computer');

    for (var i = 0; i < computerButtons.length; i++) {
        computerButtons[i].disabled = flag;
    }
}

function disableUserButtons(flag) {
    var userButtons = document.getElementsByClassName('btn-user');
    
    for (var i = 0; i < userButtons.length; i++) {
        userButtons[i].disabled = flag;
    }
}

function onComputerShoot() {
    if (!isComputerTurn)        // 컴퓨터의 차례가 아니라면 슛 로직을 실행하지 않고 함수에서 리턴
        return;

    // var textElem = document.getElementById("text");
    var comScoreElem = document.getElementById("computer-score");
    
    var shootType = Math.random() < 0.5 ? 2: 3; // 0.5 이하일 때 2점(참), 이상일 때 3점(거짓)
    
    if (shootType === 2) {
        if (Math.random() < 0.5) {
            // 2점슛 1/2 확률로 성공
            showText("컴퓨터 2점슛 성공ㅎ");

            updateComputerScore(2);

        } else {
            showText("컴퓨터 2점슛 실패ㅋㅋㅋ");
        }

    } else {
        if (Math.random() < 0.33) {
            // 3점슛 1/3 확률로 성공
            showText("컴퓨터 3점슛 성공ㅎ");
            
            updateComputerScore(3);

        } else {
            // 실패 시
            showText("컴퓨터 3점슛 실패ㅋㅋㅋㅋㅋㅋㅋㅋ");
        }
    }

    isComputerTurn = false;

    disableComputerButtons(true);
    disableUserButtons(false);
}

function onUserShoot(shootType) {
    if (isComputerTurn)
        return;

    // var textElem = document.getElementById("text");
    var userScoreElem = document.getElementById("user-score");

    if (shootType === 2) {
        if (Math.random() < 0.5) {
            showText("2점슛 성공~~~~~");

            updateUserScore(2);

        } else {
            showText("2점슛 실패ㅠ");
        }
    } else {
        if (Math.random() < 0.33) {
            showText("3점슛 성공~~~~!~!!~!!!");

            updateUserScore(3);

        } else {
            showText("3점슛 실패ㅠ");
        }
    }

    isComputerTurn = true;

    disableComputerButtons(false);
    disableUserButtons(true);

    shotsLeft--;

    var shotsLeftElem = document.getElementById('shots-left');
    shotsLeftElem.innerHTML = shotsLeft;

    if (shotsLeft === 0) {
        if (userScore > comScore)
            showText("이겼당~~~~~~~!!!ㅊㅋㅊㅋ");
        else if (userScore < comScore)
            showText("졌다ㅠ 다음 기회에 다시 도전하세용ㅠㅠ 아쉽아쉽");
        else
            showText("비겼드아아아 다시해 다시!!!");

        disableComputerButtons(true);
        disableUserButtons(true);
    }

}