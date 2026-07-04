// Smooth scroll for navigation links
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});


// Contact form alert (demo purpose)
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    form.reset();
});


// Simple animation on scroll (fade-in effect)
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
            section.style.transition = "0.6s ease-in-out";
        } else {
            section.style.opacity = "0.5";
            section.style.transform = "translateY(20px)";
        }
    });
});

const toggleBtn = document.getElementById("toggleMode");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        toggleBtn.innerText = "☀️ Light Mode";
    }
    else{
        toggleBtn.innerText = "🌙 Dark Mode";
    }
});