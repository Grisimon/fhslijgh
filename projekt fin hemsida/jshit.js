        // Get references to the popup and buttons
        const popup = document.getElementById('popup');
        const openPopupButton = document.getElementById('openPopup');
        const closePopupButton = document.getElementById('closePopup');

        // Show the popup when clicking the "Add New Blog Post" button
        openPopupButton.addEventListener('click', () => {
            popup.style.display = 'flex'; // Show the popup
        });

        // Close the popup when clicking the close button
        closePopupButton.addEventListener('click', () => {
            popup.style.display = 'none'; // Hide the popup
        });

        // Close the popup if clicking outside the popup content
        popup.addEventListener('click', (event) => {
            if (event.target === popup) {
                popup.style.display = 'none'; // Hide the popup
            }
        });