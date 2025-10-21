let words = document.querySelectorAll(".word");
words.forEach((word)=>{
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter)=>{
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
  let currentWord = words[currentWordIndex];
  let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  Array.from(currentWord.children).forEach((letter,i)=>{
    setTimeout(()=>{
      letter.className = "letter out";
    },i * 80);
  });
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i)=>{
    setTimeout(()=>{
      letter.className = "letter in";
    },340 + i * 80);
  });
  currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);


// circle skill////////////////////////////////

const circles = document.querySelectorAll(".circle");
circles.forEach(elem=>{
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor(dots*marked/100);
  var points = "";
  var rotate = 360 / dots;

  for(let i = 0 ; i < dots ; i++){
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }
  elem.innerHTML = points;

  const pointsMarked = elem.querySelectorAll(".points");
  for(let i = 0; i<percent ; i++){
    pointsMarked[i].classList.add("marked");
  }
})


//mix it up portfolio section/////////////////////////////////////////
var mixer = mixitup('.portfolio-gallery');




// JavaScript for Portfolio Functionality and Responsiveness

// ====================================================================
// 1. ELEMENT SELECTION
// Targets the HTML elements necessary for interaction and scrolling features.
// NOTE: Ensures we target the #navbar and #menu-icon IDs set in HTML.
// ====================================================================

// Elements for Mobile Menu Toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('#navbar');

// Elements for Sticky Header and Active Link Scrolling
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');


// ====================================================================
// 2. MOBILE MENU TOGGLE LOGIC (Click Event)
// Handles opening and closing the sidebar menu on mobile devices.
// ====================================================================
menuIcon.onclick = () => {
    // Toggles the icon style (e.g., changes 'hamburger' to 'X' icon)
    menuIcon.classList.toggle('bx-x'); 
    
    // Toggles the 'active' class which slides the menu into view (via CSS)
    navbar.classList.toggle('active');
};


// ====================================================================
// 3. SCROLL EVENTS (Sticky Header & Active Link Tracking)
// Handles behavior that changes based on the user's scroll position.
// ====================================================================
window.onscroll = () => {
    let top = window.scrollY;

    // A. Active Navigation Link Tracking
    sections.forEach(sec => {
        // Defines the top edge of the section, with a 150px offset/buffer
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Check if the current scroll position is within the current section boundaries
        if (top >= offset && top < offset + height) {
            // Remove 'active' class from all links
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            // Add 'active' class to the corresponding navigation link
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    // B. Sticky Header Logic
    // If scroll position is greater than 100px from the top, add the 'sticky' class
    header.classList.toggle('sticky', top > 100); 

    // C. Close Mobile Menu on Scroll (Improved UX)
    // Ensures the menu closes automatically when the user scrolls or clicks a link.
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};