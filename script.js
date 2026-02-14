const messages = [
  "I love you ",
  "You make me smile ",
  "Forever and always ",
  "You are my sunshine ",
  "Every moment with you is magic",
  "You make my heart skip a beat ",
  "I can’t stop thinking about you ",
  "Life is better with you by my side",
  "You’re my favorite hello and hardest goodbye ",
  "You make ordinary moments extraordinary ",
  "I love the way you laugh ",
  "Every day with you feels like a dream ",
  "You are my happiness and my home ",
  "I fall in love with you more every day ",
  "Your smile brightens my darkest days ",
  "You’re my everything, my love ",
  "I love holding your hand ",
  "You make my heart full and my life brighter ",
  "I cherish every memory we’ve made together ",
  "You’re my favorite person in the whole world ",
  "With you, I feel complete ",
  "You’re the best part of my life ",
  "I love the little things you do ",
  "I can’t wait for all our adventures together ",
  "You’re my safe place and my joy "
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
    msg.innerText = messages[Math.floor(Math.random() * messages.length)];

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
