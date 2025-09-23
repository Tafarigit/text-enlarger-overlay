// // --- Overlay Setup ---
// const overlay = document.createElement('div');
// overlay.id = 'text-enlarger-overlay';
// overlay.style.display = 'none'; // hidden by default

// // Close button
// const closeBtn = document.createElement('button');
// closeBtn.innerText = 'X';
// closeBtn.id = 'text-enlarger-close';
// closeBtn.onclick = () => overlay.style.display = 'none';
// overlay.appendChild(closeBtn);

// // --- Font-size controls ---
// const controls = document.createElement('div');
// controls.id = 'overlay-controls';

// const increaseBtn = document.createElement('button');
// increaseBtn.id = 'increase-font';
// increaseBtn.innerText = 'A+';
// controls.appendChild(increaseBtn);

// const decreaseBtn = document.createElement('button');
// decreaseBtn.id = 'decrease-font';
// decreaseBtn.innerText = 'A-';
// controls.appendChild(decreaseBtn);

// overlay.appendChild(controls);

// // Text container
// const textContainer = document.createElement('div');
// textContainer.id = 'overlay-text';
// overlay.appendChild(textContainer);

// // Append overlay to body
// document.body.appendChild(overlay);

// // Font size logic
// let fontSize = 20; // initial font size in px
// increaseBtn.onclick = () => {
//     fontSize += 2;
//     textContainer.style.fontSize = fontSize + 'px';
// };
// decreaseBtn.onclick = () => {
//     fontSize = Math.max(10, fontSize - 2);
//     textContainer.style.fontSize = fontSize + 'px';
// };

// // --- Selection Listener ---
// document.addEventListener('mouseup', () => {
//     const selection = window.getSelection().toString().trim();
//     if (selection.length > 0) {
//         textContainer.innerText = selection;
//         overlay.style.display = 'block';
//     }
// });

// --- Overlay Setup ---
// const overlay = document.createElement('div');
// overlay.id = 'text-enlarger-overlay';
// overlay.style.display = 'none'; // hidden by default

// // Close button
// const closeBtn = document.createElement('button');
// closeBtn.innerText = 'X';
// closeBtn.id = 'text-enlarger-close';
// closeBtn.onclick = () => overlay.style.display = 'none';
// overlay.appendChild(closeBtn);

// // Text container (appears above controls)
// const textContainer = document.createElement('div');
// textContainer.id = 'overlay-text';
// overlay.appendChild(textContainer);

// // --- Font-size controls ---
// const controls = document.createElement('div');
// controls.id = 'overlay-controls';

// const increaseBtn = document.createElement('button');
// increaseBtn.id = 'increase-font';
// increaseBtn.innerText = 'A+';
// controls.appendChild(increaseBtn);

// const decreaseBtn = document.createElement('button');
// decreaseBtn.id = 'decrease-font';
// decreaseBtn.innerText = 'A-';
// controls.appendChild(decreaseBtn);

// // Append controls after text container
// overlay.appendChild(controls);

// // Append overlay to body
// document.body.appendChild(overlay);

// // --- Font size logic ---
// let fontSize = 20; // initial font size in px
// increaseBtn.onclick = () => {
//     fontSize += 2;
//     textContainer.style.fontSize = fontSize + 'px';
// };
// decreaseBtn.onclick = () => {
//     fontSize = Math.max(10, fontSize - 2);
//     textContainer.style.fontSize = fontSize + 'px';
// };

// // --- Selection Listener ---
// document.addEventListener('mouseup', () => {
//     const selection = window.getSelection().toString().trim();
//     if (selection.length > 0) {
//         textContainer.innerText = selection;
//         overlay.style.display = 'block';
//     }
// });

// // --- Overlay Setup ---
// const overlay = document.createElement('div');
// overlay.id = 'text-enlarger-overlay';
// overlay.style.display = 'none'; // hidden by default

// // Close button
// const closeBtn = document.createElement('button');
// closeBtn.innerText = '×';
// closeBtn.id = 'text-enlarger-close';
// closeBtn.onclick = () => overlay.style.display = 'none';
// overlay.appendChild(closeBtn);

// // Text container (appears above controls)
// const textContainer = document.createElement('div');
// textContainer.id = 'overlay-text';
// overlay.appendChild(textContainer);

// // --- Font-size controls ---
// const controls = document.createElement('div');
// controls.id = 'overlay-controls';

// const increaseBtn = document.createElement('button');
// increaseBtn.id = 'increase-font';
// increaseBtn.innerText = 'A+';
// controls.appendChild(increaseBtn);

// const decreaseBtn = document.createElement('button');
// decreaseBtn.id = 'decrease-font';
// decreaseBtn.innerText = 'A−';
// controls.appendChild(decreaseBtn);

// // Font size display
// const fontSizeDisplay = document.createElement('span');
// fontSizeDisplay.id = 'font-size-display';
// controls.appendChild(fontSizeDisplay);

// // Append controls after text container
// overlay.appendChild(controls);

// // Append overlay to body
// document.body.appendChild(overlay);

// // --- Font size logic ---
// let fontSize = 20; // initial font size in px

// // Function to update font size display
// function updateFontSizeDisplay() {
//     fontSizeDisplay.innerText = fontSize + 'px';
// }

// // Function to apply font size
// function applyFontSize() {
//     textContainer.style.fontSize = fontSize + 'px';
//     updateFontSizeDisplay();
// }

// increaseBtn.onclick = () => {
//     fontSize += 2;
//     applyFontSize();
// };

// decreaseBtn.onclick = () => {
//     fontSize = Math.max(10, fontSize - 2);
//     applyFontSize();
// };

// // --- Selection Listener ---
// document.addEventListener('mouseup', () => {
//     const selection = window.getSelection().toString().trim();
//     if (selection.length > 0) {
//         textContainer.innerText = selection;
//         // Apply initial font size when showing overlay
//         applyFontSize();
//         overlay.style.display = 'block';
//     }
// });

// Clear any existing overlay first
// const existingOverlay = document.getElementById('text-enlarger-overlay');
// if (existingOverlay) {
//     existingOverlay.remove();
// }

// // --- Create Overlay Structure ---
// const overlay = document.createElement('div');
// overlay.id = 'text-enlarger-overlay';
// overlay.style.display = 'none';

// // Create HTML structure as string for clarity
// overlay.innerHTML = `
//     <div id="overlay-header">
//         <div id="overlay-controls">
//             <button id="increase-font">A+</button>
//             <button id="decrease-font">A−</button>
//             <span id="font-size-display">20px</span>
//         </div>
//         <button id="text-enlarger-close">×</button>
//     </div>
//     <div id="overlay-text"></div>
// `;

// // Append to body
// document.body.appendChild(overlay);

// // Now get references to the elements
// const headerContainer = document.getElementById('overlay-header');
// const textContainer = document.getElementById('overlay-text');
// const closeBtn = document.getElementById('text-enlarger-close');
// const increaseBtn = document.getElementById('increase-font');
// const decreaseBtn = document.getElementById('decrease-font');
// const fontSizeDisplay = document.getElementById('font-size-display');

// // Verify elements exist
// console.log('DOM Elements Check:', {
//     overlay: !!overlay,
//     header: !!headerContainer,
//     text: !!textContainer,
//     close: !!closeBtn,
//     increase: !!increaseBtn,
//     decrease: !!decreaseBtn,
//     display: !!fontSizeDisplay
// });

// // --- Event Handlers ---
// let fontSize = 20;

// function updateFontSizeDisplay() {
//     if (fontSizeDisplay) {
//         fontSizeDisplay.innerText = fontSize + 'px';
//     }
// }

// function applyFontSize() {
//     if (textContainer) {
//         textContainer.style.fontSize = fontSize + 'px';
//         updateFontSizeDisplay();
//     }
// }

// // Close button
// if (closeBtn) {
//     closeBtn.onclick = () => {
//         overlay.style.display = 'none';
//     };
// }

// // Font size controls
// if (increaseBtn) {
//     increaseBtn.onclick = () => {
//         fontSize += 2;
//         applyFontSize();
//         console.log('Font size increased to:', fontSize);
//     };
// }

// if (decreaseBtn) {
//     decreaseBtn.onclick = () => {
//         fontSize = Math.max(10, fontSize - 2);
//         applyFontSize();
//         console.log('Font size decreased to:', fontSize);
//     };
// }

// // --- Selection Listener ---
// document.addEventListener('mouseup', () => {
//     const selection = window.getSelection().toString().trim();
//     if (selection.length > 0) {
//         console.log('Text selected:', selection.substring(0, 50) + '...');
//         if (textContainer) {
//             textContainer.innerText = selection;
//             applyFontSize();
//             overlay.style.display = 'block';
//             console.log('Overlay should now be visible');
//         }
//     }
// });

// console.log('Text enlarger extension initialized successfully');

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
