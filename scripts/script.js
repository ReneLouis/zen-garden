// NAVIGATION MENU (LARGE SCREENS)

const MENU_OPTIONS = document.querySelector("nav > ul");
const MENU_BUTTON = document.querySelector(".nav-btn");
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

// Scroll UP / DOWN on smaller screens
const BUTTON_UP = document.querySelector(".up");
const BUTTON_DOWN = document.querySelector(".down");

BUTTON_UP.addEventListener("click", () => window.scrollBy(0, -window.innerHeight), false);
BUTTON_DOWN.addEventListener("click", () => window.scrollBy(0, window.innerHeight), false);
