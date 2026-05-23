function copyCode() {
  const codeEl = document.getElementById("code");
  const statusEl = document.getElementById("status");

  if (!codeEl) {
    console.error("Code element not found");
    return;
  }

  const code = codeEl.innerText;

  navigator.clipboard.writeText(code)
    .then(() => {
      if (statusEl) {
        statusEl.innerText = "Script copied!";
        statusEl.style.color = "#00ff88";

        setTimeout(() => {
          statusEl.innerText = "";
        }, 2000);
      }
    })
    .catch(() => {
      if (statusEl) {
        statusEl.innerText = "Failed to copy.";
        statusEl.style.color = "#ff4d4d";
      }
    });
}

function openDiscord() {
  const url = "https://discord.gg/YGjbQjpQ";
  window.open(url, "_blank", "noopener,noreferrer");
}
