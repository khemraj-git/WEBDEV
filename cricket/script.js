console.log("hello world");

// score object

let scoreSTR = localStorage.getItem('Score'); 
let score;
resetScore(scoreSTR);  


// method
function resetScore(scoreSTR){
    score= JSON.parse(scoreSTR) || {
        win: 0,
        loss: 0,
        tie: 0,
    };
    score.displayScore= function() {
        return `won:- ${score.win} loss:- ${score.loss} tie:- ${score.tie}`;
    }; 
    Showresult();
}


// generating random choice for computer
function generateComputerChoice(){
    //this will generate random number between 0 and 3
    let randomNumber = Math.random() * 3;

    if(randomNumber > 0 && randomNumber <=1){
        return 'bat';
    } else if (randomNumber >1 && randomNumber <=2){
        return 'stump';
    }else if(randomNumber >2 && randomNumber <=3){
        return 'ball';
    }
}

// based on user input and computer choice it will show the result 
function getresult(userMove, computerMove){
    
    if(userMove==='bat'){
        if ( computerMove === 'ball'){
            score.win++;
            return 'user won';
            
        } else if (computerMove==='bat'){
            score.tie++;
            return `It's a tie`;
            
        } else if(computerMove === 'stump'){
            score.loss++;
            return `computer has won`;
            
        }

    }else if(userMove === 'ball'){
        if ( computerMove === 'ball'){
            score.tie++;
            return `It's a tie`;
        } else if (computerMove==='bat'){
            score.loss++;
            return `computer has won`;
        } else if(computerMove === 'stump'){
            score.win++;
            return `user won`;
        }

    }else if(userMove==='stump'){
        if ( computerMove === 'ball'){
            score.loss++;
            return `computer has won`;
        } else if (computerMove==='bat'){
            score.win++;
            return `user won`;
        } else if(computerMove === 'stump'){
            score.tie++;
            return `It's a tie`;
        }
    }   
}


// printing the result + score also
function Showresult(userMove,computerMove,result){
    localStorage.setItem('score',JSON.stringify(score));

    document.querySelector('#userMove').innerHTML = 
    userMove !== undefined ?`you have chosen ${userMove}` : '';

    document.querySelector('#computerMove').innerHTML = 
    computerMove !== undefined ?`computer have chosen ${computerMove}` : '';

    document.querySelector('#result').innerHTML = 
    result || '';

    document.querySelector('#score').innerHTML = `score is:- ${score.displayScore()}`;


    // alert(`You have choosen ${userMove} and computer has choosen  ${computerMove} result is:-  ${result}   ${score.displayScore()}`)
}



