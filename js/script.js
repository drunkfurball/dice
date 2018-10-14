let canv = document.getElementById("canv");
//let ctx = canv.getContext("2d");
let dice = [];



function newDie(x, y) {
    let die = {
        x: x, //Math.floor(Math.random() * canv.width),
        y: y, //Math.floor(Math.random() * canv.height),
        a: Math.random() * Math.PI * 2, // radians
        drag: false,
        rotate: false,

        value: Math.floor((Math.random() * 6)) + 1, //randomly generate a side up value, 1 through 6
        rose: 0
    }

    switch (die.value) {
        case 6:
            die.char = "&#9861;";
            break;
        case 4:
            die.char = "&#9859;";
            break;
        case 2:
            die.char = "&#9857;";
            break;
        case 1:
            die.char = "&#9856;";
            break;
        case 3:
            die.char = "&#9858;";
            die.rose = 2;
            break;
        case 5:
            die.char = "&#9860;";
            die.rose = 4;
            break;

    }

    die.bottom = 7 - die.value;

    return die;
}

function rollDice() {
    let dice_cup = document.getElementById("dice_cup");
    dice_cup.innerHTML = "";
    dice = [];

    if (document,controller.num.value <= 10000) {
        let num_of_dice = document.controller.num.value;

        for (let d = 0; d < num_of_dice; d++) {
            let x = 50 * (d + 1);
            let y = 50;
            dice.push(newDie(x, y));
            //output += "<div class='die'><div>";
        }

        let row = 0;
        for (let d = 0; d < dice.length; d++) {
            row += 1;
            dice_cup.innerHTML += dice[d].char;
            if (row >= 24) {
                dice_cup.innerHTML += "<br/>";
                row = 0;
            }
        }
        let stats = [0, 0, 0, 0, 0, 0];
        for (let d = 0; d < dice.length; d++) {
            stats[dice[d].value - 1] += 1; 
        }
        console.log(stats);
    }
    else {
        alert("Too many dice. Please enter a number between 1 and 10,000");
    }

}

function checkPetals() {
    let petals = 0;

    for (let d = 0; d < dice.length; d++) {
        petals += dice[d].rose;
    }

    if (document.controller.guess.value == petals) {
        alert("Correct");
    }
    else {
        alert("Incorrect. Try Again.");
    }
}

