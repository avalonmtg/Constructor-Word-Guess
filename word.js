var Letter = require("./letter.js");

function Word(words) {
    this.letters = words.split("").map(function (character) {
        return new Letter(character)

    })
    Word.prototype.getAnswer = function () {
        return this.letters.map(function (character) {
            return character.getAnswer()
        })
            .join("")
    }

    Word.prototype.toString = function () {
        return this.letters.join(" ")
    }

    Word.prototype.guessedLetter = function (guess) {
        var correctLetter = false;
        this.letters.forEach(element => {
            if (element.userGuess(guess)) {
                correctLetter = true;
            }
        });
        console.log("\n" + this)
        return correctLetter
    }
    Word.prototype.correctGuess = function () {
        return this.letters.every(function (letter) {
            return letter.display
        })
    }


}
module.exports = Word;
