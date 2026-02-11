const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiCount = 150;
const confetti = [];

const colors = ["#ff4d88", "#ff99cc", "#ffd1e6", "#ffffff"];

for (let i = 0; i < confettiCount; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * confettiCount,
    color: colors[Math.floor(Math.random() * colors.length)],
    tilt: Math.floor(Math.random() * 10) - 10
  });
}

let angle = 0;

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  angle += 0.01;

  for (let i = 0; i < confettiCount; i++) {
    const c = confetti[i];
    ctx.beginPath();
    ctx.fillStyle = c.color;
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fill();

    c.y += Math.cos(angle + c.d) + 1 + c.r / 2;
    c.x += Math.sin(angle);

    if (c.y > canvas.height) {
      c.y = -10;
      c.x = Math.random() * canvas.width;
    }
  }
}

const animation = setInterval(drawConfetti, 20);

/* 🎉 Stop confetti after 3 seconds */
setTimeout(() => {
  clearInterval(animation);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}, 3000);
