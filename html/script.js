function initializeGallery() {
    console.log("Gallery initialized");
    let images = document.querySelectorAll('.thumb');
    let display = document.getElementById('display');
    
    images.forEach((img) => {
        img.setAttribute('tabindex', '0'); 
        
        img.addEventListener('mouseover', () => updateDisplay(img));
        img.addEventListener('mouseleave', resetDisplay);
        img.addEventListener('focus', () => updateDisplay(img));
        img.addEventListener('blur', resetDisplay);
    });
}

function updateDisplay(img) {
    document.getElementById('display').textContent = img.alt;
    document.getElementById('display').style.backgroundImage = `url(${img.src})`;
    console.log("Updated display with:", img.alt);
}

function resetDisplay() {
    let display = document.getElementById('display');
    display.textContent = "Hover or focus on an image";
    display.style.backgroundImage = "none";
    console.log("Reset display");
}
