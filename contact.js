
function addText() {

    if (post.value.trim() !== "") {
        secdisplay.innerHTML += secdisplay.innerHTML ? "<hr>" + post.value : post.value;
        post.value = "";
}
}