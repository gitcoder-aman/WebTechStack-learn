function playGame(userChoice) {
  let choices = ["rock", "paper", "scissors"];

  let computerChoice = choices[Math.floor(Math.random() * 3)];

  console.log("User Choice: " + userChoice);
  console.log("Computer Choice: " + computerChoice);

  if (userChoice == computerChoice) {
    console.log("Result:Draw");
  } else if (
    (userChoice == "rock" && computerChoice == "scissors") ||
    (userChoice == "paper" && computerChoice == "rock") ||
    (userChoice == "scissors" && computerChoice == "paper")
  ) {
    console.log("Result :You win:");
  } else {
    console.log("Result: Computer wins!");
  }
}

let runAgain = true;
while (runAgain) {
  let a = prompt("Enter any one [rock,paper,scissors]");

  alert("you have entered: " + a);

  playGame(a);

  runAgain = confirm("Do you want again play");
}
