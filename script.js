let attempts = 0;
const secretCode = "2812cutiepie";

function checkCode() {
  const input = document.getElementById("code").value;
  const msg = document.getElementById("message");
  const att = document.getElementById("attempts");

  if (input === secretCode) {
    window.location.href = "home.html";
    return;
  }

  attempts++;

  if (attempts === 1) {
    msg.innerHTML = "Arey Baby🥺";
  } else if (attempts === 2) {
    msg.innerHTML = "Baby firse😭";
  } else if (attempts === 3) {
    msg.innerHTML = "Oye🤙 thik se dalo😤";
  } else if (attempts === 4) {
    msg.innerHTML = "I'm OUT!😐";
  } else {
    msg.innerHTML = "💔 Numb... ACCESS DENIED";
    msg.style.color = "red";
    document.querySelector("button").disabled = true;
    document.getElementById("code").disabled = true;
  }

  att.innerHTML = `Attempts left: ${5 - attempts}`;
}
