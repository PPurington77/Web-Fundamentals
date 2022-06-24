// //1. Learning Function
// var x = 5;
    
// function setX(newValue) {
//     x = newValue; 
// }
    
// console.log(x); //function isn't called yet so will be 5
// setX(15);
// console.log(x); //function is called and x is changed to newValue/15
// //output prediction: 15, 5..output was reversed.

// //2. Learning Return
// var x = 5;
    
// function addToX(amount) {
//     return x + amount;
//     console.log("hello there");
// }
    
// console.log(x); //will be 5 since function isn't called yet
// var result = addToX(-10); //function is called and var result is creted with the function's argument being -10.
// console.log(result); //will be -5 since 5 -10.
// console.log(x);// will be 5 since x isn't changed during function
// //output should be 5, "helo there", -5, 5... hello there won't be logged since the return is before it forcing the function to end

//3. Palindrome
function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) { //left will iterate through the array until it reached arr.lenght-1/2;
        var right = arr.length-1-left; //right is introduced to the function and - arr.length-1-var left
        if(arr[left] != arr[right]) { //if var arr[left] is not = to arr[right] it is not a palindrome
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!"; // if they are = it is a palindrome
}
    
var result1 = isPal( [1, 1, 2, 2, 1] ); //result1 accepts the return and can be used later
console.log(result1); //console.log's the return i.e. not a palindrome
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2); //console.log's the return i.e. palindrom!

