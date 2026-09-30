/* ================= MENU MOBILE ================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* ================= PARTICLES ================= */

function createParticle() {

    const particle = document.createElement("div");

    particle.classList.add("blood-particle");

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.animationDuration =
        (4 + Math.random() * 8) + "s";

    particle.style.width =
        (1 + Math.random() * 4) + "px";

    particle.style.height =
        particle.style.width;

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 12000);
}

setInterval(createParticle, 450);


/* ================= PARALLAX ================= */

const heroSymbol = document.querySelector(".hero-symbol");

window.addEventListener("mousemove", event => {

    const x =
        (event.clientX / window.innerWidth - 0.5) * 20;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 20;

    heroSymbol.style.marginLeft = `${x}px`;
    heroSymbol.style.marginTop = `${y}px`;

});


/* ================= SKILL CARDS ================= */

document.querySelectorAll(".skill-card").forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("selected");

        if (card.classList.contains("selected")) {
            card.style.boxShadow =
                "0 0 35px rgba(229,43,69,.12)";
        } else {
            card.style.boxShadow = "none";
        }

    });

});


/* ================= ACTIVE NAV ================= */

const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    links.forEach(link => {

        link.style.color = "";

        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "#e52b45";
        }

    });

});