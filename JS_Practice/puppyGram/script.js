function upload(element) {
    console.log("upload button clicker change");
    element.innerText = "Uploaded! Thank You";
}
//changes the button to state the updated text..used with onclick
function hideLoginButton(element) {
    console.log("hidding login button");
    element.remove();
}
//hides the element after being clicked...used with onclick
function playVideo(element) {
    console.log("trying to play");
    element.play();
}
//plays the video once hovered over...used with onmouseover
function stopVideo(element) {
    element.pause();
}
//pauses the video when no longer being hovered...used with onmouseout
function changeImg(element) {
    console.log("picture", element);
    element.src = "./resources/anothaPuppy.jpeg"
}
//changes the image upon clicking..used with onclick or onmouseover
function hidePopUp(element) {
    console.log("trying to hide");
    var element = document.querySelector("#popUp");
    element.remove();
}
//used to eliminate an entire section instead of a single item
//used with on click
