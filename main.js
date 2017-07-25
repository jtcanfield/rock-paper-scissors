const computer = 'paper';
let me = "";
let pick = (Math.floor(Math.random() *2 ));
console.log(pick);

//CANNOT USE === ON NUMBERS

if (pick == "0") {
  me = "Rock";
} else if (pick == "1") {
	me = "Paper";
} else if (pick == "2") {
  me = "Scissors";
}

if (me === "rock") {
  console.log(me + ", Computer Wins!");
} else if (me === "paper") {
 console.log(me + ", Looks like a Tie!");
} else if (me === "scissors") {
   console.log(me + ", I Win!");
}
