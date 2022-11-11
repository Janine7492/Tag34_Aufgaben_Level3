

// let loopArray = [];

function loopMe() {
    const eingabe = Number(document.getElementById("eingabe").value);
    console.log("input: " + eingabe);

    loopArray = [];
    document.getElementById("output").innerHTML = "";

    if (eingabe === 0) {
        document.getElementById("output").innerHTML = "ERROR";
        document.getElementById("output").style.color = "red";
        return;
    }
    else if (eingabe % 2 === 0) {
        for (let i = 1; i <= eingabe; i++) {
            loopArray.push("o");
        }

        document.getElementById("output").innerHTML = `L${loopArray.join("")}p`;
        document.getElementById("output").style.color = "green";
    } else {
        for (let i = 1; i <= eingabe; i++) {
            if (i % 2 === 0) {
                loopArray.push("0");
            } else {
                loopArray.push("o");
            }
        }

        document.getElementById("output").innerHTML = `L${loopArray.join("")}p`;
        document.getElementById("output").style.color = "green";
    }
}