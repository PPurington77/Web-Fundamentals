//1. Prepare for downcount
for(var i=10; i>0; i--) {
    if(i != 2) {
        console.log(i);
    } else {
        console.log("ignition!");
    }
}

console.log("liftoff!");
//Prediction: 10,9,8,7,6,5,4,3,"ignition", 1...."liftoff"
//Guess was correct!

//2. Always Sunny
var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";
    
if(isSunny) {
    whatToBring += "sunglasses, ";
}
if(temperature < 50) {
    whatToBring += "a coat, ";
}
if(isRaining) {
    whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";
    
console.log(whatToBring);
//Prediction:"I should bring sunglasses, a coat, and a smile"
//Guess was correct!

//3. Count Positives
var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    for(let i = 0; i < numbers.length; i++) { // looks through the array
        if (numbers[i] >= 0) {    //if a number is postive ie 0 or higher add 1 to countPositives
            countPositives += 1
        }
    }
// your code here!
    
console.log("there are " + countPositives + " positive values");
//Prediction: "There are 5 positive values"
//Guess was initially wrong. Altered if statement to include numbers[i] instead of just i..correction fixed the problem.

