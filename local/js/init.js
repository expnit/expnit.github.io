



const copyright = () => document.querySelector(".copyright").innerHTML = ("<h3>&copy;  Pruthviraj - ") + new Date().getFullYear() + ('</h3>');

// ============ about navigation ==========

let isNavOpen = false;

const nav = function () {
    document.querySelector(".nav").style.width = isNavOpen === false ? "100%" : "0%";

    if (isNavOpen === false) { isNavOpen = true } else { isNavOpen = false }

}

const goTo = function (url = "") {

    window.location = `https://expnit.github.io/${url}`;

}

// =============
const init = function () {
    copyright(); // called copyright function
}

init(); // called init function