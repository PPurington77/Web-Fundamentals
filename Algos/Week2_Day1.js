// predict the outcome

// var floor = Math.floor(1.8);
// var ceiling = Math.ceil( Math.PI);
// var random = Math.random();

// console.log(floor); //should be 1
// console.log(ceiling); //should be 4
// console.log(random); //random number? //produces a number between 0 and 1..a decimal

//dice roller

function d6() {
    var roll = Math.ceil(Math.random() * 6);
    
    return roll;
}

// var playerRoll = d6();
// console.log("The player rolled " + playerRoll);

//consult the oracle:

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function oracle(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

console.log(oracle(lifesAnswers));