var num = [23 , 0, 30, 24, 8, 6, 1, 22];
var num2 = [4, 8, 0, 2, 5];

//search through an array for a number and return which index/position the nubmer was found..if number not found return -1.
function searchForNum(arr, number) {
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        //if current value is equal to number, then return the current index number
        if(arr[i] == number) {
            return i;
        }
    }
    return -1;
}

// console.log(searchForNum(num, 10));

var nestedNums = [[4, 8, 10],[3, 6, 9],[23, 24, 99]];

// console.log(nestedNums[2][1]);

function searchNestedArray(arr, numToFind) {
    for(let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        let currentSubArray = arr[i];
        for(let j = 0; j < currentSubArray.length; j++) {
            console.log(arr[i][j]);
            if(arr[i][j] == numToFind) {
                return {i,j};
            }
        }
    }
}

console.log(searchNestedArray(nestedNums, 9));