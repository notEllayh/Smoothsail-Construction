AOS.init();

const sidenavOpen = document.getElementById('sidenavOpen'); 
const sidenavClose = document.getElementById('sidenavClose');
const sidenav = document.getElementById('sidenav');

// Side navigation
sidenavOpen.style.display = 'block';
sidenavClose.style.display = 'none'; 

function showSidenav(){
  const sidenav = document.querySelector('.sidenav')
   sidenavOpen.style.display = 'none'; 
   sidenavClose.style.display = 'block';
  sidenav.style.display = 'flex' 
}

function hideSidenav(){
  const sidenav = document.querySelector('.sidenav')
   sidenavOpen.style.display = 'block'; 
  sidenavClose.style.display = 'none';
  sidenav.style.display = 'none' 
} 

// Back to top button
const mybutton = document.getElementById("backToTopBtn"); 

window.onscroll = function() {scrollFunction}; 

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", topFunction);

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
 
// Homepage counter
let count = 0;
let max = 24; 

let counter = document.getElementById("counter"); 

let interval = setInterval(function () {
  count++;
  counter.textContent = count; 

  if (count === max) {
    clearInterval(interval); 
  }
}, 100); 