let randomNum = Math.floor(Math.random() * 100 + 1)
// console.log(randomNum)

let button = document.getElementById('subt')

let inputNum = document.getElementById('guessField')

let guessSlot = document.querySelector('.guesses')

let remGuess = document.querySelector('.lastResult')

let lowOrHi = document.querySelector('.lowOrHi')

let startOver = document.querySelector('.resultParas')

let p = document.createElement('p')

let prevGuess = []

let numGuess = 1

let playGame = true

if (playGame) {
    button.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(inputNum.value)
        validateGuess(guess)
        document.getElementsByClassName('guesses')[0].style.visibility = "visible"
        // console.log(guess);
    }, false)
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    }
    else if (guess < 1) {
        alert("Please enter a valid number greater than 0")
    }
    else if (guess > 100) {
        alert("Please enter a valid number upto 100")
    }
    else {
        prevGuess.push(guess)
        if (numGuess === 10) {
            console.log(guess);
            displayCalculation(guess)
            displayMessage(`Your game is over. Random number was ${randomNum}`)
            endGame()
        }
        else {
            displayCalculation(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage(`You guessed it right`)
        endGame()
    }
    else if (guess < randomNum) {
        displayMessage(`You guessed a low number`)
    }
    else if (guess > randomNum) {
        displayMessage(`You guessed a high number`)
    }
}

function displayCalculation(guess) {
    inputNum.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remGuess.innerHTML = `${11 - numGuess}`

}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    inputNum.value = ''
    inputNum.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.append(p)
    playGame = false
    newGame()
}

function newGame() {
    const newButton = document.getElementById('newGame')
    newButton.addEventListener('click', function (e) {
        randomNum = Math.floor(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remGuess.innerHTML = `${11 - numGuess}`
        inputNum.remove('disabled')
        startOver.removeChild(p)
        playGame = true
    }, false)
}



