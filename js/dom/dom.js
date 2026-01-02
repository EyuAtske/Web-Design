const header = document.getElementById("header");
const par = document.getElementById("par");
const btn = document.getElementById("btn");

let color_changed = true;
btn.addEventListener("click", (e) => {
    header.textContent = "Hellow, DOM!";
    par.style.color = "blue";
    par.innerHTML = "<p>This is a new paragraph added via JavaScript.</p>";
    if (color_changed) {
        document.body.style.backgroundColor = "lightgray";
    } else {
        document.body.style.backgroundColor = "white";
    }
    color_changed = !color_changed;
})