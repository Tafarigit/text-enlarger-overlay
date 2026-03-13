// Clear any existing overlay first
const existingOverlay = document.getElementById('text-enlarger-overlay');
if (existingOverlay) {
    existingOverlay.remove();
}

// --- Create Overlay Structure ---
const overlay = document.createElement('div');
overlay.id = 'text-enlarger-overlay';
overlay.style.display = 'none';

// Create HTML structure as string for clarity
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

// Append to body
document.body.appendChild(overlay);

// Now get references to the elements
const headerContainer = document.getElementById('overlay-header');
const textContainer = document.getElementById('overlay-text');
const closeBtn = document.getElementById('text-enlarger-close');
const increaseBtn = document.getElementById('increase-font');
const decreaseBtn = document.getElementById('decrease-font');
const fontSizeDisplay = document.getElementById('font-size-display');

// Verify elements exist
console.log('DOM Elements Check:', {
    overlay: !!overlay,
    header: !!headerContainer,
    text: !!textContainer,
    close: !!closeBtn,
    increase: !!increaseBtn,
    decrease: !!decreaseBtn,
    display: !!fontSizeDisplay
});

// --- Event Handlers ---
let fontSize = 20;

function updateFontSizeDisplay() {
    if (fontSizeDisplay) {
        fontSizeDisplay.innerText = fontSize + 'px';
    }
}

function applyFontSize() {
    if (textContainer) {
        textContainer.style.fontSize = fontSize + 'px';
        updateFontSizeDisplay();
    }
}

// Close button
if (closeBtn) {
    closeBtn.onclick = () => {
        overlay.style.display = 'none';
    };
}

// Font size controls
if (increaseBtn) {
    increaseBtn.onclick = () => {
        fontSize += 2;
        applyFontSize();
        console.log('Font size increased to:', fontSize);
    };
}

if (decreaseBtn) {
    decreaseBtn.onclick = () => {
        fontSize = Math.max(10, fontSize - 2);
        applyFontSize();
        console.log('Font size decreased to:', fontSize);
    };
}

// --- Selection Listener ---
document.addEventListener('mouseup', () => {
    const selection = window.getSelection().toString().trim();
    if (selection.length > 0) {
        console.log('Text selected:', selection.substring(0, 50) + '...');
        if (textContainer) {
            textContainer.innerText = selection;
            applyFontSize();
            overlay.style.display = 'block';
            console.log('Overlay should now be visible');
        }
    }
});

// --- Keyboard Shortcut Handler ---
document.addEventListener('keydown', (event) => {
    // Check for Ctrl+Shift+E (or Cmd+Shift+E on Mac)
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'E') {
        event.preventDefault(); // Prevent any default browser behavior
        
        const isVisible = overlay.style.display === 'block';
        
        if (isVisible) {
            // Close the overlay
            overlay.style.display = 'none';
            console.log('Overlay closed via keyboard shortcut');
        } else {
            // Open the overlay - but only if there's selected text or existing content
            const selection = window.getSelection().toString().trim();
            
            if (selection.length > 0) {
                // New text selected
                textContainer.innerText = selection;
                applyFontSize();
                overlay.style.display = 'block';
                console.log('Overlay opened with new selection via keyboard shortcut');
            } else if (textContainer.innerText.trim().length > 0) {
                // Reopen with existing content
                overlay.style.display = 'block';
                console.log('Overlay reopened with existing content via keyboard shortcut');
            } else {
                // No content to show
                console.log('Keyboard shortcut pressed but no text to display');
                // Optional: Show a brief message to user
                const tempMessage = document.createElement('div');
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
                tempMessage.textContent = 'Select text first, then use Ctrl+Shift+E';
                document.body.appendChild(tempMessage);
                setTimeout(() => {
                    tempMessage.remove();
                }, 2000);
            }
        }
    }
});

console.log('Text enlarger extension initialized successfully');
