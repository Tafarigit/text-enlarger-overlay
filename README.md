Text Enlarger

MVP (v1.0.0) → Enhancements (v1.1.0)

Project Evolution
Version	Branch	Key Features
v1.0.0	main	• Basic text overlay
• Simple text enlargement
v1.1.0	feature/improvements	• Overlay resizing
• Font-size increment/decrement
• ARIA roles & keyboard accessibility


MVP (v1.0.0) → Enhancements (v1.1.0)

Overview

Text Enlarger is a browser-based tool that allows users to enlarge text overlays on web pages. The project demonstrates iterative development, starting with a basic MVP and progressing to enhanced functionality with usability and accessibility improvements.

MVP (v1.0.0)
Features

Display a text overlay on the page.

Basic text enlargement functionality.

Limitations

No overlay resizing.

No step-wise font-size controls.

Accessibility (ARIA roles) not implemented.

Enhancements (v1.1.0)
New Features

Overlay Resizing: Users can drag the overlay to resize it.

Font-Size Controls: Increment and decrement buttons to adjust text size in steps.

Accessibility: Added ARIA roles and keyboard navigation for improved usability.

How It Works

The script listens for user interactions to resize the overlay and change text size dynamically.

Accessibility attributes ensure the overlay is navigable via keyboard and screen readers.

Installation & Usage

Clone the repository:

git clone https://github.com/<Tafarigit>/<text-enlarger-overlay>.git


Open content.js in your browser extension or local dev environment.

Load the extension (if using browser extension setup) or run locally.

Use the overlay resizing and font-size controls as needed.

Notes

Branching History:

main branch contains the MVP version.

feature/improvements branch contains the enhanced version with all improvements.

Future updates may include additional customization options and further accessibility improvements.
