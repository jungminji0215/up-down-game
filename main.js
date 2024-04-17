// 랜덤번호
let randomNumber = 0;

// 시도 횟수
let chances = 5;
let gameOver = false;

// 유저 입력 히스토리
let history = [];

// html 에 있는 요소를 선택해서 가져올 수 있다.
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chanceArea = document.getElementById("chance-area");

// 가져온 html 요소에 이벤트를 더해준다.
// addEventListener(이벤트 이름, 이벤트 발생시 실행 함수)
// play 라는 함수를 매개변수로 넘김(함수도 매개변수로 넘길 수 있다.)
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function pickRandomNum() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log("랜덤 숫자 : ", randomNumber);
}

// 유저가 번호를 입력 & go 버튼을 클릭
function play() {
  // 유저가 입력한 값
  let userValue = userInput.value;

  // 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다 & 기회를 깎지 않는다.
  if (userValue > 100 || userValue < 1) {
    resultArea.textContent = "1~100 사이의 숫자를 입력하세요.";
    return;
  }
  // 하스토리 체크
  if (history.includes(userValue)) {
    resultArea.textContent =
      "이미 입력했던 숫자입니다. 다른 숫자를 입력하세요!";
    return;
  }

  chances--;
  chanceArea.textContent = `남은 기회 : ${chances}번`;

  if (userValue < randomNumber) {
    resultArea.textContent = "Up!! 더 큰 수를 입력해보세요!";
  } else if (userValue > randomNumber) {
    resultArea.textContent = "Down!! 더 작은 수를 입력해보세요!";
  } else {
    resultArea.textContent = "훌륭해요! 정답이예요!";
    playButton.disabled = true;
  }

  // 유저의 입력 히스토리 저장
  history.push(userValue);

  if (chances < 1) {
    resultArea.textContent = "기회를 다 사용했어요 풉";
    playButton.disabled = true;
    gameOver = true;
  }
}

function reset() {
  // 결과 노출 영역
  resultArea.textContent = "결과가 나옵니다";

  // 램덤 값 새로 생성
  pickRandomNum();

  // user input 지우기
  userInput.value = "";

  // 기회 영역
  chanceArea.textContent = "남은 기회 : 5번";

  playButton.disabled = false;

  chances = 5;

  history.length = 0;
}

pickRandomNum();

// 숫자의 범위가 넘어가면 경고 메세지(기회 깍지 않는다)

// 이미 입력한 숫자를 다시 입력하면 경고 메세지(기회 깍지 않는다)
