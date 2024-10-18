// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    var audio = document.getElementById('backgroundMusic');
    var popup = document.getElementById('popup');
    var button = document.getElementById('playButton');
    var volumeSlider = document.getElementById('volumeSlider');
    var volumeValue = document.getElementById('volumeValue');


    // Show the popup
    popup.style.display = 'block';

    button.addEventListener('click', function() {
        audio.play().then(() => {
            console.log('Music is playing');
            popup.style.display = 'none'; // Hide the popup after playing music
        }).catch((error) => {
            console.log('Failed to play music:', error);
        });
    });

    audio.volume = volumeSlider.value;

    // Update the initial volume percentage display
    volumeValue.textContent = Math.round(volumeSlider.value * 100) + '%';

    // Update audio volume and percentage when the slider value changes
    volumeSlider.addEventListener('input', function() {
        audio.volume = this.value;
        volumeValue.textContent = Math.round(this.value * 100) + '%'; // Update percentage display
        console.log('Volume set to:', this.value);
    });
});