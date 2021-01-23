const MENU_OPTIONS = document.querySelector("nav > ul");
const MENU_BUTTON = document.querySelector(".nav-btn");
const MENU_LIST = document.querySelector(".menu");
var timerID;
var onMenu = false;

function showMenu() {
  onMenu = true;
  console.log("Entered class - " + onMenu);
  clearTimeout(timerID);
  MENU_OPTIONS.classList.remove("hide");
}

function outTheBox() {
  console.log("out.");
  timerID = setTimeout(removeMenuOptions, 3000);
}

function removeMenuOptions() {
  // console.log("interval has run");
  MENU_OPTIONS.classList.add("hide");
  console.log("interval cleared");
  onMenu = false;
  clearTimeout(timerID);
}

MENU_BUTTON.addEventListener("mouseover", showMenu, false);
MENU_LIST.addEventListener("mouseover", () => onMenu = true, false);
MENU_BUTTON.addEventListener("mouseout", outTheBox, false);
