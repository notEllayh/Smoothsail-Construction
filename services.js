const answers = {
  srv1: {
    image: "images/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg",
    title: "General Construction",
    text: "We handle all aspects of construction from foundations to finishes. Our general construction services cover residential homes, office complexes, warehouses, factories, and infrastructure projects. We ensure structural integrity, design alignment, and cost effective execution for both small scale and large scale developments.",
    buttontext: "Work with Us",
    buttonLink: "contact.html",
  },

  srv2: {
    image:
      "images/michael-bader-eyq7H7gO0EY-unsplash.jpg",
    title: "Structural Steel Fabrication & Erection",
    text: "Our in-house steel experts produce high-quality steel components for frames, trusses, columns, and beams. From fabrication to on-site erection, we prioritize safety, precision, and compliance with industry codes. We work with architects, engineers, and clients to build strong, sustainable structures that stand the test of time.",
    buttontext: "Work with Us",
    buttonLink: "contact.html",
  },

  srv3: {
    image: "images/smkn-1-gantar-nlXv_JCfSHc-unsplash.jpg",
    title: "Project Management & Consulting",
    text: "With a combined 22+ years of leadership experience, our team oversees every phase of construction—planning, procurement, scheduling, execution, and quality assurance. Our consultancy services help clients make informed decisions, avoid delays, and optimize their budgets.",
    buttontext: "Work with Us",
    buttonLink: "contact.html",
  },

  srv4: {
    image:
      "images/josh-beech-tXJhAFVOHVk-unsplash.jpg",
    title: "Custom Metal Work",
    text: "No design is too complex. We create custom metal designs for gates, railings, staircases, fixtures, and artistic installations. Our bespoke services blend functionality with craftsmanship to deliver durable, aesthetically pleasing results.",
    buttontext: "Work with Us",
    buttonLink: "contact.html",
  },

  srv5: {
    image: "images/tecnic-bioprocess-solutions-xWUNZVW5JOg-unsplash.jpg",
    title: "Equipment Installation & Maintenance",
    text: "We install industrial equipment, machinery systems, and specialized tools with precision and care. Our maintenance services ensure peak performance and extended service life minimizing downtime and maximizing productivity for clients across industrial sectors.",
    buttontext: "Work with Us",
    buttonLink: "contact.html",
  },

  srv6: {
    image: "images/isawred-pCZsRKT-_Ns-unsplash.jpg",
    title: "Industrial Piping & Plumbing",
    text: "We design and implement complex piping systems for water, steam, gas, and other industrial fluids. Our services include fabrication, installation, leak testing, and compliance certification ideal for factories, plants, and utility systems.",
    buttontext: "Work with Us",
    buttonLink: "contact.html",
  },

  srv7: {
    image: "images/emmanuel-ikwuegbu--0-kl1BjvFc-unsplash.jpg",
    title: "Electrical & Mechanical Services",
    text: "From wiring and lighting to HVAC systems and mechanical installations, our integrated MEP services ensure buildings are energy efficient, functional, and safe. We comply with national codes while tailoring solutions to your project’s specific needs",
    buttontext: "Work with Us",
    buttonLink: "contact.html",
  },
};

const buttons = document.querySelectorAll(".faq-btn");
const answerBox = document.getElementById("faq-answer");
const faqQuestions = document.getElementById("faq-questions");
// const srv1 = document.querySelector("[data-id='srv1']");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.dataset.id; 
    const data = answers[id];

    // Active state
    buttons.forEach((btn) => btn.classList.remove("bg-gray-200"));
    button.classList.add("bg-gray-200");

    // Render answer card
    answerBox.innerHTML = `
    <div class="px-8 py-8 bg-[#f5f5f5] rounded-lg shadow-sm md:w-3/4 lg:w-2/3 mx-auto">
      <img
        src="${data.image}"
        alt="${data.title}"
        class="rounded-lg w-100 h-auto mx-auto"
      />

      <h3 class="my-5 text-[#666666] text-[18px] md:text-[20px] font-semibold">
        ${data.title}
      </h3>

      <p class="text-[#666666] text-[16px] md:text-[18px] leading-relaxed">
        ${data.text}
      </p>

      <a class="block mt-6 w-full text-center px-6 py-3 font-medium rounded-lg bg-[#ff6600] text-white hover:bg-[#003366] hover:text-[#ff6600] hover:font-medium transition"
        href="${data.buttonLink}"
      >
        ${data.buttontext}
      </a>
    </div>
    `;
  });
});
