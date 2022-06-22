//Data Types
//1. Number(integers and decimals)
//2. Strings "this is a string"
//3. Booleans ie. True or False

//camelCase
//snake_case
//PascalCase
//above can be used for variable naming

//Data Structures: things where we can put 1 or many types of data types inside of(grouop data types into 1 things)
//1. Array [] items inside the array are called elements and are tracked by "indexes" i.e. position 0,1....

//Problem 1. predict the output..
var a = 25;
a = a - 13;
console.log(a/2);
    
a = "hello";
console.log(a + " hello");

//output should be 6 && hello hello...guess was correct

//Problem 2. predict the loop
for(var i=0; i<10; i++) {
    console.log(i);
    i = i + 3; 
}
    
console.log("outside of the loop " + i);

//output should be 0,4,8 && outside the loop 12...guess was correct

//Problem 3. Predict what the code does
function getTotal(arrayOfNumbers) {
    
    var sum = arrayOfNumbers[0];
      
    for(var i=0; i<arrayOfNumbers.length; i++) {
      sum += arrayOfNumbers[i];
      console.log("the current sum is: " + sum); 
    }
      
    console.log("the total is: " + sum);
      
  }
      
  getTotal([1, 3, 5]);
//will be: The current sum is 2, The current sum is 5, The current sum is 10...The total is 10
//bonus:the total is 10 because the sum is intially arrayOfNumber[0] which = 1