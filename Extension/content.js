const existingOverlay = document.getElementById("text-enlarger-overlay");
if (existingOverlay) {
  existingOverlay.remove();
}

const overlay = document.createElement("div");
overlay.id = "text-enlarger-overlay";
overlay.style.display = "none";

overlay.innerHTML = `
    <div id="overlay-header">
        <div id="overlay-controls">
            <button id="increase-font">A+</button>
            <button id="decrease-font">A−</button>
            <span id="font-size-display">20px</span>
        </div>
        <button id="text-enlarger-close">×</button>
    </div>
    <div id="overlay-text"></div>
`;

document.body.appendChild(overlay);

const headerContainer = document.getElementById("overlay-header");
const textContainer = document.getElementById("overlay-text");
const closeBtn = document.getElementById("text-enlarger-close");
const increaseBtn = document.getElementById("increase-font");
const decreaseBtn = document.getElementById("decrease-font");
const fontSizeDisplay = document.getElementById("font-size-display");

console.log("DOM Elements Check:", {
  overlay: !!overlay,
  header: !!headerContainer,
  text: !!textContainer,
  close: !!closeBtn,
  increase: !!increaseBtn,
  decrease: !!decreaseBtn,
  display: !!fontSizeDisplay,
});

let fontSize = 20;

function updateFontSizeDisplay() {
  if (fontSizeDisplay) {
    fontSizeDisplay.innerText = fontSize + "px";
  }
}

function applyFontSize() {
  if (textContainer) {
    textContainer.style.fontSize = fontSize + "px";
    updateFontSizeDisplay();
  }
}

if (closeBtn) {
  closeBtn.onclick = () => {
    overlay.style.display = "none";
  };
}

if (increaseBtn) {
  increaseBtn.onclick = () => {
    fontSize += 2;
    applyFontSize();
    console.log("Font size increased to:", fontSize);
  };
}

if (decreaseBtn) {
  decreaseBtn.onclick = () => {
    fontSize = Math.max(10, fontSize - 2);
    applyFontSize();
    console.log("Font size decreased to:", fontSize);
  };
}

document.addEventListener("mouseup", () => {
  const selection = window.getSelection().toString().trim();
  if (selection.length > 0) {
    console.log("Text selected:", selection.substring(0, 50) + "...");
    if (textContainer) {
      textContainer.innerText = selection;
      applyFontSize();
      overlay.style.display = "block";
      console.log("Overlay should now be visible");
    }
  }
});

document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === "E") {
    event.preventDefault();

    const isVisible = overlay.style.display === "block";

    if (isVisible) {
      overlay.style.display = "none";
      console.log("Overlay closed via keyboard shortcut");
    } else {
      const selection = window.getSelection().toString().trim();

      if (selection.length > 0) {
        textContainer.innerText = selection;
        applyFontSize();
        overlay.style.display = "block";
        console.log("Overlay opened with new selection via keyboard shortcut");
      } else if (textContainer.innerText.trim().length > 0) {
        overlay.style.display = "block";
        console.log(
          "Overlay reopened with existing content via keyboard shortcut"
        );
      } else {
        console.log("Keyboard shortcut pressed but no text to display");

        const tempMessage = document.createElement("div");
        tempMessage.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: #333;
                    color: #fff;
                    padding: 10px 15px;
                    border-radius: 5px;
                    z-index: 100000;
                    font-size: 14px;
                `;
        tempMessage.textContent = "Select text first, then use Ctrl+Shift+E";
        document.body.appendChild(tempMessage);
        setTimeout(() => {
          tempMessage.remove();
        }, 2000);
      }
    }
  }
});

console.log("Text enlarger extension initialized successfully");
