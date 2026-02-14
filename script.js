let score = 0;
const scoreDisplay = document.getElementById('score');
const note = document.getElementById('note');

const maxScore = 2; // when game ends

const messages = [
    "I love youuuu ",
    "You make me smileeee ",
    "Forever and alwaysssss bbi ",
    "<img src='img/IMG_3170.jpeg' width='120px' style='border-radius:12px;'>",
    "<img src='img/IMG_3204.jpeg' width='120px' style='border-radius:12px;'>",
    "<img src='img/IMG_3264.jpeg' width='120px' style='border-radius:12px;'>",
    "<img src='img/IMG_3301.jpeg' width='120px' style='border-radius:12px;'>",
    "<img src='img/IMG_3314.jpeg' width='120px' style='border-radius:12px;'>",
    "<img src='img/IMG_3326.jpeg' width='120px' style='border-radius:12px;'>",
    "<img src='img/IMG_3331.jpeg' width='120px' style='border-radius:12px;'>",
    "<img src='img/IMG_3365.jpeg' width='120px' style='border-radius:12px;'>",
    "<img src='img/IMG_3468.jpeg' width='120px' style='border-radius:12px;'>",
    "You are my sunshineeee ",
    "Every moment with you is magiccccc",
    "You make my heart skip a beatttt ",
    "I can’t stop thinking about youuuu ",
    "Life is better with you by my sideeee",
    "You’re my favorite hello and hardest goodbyeeee ",
    "You make ordinary moments extraordinaryyyyy ",
    "I love the way you laughhhh ",
    "Every day with you feels like a dreammmm ",
    "You are my happiness and my homeeeee ",
    "I fall in love with you more every dayyyyy ",
    "Your smile brightens my darkest daysssss ",
    "You’re my everything, my loveeeee ",
    "I love holding your handdddd ",
    "You make my heart full and my life brighterrrrr ",
    "I cherish every memory we’ve made togetherrrrr ",
    "You’re my favorite person in the whole worlddddd ",
    "With you, I feel completeeee ",
    "You’re the best part of my lifeeeee ",
    "I love the little things you dooooo ",
    "I can’t wait for all our adventures togetherrrrr ",
    "You’re my safe place and my joyyyyy "
];

let heartInterval; // store interval so we can stop it

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * (window.innerWidth - 50) + 'px';
    heart.style.animationDuration = (4 + Math.random() * 3) + 's';

    heart.addEventListener('click', () => showMessage(heart));

    document.body.appendChild(heart);

    setTimeout(() => {
        if (heart.parentNode) heart.remove();
    }, 6000);
}

function showMessage(heart) {
    score++;
    scoreDisplay.innerText = `Score: ${score}`;

    const msg = document.createElement('div');
    msg.className = 'message';
    msg.innerHTML = messages[Math.floor(Math.random() * messages.length)];
    document.body.appendChild(msg);

    const rect = heart.getBoundingClientRect();
    msg.style.left = rect.left + 'px';
    msg.style.top = (rect.top - 70) + 'px';
    setTimeout(() => msg.classList.add('show'), 10);

    // Confetti
    confetti({
        particleCount: 30,
        startVelocity: 20,
        spread: 60,
        origin: {
            x: (rect.left + rect.width/2) / window.innerWidth,
            y: (rect.top + rect.height/2) / window.innerHeight
        },
        colors: ['#ff4d6d', '#ffb6c1', '#ffe6f0', '#ff69b4']
    });

    setTimeout(() => msg.remove(), 2000);
    setTimeout(() => {
        if (heart.parentNode) heart.remove();
    }, 2000);

    // End game after maxScore
    if (score >= maxScore) {
        clearInterval(heartInterval); // stop spawning hearts
        // Remove all remaining hearts
        document.querySelectorAll('.heart').forEach(h => h.remove());
        // Show final note
        note.style.display = 'flex';
    }
}

// Start spawning hearts
heartInterval = setInterval(createHeart, 500);
