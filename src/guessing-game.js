class GuessingGame {
    constructor() {
        this.max;
        this.min;
        this.guessNumb;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.guessNumb = Math.round((this.max - this.min) / 2) + this.min;
        return this.guessNumb;
    }

    lower() {
        this.max = this.guessNumb;
    }

    greater() {
        this.min = this.guessNumb;
    }
}

module.exports = GuessingGame;
