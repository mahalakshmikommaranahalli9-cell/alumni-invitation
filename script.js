/* ==========================================
   ALUMNI MEET 2026
   JAVASCRIPT
========================================== */


/* ==========================================
   COUNTDOWN
========================================== */

// Event date: 12 September 2026, 10:30 AM
const eventDate = new Date("September 12, 2026 10:30:00").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const distance = eventDate - now;


    // If event has started
    if (distance <= 0) {

        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";

        return;
    }


    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );


    document.getElementById("days").innerText =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");
}


// Update immediately
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);



/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(
    ".invitation, .details, .countdown-section, .memories, .final"
);


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach((element) => {

    element.classList.add("hidden");

    observer.observe(element);

});



/* ==========================================
   CARD ANIMATION
========================================== */

const cards = document.querySelectorAll(".card");


const cardObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("card-show");

            }

        });

    },

    {
        threshold: 0.2
    }

);


cards.forEach((card) => {

    cardObserver.observe(card);

});



/* ==========================================
   BUTTON CLICK EFFECT
========================================== */

const buttons = document.querySelectorAll(".open-btn");


buttons.forEach((button) => {

    button.addEventListener("click", function () {

        this.style.transform = "scale(0.95)";

        setTimeout(() => {

            this.style.transform = "";

        }, 150);

    });

});



/* ==========================================
   FLOATING GOLD PARTICLES
========================================== */

function createParticle() {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.animationDuration =
        (5 + Math.random() * 7) + "s";

    particle.style.animationDelay =
        Math.random() * 3 + "s";

    document.body.appendChild(particle);


    setTimeout(() => {

        particle.remove();

    }, 12000);

}


// Create particles
setInterval(createParticle, 600);



/* ==========================================
   WELCOME MESSAGE
========================================== */

window.addEventListener("load", () => {

    console.log(
        "🎓 Welcome to JIT Alumni Meet 2026!"
    );

});
