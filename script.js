// ⏳ COUNTDOWN
const countdown = document.getElementById("countdown");

if (countdown) {
  const valentineDate = new Date("Feb 14, 2026 00:00:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const distance = valentineDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    countdown.innerHTML = `⏳ ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}

// 😏 NO BUTTON RUNS AWAY
const noBtn = document.getElementById("noBtn");
if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 60 - 30;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });
}

// 💖 YES BUTTON
const yesBtn = document.getElementById("yesBtn");
if (yesBtn) {
  yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
      <div class="card">
        <h1>Correct answer 🥰</h1>
        <p>I can’t wait to be your Valentine, Mr Keeron Raj 💖</p>
      </div>
    `;
  });
}
