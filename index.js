const buttons = document.querySelectorAll("button");

const resultEl = document.getElementById("result");

const userscoreEl = document.getElementById("userscore");

const computerscoreEl = document.getElementById("computerscore");

let userscore = 0;
let computerscore = 0;

buttons.forEach((button) => {
    button.addEventListener("click",()=>{
        const result = playround(button.id,computerplay());
        resultEl.textContent=result;
    })
});

function computerplay(){
    const choices = ["rock","paper","scissors"];
    const randomchoice = Math.floor(Math.random()*choices.length);
    return choices[randomchoice];
}

function playround(playerchoice,computerchoice){
        if(playerchoice === computerchoice){
            return "it's tie"
        }
        else if(
            playerchoice === "rock" && computerchoice === "scissors" ||
            playerchoice ==="paper" && computerchoice === "rock" ||
            playerchoice ==="scissors" && computerchoice ==="paper"
        ){
            userscore++;
            userscoreEl.textContent=userscore;
            return "You win "+playerchoice+" beats "+computerchoice+"!!";
        }
        else{
            computerscore++;
            computerscoreEl.textContent=computerscore;
            return "You loss "+computerchoice+" beats "+playerchoice+".";
        }

}