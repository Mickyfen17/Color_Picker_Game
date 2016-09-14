var colorGuessDisplay = document.querySelector("#guessTheColor");
var newGameBtn = document.querySelector("#newGame");
var gameOutcome = document.querySelector("#outCome");
var btnEasy = document.querySelector("#btnEasy");
var btnHard = document.querySelector("#btnHard");
var divEasy = document.querySelector("#divEasy");
// var divHard = document.querySelector("#divHard");
var colors = document.getElementsByClassName("color");
// var displayColors = document.getElementsByClassName("displayColors");
var titleBackground = document.querySelector(".title");
var gameOver = false;

// Fucntion to choose random RGB value
function randomColor() {
	var newColor;
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	newColor = "rgb(" + red + ", " + green + ", " + blue + ")";
	return newColor;
}

// Function to set the game 
function setGame() {
	var correctColor = randomColor();
	var colorLength;
	var randomNumber;
	colorGuessDisplay.textContent = correctColor;
	
	//Deciding if game is in Easy or Hard mode
	if(divEasy.style.display === "none") {
		colorLength = colors.length / 2;
	} else {
		colorLength = colors.length;
	}
	//Random number to be used when selecting the div for the matching color
	randomNumber = Math.floor(Math.random() * colorLength);
	//Loop through divs in color length and set color using the randomColor function
	for(var i = 0; i < colorLength; i++) {
		colors[i].style.backgroundColor = randomColor();
	}
	colors[randomNumber].style.backgroundColor = correctColor;
	gameOutcome.textContent = "Take a Guess";
	gameOutcome.style.color = "black";
	newGameBtn.textContent = "NEW COLORS";
	titleBackground.style.backgroundColor = "#089FD1";
	gameOver = false;
	console.log(correctColor);
	console.log(randomNumber);
}

function allBtnsColored(colorsList, correctColor) {
	for(var i = 0; i < colorsList.length; i++) {
		colorList[i].style.backgroundColor = correctColor;
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
				colors[0].style.backgroundColor = colorGuessDisplay.textContent;
				colors[1].style.backgroundColor = colorGuessDisplay.textContent;
				colors[2].style.backgroundColor = colorGuessDisplay.textContent;
				colors[3].style.backgroundColor = colorGuessDisplay.textContent;
				colors[4].style.backgroundColor = colorGuessDisplay.textContent;
				colors[5].style.backgroundColor = colorGuessDisplay.textContent;
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





