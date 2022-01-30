let btn = document.getElementById("mode-selector");
let h1 = document.getElementById("page-title")
const darkModeClass = "dark-mode"


btn.addEventListener("click", changeMode)


function changeMode() {
    changeClass();
    changeText()
}

function changeClass() {
    document.querySelectorAll('h1, button, footer, body').forEach((el) => {
    
    el.classList.toggle(darkModeClass)
})}

function changeText() {
    if(h1.classList.contains(darkModeClass)) {
        h1.innerHTML = "Dark Mode ON"
    } else {
        h1.innerHTML = "Light Mode ON"
    }

    if(btn.classList.contains(darkModeClass)) {
        btn.textContent = "Light Mode"
    } else {
        btn.textContent = "Dark Mode"
}}
