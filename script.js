const messages = [
  "I love youuuu ",
  "You make me smileeee ",
  "Forever and alwaysssss bbi ",
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

// Tracking score
let score = 0
const scoreDisplay = document.getElementById('score')




function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * (window.innerWidth - 50) + 'px';
    heart.style.animationDuration = (4 + Math.random() * 3) + 's';

    heart.addEventListener('click', () => showMessage(heart));

    document.body.appendChild(heart);

    // Remove heart after floating out
    setTimeout(() => {
    if (heart.parentNode) heart.remove();
    }, 6000);
}

function showMessage(heart) {
    // score update
    score ++;
    scoreDisplay.innerText = `Score: ${score}`;


    const msg = document.createElement('div');
    msg.className = 'message';
    msg.innerHTML = messages[Math.floor(Math.random() * messages.length)];

    // Position message above heart
    const rect = heart.getBoundingClientRect();
    msg.style.left = rect.left + 'px';
    msg.style.top = (rect.top - 50) + 'px';


    document.body.appendChild(msg);
    console.log(msg);

    // Animate message in
    setTimeout(() => msg.classList.add('show'), 10);

    // Launch confetti at heart position
    confetti({
        particleCount: 30,
        startVelocity: 20,
        spread: 60,
        origin: {
            x: (rect.left + rect.width / 2) / window.innerWidth,
            y: (rect.top + rect.height / 2) / window.innerHeight
        },
        colors: ['#ff4d6d', '#ffb6c1', '#ffe6f0', '#ff69b4']
    });

    // Remove message after 2 seconds
    setTimeout(() => msg.remove(), 2000);

    // Remove heart after 2 seconds (so message can be seen)
    setTimeout(() => {
    if (heart.parentNode) heart.remove();
    }, 2000);
}

// Spawn hearts every 500ms
setInterval(createHeart, 500);
