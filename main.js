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
  let computer = "";
  let me = "";
$(".RockButton").click(function() {
  startgame("rock");
});
$(".PaperButton").click(function() {
  startgame("paper");
});
$(".ScissorsButton").click(function() {
  startgame("scissors");
});
function startgame(player){
function countInArray(array, what) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === what) {
            count++;
        }
    }
    return count;
}
/*
.catch(err => {
})
*/
let total = list.length
if (list.length >= 10){
  list.shift(0);
  //CHECK OUT .SHIFT(), .UPSHIFT(), .POP(), .SLICE()
}
let listr = countInArray(list, "rock");
let listp = countInArray(list, "paper");
let lists = countInArray(list, "scissors");
let forcepaper = (listr/total);
let forcescissors = (listp/total);
let forcesrock = (lists/total);
function activatepick(){
if (forcepaper >0.8){
  let pick = (Math.random() * ((0.67-0.34)+0) + 0.34);
  return pick
} else if (forcescissors >0.8){
  let pick = (Math.random() * ((1-0.67)+0) + 0.67);
  return pick
} else if (forcesrock >0.8){
  let pick = (Math.random() * ((0.34-0)+0) + 0);
  return pick
} else {
  let pick = Math.random();
  return pick
}}
let computeranswer = document.getElementById("computeranswer");
//CANNOT USE === ON NUMBERS
/* If you wanted to use text:
let playeru = document.getElementById("playertext").value;
let player = playeru.toLowerCase();*/
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
        youpicked.innerHTML= "Not sure how you did this or how you got here but you should probably tell me about this";
}
function makecomputergo(){
let picked = activatepick();
  if (picked <=0.34) {
    computer = "rock";
    computeranswer.innerHTML= "rock";
    document.getElementById("computerpicture").style.backgroundImage = "url('img/rock.png')";
    computerrock = computerrock + 1;
  } else if (picked <=0.67) {
  	computer = "paper";
  	computeranswer.innerHTML= "paper";
    document.getElementById("computerpicture").style.backgroundImage = "url('img/paper.png')";
    computerpaper = computerpaper + 1;
  } else {
    computer = "scissors";
  	computeranswer.innerHTML= "scissors";
    document.getElementById("computerpicture").style.backgroundImage = "url('img/scissors.png')";
    computerscissors = computerscissors + 1;
  }
}
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
};
});
