$(document).ready( function(){

alert("Welcome to Hangman!");

//set variables
var word = prompt("Player one, what word would you like to use?");
var winCounter = 0;
var loseCounter = 0;
var time = 60;
var point = 0;

// Retrieve
if (localStorage.getItem("score") !== null){
point = localStorage.getItem("score");
}

//Seperating word into underscores at bottom of page
for (var i = 0; i < word.length; i++){
 $("main").append("<section></section>");
}

alert("Allright Player two, your turn to guess. Go ahead, pick a letter.");

//Timer
var intervalID = setInterval(myTimer, 1000);
function myTimer() {
  time -= 1;
  $("#timer").html("TIME<br>" + time);
  if (time === 0){
    alert("YOU LOSE! Now you are dead.");
    clearInterval(intervalID);
  };
};

//tryAgain button
$('#tryAgain').on("click", reloadBrowser);
function reloadBrowser(){
  location.reload();
}

//resetScore button
$('#reset').on("click", resetScore);
function resetScore(){
  point = 0;
  localStorage.setItem("score", point)
  $('#scoreboard').html("SCORE<br>    " + point);
}

//scoreboard
$('#scoreboard').html("SCORE<br>    " + point);

document.onkeypress = function(e) {
  if (word.includes(e.key)){
  alert("Nice! you got a letter.");
  for (var i = 0; i < word.length; i++){
  if (word[i] === e.key){
    $("section").eq(i).html(word[i]);
    winCounter++;
    if (winCounter === word.length){
      alert("Congratulations you son of a bitch. You got the word right.");
      point++;
      $('#scoreboard').html("SCORE<br>      " + point);
      // Store
      localStorage.setItem("score", point);
      }
  }
  }
} else {
  loseCounter++;
  alert("Sorry! You got a letter wrong.")
  $('#lettersWrong').append(e.key + " ")
  var c=document.getElementById("myCanvas");
  var ctx=c.getContext("2d");
  if (loseCounter === 1){
  ctx.beginPath();
  ctx.arc(150,15,15,0,2*Math.PI);
  ctx.stroke();
  }
  if (loseCounter === 2){
  ctx.beginPath();
  ctx.moveTo(150, 30);
  ctx.lineTo(150, 85);
  ctx.lineWidth = 5;
  ctx.stroke();
  }
  if (loseCounter === 3){
  ctx.beginPath();
  ctx.moveTo(150, 50);
  ctx.lineTo(100, 20);
  ctx.lineWidth = 3;
  ctx.stroke();
  }
  if (loseCounter === 4){
  ctx.beginPath();
  ctx.moveTo(150, 50);
  ctx.lineTo(200, 20);
  ctx.stroke();
  }
  if (loseCounter === 5){
  ctx.beginPath();
  ctx.moveTo(150, 84)
  ctx.lineTo(100, 115)
  ctx.stroke();
  }
  if (loseCounter === 6){
    ctx.beginPath();
    ctx.moveTo(150, 84)
    ctx.lineTo(200, 115)
    ctx.stroke()
    clearInterval(intervalID);
    alert("you lose. The word was " + word)
  }
  }
}
})
