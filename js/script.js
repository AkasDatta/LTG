document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleMenu');
    const menu = document.getElementById('navbar-sticky');
    const barsIcon = toggleButton.querySelector('.fa-bars');
    const xmarkIcon = toggleButton.querySelector('.fa-xmark');

    toggleButton.addEventListener('click', function () {
        menu.classList.toggle('hidden'); // Show/hide the menu
        barsIcon.classList.toggle('hidden'); // Toggle bars icon
        xmarkIcon.classList.toggle('hidden'); // Toggle x-mark icon
    });

    // Initially hide the x-mark icon
    xmarkIcon.classList.add('hidden');
});

/////
const testimonials = [
    {
        text: "“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”",
        author: "Jason Strauss <br> CEO of ML Associates"
    },
    {
        text: "“Great service! I highly recommend them for any business needs.”",
        author: "Sarah Johnson <br> Founder of Startup Co."
    },
    {
        text: "“Amazing experience, would love to work with them again!”",
        author: "Mike Lee <br> Marketing Head at XYZ"
    }
];

let index = 0;
const textElement = document.getElementById("testimonialText");
const authorElement = document.getElementById("author");
const dots = document.querySelectorAll(".dot");

function updateTestimonial() {
    textElement.innerHTML = testimonials[index].text;
    authorElement.innerHTML = testimonials[index].author;
    dots.forEach((dot, i) => dot.classList.toggle("bg-blue-500", i === index));
}

document.getElementById("prevBtn").addEventListener("click", () => {
    index = (index - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
});

document.getElementById("nextBtn").addEventListener("click", () => {
    index = (index + 1) % testimonials.length;
    updateTestimonial();
});

setInterval(() => {
    index = (index + 1) % testimonials.length;
    updateTestimonial();
}, 5000);

updateTestimonial();
