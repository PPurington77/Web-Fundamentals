function changeName(element) {
    console.log("change name");
    var element = document.querySelector("#userName");
    element.innerText = "Patrick Purington";
}
var count = 2;
var connectCount = 500;
function removeRequest(id) {
    console.log("trying to remove");
    var element = document.querySelector(id);
    var connectButton = document.querySelector(".rightButton");
    var yourConnections = document.querySelector("#ycButton");
    if (id == "#firstReq"){
        element.remove();
        count--;
        connectButton.innerText = count;
        connectCount++;
        yourConnections.innerText = connectCount;
    }
    else if(id == "#firstReq2") {
        element = document.querySelector("#firstReq");
        element.remove();
        count--;
        connectButton.innerText = count;
    }
    else if(id == "#secondReq") {
        element.remove();
        count--;
        connectButton.innerText = count;
        connectCount++;
        yourConnections.innerText = connectCount;
    }
    else if(id == "#secondReq2") {
        element = document.querySelector("#secondReq");
        element.remove();
        count--;
        connectButton.innerText = count;
    }
}