//DEFINE VARIABLES

var mainContainer = document.getElementById('main-container');
var boxes = document.getElementsByClassName('boxes'); //boxes.length = 9
var restartButton = document.getElementById('restart');
var printLetter = 'O';
var counter = 0;
var winner = document.getElementById('winning-message');
winner.innerHTML = "Player X's Turn";
var gameIsOver = false;

//START THE GAME

for (let i = 0; i < boxes.length; i++) {
    
    boxes[i].addEventListener('click', function() {
        
        if(counter === 9 || gameIsOver != false) {
            alert('The game is over. Click the restart button to play again.');
            return;
        }
        else if(boxes[i].innerText != '' && counter < 9) {
            alert('This box is full, try another.');
            return;
        }
        
        winner.innerHTML = `Player ${printLetter}'s Turn`;
        var clickedSpace = document.createElement('p');
        
        if(printLetter === 'X') {
            printLetter = 'O';
        }
        else {
            printLetter = 'X';
        }
        
        clickedSpace.innerText = printLetter;
        boxes[i].appendChild(clickedSpace);
        counter++;
        console.log(counter);
        checkForWinner();
        

    });
    
}

//CLEAR THE GAMEBOARD
restartButton.addEventListener('click', function() {
    for(let j = 0; j < 9; j++) {
        boxes[j].innerText = '';
    }
    counter = 0;
    printLetter = 'O';
    winner.innerHTML = "Player X's Turn";
    gameIsOver = false; 

});


//CHECK FOR WINNER 

function checkForWinner() {
    
    //CHECK FOR TIE
    if(counter == 9) {
        document.getElementById('winning-message').innerHTML = "Cat's Game!";  
    }

if(counter > 4) {
    
    //CONDITION 1
    if(boxes[0].innerHTML == boxes[1].innerHTML && boxes[0].innerHTML == boxes[2].innerHTML
        && boxes[0].innerHTML != "") {
        winner.innerHTML = `${printLetter} wins!`;
        gameIsOver = true;
    } 
    //CONDITION 2
    else if(boxes[0].innerHTML == boxes[3].innerHTML && boxes[3].innerHTML == boxes[6].innerHTML 
            && boxes[0].innerHTML != "") {
        winner.innerHTML = `${printLetter} wins!`;
        gameIsOver = true;
    }
    //CONDITION 3
    else if(boxes[0].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[8].innerHTML 
            && boxes[0].innerHTML != "") {
        winner.innerHTML = `${printLetter} wins!`;
        gameIsOver = true;
    }
    //CONDITION 4 
    else if(boxes[1].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[7].innerHTML 
            && boxes[1].innerHTML != "") {
        winner.innerHTML = `${printLetter} wins!`;
        gameIsOver = true;
    }
    //CONDITION 5
    else if(boxes[2].innerHTML == boxes[5].innerHTML && boxes[5].innerHTML == boxes[8].innerHTML 
            && boxes[2].innerHTML != "") {
        winner.innerHTML = `${printLetter} wins!`;
        gameIsOver = true;
    }
    //CONDITION 6
    else if(boxes[3].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[5].innerHTML 
            && boxes[3].innerHTML != "") {
        winner.innerHTML = `${printLetter} wins!`;
        gameIsOver = true;
    }
    //CONDITION 7
    else if(boxes[6].innerHTML == boxes[7].innerHTML && boxes[7].innerHTML == boxes[8].innerHTML 
            && boxes[6].innerHTML != "") {
        winner.innerHTML = `${printLetter} wins!`;
        gameIsOver = true;
}
    //CONDITION 8
    else if(boxes[2].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[6].innerHTML 
            && boxes[2].innerHTML != "") {
        winner.innerHTML = `${printLetter} wins!`;
        gameIsOver = true;
}

}

}









