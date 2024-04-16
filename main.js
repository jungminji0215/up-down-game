// 1. 랜덤번호 지정
let randomNumber = 0;

// html 에 있는 요소를 선택해서 가져올 수 있다.
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");

// 가져온 html 요소에 이벤트를 더해준다.
// addEventListener(이벤트 이름, 이벤트 발생시 실행 함수)
// play 라는 함수를 매개변수로 넘김(함수도 매개변수로 넘길 수 있다.)
playButton.addEventListener("click", play);

function pickRandomNum() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log("랜덤 숫자 : ", randomNumber);
}

// 유저가 번호를 입력 & go 버튼을 클릭
function play() {
  // 유저가 입력한 값
  let userValue = userInput.value;
  console.log("유저가 입력한 번호 : ", userValue);

  if (userValue < randomNumber) {
    console.log(
      "유저가 입력한 ",
      userValue,
      "는 랜덤 숫자 ",
      randomNumber,
      " 보다 작아요."
    );
  } else if (userValue > randomNumber) {
    console.log(
      "유저가 입력한 ",
      userValue,
      "는 랜덤 숫자 ",
      randomNumber,
      " 보다 커요."
    );
  } else {
    console.log(
      "유저가 입력한 ",
      userValue,
      "는 랜덤 숫자 ",
      randomNumber,
      " 랑 같아요."
    );
  }
}

pickRandomNum();

// 3. 랜덤번호를 맞추면 : 맞췄습니다.

// 4. 랜덤번호 < 유저번호 : Down

// 5. 랜덤번호 > 유저번호 : Up

// reset 버큰 클릭하면 게임 리셋

// 5번의 기회를 다 쓰면 게임 종료(버튼 disable)

// 숫자의 범위가 넘어가면 경고 메세지(기회 깍지 않는다)

// 이미 입력한 숫자를 다시 입력하면 경고 메세지(기회 깍지 않는다)
