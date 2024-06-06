// rock, paper, scissors

let choices = ["rock", "paper", "scissors"];
let playerRatings = parseInt(localStorage.getItem("playerRatings")) || 0;
let computerRatings = parseInt(localStorage.getItem("computerRatings")) || 0;
let button = document.querySelectorAll("button");


function getResult(player, computer) {
    if (player === computer) {
        return "Extreme Equal!";
    } else if ((player === "rock" && computer === "scissors") || (player === "paper" && computer === "rock") || (player === "scissors" && computer === "paper")) {
        return "Player wins!";
    } else {
        return "Computer wins!";
    }
}

button.forEach(button => {
    button.addEventListener("click", () => {
        let playerChoice = button.id;
        let computerChoice = choices[Math.floor(Math.random() * choices.length)];
        let result = getResult(playerChoice, computerChoice);

        if (result === "Player wins!") {
            playerRatings += 2;
            localStorage.setItem("playerRatings", playerRatings);
        } else if (result === "Computer wins!") {
            computerRatings += 2;
            localStorage.setItem("computerRatings", computerRatings);
        }
        document.getElementById("result").innerText = 
        `Player: ${playerChoice}

        Computer: ${computerChoice}

        Results: ${result}`;
        document.getElementById("point").innerText = 
        `Player Ratings: ${playerRatings}
        Computer Ratings: ${computerRatings}`;
    });

    

});


// rock, paper, scissors


document.getElementById("ratings-firstgame").innerText = playerRatings



// guess a number




let randomNumber = Math.floor(Math.random() * 100) + 1;
let RatingsGuess = document.getElementById("Ratings-guess");
let form = document.querySelector('.form-guess');
let roham = 0;
let RatingsGuessNumber = parseInt(localStorage.getItem("RatingsGuessNumber")) || 50;


localStorage.setItem('RatingsGuessNumber', RatingsGuessNumber);



let input = document.querySelector('.input-guess');
let submitButton = document.getElementById('submitButton');


let resultElement = document.createElement('div');
resultElement.classList.add('result-guess');

form.appendChild(resultElement);


submitButton.addEventListener('click', (e)=> {
    e.preventDefault();

  roham++;
document.getElementById("Opportunity").innerText = `Your odds are 10 and you've already used ${roham} chances.`;



    let userGuess = parseInt(input.value);
    

    if (userGuess === randomNumber) {
        resultElement.textContent = `Congratulations! You guessed the correct number!`;
        resultElement.style.color = '#28a745';
    } else if (userGuess > randomNumber) {
        resultElement.textContent = `Try a lower number.`;
        resultElement.style.color = '#dc3545';
    } else {
        resultElement.textContent = `Try a higher number.`;
        resultElement.style.color = '#dc3545';
    }
    

    input.value = '';

if (roham <= 10) {
    RatingsGuessNumber -= 5;
    document.getElementById("Ratings-guess").innerText = RatingsGuessNumber
}

else if (roham >= 10) {
    RatingsGuessNumber -=5;
    document.getElementById("Ratings-guess").innerText = RatingsGuessNumber
    RatingsGuess.style.color = "#f00"
    
}


});




// guess a number

