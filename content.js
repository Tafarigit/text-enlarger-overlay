const overlay = document.createElement('div');
overlay.id = 'text-enlarger-overlay';
overlay.style.display = 'none'; 


const closeBtn = document.createElement('button');
closeBtn.innerText = 'X';
closeBtn.id = 'text-enlarger-close';
closeBtn.onclick = () => overlay.style.display = 'none';
overlay.appendChild(closeBtn);


document.body.appendChild(overlay);


document.addEventListener('mouseup', () => {
    const selection = window.getSelection().toString().trim();
    if (selection.length > 0) {
        overlay.innerText = selection;
        overlay.appendChild(closeBtn); 
        overlay.style.display = 'block';
    }
});

