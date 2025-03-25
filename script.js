//your JS code here. If required.
function updateWindowSize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      document.getElementById("width").textContent = width;
      document.getElementById("height").textContent = height;
    }

    // Update size on load
    updateWindowSize();

    // Listen for resize event
    window.addEventListener("resize", updateWindowSize);