// const HEIGHT = window.innerHeight;
const HEADERTITLE = document.querySelector(".site-title > a").innerText;
// const IMAGES = document.querySelectorAll('img');
// const HEADER = document.querySelector('body > header');
// const HEADERHEIGHT = HEADER.style.height;
// const HEADERIMAGE = HEADER.style.background;

// load header background image depending of widow width
var WIDTH;
function header() {
  WIDTH = window.innerWidth;
  var pic = [];         // w & h of image

  if (WIDTH >= 1024) {
    pic = [1024, 197];
    document.querySelector('.site-title').innerHTML = HEADERTITLE;
    return "background: url(images/DSC00227_" + pic[0] + ".jpg) no-repeat center orange; height: " + pic[1] + "px";
  } else if (WIDTH >= 640) {
    pic = [640, 123];
    document.querySelector('.site-title').innerHTML = HEADERTITLE;
    return "background: url(images/DSC00227_" + pic[0] + ".jpg) no-repeat center orange; height: " + pic[1] + "px";
  } else {
    pic = [0, 0];
    document.querySelector('.site-title').innerHTML = "";
    return "height: " + pic[1] + "px";
    //document.querySelector('header').
  }
}

// function size() {
//   //console.log(window.innerWidth);
//   document.querySelector('header').setAttribute("style", header(WIDTH));
// }

document.querySelector('header').setAttribute("style", header(WIDTH));
displayScreenSize();

// Call-back funstion size replaced by arrow function:
window.addEventListener('resize', ()=>{document.querySelector('header').setAttribute("style", header(WIDTH))}, false);
window.addEventListener('resize', displayScreenSize, false);

// Add dimensions of window on page
function displayScreenSize() {
  const DIMENSIONS = document.querySelector('footer > .dimensions');
  while (DIMENSIONS.firstChild) {
    DIMENSIONS.removeChild(DIMENSIONS.firstChild);
  }
  var pageDims = document.createElement("div");   // Create div element to receive text
  var dimText = document.createTextNode("Dimensions of window are " + window.innerWidth + " by " + window.innerHeight);    // Create text node with dimensions
  pageDims.appendChild(dimText);                  // Append text node to the div element
  DIMENSIONS.appendChild(pageDims);               // Append div element to footer > .dimensions.
}
