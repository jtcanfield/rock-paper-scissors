$(document).ready(function(){
  var turns = 0;
  var win = 0;
  var loss = 0;
  var tie = 0;
$(".Playgame").click(function() {
let me = "";
let computer = "";
//CANNOT USE === ON NUMBERS
let pick = (Math.floor(Math.random() *3 ));
var computeranswer = document.getElementById("computeranswer");
var playeru = document.getElementById("player").value;
var player = playeru.toLowerCase(); //Forces playeru to be lowercase
document.getElementById("youpicked");
switch (player) {
    case "rock":
			  me = "rock";
        youpicked.innerHTML= "rock";
        turns = turns + 1;
        document.getElementById("playerpicture").style.backgroundImage = "url('img/rock.png')";
        makecomputergo();
        break;
    case "paper":
			  me = "paper";
        youpicked.innerHTML= "paper";
        turns = turns + 1;
        document.getElementById("playerpicture").style.backgroundImage = "url('img/paper.png')";
        makecomputergo();
        break;
    case "scissors":
			  me = "scissors";
        youpicked.innerHTML= "scissors";
        turns = turns + 1;
        document.getElementById("playerpicture").style.backgroundImage = "url('img/scissors.png')";
        makecomputergo();
        break;
    default:
        youpicked.innerHTML= "Please type either rock, paper, or scissors into the box!";
}
function makecomputergo(){
if (pick == "0") {
  computer = "rock";
  computeranswer.innerHTML= "rock";
  document.getElementById("computerpicture").style.backgroundImage = "url('img/rock.png')";
} else if (pick == "1") {
	computer = "paper";
	computeranswer.innerHTML= "paper";
  document.getElementById("computerpicture").style.backgroundImage = "url('img/paper.png')";
} else if (pick == "2") {
  computer = "scissors";
	computeranswer.innerHTML= "scissors";
  document.getElementById("computerpicture").style.backgroundImage = "url('img/scissors.png')";
}}
document.getElementById("answer");
if (player == "rock" && computer == "rock") {
  answer.innerHTML = "Tie!";
  tie = tie + 1;
}
if (player == "rock" && computer == "paper") {
  answer.innerHTML = "You Lose!";
  loss = loss + 1;
}
if (player == "rock" && computer == "scissors") {
  answer.innerHTML = "You Win!";
  win = win + 1;
}
if (player == "paper" && computer == "rock") {
  answer.innerHTML = "You Win!";
  win = win + 1;
}
if (player == "paper" && computer == "paper") {
  answer.innerHTML = "Tie!";
  tie = tie + 1;
}
if (player == "paper" && computer == "scissors") {
  answer.innerHTML = "You Lose!";
  loss = loss + 1;
}
if (player == "scissors" && computer == "rock") {
  answer.innerHTML = "You Lose!";
  loss = loss + 1;
}
if (player == "scissors" && computer == "paper") {
  answer.innerHTML = "You Win!";
  win = win + 1;
}
if (player == "scissors" && computer == "scissors") {
  answer.innerHTML = "Tie!";
  tie = tie + 1;
}
document.getElementById("plays");
plays.innerHTML= turns;
document.getElementById("wins");
wins.innerHTML= win;
document.getElementById("losses");
losses.innerHTML= loss;
document.getElementById("ties");
ties.innerHTML= tie;
});
});
$(document).ready(main);
