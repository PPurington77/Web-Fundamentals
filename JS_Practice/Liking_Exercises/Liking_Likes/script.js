var count = 0;
function increaseLikes(element) {
    console.log("increasing likes")
    var element = document.querySelector("#likeButton");
    count++;
    element.innerText = count +  " Like(s)";
}