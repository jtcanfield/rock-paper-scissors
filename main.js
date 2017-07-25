
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
var answer = document.getElementById("answer");
if (player == "rock" && computer == "scissors") {
  answer.innerHTML = "You Win";
}



});
});
$(document).ready(main);
