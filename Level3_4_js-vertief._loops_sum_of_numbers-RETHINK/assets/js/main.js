

function calculate() {
    let result = 0;
    const maxNumber = Number(document.getElementById("maxNumber").value);

    const firstNumber = Number(document.getElementById("firstNumber").value);
    const secondNumber = Number(document.getElementById("secondNumber").value);

    console.log(maxNumber, firstNumber, secondNumber);

    if (maxNumber === 0) {
        document.getElementById("result").innerHTML = "Fehler bei der Eingabe, bitte wähle einen Wert > 0 als maximale Zahl!";
        return;
    } else if (firstNumber == secondNumber) {
        document.getElementById("result").innerHTML = "Fehler bei der Eingabe, bitte wähle unterschiedliche Wert als Erste und Zweite Zahl!";
        return;
    } else {
        for (let i = 0; i <= maxNumber; i++) {
            if (i % firstNumber === 0 || i % secondNumber === 0) {
                result = result + i;
            } else {
                continue;
            }
        }
    }
    document.getElementById("result").innerHTML = "Das Ergebnis lautet " + result;
}