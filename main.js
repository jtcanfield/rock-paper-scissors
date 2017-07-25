const computer = 'paper';
let me = 'scissors';
var pick = (Math.floor(Math.random() *3 ));
console.log(pick);

if (me === "rock") {
  console.log("Computer Wins!");
} else if (me === "paper") {
 console.log("Looks like a Tie!");
} else if (me === "scissors") {
   console.log("I Win!");
}
