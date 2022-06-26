// function loginButton(element) {
//     element.innerText = "Log Out" 
// }

function hide(element) {
    element.remove();
}

function loginButton(element) {
    if(element.innerText = "Log in") {
        element.innerText = "Log Out" //this part still works as it did above
    }
    else if(element.innerText = "Log Out") { //this part doesn't work?
        element.innerText = "Log in"
    }
}

//just trying the above