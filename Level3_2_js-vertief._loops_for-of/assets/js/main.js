let numArr = [5, 22, 15, 100, 55];
let result = [];

function calculate() {
    for (let num of numArr) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                result.push(`${num} lässt sich durch ${i} teilen! Das Ergebnis ist ${num / i}`);
            } else {
                continue;
            }
        }

    }
    console.log(result);
    document.getElementById("result").innerHTML = "<li>" + result.join("</li><li>") + "</li>";
}

calculate();
