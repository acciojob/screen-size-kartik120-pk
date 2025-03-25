function updateWindowSize() {
    document.getElementById("width").textContent = window.innerWidth;
    document.getElementById("height").textContent = window.innerHeight;
}

// Update size on load
document.addEventListener("DOMContentLoaded", updateWindowSize);

// Listen for resize event
window.addEventListener("resize", updateWindowSize);
