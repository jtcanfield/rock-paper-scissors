
$(document).ready(function(){
$(".submitorder").click(function() {
let me = "";
let computer = "";
let pick = (Math.floor(Math.random() *3 ));
console.log(pick);
//CANNOT USE === ON NUMBERS
var computeranswer = document.getElementById("computeranswer");
if (pick == "0") {
  computer = "rock";
  computeranswer.innerHTML= "rock";
} else if (pick == "1") {
	computer = "paper";
	computeranswer.innerHTML= "paper";
} else if (pick == "2") {
  computer = "scissors";
	computeranswer.innerHTML= "scissors";
}
var player = document.getElementById("player").value;
document.getElementById("youpicked");
switch (player) {
    case "rock":
			  me = "rock";
        youpicked.innerHTML= "rock";
        break;
    case "paper":
			  me = "paper";
        youpicked.innerHTML= "paper";
        break;
    case "scissors":
			  me = "scissors";
        youpicked.innerHTML= "scissors";
        break;
    default:
        youpicked.innerHTML= "Please enter a correct type";
}
document.getElementById("answer");
if (player == "rock" && computer == "rock") {
  answer.innerHTML = "Tie!";
}
if (player == "rock" && computer == "paper") {
  answer.innerHTML = "You Lose!";
}
if (player == "rock" && computer == "scissors") {
  answer.innerHTML = "You Win!";
}
if (player == "paper" && computer == "rock") {
  answer.innerHTML = "You Win!";
}
if (player == "paper" && computer == "paper") {
  answer.innerHTML = "Tie!";
}
if (player == "paper" && computer == "scissors") {
  answer.innerHTML = "You Lose!";
}
if (player == "scissors" && computer == "rock") {
  answer.innerHTML = "You Lose!";
}
if (player == "scissors" && computer == "paper") {
  answer.innerHTML = "You Win!";
}
if (player == "scissors" && computer == "scissors") {
  answer.innerHTML = "Tie!";
}
});
});
$(document).ready(main);
