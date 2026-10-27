//changes the word that is highlighted on home page every 2 seconds

const heroHeading = document.querySelector(".hero-heading");
const span = heroHeading.querySelector("span");

const words = ["fast", "well-tested", "reliable", "efficient"];
let currentWord = 0;

function highlightNewWord() {
    span.style.opacity = 0;

    setTimeout(() => {
        currentWord = (currentWord + 1) % words.length;
        span.textContent = words[currentWord];
        span.style.opacity = 1;
    }, 300);
}

//timeout for 2 seconds so the page loads in before the animation starts
setTimeout(() => {
    highlightNewWord();
    setInterval(highlightNewWord, 2000);
}, 2000);

