function deleteBox(element) {
    console.log("remove");
    var element = document.querySelector("#cookies");
    element.remove();
}

// function changeTemp(id) {
//     console.log("temp change" + id);
//     var element = document.querySelector(id);
//     console.log("element looks like ", element.innerText)
//     let tempChange = Number(element.innerText)
//     console.log(tempChange);
//     // var temp = document.querySelector(".temp");
//     // console.log(temp);
//     // let tempChange = Number(temp.innerText);
//     // console.log(tempChange);

// }

var todayHigh = 24;
var todayLow = 18;
var tomHigh = 27;
var tomLow = 19;
var friHigh = 21;
var friLow = 16;
var satHigh = 24;
var satLow = 18;

function changeTemp(id) {
    console.log("test");
    var tH = 1;
    var tl = 1;
    var tomH = 1;
    var tomL = 1;
    var fH = 1;
    var fL = 1;
    var sH = 1;
    var sL = 1;
    if(id == "#farenheit") {
        tH = document.querySelector("#todayHigh");
        tH.innerText = todayHigh + 33 + "°";
        tl = document.querySelector("#todayLow");
        tl.innerText = todayLow + 33 + "°";
        tomH = document.querySelector("#tomHigh");
        tomH.innerText = tomHigh + 33 + "°";
        tomL = document.querySelector("#tomLow");
        tomL.innerText = tomLow + 33 + "°";
        fH = document.querySelector("#friHigh");
        fH.innerText = friHigh + 33 + "°";
        fL = document.querySelector("#friLow");
        fL.innerText = friLow + 33 + "°";
        sH = document.querySelector("#satHigh");
        sH.innerText = satHigh + 33 + "°";
        sL = document.querySelector("#satLow");
        sL.innerText = satLow + 33 + "°";
    }
}