/* =========================
   FADE IN ANIMATION
========================= */

const fadeElements = document.querySelectorAll(".fade-in");

const fadeObserver = new IntersectionObserver(
(entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

},
{
    threshold: 0.2
}
);

fadeElements.forEach((element) => {
    fadeObserver.observe(element);
});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});


/* =========================
   SMOOTH SCROLL
========================= */

navLinks.forEach((link) => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        const targetId =
        link.getAttribute("href");

        const targetSection =
        document.querySelector(targetId);

        window.scrollTo({

            top:
            targetSection.offsetTop - 50,

            behavior: "smooth"

        });

    });

});


/* =========================
   HERO IMAGE FLOAT EFFECT
========================= */

const heroImage =
document.querySelector(".hero-image img");

if (heroImage) {

    heroImage.style.transition =
    "transform 0.15s ease";

    window.addEventListener(
    "mousemove",
    (e) => {

        const x =
        (window.innerWidth / 2 - e.clientX)
        / 80;

        const y =
        (window.innerHeight / 2 - e.clientY)
        / 80;

        heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

    });

}


/* =========================
   SKILL CARD HOVER
========================= */

const skillCards =
document.querySelectorAll(".skill-card");

skillCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(10px)";
        
    });

});


/* =========================
   CONTACT CARD HOVER
========================= */

const contactCards =
document.querySelectorAll(".contact-card");

contactCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0px)";

    });

});


/* =========================
   INITIAL ACTIVE NAV LINK
========================= */

window.dispatchEvent(
new Event("scroll")
);