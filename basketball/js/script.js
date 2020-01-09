var computer = {
    score: 0,
    percent2: 0.5,
    percent3: 0.33
}

var user = {
    score: 0,
    percent2: 0.5,
    percent3: 0.33
}

var game = {
    isComputerTurn: true,
    shotsLeft: 15
}

function showText(s) {
    var $textElem = $("#text");

    $('#text').fadeOut(400, function () {
        $textElem.html(s);
        $('#text').fadeIn(100);
    });
}

function updateComputerScore(score) {
    computer.score += score;
    var $comScoreElem = $("#computer-score");
    // $comScoreElem.html(computer.score);
    $comScoreElem.animateNumber({
        number: computer.score
    });
}

function updateUserScore(score) {
    user.score += score;
    var $userScoreElem = $("#user-score");
    // $userScoreElem.html(user.score);
    $userScoreElem.animateNumber({
        number: user.score
    });
}

function disableComputerButtons(flag) {
    // var computerButtons = document.getElementsByClassName('btn-computer');
    // var $computerButtons = $('.btn-computer');

    // for (var i = 0; i < $computerButtons.length; i++) {
    //     $computerButtons[i].disabled = flag;
    // }
    $('.btn-computer').prop('disabled',flag);
}

function disableUserButtons(flag) {
    // var userButtons = getElementsByClassName('btn-user');
    // var $userButtons = $('.btn-user');
    
    // for (var i = 0; i < $userButtons.length; i++) {
    //     $userButtons[i].disabled = flag;
    // }
    $('.btn-user').prop('disabled',flag);
}

function onComputerShoot(shootType) {
    if (!game.isComputerTurn)        // 컴퓨터의 차례가 아니라면 슛 로직을 실행하지 않고 함수에서 리턴
        return;

    // var textElem = document.getElementById("text");
    // var $comScoreElem = $("#computer-score");
    
    var shootType = Math.random() < 0.5 ? 2: 3; // 0.5 이하일 때 2점(참), 이상일 때 3점(거짓)
    
    if (shootType === 2) {
        if (Math.random() < computer['percent' + shootType]) {
            // 2점슛 1/2 확률로 성공
            showText("컴퓨터 " +  shootType + "점슛 성공ㅎ");

            updateComputerScore(shootType);

        } else {
            showText("컴퓨터 " + shootType + "점슛 실패ㅋㅋㅋ");
        }

    } else {
        if (Math.random() < computer['percent' + shootType]) {
            // 3점슛 1/3 확률로 성공
            showText("컴퓨터 " +  shootType + "점슛 성공ㅎ");
            
            updateComputerScore(shootType);

        } else {
            // 실패 시
            showText("컴퓨터 " + shootType + "점슛 실패ㅋㅋㅋㅋㅋㅋㅋㅋㅋ");
        }
    }

    game.isComputerTurn = false;

    disableComputerButtons(true);
    disableUserButtons(false);
}

function onUserShoot(shootType) {
    if (game.isComputerTurn)
        return;

    // var textElem = document.getElementById("text");
    // var $userScoreElem = $("#user-score");

    if (shootType === 2) {
        if (Math.random() < user['percent' + shootType]) {
            showText(shootType + "점슛 성공~~~~~");

            updateUserScore(shootType);

        } else {
            showText(shootType + "점슛 실패ㅠ");
        }
    } else {
        if (Math.random() < user['percent' + shootType]) {
            showText(shootType + "점슛 성공~~~~!~!!~!!!");

            updateUserScore(shootType);

        } else {
            showText(shootType + "점슛 실패ㅠ");
        }
    }

    game.isComputerTurn = true;

    disableComputerButtons(false);
    disableUserButtons(true);

    game.shotsLeft--;

    var $shotsLeftElem = $('#shots-left');
    $shotsLeftElem.html(game.shotsLeft);

    if (game.shotsLeft === 0) {
        if (user.score > computer.score)
            showText("이겼당~~~~~~~!!!ㅊㅋㅊㅋ");
        else if (user.score < computer.score)
            showText("졌다ㅠ 다음 기회에 다시 도전하세용ㅠㅠ 아쉽아쉽");
        else
            showText("비겼드아아아 다시해 다시!!!");

        disableComputerButtons(true);
        disableUserButtons(true);
    }

}
$(function() {
    showText(3);

    setTimeout(function() {
        showText(2);

        setTimeout(function() {
            showText(1);

            setTimeout(function() {
                showText("컴퓨터부터 시작합니다~!")
                disableComputerButtons(false);
            }, 1000);
        }, 1000);
    }, 1000);
});
