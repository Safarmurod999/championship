import includeHTML from "./src/includeHTML.js";
import shrink from "./src/navShrink.js";
import toggleBacktop from "./src/backTop.js";

// import showTabHome from "./src/homePortfolio.js";

includeHTML();

// renderRow();

const modeBtn = document.querySelectorAll('.mode-btn');
console.log(modeBtn);

modeBtn[0].addEventListener('click',()=>{
  modeBtn[1].classList.remove('active');
  modeBtn[0].classList.add('active');
  document.querySelector('body').classList.add('light');
})
modeBtn[1].addEventListener('click',()=>{
  modeBtn[0].classList.remove('active');
  modeBtn[1].classList.add('active');
  document.querySelector('body').classList.remove('light');
})
window.addEventListener("scroll", function () {
  toggleBacktop();
});

window.addEventListener("scroll", function () {
    shrink();
  });
  
