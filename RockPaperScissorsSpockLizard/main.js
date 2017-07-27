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
  let playerspock = 0;
  let playerlizard =0;
  let computerrock = 0;
  let computerpaper = 0;
  let computerscissors = 0;
  let computerspock = 0;
  let computerlizard = 0;
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
$(".SpockButton").click(function() {
  startgame("spock");
});
$(".LizardButton").click(function() {
  startgame("lizard");
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
let listsc = countInArray(list, "scissors");
let lists = countInArray(list, "spock");
let listl = countInArray(list, "lizard");
let total = list.length
let forcepaper = (listr/total);
let forcescissors = (listp/total);
let forcerock = (listl/total);
let forcelizard = (lists/total);
let forcespock = (listsc/total);
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
        turns = turns + 1;
        document.getElementById("playerpicture").style.backgroundImage = "url('img/rock.png')";
        makecomputergo();
        list.push("rock");
        playerrock = playerrock + 1;
        break;
    case "paper":
			  me = "paper";
        youpicked.innerHTML= "Paper";
        turns = turns + 1;
        document.getElementById("playerpicture").style.backgroundImage = "url('img/paper.png')";
        makecomputergo();
        list.push("paper");
        playerpaper = playerpaper + 1;
        break;
    case "scissors":
			  me = "scissors";
        youpicked.innerHTML= "Scissors";
        turns = turns + 1;
        document.getElementById("playerpicture").style.backgroundImage = "url('img/scissors.png')";
        makecomputergo();
        list.push("scissors");
        playerscissors = playerscissors + 1;
        break;
    case "spock":
			  me = "spock";
        youpicked.innerHTML= "Spock";
        turns = turns + 1;
        document.getElementById("playerpicture").style.backgroundImage = "url('img/spock.jpg')";
        makecomputergo();
        list.push("spock");
        playerspock = playerspock + 1;
        break;
    case "lizard":
        me = "lizard";
        youpicked.innerHTML= "Lizard";
        turns = turns + 1;
        document.getElementById("playerpicture").style.backgroundImage = "url('img/lizard.jpg')";
        makecomputergo();
        list.push("lizard");
        playerlizard = playerlizard + 1;
        break;
    default:
        youpicked.innerHTML= "Not sure how you did this or how you got here but good job! BUT you didn't win.";
}
function makecomputergo(){
  let picked = activatepick();
    if (picked <=0.2) {
      computer = "rock";
      computeranswer.innerHTML= "Rock";
      document.getElementById("computerpicture").style.backgroundImage = "url('img/rock.png')";
      computerrock = computerrock + 1;
    } else if (picked <=0.4) {
    	computer = "paper";
    	computeranswer.innerHTML= "Paper";
      document.getElementById("computerpicture").style.backgroundImage = "url('img/paper.png')";
      computerpaper = computerpaper + 1;
    } else if (picked <=0.6) {
      computer = "scissors";
    	computeranswer.innerHTML= "Scissors";
      document.getElementById("computerpicture").style.backgroundImage = "url('img/scissors.png')";
      computerscissors = computerscissors + 1;
    } else if (picked <=0.8) {
      computer = "spock";
    	computeranswer.innerHTML= "Spock";
      document.getElementById("computerpicture").style.backgroundImage = "url('img/spock.jpg')";
      computerspock = computerspock + 1;
    } else {
      computer = "lizard";
    	computeranswer.innerHTML= "Lizard";
      document.getElementById("computerpicture").style.backgroundImage = "url('img/scissors.png')";
      computerlizard = computerlizard + 1;
    }
  }
function activatepick(){
  if (forcerock >0.7){
    let pick = (Math.random() * ((0.2-0)+0) + 0);
    return pick
  } else if (forcepaper >0.7){
    let pick = (Math.random() * ((0.4-0.2)+0) + 0.2);
    return pick
  } else if (forcescissors >0.7){
    let pick = (Math.random() * ((0.6-0.4)+0) + 0.4);
    return pick
  } else if (forcespock >0.7){
    let pick = (Math.random() * ((0.8-0.6)+0) + 0.6);
    return pick
  } else if (forcelizard >0.7){
    let pick = (Math.random() * ((1-0.8)+0) + 0.8);
    return pick
  } else {
    let pick = Math.random();
    return pick
  }
}
if (player === computer){
  answer.innerHTML = "Tie!";
  tie = tie + 1;
}
if (player == "rock" && computer == "paper" ||
    player == "rock" && computer == "spock" ||
    player == "paper" && computer == "scissors" ||
    player == "paper" && computer == "lizard" ||
    player == "scissors" && computer == "rock" ||
    player == "scissors" && computer == "spock" ||
    player == "spock" && computer == "paper" ||
    player == "spock" && computer == "lizard" ||
    player == "lizard" && computer == "rock" ||
    player == "lizard" && computer == "scissors") {
  answer.innerHTML = "You Lose!";
  loss = loss + 1;
}
if (computer == "rock" && player == "paper" ||
    computer == "rock" && player == "spock" ||
    computer == "paper" && player == "scissors" ||
    computer == "paper" && player == "lizard" ||
    computer == "scissors" && player == "rock" ||
    computer == "scissors" && player == "spock" ||
    computer == "spock" && player == "paper" ||
    computer == "spock" && player == "lizard" ||
    computer == "lizard" && player == "rock" ||
    computer == "lizard" && player == "scissors") {
  answer.innerHTML = "You Win!";
  win = win + 1;
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
pspock.innerHTML= playerspock;
pspockpercentage.innerHTML= Math.round(playerspock/turns*100);
plizard.innerHTML= playerlizard;
plizardpercentage.innerHTML= Math.round(playerlizard/turns*100);
crocks.innerHTML= computerrock;
crockspercentage.innerHTML= Math.round(computerrock/turns*100);
cpapers.innerHTML= computerpaper;
cpaperspercentage.innerHTML= Math.round(computerpaper/turns*100);
cscissors.innerHTML= computerscissors;
cscissorspercentage.innerHTML= Math.round(computerscissors/turns*100);
cspock.innerHTML= computerspock;
cspockpercentage.innerHTML= Math.round(computerspock/turns*100);
clizard.innerHTML= computerlizard;
clizardpercentage.innerHTML= Math.round(computerlizard/turns*100);
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
