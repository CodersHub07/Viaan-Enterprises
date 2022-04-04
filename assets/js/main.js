let sideBar = document.getElementById("mobile-nav");
let menu = document.getElementById("menu");
let cross = document.getElementById("cross");
function sidebarHandler() {
    sideBar.classList.toggle("hidden");
}
function dropdownHandler(element) {
    let single = element.getElementsByTagName("ul")[0];
    single.classList.toggle("hidden");
}

function sidebarHandler(check){
    if (check) {
        sideBar.style.transform = "translateX(0px)";
        menu.classList.add("hidden");
    } else {
        sideBar.style.transform = "translateX(-100%)";
        menu.classList.remove("hidden");
    }
};