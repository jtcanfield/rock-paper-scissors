$(".thehtmlclass").hide();
$(".thehtmlclass").fadeIn(1000);
$(document).ready(function(){
  let turns = 0;
  let win = 0;
  let loss = 0;
  let tie = 0;
  let playerrock = 0;
  let playerpaper = 0;
  let playerscissors = 0;
  let computer1rock = 0;
  let computer1paper = 0;
  let computer1scissors = 0;
  let list = [];
  let computer = "";
  let computer2 = "";
  let me = "";
  // $("input[type='radio']").change(function() {   });
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
if (list.length >= 10){ list.shift(0); }
function countInArray(array, what) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === what) {
            count++;
        }
    }
    return count;
}
let listr = countInArray(list, "rock");
let listp = countInArray(list, "paper");
let lists = countInArray(list, "scissors");
let total = list.length
let forcepaper = (listr/total);
let forcescissors = (listp/total);
let forcesrock = (lists/total);
/* You don't actually need these to do inner.HTML
let computeranswer = document.getElementById("computeranswer");
document.getElementById("youpicked");*/
//CANNOT USE === ON NUMBERS
/* If you wanted to use text:
let playeru = document.getElementById("playertext").value;
let player = playeru.toLowerCase();*/
switch (player) {
    case "rock":
			  me = "rock";
        youpicked.innerHTML= "Rock";
        document.getElementById("playerpicture").style.backgroundImage = "url('img/rock.png')";
        list.push("rock");
        turns = turns + Number($('input[name=number_of_computers]:checked').val());
        playerrock = playerrock + 1;
        startComputers(Number($('input[name=number_of_computers]:checked').val()));
        // makecomputer1go();
        break;
    case "paper":
			  me = "paper";
        youpicked.innerHTML= "Paper";
        document.getElementById("playerpicture").style.backgroundImage = "url('img/paper.png')";
        list.push("paper");
        turns = turns + Number($('input[name=number_of_computers]:checked').val());
        playerpaper = playerpaper + 1;
        startComputers(Number($('input[name=number_of_computers]:checked').val()));
        // makecomputer1go();
        break;
    case "scissors":
			  me = "scissors";
        youpicked.innerHTML= "Scissors";
        document.getElementById("playerpicture").style.backgroundImage = "url('img/scissors.png')";
        list.push("scissors");
        turns = turns + Number($('input[name=number_of_computers]:checked').val());
        playerscissors = playerscissors + 1;
        startComputers(Number($('input[name=number_of_computers]:checked').val()));
        // makecomputer1go();
        break;
    default:
        youpicked.innerHTML= "Not sure how you did this or how you got here but good job! BUT you didn't win.";
}
plays.innerHTML= turns;
wins.innerHTML= win;
winspercentage.innerHTML= Math.round(win/turns*100);
losses.innerHTML= loss;
lossespercentage.innerHTML= Math.round(loss/turns*100);
ties.innerHTML= tie;
tiespercentage.innerHTML= Math.round(tie/turns*100);
procks.innerHTML= playerrock;
prockspercentage.innerHTML= Math.round(playerrock/turns*100);
ppapers.innerHTML= playerpaper;
ppaperspercentage.innerHTML= Math.round(playerpaper/turns*100);
pscissors.innerHTML= playerscissors;
pscissorspercentage.innerHTML= Math.round(playerscissors/turns*100);
function startComputers(computerPlayers){
  // makecomputer1go();
  for (let i = 0; i < Number($('input[name=number_of_computers]:checked').val()); i++){
    console.log("Begin Log");
    console.log("computerPlayers = " + computerPlayers);
    console.log("i = " + i);
    makecomputergo(i + 1);
function activatepick(){
  if (forcepaper >0.7){
    let pick = (Math.random() * ((0.67-0.34)+0) + 0.34);
    return pick
  } else if (forcescissors >0.7){
    let pick = (Math.random() * ((1-0.67)+0) + 0.67);
    return pick
  } else if (forcesrock >0.7){
    let pick = (Math.random() * ((0.34-0)+0) + 0);
    return pick
  } else {
    let pick = Math.random();
    return pick
  }
}
function makecomputergo(v){
  // console.log("makecomputer1go(v) = " + v);
  let picked = activatepick();
  console.log("computer"+v+"picture");
    if (picked <=0.34) {
      computer = "rock";
      $("#computer"+v+"answer").html(computer);
      document.getElementById("computer"+v+"picture").style.backgroundImage = "url('img/rock.png')";
      computer1rock = computer1rock + 1;
    } else if (picked <=0.67) {
    	computer = "paper";
    	$("#computer"+v+"answer").html(computer);
      document.getElementById("computer"+v+"picture").style.backgroundImage = "url('img/paper.png')";
      computer1paper = computer1paper + 1;
    } else {
      computer = "scissors";
    	$("#computer"+v+"answer").html(computer);
      document.getElementById("computer"+v+"picture").style.backgroundImage = "url('img/scissors.png')";
      computer1scissors = computer1scissors + 1;
    }


if (player === computer){
  $("#answer"+v).html("Tie!");
  tie = tie + 1;
}
if (player == "rock" && computer == "paper" || player == "paper" && computer == "scissors" || player == "scissors" && computer == "rock") {
  $("#answer"+v).html("You Lose!");
  loss = loss + 1;
}
if (player == "rock" && computer == "scissors" || player == "paper" && computer == "rock" || player == "scissors" && computer == "paper") {
  $("#answer"+v).html("You Win!!");
  win = win + 1;
}
$("#c"+v+"rocks").html(computer1rock);
// c1rocks.innerHTML= computer1rock;
$("#c"+v+"rockspercentage").html(Math.round(computer1rock/turns*100));
// c1rockspercentage.innerHTML= Math.round(computer1rock/turns*100);
$("#c"+v+"papers").html(computer1paper);
// c1papers.innerHTML= computer1paper;
$("#c"+v+"paperspercentage").html(Math.round(computer1paper/turns*100));
// c1paperspercentage.innerHTML= Math.round(computer1paper/turns*100);
$("#c"+v+"scissors").html(computer1scissors);
// c1scissors.innerHTML= computer1scissors;
$("#c"+v+"scissorspercentage").html(Math.round(computer1scissors/turns*100));
// c1scissorspercentage.innerHTML= Math.round(computer1scissors/turns*100);
};
};
};
};
});
/* BELOW IS A SIMPLIFIED FUNCTION FOR DETERMINING WHO WINS
function rps (player, computer) {
  if (player === computer){
    return "Tie"
  }
  if (player == 'rock' && computer == 'scissors'){
    return "Player Wins"
  } else if (player == 'rock'){
    return 'Computer Wins'
  }
  if (player == 'paper' && computer == 'rock'){
    return "Player Wins"
  } else if (player == 'paper'){
    return 'Computer Wins'
  }
  if (player == 'scissors' && computer == 'paper'){
    return "Player Wins"
  } else if (player == 'scissors'){
    return 'Computer Wins'
  }
}
console.log(rps('rock', 'paper'));
console.log(rps('scissors', 'paper'));
console.log(rps('scissors', 'rock'));
console.log(rps('rock', 'rock'));
*/
