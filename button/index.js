let cudlik;

let onloadFunc = function () {
    cudlik = document.getElementById("cudlik")
    funkce()
}

let funkce = function () {
    cudlik.addEventListener("click", clickFunction)
}

let clickFunction = function () {
    let content = document.getElementById("MenuVeci");

        if (content.style.display === "block") {
        content.style.display = "none";
    }        else {

                content.style.display = "block";
    }
}
window.onload = onloadFunc;