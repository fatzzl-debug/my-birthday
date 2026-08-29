/* =====================================
   SLIDE SYSTEM
===================================== */

let current = 1;

const totalSlides = 4;

const slides =
    document.querySelectorAll(".slide");

const dots =
    document.querySelectorAll(".dot");

const currentSlide =
    document.getElementById("currentSlide");


function updateSlide() {

    slides.forEach((slide, index) => {

        slide.classList.toggle(
            "active",
            index === current - 1
        );

    });

    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === current - 1
        );

    });

    currentSlide.textContent = current;

}


/* NEXT */

function nextSlide() {

    if (current < totalSlides) {

        current++;

        updateSlide();

        if (current === 3) {

            startTyping();

        }

    }

}


/* PREVIOUS */

function previousSlide() {

    if (current > 1) {

        current--;

        updateSlide();

    }

}


/* HOME */

function goHome() {

    current = 1;

    updateSlide();

}


/* =====================================
   PARTICLES
===================================== */

function createParticles() {

    const container =
        document.getElementById("particles");

    for (let i = 0; i < 80; i++) {

        const particle =
            document.createElement("div");

        particle.className =
            "particle";

        particle.style.left =
            Math.random() * 100 + "vw";

        particle.style.animationDuration =
            Math.random() * 10 + 8 + "s";

        particle.style.animationDelay =
            Math.random() * 10 + "s";

        container.appendChild(
            particle
        );

    }

}

createParticles();


/* =====================================
   CONFETTI
===================================== */

function createConfetti(amount = 100) {

    const container =
        document.getElementById("confetti");

    const colors = [
        "#ff4ecd",
        "#ffd166",
        "#6ee7ff",
        "#ffffff",
        "#9b5de5"
    ];

    for (let i = 0; i < amount; i++) {

        const piece =
            document.createElement("div");

        piece.className =
            "confetti-piece";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];

        piece.style.animationDuration =
            Math.random() * 3 + 2 + "s";

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        container.appendChild(piece);

        setTimeout(() => {

            piece.remove();

        }, 6500);

    }

}


/* =====================================
   HEARTS
===================================== */

function createHearts() {

    const container =
        document.getElementById("hearts");

    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("div");

        heart.className =
            "heart";

        heart.textContent =
            Math.random() > .5
                ? "❤️"
                : "💖";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            Math.random() * 20 + 15 + "px";

        heart.style.animationDelay =
            Math.random() * 2 + "s";

        container.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 5000);

    }

}


/* =====================================
   FIREWORKS
===================================== */

function firework() {

    const container =
        document.getElementById("fireworks");

    const fw =
        document.createElement("div");

    fw.className =
        "firework";

    fw.style.left =
        Math.random() * 70 + 15 + "vw";

    fw.style.top =
        Math.random() * 50 + 15 + "vh";

    fw.style.background =
        "white";

    container.appendChild(fw);

    setTimeout(() => {

        fw.remove();

    }, 1200);

}


/* =====================================
   CELEBRATE
===================================== */

function celebrate() {

    createConfetti(250);

    createHearts();

    for (let i = 0; i < 12; i++) {

        setTimeout(
            firework,
            i * 350
        );

    }

}


/* =====================================
   TYPING
===================================== */

let typingDone = false;

function startTyping() {

    if (typingDone) return;

    typingDone = true;

    const element =
        document.getElementById(
            "typing"
        );

    const text =
        `Selamat ulang tahun, Fatih! 🎂

Semoga di umur yang baru ini,
semakin banyak kebahagiaan,
kesuksesan, pengalaman baru,
dan hal-hal baik yang datang.

Jangan takut untuk bermimpi besar.
Terus belajar, terus mencoba,
dan jangan pernah berhenti mengejar
apa yang kamu inginkan.

Semoga semua cita-cita dan harapanmu
bisa tercapai satu per satu.

Nikmati hari spesialmu! 🎉

Once again...
HAPPY BIRTHDAY FATIH! ❤️`;

    let index = 0;

    function type() {

        if (index < text.length) {

            element.innerHTML +=
                text[index]
                    .replace("\n", "<br>");

            index++;

            setTimeout(
                type,
                35
            );

        }

    }

    type();

}


/* =====================================
   WHATSAPP
===================================== */

function sendWhatsApp() {

    const wish =
        document
            .getElementById("wish")
            .value
            .trim();

    if (!wish) {

        alert(
            "Tulis pesan terlebih dahulu 😊"
        );

        return;

    }

    const message =
        `🎂 HAPPY BIRTHDAY FATIH! 🎉

${wish}

Semoga semua harapanmu
bisa tercapai! ❤️`;

    const encoded =
        encodeURIComponent(message);

    const phone =
        "6281362206077";

    const url =
        `https://wa.me/${phone}?text=${encoded}`;

    window.open(
        url,
        "_blank"
    );

}


/* =====================================
   MUSIC
===================================== */

const music =
    document.getElementById(
        "birthdayMusic"
    );

const musicBtn =
    document.getElementById(
        "musicBtn"
    );

let playing = false;


musicBtn.addEventListener(
    "click",
    () => {

        if (!playing) {

            music.play();

            musicBtn.textContent =
                "🔊";

            playing = true;

        } else {

            music.pause();

            musicBtn.textContent =
                "🎵";

            playing = false;

        }

    }
);


/* =====================================
   COUNTDOWN
===================================== */

const birthdayDate =
    new Date(
        "2026-09-01T00:00:00"
    );


function countdown() {

    const now =
        new Date();

    let difference =
        birthdayDate - now;

    if (difference < 0) {

        difference = 0;

    }

    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            difference /
            (1000 * 60 * 60)
        ) % 24;

    const minutes =
        Math.floor(
            difference /
            (1000 * 60)
        ) % 60;

    const seconds =
        Math.floor(
            difference /
            1000
        ) % 60;


    document.getElementById(
        "days"
    ).textContent =
        String(days).padStart(
            2,
            "0"
        );

    document.getElementById(
        "hours"
    ).textContent =
        String(hours).padStart(
            2,
            "0"
        );

    document.getElementById(
        "minutes"
    ).textContent =
        String(minutes).padStart(
            2,
            "0"
        );

    document.getElementById(
        "seconds"
    ).textContent =
        String(seconds).padStart(
            2,
            "0"
        );

}

setInterval(
    countdown,
    1000
);

countdown();


/* =====================================
   START EFFECT
===================================== */

setTimeout(() => {

    createConfetti(70);

}, 1200);