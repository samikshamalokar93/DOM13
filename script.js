function change() {
    let x = document.getElementsByClassName("text");

    for (let i = 0; i < x.length; i++) {
        x[i].innerHTML = "Updated Text";
    }
}