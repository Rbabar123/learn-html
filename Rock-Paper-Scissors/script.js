//gf

let score = JSON.parse(localStorage.getItem('score')) ||
 {

    ties: 0,
    loses: 0,
    wins: 0
    
};






function playMove(playerMove) {

let computerMove = clickComputerMove();
let result = '';

if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
        result = 'Tie';
    } else if (computerMove === 'Paper'){
        result = 'You lose';
    } else if (computerMove === 'Scissors') {
        result = 'You win';
    }
} else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
        result = 'You win';
    } else if (computerMove === 'Paper'){
        result = 'Tie';
    }  else if (computerMove === 'Scissors') {
        result = 'You lose';
    }
} else if (playerMove === 'Scissors') {
    if (computerMove === 'Rock'){
        result = 'You lose';
    } else if (computerMove === 'Paper') {
        result = 'You win';
    } else if (computerMove === 'Scissors'){
        result = 'Tie'
    }
}

if (result === 'Tie') {
    score.ties +=1;
} else if (result === 'You lose'){
    score.loses +=1;
} else if (result === 'You win'){
    score.wins += 1;
}
    localStorage.setItem('score', JSON.stringify(score));


    let restart = document.querySelector('.header').innerText = `You picked ${playerMove}. The computer picked ${computerMove}. ${result}
     Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}`;
    return restart;
}




function clickComputerMove() {

    let randomNumer = Math.random();
    let computerMove = '';



    if (randomNumer >= 0 && randomNumer < 1/3){
        computerMove = 'Rock';
    } else if (randomNumer >= 1/3 && randomNumer < 2/3){
        computerMove = 'Paper';
    } else if(randomNumer >=2/3 & randomNumer <1){
        computerMove = 'Scissors';
    }
     return computerMove;


}