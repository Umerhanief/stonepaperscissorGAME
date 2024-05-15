let userscore =0;
let computerscore =0;


const choices = document.querySelectorAll(".choice");

//acces message container
const msg = document.querySelector("#msg");
//acess score board
const Uscore = document.querySelector("#user-score");
const Cscore = document.querySelector("#computer-score");





const genComputerChoice = () => {

    const option = ["rock","paper","scissors"];
    const ranidx=Math.floor(Math.random() * 3);
    return option[ranidx];
    // rock paper scicorr
};

const drawgame = () =>{
    
    msg.innerText ="draw play again";
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin,userchoice,comChoice) =>{
    if(userWin){
        userscore++;
        Uscore.innerText = userscore;
        msg.innerText =`you win!  your ${userchoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        computerscore++
        Cscore.innerText = computerscore;
        
        msg.innerText =`you lose! ${comChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}






const playgame = (userchoice) =>{
   
    //generate computer choice
    const comChoice = genComputerChoice();
    

    if(userchoice === comChoice){
        drawgame();
    }
    else{
        let  userWin =true;
        if(userchoice === "rock")
            {
                //scissor, paper
                userWin=comChoice === "paper" ? false : true;
            } else if(userchoice === "paper") {
                //rock, scissors
                userWin=comChoice === "scissors" ? false : true;
            }else{
                //rock, paper
                userWin=comChoice === "rock" ? false : true;
            }
            showWinner(userWin,userchoice,comChoice);
    }

};




choices.forEach((choice) =>{  
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id");
        
        playgame(userchoice);

    });
});


