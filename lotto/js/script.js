document.write("<h1>Who will win the <strong>LOTTO</strong> this week?</h1>")
document.write("<div class='ballBox'>");

var list = [];

for (var i = 1; i <= 45; i++) {
    list.push(i);
}

var result = [];

for (var i = 0; i < 6; i++) {
    var index = Math.floor(Math.random() * list.length);
    // console.log(list.length); // 45
    // console.log(index); // 1 ~ 45 사이의 랜덤한 숫자

    // 랜덤으로 선택한 인덱스의 값
    var num = list[index];

    // 배열에서 인덱스의 값 제거 (선택된 숫자 배열에서 빼기)
    list.splice(index, 1);

    result.push(num);

    console.log(num, list); // 선택된 숫자, 선택된 숫자가 빠진 배열
}
// console.log("결과", result); // 선택된 6개의 숫자

// 선택된 6개의 숫자 오름차순으로 정렬하기
result.sort(function(a,b) {
    return a - b;
});

// 결과 시각화
for (var i = 0; i < 6; i++) {
    document.write("<span class='ball'>" + result[i] + "</span>");
}

document.write("</div>");

document.write("<button onclick='location.reload()'>* Reset *</button>")
