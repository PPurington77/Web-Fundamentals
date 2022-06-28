function chooseLunch(element) {
    alert("you picked " + element.value);
}

var nameTage = document.querySelector("#name-tag");
function setName(element) {
    console.log(element.value);
    nameTage.innerText = element.value;
}