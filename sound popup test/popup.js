// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    var audio = document.getElementById('backgroundMusic');
    var popup = document.getElementById('popup');
    var button = document.getElementById('playButton');

    // Show the popup
    popup.style.display = 'block';

    button.addEventListener('click', function() {
        audio.play().then(() => {
            console.log('Music is playing');
            popup.style.display = 'none'; // Hide the popup after playing music
        }).catch((error) => {
            console.log('Failed to play music:', error);
            audio.onended = function() {
                this.play
            }
            {
                audio.play;
            }
        });
    });
});
