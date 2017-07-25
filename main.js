$(document).ready(function(){
  let turns = 0;
  let win = 0;
  let loss = 0;
  let tie = 0;
  let playerrock = 0;
  let playerpaper = 0;
  let playerscissors = 0;
  let computerrock = 0;
  let computerpaper = 0;
  let computerscissors = 0;
  let list = [];
$(".Playgame").click(function() {
//console.log(list);
function countInArray(array, what) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === what) {
            count++;
        }
    }
    return count;
}
let total = list.length
//IMPORTANT = MAKE LIST HOLD NO MORE THAN 20 PARTS OF THE ARRAY AT ONE TIME
let listr = countInArray(list, "rock");
let listp = countInArray(list, "paper");
let lists = countInArray(list, "scissors");
let forcepaper = (listr/total);
let forcescissors = (listp/total);
let forcesrock = (lists/total);
console.log(forcepaper);
let pick = Math.random();
if (forcepaper >0.9){
  let pick = (Math.random() * ((0.34-0)+0) + 0);
} else if (forcescissors >0.9){
  let pick = (Math.random() * ((0.67-0.34)+0) + 0.34);
} else if (forcesrock >0.9){
  let pick = (Math.random() * ((1-0.67)+0) + 0.67);
}

/*
let pickr = (Math.random() * ((0.34-0)+0) + 0);
let pickp = (Math.random() * ((0.67-0.34)+0) + 0.34);
let picks = (Math.random() * ((1-0.67)+0) + 0.67);
*/

//CANNOT USE === ON NUMBERS
let me = "";
let computer = "";
let computeranswer = document.getElementById("computeranswer");
let playeru = document.getElementById("player").value;
let player = playeru.toLowerCase(); //Forces playeru to be lowercase
document.getElementById("youpicked");
switch (player) {
    case "rock":
			  me = "rock";
        youpicked.innerHTML= "rock";
        turns = turns + 1;
        document.getElementById("playerpicture").style.backgroundImage = "url('img/rock.png')";
        makecomputergo();
        list.push("rock");
        playerrock = playerrock + 1;
        break;
    case "paper":
			  me = "paper";
        youpicked.innerHTML= "paper";
        turns = turns + 1;
        document.getElementById("playerpicture").style.backgroundImage = "url('img/paper.png')";
        makecomputergo();
        list.push("paper");
        playerpaper = playerpaper + 1;
        break;
    case "scissors":
			  me = "scissors";
        youpicked.innerHTML= "scissors";
        turns = turns + 1;
        document.getElementById("playerpicture").style.backgroundImage = "url('img/scissors.png')";
        makecomputergo();
        list.push("scissors");
        playerscissors = playerscissors + 1;
        break;
    default:
        youpicked.innerHTML= "Please type either rock, paper, or scissors into the box!";
}
function makecomputergo(){
if (pick <=0.34) {
  computer = "rock";
  computeranswer.innerHTML= "rock";
  document.getElementById("computerpicture").style.backgroundImage = "url('img/rock.png')";
  computerrock = computerrock + 1;
} else if (pick <=0.67) {
	computer = "paper";
	computeranswer.innerHTML= "paper";
  document.getElementById("computerpicture").style.backgroundImage = "url('img/paper.png')";
  computerpaper = computerpaper + 1;
} else {
  computer = "scissors";
	computeranswer.innerHTML= "scissors";
  document.getElementById("computerpicture").style.backgroundImage = "url('img/scissors.png')";
  computerscissors = computerscissors + 1;
}}

//if (listr = 5){
  computer = "paper";
//}

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
document.getElementById("procks");
procks.innerHTML= playerrock;
document.getElementById("ppapers");
ppapers.innerHTML= playerpaper;
document.getElementById("pscissors");
pscissors.innerHTML= playerscissors;
document.getElementById("crocks");
crocks.innerHTML= computerrock;
document.getElementById("cpapers");
cpapers.innerHTML= computerpaper;
document.getElementById("cscissors");
cscissors.innerHTML= computerscissors;
});
});
//$(document).ready(main);
