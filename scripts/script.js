const MENU_OPTIONS = document.querySelector("nav > ul");
const MENU_BUTTON = document.querySelector(".nav-btn");
const MENU_LIST = document.querySelector(".menu");
var timerID;

function showMenu() {
  clearTimeout(timerID);
  MENU_OPTIONS.classList.remove("hide");
}

function outTheBox() {
  timerID = setTimeout(removeMenuOptions, 2500);
}

function removeMenuOptions() {
  MENU_OPTIONS.classList.add("hide");
  clearTimeout(timerID);
}

MENU_BUTTON.addEventListener("mouseover", showMenu, false);
MENU_OPTIONS.addEventListener("mouseover", showMenu, false);
MENU_BUTTON.addEventListener("mouseout", outTheBox, false);
MENU_OPTIONS.addEventListener("mouseout", outTheBox, false);
