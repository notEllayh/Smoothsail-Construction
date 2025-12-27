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

const answers = {
  srv1: {
    Image: "./images/troy-mortier-eKY6_9W_iqY-unsplash.jpg", 
    title: "General Construction", 
    text: "We handle all aspects of construction from foundations to finishes. Our general construction services cover residential homes, office complexes, warehouses, factories, and infrastructure projects. We ensure structural integrity, design alignment, and cost effective execution for both small scale and large scale developments.",
    buttontext: "Work with Us", 
    buttonLink: "#", 
  }, 

   srv2: {
    Image: "https://unsplash.com/photos/a-group-of-men-standing-on-top-of-a-construction-site-DWp5nUqTn6E", 
    title: "Structural Steel Fabrication & Erection", 
    text: "Our in-house steel experts produce high-quality steel components for frames, trusses, columns, and beams. From fabrication to on-site erection, we prioritize safety, precision, and compliance with industry codes. We work with architects, engineers, and clients to build strong, sustainable structures that stand the test of time.",
    buttontext: "Work with Us", 
    buttonLink: "#", 
  }, 

   srv3: {
    Image: "https://unsplash.com/photos/man-in-white-hard-hat-standing-on-brown-wooden-dock-during-daytime-80zZ1s24Nag", 
    title: "Project Management & Consulting", 
    text: "With a combined 22+ years of leadership experience, our team oversees every phase of construction—planning, procurement, scheduling, execution, and quality assurance. Our consultancy services help clients make informed decisions, avoid delays, and optimize their budgets.",
    buttontext: "Work with Us", 
    buttonLink: "#", 
  }, 

   srv4: {
    Image: "https://unsplash.com/photos/man-in-orange-and-black-vest-wearing-white-helmet-holding-yellow-and-black-power-tool-VLPUm5wP5Z0", 
    title: "Custom Metal Work", 
    text: "No design is too complex. We create custom metal designs for gates, railings, staircases, fixtures, and artistic installations. Our bespoke services blend functionality with craftsmanship to deliver durable, aesthetically pleasing results.",
    buttontext: "Work with Us", 
    buttonLink: "#", 
  }, 

   srv5: {
    Image: "https://unsplash.com/photos/man-on-white-ladder-3coKbdfnAFg", 
    title: "Equipment Installation & Maintenance", 
    text: "We install industrial equipment, machinery systems, and specialized tools with precision and care. Our maintenance services ensure peak performance and extended service life minimizing downtime and maximizing productivity for clients across industrial sectors.",
    buttontext: "Work with Us", 
    buttonLink: "#", 
  }, 

   srv6: {
    Image: "https://unsplash.com/photos/gray-scale-photo-of-a-staircase-p5i7uyPuHto", 
    title: "Industrial Piping & Plumbing", 
    text: "We design and implement complex piping systems for water, steam, gas, and other industrial fluids. Our services include fabrication, installation, leak testing, and compliance certification ideal for factories, plants, and utility systems.",
    buttontext: "Work with Us", 
    buttonLink: "#", 
  }, 

   srv7: {
    Image: "https://unsplash.com/photos/man-in-black-jacket-holding-black-and-yellow-hand-tool-u3_788_lEVk", 
    title: "Electrical & Mechanical Services", 
    text: "From wiring and lighting to HVAC systems and mechanical installations, our integrated MEP services ensure buildings are energy efficient, functional, and safe. We comply with national codes while tailoring solutions to your project’s specific needs",
    buttontext: "Work with Us", 
    buttonLink: "#", 
  }, 
}; 

const buttons = document.querySelectorAll(".faq-btn");
const answerBox = document.getElementById("faq-answer");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const id = button.dataset.id;
    const data = answers[id];

    // Active state
    buttons.forEach(btn => btn.classList.remove("bg-gray-200"));
    button.classList.add("bg-gray-200");

    // Render answer card
    answerBox.innerHTML = `
      <img
        src="${data.image}"
        alt="${data.title}"
        class="w-full h-40 object-cover rounded-md"
      />

      <h3 class="text-xl font-semibold text-gray-900">
        ${data.title}
      </h3>

      <p class="text-gray-600">
        ${data.text}
      </p>

      <a
        href="${data.buttonLink}"
        class="inline-block mt-2 px-5 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
      >
        ${data.buttonText}
      </a>
    `;
  });
});