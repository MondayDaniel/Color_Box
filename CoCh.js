 // Event handler
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    // Element selections
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');

    // Generate Random Color using RGB values
 function getRandomColor() {
    // Random values generator for RGB.
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Return the color in the "rgb(r, g, b)" format.
    return `rgb(${r}, ${g}, ${b})`;
 }

// Event listener
document.getElementById('change-color-btn').addEventListener('click', function() {
    document.getElementById('color-box').style.backgroundColor = getRandomColor();
});
})
