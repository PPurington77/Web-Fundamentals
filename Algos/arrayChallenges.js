//1. always hungry

function alwaysHungry(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == "food") {
            console.log("yummy " + i);
            return;
        }
    }
    console.log("I'm Hungry");
}

// alwaysHungry([1, 2, "food", "eat", 3]);
// alwaysHungry([1, 2, 3, "hello"]);

//2. high pass filter

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > 5) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result);

//3. better than average

function betterThanAverage(arr) {
    var sum = 0
    var count = 0
    for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        var avg = sum / arr.length;
    }
    console.log(sum); 
    console.log(avg);
    for(let j = 0; j < arr.length; j++) {
        if (arr[j] > avg) {
            count++;
        }
    }
    return count;
}

// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result);

//4. reverse array 

function reverse(arr) {
    arr.reverse();//built in js function
    return arr;
}

// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result);

//5. fibonacci array

function fibonacciArray(n) {
    var fibArr = [0, 1];
    for(let i = 0; i < n-2; i++) {
        //we want to add fibarr[0] and [1] and push that value into the array
        var addIndex = fibArr[i] + fibArr[fibArr.length-1]; 
        fibArr.push(addIndex);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result);