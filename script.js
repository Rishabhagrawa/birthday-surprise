// Change '1234' to your desired 4-digit PIN!
const CORRECT_PIN = "7492";
let enteredPin = "";

function inputDigit(digit) {
  if (enteredPin.length < 4) {
    enteredPin += digit;
    updateDots();
  }
}

function clearPin() {
  enteredPin = "";
  updateDots();
}

function updateDots() {
  for (let i = 0; i < 4; i++) {
    const dot = document.getElementById(`dot-${i}`);
    if (i < enteredPin.length) {
      dot.classList.add("filled");
    } else {
      dot.classList.remove("filled");
    }
  }
}

function submitPin() {
  if (enteredPin === CORRECT_PIN) {
    clearPin();
    goToScreen("screen-prompt");
  } else {
    clearPin();
    goToScreen("screen-error");
  }
}

function goToScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });
  document.getElementById(screenId).classList.add("active");
}

function handleYes() {
  goToScreen("screen-bday");
  // Confetti burst
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.6 }
  });
}
