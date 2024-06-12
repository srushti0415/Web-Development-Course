var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceeImg = "dice" + randomNumber1 + ".png";

var randomImgSource = "images/" + randomDiceeImg;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImgSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImgSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins !!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins !!";
} else {
  document.querySelector("h1").innerHTML = "DRAW";
}
