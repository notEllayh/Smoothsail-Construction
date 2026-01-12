AOS.init();

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