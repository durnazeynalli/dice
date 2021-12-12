let randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

let img1 = document.querySelector("img.img1");

function firstPlayersDice() {

  if (randomNumber1 === 1) {
    img1.setAttribute("src", "images/dice1.png");
  } else if (randomNumber1 === 2) {
    img1.setAttribute("src", "images/dice2.png");
  } else if (randomNumber1 === 3) {
    img1.setAttribute("src", "images/dice3.png");
  } else if (randomNumber1 === 4) {
    img1.setAttribute("src", "images/dice4.png");
  } else if (randomNumber1 === 5) {
    img1.setAttribute("src", "images/dice5.png");
  } else {
    img1.getAttribute("src");
  }

}

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

let img2 = document.querySelector("img.img2");

function secondtPlayersDice() {

  if (randomNumber2 === 1) {
    img2.setAttribute("src", "images/dice1.png");
  } else if (randomNumber2 === 2) {
    img2.setAttribute("src", "images/dice2.png");
  } else if (randomNumber2 === 3) {
    img2.setAttribute("src", "images/dice3.png");
  } else if (randomNumber2 === 4) {
    img2.setAttribute("src", "images/dice4.png");
  } else if (randomNumber2 === 5) {
    img2.setAttribute("src", "images/dice5.png");
  } else {
    img2.getAttribute("src");
  }

}

let announcer = document.querySelector("h1");

function announceWinner() {
  if (randomNumber1 > randomNumber2) {
    announcer.textContent = "🚩 Player 1 wins!";
  } else if (randomNumber1 < randomNumber2) {
    announcer.textContent = "Player 2 wins! 🚩";
  } else {
    announcer.textContent = "Tiering";
  }
}

firstPlayersDice();
secondtPlayersDice();
announceWinner();
