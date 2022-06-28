// var count = 0;
// var count2 = 0;
// var count3 = 0;
// function increaseLikes(element) {
//     console.log("likes")
//     if (element == document.querySelector("#box1")) {
//         count++;
//         element.innerText = count + " Like(s)";
//     }
//     else if (element == document.querySelector("#box2")) {
//         count2++;
//         element.innerText = count2 + " Like(s)";
//     }
//     else if (element == document.querySelector("#box3")) {
//         count3++;
//         element.innerText = count3 + " Like(s)";
//     }
// }
var count = 0
function increaseLikes(element) {
    console.log("likes");
    var element = document.querySelector("#box1");
    count++
    element.innerText = count + " Likes(s)";
}

var count2 = 0
function increaseLikesAgain(element) {
    console.log("likes");
    var element = document.querySelector("#box2");
    count2++;
    element.innerText = count2 + " Like(s)";
}

var count3 = 0
function increaseLikesOneMoreTime(element) {
    console.log("likes");
    var element = document.querySelector("#box3");
    count3++;
    element.innerText = count3 + " Likes(s)";
}