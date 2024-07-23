let words = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing",
];

const lvls = {
  Easy: 5,
  Normal: 4,
  Hard: 3,
};
let lvlOfGame = document.querySelector(".lvl");
let SecondsOfGame = document.querySelector(".seconds");
let StartButton = document.querySelector(".start");
let TheWorldOfRoundTypping = document.querySelector(".the-word");
let inputText = document.querySelector(".input");
let upComingWords = document.querySelector(".upcoming-words");
let TimeLeftCount = document.querySelector(".control .time span");
let ScorePlayerGot = document.querySelector(".control .score .got");
let TotalOfScore = document.querySelector(".control .score .total");
let ResultOfGameFinish = document.querySelector(".finish");
let ChoosenOfLevel = document.querySelector("#sel");
TotalOfScore.innerHTML = words.length;
inputText.onpaste = function () {
  return false;
};
ChoosenOfLevel.onclick = function () {
  lvlOfGame.innerHTML = ChoosenOfLevel.value;
  SecondsOfGame.innerHTML = lvls[`${ChoosenOfLevel.value}`];
};

StartButton.onclick = function () {
  StartButton.style.display = "none";
  WordsOfGame();
  SystemOfGame();
};

function WordsOfGame() {
  TheWorldOfRoundTypping.style.display = "block";
  TheWorldOfRoundTypping.innerHTML =
    words[parseInt(Math.random() * words.length)];
  upComingWords.innerHTML = "";
  for (let i = 0; i < words.length; i++) {
    let div = document.createElement("div");
    div.textContent = `${words[i]}`;
    upComingWords.append(div);
  }
  words.splice(words.indexOf(TheWorldOfRoundTypping.innerHTML), 1);
}

function SystemOfGame() {
  TimeLeftCount.innerHTML = lvls[ChoosenOfLevel.value];

  let count = setInterval(() => {
    TimeLeftCount.innerHTML--;
    if (TimeLeftCount.innerHTML == 0) {
      clearInterval(count);
      if (inputText.value !== "") {
        if (
          TheWorldOfRoundTypping.innerHTML ===
          inputText.value[0].toUpperCase() + inputText.value.slice(1)
        ) {
          ScorePlayerGot.innerHTML++;
          inputText.value = "";
          if (words.length > 0) {
            WordsOfGame();
            SystemOfGame();
          } else {
            let Win = document.querySelector(".finish span");
            Win.className = "good";
            Win.textContent = "Congratiulation";
            Win.style.display = "block";
            ResultOfGameFinish.append(Win);
            RepeatTheGame();
          }
        } else {
          let Lose = document.querySelector(".finish span");
          Lose.className = "bad";
          Lose.textContent = "Game Over";
          Lose.style.display = "block";
          ResultOfGameFinish.append(Lose);
          RepeatTheGame();
        }
      } else {
        let Lose = document.querySelector(".finish span");
        Lose.className = "bad";
        Lose.textContent = "Game Over";
        Lose.style.display = "block";
        ResultOfGameFinish.append(Lose);
        RepeatTheGame();
      }
    }
  }, 1000);
}

function RepeatTheGame() {
  let restart = setTimeout(() => {
    inputText.value = "";
    upComingWords.innerHTML = "";
    StartButton.style.display = "block";
    TheWorldOfRoundTypping.style.display = "none";
    ScorePlayerGot.innerHTML = 0;
    document.querySelector(".finish span").style.display = "none";
    words = [
      "Hello",
      "Programming",
      "Code",
      "Javascript",
      "Town",
      "Country",
      "Testing",
      "Youtube",
      "Linkedin",
      "Twitter",
      "Github",
      "Leetcode",
      "Internet",
      "Python",
      "Scala",
      "Destructuring",
      "Paradigm",
      "Styling",
      "Cascade",
      "Documentation",
      "Coding",
      "Funny",
      "Working",
      "Dependencies",
      "Task",
      "Runner",
      "Roles",
      "Test",
      "Rust",
      "Playing",
    ];
    clearTimeout(restart);
  }, 5000);
}
