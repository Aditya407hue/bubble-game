var timer = 60;
var score = 0;
var hitrn = 0;

//Event bubbling - jispe pr click karoge us particular event raise hoga , aur event listener na milne pr event element ke  parent pr listener dhundega  aur waha bhi nhi milne pr element ke parent ke parent pr listener dhundega

function makeBubble() {
  var clutter = "";
  for (var i = 0; i <= 167; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}
function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitrn;
}

function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<h3>Game over <br> Your Score was  ${score} <br> Refersh the Page to play again </h3> `;
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clickedNum = Number(dets.target.textContent);
  if (clickedNum === hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

getNewHit();
runTimer();
makeBubble();
