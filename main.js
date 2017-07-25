const computer = 'paper';
let me = "scissors";
let pick = (Math.floor(Math.random() *2 ));
console.log(pick);

if (pick === "0") {
  let me = "rock";
} else if (pick === "1") {
	let me = "paper";
} else if (pick === "2") {
  let me = "scissors";
}


console.log(me);


if (me === "rock") {
  console.log("Computer Wins!");
} else if (me === "paper") {
 console.log("Looks like a Tie!");
} else if (me === "scissors") {
   console.log("I Win!");
}
