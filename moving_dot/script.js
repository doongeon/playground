// Get the animated element
var element = document.getElementById("animated-element");

// Define the initial position and direction
let x = 0;
let y = 0;
let x_direction = 1;
let y_direction = 1;

// Define the animation function
function animate() {
  // Update the position
  //   position += direction;
  
    x += x_direction;
    y += y_direction;

    // Check if the element reaches the window boundaries
    if (x >= window.innerWidth - element.offsetWidth || x <= 0) {
        // Reverse the direction
        x_direction *= -1;
    }

    if (y >= window.innerHeight - element.offsetHeight || y <= 0 ) {
        y_direction *= -1;
    }

    // Apply the position as a translation
    element.style.transform = `
    translateX(${x}px) translateY(${y}px)
    `;

    // Request the next animation frame
    requestAnimationFrame(animate);
}

// Start the animation
animate();