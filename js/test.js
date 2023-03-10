let array = ["katt", "hund", "råtta", "fågel", "mask", "orm"];
let arraays = array[Math.floor(Math.random() * array.length)];
let win = 'wooohoo GRATTIS ,du vann!!!';
let lose = 'fel ord du förlora!';
let guesses = 2;
let letter = '';

console.log(arraays
);

for (let i = 0; i < guesses; i++) {
    letter = prompt("Guess the word:");
    if (letter === arraays
    ) {
        alert(win);
        break;
    } else {
        alert(" Du har" + (guesses - i - 1) + " Gissningar kvar.");
    }
}

if (letter !== arraays
) {
    while (guesses > 0) {

        letter = prompt(" grattis du har chansen att gissa ordet igen");
        if (letter === arraays
        ) {
            alert(win);
            break;
        } else {
            guesses--;
            alert(" Du har " + guesses + " Gissningar kvar.");
        }
    }

    if (guesses === 0) {
        alert("Spelet är slut!! Du förlora, ordet var" + arraays
            + ".");
    }
}



