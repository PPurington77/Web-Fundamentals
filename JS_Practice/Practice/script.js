function chooseLunch(element) {
    alert("you picked " + element.value);
}

var nameTage = document.querySelector("#name-tag");
function setName(element) {
    console.log(element.value);
    nameTage.innerText = element.value;
}

function codeToRunLater() {
    for(var i = 0; i < 10; i++) {
        console.log("Plop " + i);
    }
}

setTimeout(codeToRunLater, 5000);
console.log("done")