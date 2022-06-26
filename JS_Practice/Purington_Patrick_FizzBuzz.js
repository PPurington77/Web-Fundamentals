//write code that will go through each number 1 - 100. For each # that is a multiple of 3 print Fizz. For each # that is a multiple of 5 print Buzz. For each # that is a mulitple of 3 and 5 prints FizzBuzz.

for (let i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz " + i);
    }
    else if(i % 3 == 0) {
        console.log("Fizz " + i);
    }
    else if(i % 5 == 0) {
        console.log("Buzz " + i);
    }
    else(console.log(i));
}

console.log("All Done");