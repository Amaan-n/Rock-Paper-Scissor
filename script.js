let userScore = 0;
let compScore = 0;
const msg = document.querySelector('#message');
const userPara = document.querySelector('#user-score');
const compPara = document.querySelector('#comp-score');

const choices = document.querySelectorAll(".choice");
const getCompChoices = ()=>{
    const option = ['rock','paper','scissors'];
    const idxRandom = Math.floor(Math.random() * 3);
    // console.log(option[idxRandom]);
    return option[idxRandom];
}

const Draw = ()=>{
    console.log("Game is Draw");
    msg.innerHTML = "Game Draw";
    msg.style.backgroundColor = "#081b31";
}
const showWinner= ()=>{
    if(userWin){
        console.log("You won");
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
        userScore++;
        userPara.innerText = userScore;
    }else{
        console.log("Computer won");
        msg.innerText = "You loss";
        msg.style.backgroundColor = "red";
        compScore++;
        compPara.innerText = compScore;
    }
}
const playGame = (userChoice)=>{
    console.log(`User Choice is ${userChoice}`);
    const compChoice = getCompChoices()
    console.log(`Computer Choice is ${compChoice}`);
    if(userChoice == compChoice){
     Draw(); 
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor , paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock ,scissor
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //rock ,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute("id")
        //console.log(userChoice);
        playGame(userChoice);
    })

});
