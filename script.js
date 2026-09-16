/* ================================
   MOBILE MENU
================================ */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


/* ================================
   TYPING EFFECT
================================ */

const typing = document.getElementById("typing");

const words = [
    "Creative Developer",
    "Web Developer Pemula",
    "Future Programmer",
    "Technology Enthusiast",
    "Digital Creator"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1400);

            return;
        }

    } else {

        typing.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 90
    );
}

typeEffect();


/* ================================
   STAT COUNTER
================================ */

const stats =
    document.querySelectorAll(".stat h2");

let statsStarted = false;

function startCounter() {

    if (statsStarted) return;

    statsStarted = true;

    stats.forEach(stat => {

        const target =
            Number(stat.dataset.target);

        let current = 0;

        const increment =
            Math.max(1, Math.ceil(target / 50));

        const counter =
            setInterval(() => {

                current += increment;

                if (current >= target) {

                    current = target;

                    clearInterval(counter);
                }

                stat.textContent = current;

            }, 30);

    });
}


/* ================================
   SKILL ANIMATION
================================ */

const skillBars =
    document.querySelectorAll(".progress-bar");

let skillsStarted = false;

function startSkills() {

    if (skillsStarted) return;

    skillsStarted = true;

    skillBars.forEach(bar => {

        const width =
            bar.dataset.width;

        setTimeout(() => {

            bar.style.width = width;

        }, 200);

    });
}


/* ================================
   SCROLL OBSERVER
================================ */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting)
                    return;

                if (
                    entry.target.classList
                    .contains("stats")
                ) {
                    startCounter();
                }

                if (
                    entry.target.classList
                    .contains("skills-wrapper")
                ) {
                    startSkills();
                }

            });

        },
        {
            threshold: 0.2
        }
    );


const statsSection =
    document.querySelector(".stats");

const skillsSection =
    document.querySelector(".skills-wrapper");

if (statsSection)
    observer.observe(statsSection);

if (skillsSection)
    observer.observe(skillsSection);


/* ================================
   BACK TO TOP
================================ */

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ================================
   CONTACT FORM
================================ */

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        alert(
            "🔥 PESAN TERKIRIM!\n\n" +
            "Halo " +
            name +
            "!\n\n" +
            "Terima kasih sudah menghubungi Abiansyah."
        );

        contactForm.reset();

    }
);


/* ================================
   REVEAL ANIMATION
================================ */

const reveal =
    document.querySelectorAll(
        ".info-card, .hobby, .project"
    );

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


reveal.forEach(element => {

    element.style.opacity = "0";
    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    revealObserver.observe(element);

});


/* ================================
   CONSOLE
================================ */

console.log(
    "🔥 ABIANSYAH PORTFOLIO AKTIF!"
);