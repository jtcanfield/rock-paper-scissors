const computer = 'paper';
let me = "";
let pick = (Math.floor(Math.random() *2 ));
console.log(pick);

//CANNOT USE === ON NUMBERS

if (pick == "0") {
  me = "rock";
} else if (pick == "1") {
	me = "paper";
} else if (pick == "2") {
  me = "scissors";
}

console.log(me);

if (me === "rock") {
  console.log("Computer Wins!");
} else if (me === "paper") {
 console.log("Looks like a Tie!");
} else if (me === "scissors") {
   console.log("I Win!");
}
