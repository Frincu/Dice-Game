var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomImageScource1 = "images/" + randomDiceImage1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageScource2 = "images/" + randomDiceImage2;

document.querySelector(".img1").setAttribute("src",randomImageScource1);
document.querySelector(".img2").setAttribute("src",randomImageScource2);


if(randomNumber1 > randomNumber2 )
{
  document.querySelector("h1").innerHTML="🧝🏻‍♀️Player1 Wins!";
}
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML="🧙🏾Player2 Wins!";
}
else
{
  document.querySelector("h1").innerHTML="👏🏼DRAW!";
}
