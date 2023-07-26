var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".dice .img1").setAttribute("src",randomImage1);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".dice .img2").setAttribute("src",randomImage2);

var h1=document.querySelector(".container h1");

if(randomNumber1>randomNumber2){
    h1.innerHTML = "Player 1 Wins";
}
else if(randomNumber1<randomNumber2){
    h1.innerHTML = "Player 2 Wins"
}
else{
    h1.innerHTML = "Draw";
}