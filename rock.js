let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");


const genCompchoice = () => {
      let options = ["rock","paper","scissors"];
      const ranIdx = Math.floor(Math.random()*3);
      return options[ranIdx];
}

const drawGame = () => {
    //console.log("Game draw");
    msg.innerText = "Game Draw. Play Again";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    //console.log("User choice = ",userChoice);
// generate computer random choice
   const compChoice = genCompchoice();
   //console.log("Computer choice = ",compChoice);

   // fight -->> logic of game
   if(userChoice === compChoice){ // draw game
      drawGame();
   } else {
      let userWin = true;
      if(userChoice === "rock"){  // compChoice -->> scissors, paper
      userWin = compChoice === "paper" ? false : true ;
    } else if(userChoice === "paper"){
       userChoice = compChoice === "scissors" ?false : true
    }  else {
       userWin =  compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
   }
}
choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
           playGame(userChoice);
    })
})