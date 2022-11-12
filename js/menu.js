const blur = document.getElementsByClassName("Blur")[0];
const menu = document.getElementsByClassName("MenuWindow")[0];

function openMenu(){
    menu.style.display = ""
    blur.style.display = "";
}

function closeMenu(){
    menu.style.display = "none"
    blur.style.display = "none";
}