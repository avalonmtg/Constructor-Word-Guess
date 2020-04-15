var Word = require("./word.js");

var inquirer = require("inquirer");

//words to choose
var flowers = ["daisy", "sunflower", "pansy", "sweet pea", "dahlia", "rose", "tulip", "gardenias", "lilies", "orchids", "carnations", "peonies"];

var randomIndex = Math.floor(Math.random() * flowers.length);
var randomFlower = flowers[randomIndex];


//select a word at random and uses the word contructor to store it
function flowerGuess() {
    var This = this;

    this.start = function () {
        this.guessesLeft = 10;
        this.currentWord = new Word(randomFlower)
        console.log("\n" + this.currentWord + "\n")
        this.guessLetter()

    }

    this.guessLetter = function () {
        this.getLetter().then(function () {
            if (This.guessesLeft < 1) {
                console.log("no more guesses" + This.currentWord.getAnswer())
                This.start()

            }

            else if (This.currentWord.correctGuess()) {
                console.log("You guessed the flower")
                This.guessesLeft = 10
                This.start()

            }

            else {
                This.guessLetter()
            }
        })
    }

    this.getLetter = function () {
        inquirer.prompt([
            {
                type: "input",
                name: "guess",
                message: "Guess a letter to find the flower!"
            }
        ])
            .then(function(userGuess) {
console.log("test");
                var correctGuess = This.currentWord.guessedLetter(userGuess.guess)
                if (correctGuess === true) {
                    console.log("Correct Letter!")
                }
                else {
                    This.guessesLeft--
                    console.log("\nIncorrect Guess\n")
                    console.log(This.guessesLeft + "Amount of guesses left\n")

                }

            })

    }
    }

module.exports = flowerGuess;





//mpt the user to each guess and counts users remaining guesses