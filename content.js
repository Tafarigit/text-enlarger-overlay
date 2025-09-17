// text-enlarger-extension/content.js

// --- Overlay Setup ---
const overlay = document.createElement('div');
overlay.id = 'text-enlarger-overlay';
overlay.style.display = 'none'; // start hidden

// Close button
const closeBtn = document.createElement('button');
closeBtn.innerText = 'X';
closeBtn.id = 'text-enlarger-close';
closeBtn.onclick = () => overlay.style.display = 'none';
overlay.appendChild(closeBtn);

// Append overlay to body
document.body.appendChild(overlay);

// --- Selection Listener ---
document.addEventListener('mouseup', () => {
    const selection = window.getSelection().toString().trim();
    if (selection.length > 0) {
        overlay.innerText = selection;
        overlay.appendChild(closeBtn); // keep close button visible
        overlay.style.display = 'block';
    }
});

