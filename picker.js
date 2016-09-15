var colorGuessDisplay = document.querySelector("#guessTheColor");
var newGameBtn = document.querySelector("#newGame");
var gameOutcome = document.querySelector("#outCome");
var btnEasy = document.querySelector("#btnEasy");
var btnHard = document.querySelector("#btnHard");
var divEasy = document.querySelector("#divEasy");
var colors = document.getElementsByClassName("color");
var titleBackground = document.querySelector(".title");
var gameOver = false;
var colorLength;
var randomNumber;

// Fucntion to choose random RGB value
function randomColor() {
	var newColor;
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	newColor = "rgb(" + red + ", " + green + ", " + blue + ")";
	return newColor;
}

//Function to determine Easy or Hard mode and color squares with randomColor()
function gameType() {
	//Deciding if game is in Easy or Hard mode
	if(divEasy.style.display === "none") {
		colorLength = colors.length / 2;
	} else {
		colorLength = colors.length;
	}
	//Random number to be used when selecting the square for the correct color
	randomNumber = Math.floor(Math.random() * colorLength);
	//Loop through squares in colorLength and set color using the randomColor()
	for(var i = 0; i < colorLength; i++) {
		colors[i].style.backgroundColor = randomColor();
	}
}

// Function to set the game 
function setGame() {
	//Asigns a color to correctColor
	var correctColor = randomColor();
	//Displays correct color to HTML page
	colorGuessDisplay.textContent = correctColor;
	//Run gameType function
	gameType();
	//Sets correct color to one square via randonNumber from gameType()
	colors[randomNumber].style.backgroundColor = correctColor;
	gameOutcome.textContent = "Take a Guess";
	gameOutcome.style.color = "black";
	newGameBtn.textContent = "NEW COLORS";
	titleBackground.style.backgroundColor = "#089FD1";
	gameOver = false;
}

//function to turn all squares to same color as correctColor
function allBtnsColored(correctColor) {
	for(var i = 0; i < colors.length; i++) {
		colors[i].style.backgroundColor = correctColor;
	}
}

//Events to check which div was clicked and if it matched the correct color displayed
for(var i = 0; i < colors.length; i++) {
	colors[i].addEventListener("click", function() {
		if(!gameOver) {
			if(this.style.backgroundColor === colorGuessDisplay.textContent) {
				gameOutcome.textContent = "Well Done!";
				gameOutcome.style.color = "#5cb85c";
				newGameBtn.textContent = "PLAY AGAIN?";
				titleBackground.style.backgroundColor = colorGuessDisplay.textContent;
				allBtnsColored(colorGuessDisplay.textContent);
				gameOver = true;
			} else {
				gameOutcome.textContent = "Try Again";
				gameOutcome.style.color = "#d9534f";
				this.style.backgroundColor = "#303638";
			}
		}
	});
}

//New Game button event
newGameBtn.addEventListener("click", function() {
	setGame();
});

//Hard button event
btnHard.addEventListener("click", function() {
	divEasy.style.display = "block";
	setGame();
});

//Easy button event
btnEasy.addEventListener("click", function() {
	divEasy.style.display = "none";
	setGame();
});

//Loads game as soon as browser is opened or refreshed
window.onload = setGame();



