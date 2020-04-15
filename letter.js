function Letter(character) {
    this.character = character;

    this.display = false;

this.toString = function() {
    if (this.display === true) {
       return this.character
    }
    return "_";
}

this.getAnswer = function() {
    return this.character
}

this.userGuess = function(guess) {
    if (guess ===this.character) {
    this.display = true;
    return true;
}
return false;
}
}

module.exports = Letter;