const generateButton = document.getElementById("generateBtn");
const resetButton = document.getElementById("resetBtn");
const progressWrap = document.getElementById("progressWrap");
const progressBar = document.getElementById("progressBar");
const percentText = document.getElementById("percentText");
const statusText = document.getElementById("statusText");
const resultBox = document.getElementById("resultBox");
const usernameInput = document.getElementById("username");

const loadingMessages = [
  "Preparing secure generator...",
  "Connecting to private API cluster...",
  "Checking account eligibility...",
  "Generating encrypted API token...",
  "Finalizing key signature...",
  "Almost done..."
];

let intervalId = null;

function setLoadingState(isLoading) {
  generateButton.disabled = isLoading;
  usernameInput.disabled = isLoading;

  if (isLoading) {
    generateButton.classList.add("loading");
    generateButton.querySelector(".button-text").textContent = "Generating...";
  } else {
    generateButton.classList.remove("loading");
    generateButton.querySelector(".button-text").textContent = "Generate API Key";
  }
}

function resetSimulation() {
  clearInterval(intervalId);
  intervalId = null;

  setLoadingState(false);
  progressWrap.classList.remove("active");
  resultBox.classList.remove("active");
  progressBar.style.width = "0%";
  percentText.textContent = "0%";
  statusText.textContent = loadingMessages[0];
}

function runSimulation() {
  resetSimulation();
  setLoadingState(true);
  progressWrap.classList.add("active");

  let progress = 0;
  let messageIndex = 0;
  const totalDurationMs = 5600;
  const tickMs = 140;
  const increment = 100 / (totalDurationMs / tickMs);

  intervalId = setInterval(() => {
    progress = Math.min(100, progress + increment);
    const roundedProgress = Math.round(progress);

    progressBar.style.width = `${roundedProgress}%`;
    percentText.textContent = `${roundedProgress}%`;

    const nextMessageIndex = Math.min(
      loadingMessages.length - 1,
      Math.floor((roundedProgress / 100) * loadingMessages.length)
    );

    if (nextMessageIndex !== messageIndex) {
      messageIndex = nextMessageIndex;
      statusText.textContent = loadingMessages[messageIndex];
    }

    if (progress >= 100) {
      clearInterval(intervalId);
      intervalId = null;

      setTimeout(() => {
        setLoadingState(false);
        resultBox.classList.add("active");
      }, 350);
    }
  }, tickMs);
}

generateButton.addEventListener("click", runSimulation);
resetButton.addEventListener("click", resetSimulation);
